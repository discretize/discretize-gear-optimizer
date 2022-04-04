import { PARAMS } from '../../src/utils/queryParam';

// stolen from https://gist.github.com/obezuk/4394d1b2a1b057af997bab4363e631bc
async function generate_rand(KV_NAMESPACE, i: number) {
  // recursively fetch randon values incase there is a collision
  if (i >= 5) {
    throw new Error('Limiting random key checks to 5');
  }

  try {
    var rand_response = await fetch(new Request('https://csprng.xyz/v1/api?length=6'));
    var rand: { Data: string } = await rand_response.json();
    var random_data = rand.Data;
    var exists = await KV_NAMESPACE.get(random_data);
    if (exists) {
      throw new Error('Collision!');
    } else {
      return random_data;
    }
  } catch (e) {
    i++;
    return await generate_rand(KV_NAMESPACE, i);
  }
}

export async function onRequestGet(context) {
  // Contents of context object
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
  } = context;

  const KV: KVNamespace = env.SHORT_LINKS;

  const urlObject = new URL(request.url);
  const longLink = urlObject.search;

  try {
    var randomKey = await generate_rand(KV, 0);
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

  await KV.put(randomKey, longLink);

  const shortLink = `${urlObject.origin}/?${PARAMS.SHORTENER}=${randomKey}`;
  return new Response(
    JSON.stringify({
      'Status': 200,
      'Message': 'Successfully created new link',
      'ShortUrl': shortLink,
    }),
    {
      'headers': { 'Content-Type': 'application/json' },
    },
  );
}
