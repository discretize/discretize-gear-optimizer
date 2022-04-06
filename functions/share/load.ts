/* eslint-disable import/prefer-default-export */
import { PARAMS } from '../../src/utils/queryParam';

// TODO add typings https://github.com/cloudflare/workers-types/blob/771ce7591e63bf47f36b39d60afb86e1fe8d404b/manual-ts/pages.d.ts
export async function onRequestGet(context) {
  // Contents of context object
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
  } = context;
  const KV: KVNamespace = env.SHORT_LINKS;

  const urlObject = new URL(request.url);
  const key = urlObject.searchParams.get(PARAMS.SHORTENER);

  const value = await KV.get(key, { type: 'stream' });

  return new Response(value, {
    'headers': { 'Content-Type': 'application/json' },
  });
}
