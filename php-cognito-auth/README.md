# PHP Example

The application expects `client_id`, `client_secret`, `auth_url`, and `api_url` values in `.env` file:

```shell
cat .env
```

```shell
CLIENT_ID=1234
CLIENT_SECRET=56789
AUTH_URL=https://example.amazoncognito.com/oauth2/token
API_URL=https://example.com/dev/gateway/communities
```

Install packages:

    composer install

Run test script (only runs GET example by default; uncomment appropriate line to test POST):

    composer run test
