## Overivew

For generating sharable links of the form state we use an url shortener. The reason being is, that an url with thousands of bytes length is not exactly pleasent to share via messengers.

The url shortener is realized with [cloudflare functions](https://developers.cloudflare.com/pages/platform/functions/). The files can be found in `/functions/share`.

A GET request to `/share/create` will create a new shortend url. The short url is randomly generated and checks for existing urls to avoid collisions. The mapping between short url <-> long url is saved in cloudflare KV.

When loading the optimizer with the query param `PARAMS.SHORTENER`, a GET request is send to `/share/load`. The short link will be looked up in KV and the long link will be decompressed so that the state can be restored.

## Developing locally

The shortener is only available in environments where the cloudflare functions may be served (the calls are made to `http://host:PORT/share/{load|create}`, not to an external URL). This implies, the functions will only be available when the dev server is launched with `yarn cfdev` or `yarn cfbuild` and `yarn cfserve`.

# Further information

There are env vars available that might be helpful. Check the [env variables](./EnvVariables.md) documentation.
The functions will work in preview builds or in the cloudflare production environment. Both are separated from each other. This means, that one short link generated in one, will not work in another.
