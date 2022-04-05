/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */

// stolen from https://gist.github.com/obezuk/4394d1b2a1b057af997bab4363e631bc
async function generate_rand(KV_NAMESPACE, i: number) {
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

export async function onRequestPost(context) {
  // Contents of context object
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
  } = context;

  const KV: KVNamespace = env.SHORT_LINKS;

  let key;

  try {
    key = await generate_rand(KV, 0);
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

  await KV.put(key, request.body);

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
}
