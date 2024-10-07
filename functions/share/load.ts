/* eslint-disable import/prefer-default-export */
import { PARAMS } from '../../src/utils/queryParam';

interface Env {
  SHORT_LINKS: KVNamespace;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  // Contents of context object
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
  } = context;
  const KV: KVNamespace = env.SHORT_LINKS;

  const urlObject = new URL(request.url);
  const key = urlObject.searchParams.get(PARAMS.SHORTENER_KEY);

  const value = await KV.get(key!, { type: 'stream' });

  return new Response(value, {
    'headers': { 'Content-Type': 'application/json' },
  });
};
