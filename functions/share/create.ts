/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
// @ts-nocheck
import isEqual from 'arraybuffer-equal';
import { Buffer } from 'buffer';
import base64 from 'urlsafe-base64';

interface Env {
  SHORT_LINKS: KVNamespace;
}

async function generate_hash(data: ArrayBuffer) {
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hash = base64.encode(Buffer.from(hashBuffer));
  return hash.slice(0, 8);
}

// stolen from https://gist.github.com/obezuk/4394d1b2a1b057af997bab4363e631bc
async function generate_rand(KV_NAMESPACE: KVNamespace, i: number) {
  // recursively fetch randon values incase there is a collision
  if (i >= 5) {
    throw new Error('Limiting random key checks to 5');
  }

  let random_data;

  try {
    const rand_response = await fetch(new Request('https://csprng.xyz/v1/api?length=6'));
    const rand: { Data: string } = await rand_response.json();
    random_data = rand.Data;
    const exists = await KV_NAMESPACE.get(random_data);
    if (exists) {
      throw new Error('Collision!');
    } else {
      return random_data;
    }
  } catch (e) {
    return generate_rand(KV_NAMESPACE, i + 1);
  }
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  // Contents of context object
  const {
    request,
    env, // same as existing Worker API
  } = context;
  const dataBuffer = await request.arrayBuffer();

  const KV: KVNamespace = env.SHORT_LINKS;

  try {
    // generate the based on the buffer. The first 8 symbols of the hash will be our key
    let key = await generate_hash(dataBuffer);

    // check if there is an existing entry for this specific key - dont insert duplicates
    const existingValue = await KV.get(key, { type: 'stream' });
    if (!existingValue) {
      // no duplicate, insert value
      console.log(`writing new key: ${key}`);
      await KV.put(key, dataBuffer);
    } else {
      // duplicate detected.
      const existingBuffer = await new Response(existingValue).arrayBuffer();

      // checks if the saved buffer in KV is equals with what was transmitted in the request
      if (isEqual(dataBuffer, existingBuffer)) {
        console.log(`returning saved key: ${key}`);
        // in case we have a duplicate, we dont need to do anything - the key is already stored in the key variable
      } else {
        // this should probably never happen unless developing?
        key = await generate_rand(KV, 0);
        console.warn(`current key has mismatched data! writing new key: ${key}`);
        await KV.put(key, dataBuffer);
      }
    }

    return new Response(
      JSON.stringify({
        'Status': 200,
        'Message': 'Successfully created new link',
        'Key': key,
      }),
      {
        'headers': { 'Content-Type': 'application/json' },
      },
    );
  } catch (e) {
    return new Response(
      JSON.stringify({
        'Status': 500,
        'Message': e.message,
        'ShortUrl': null,
      }),
      {
        'status': 500,
        'statusText': 'Server error',
        'headers': { 'Content-Type': 'application/json' },
      },
    );
  }
};
