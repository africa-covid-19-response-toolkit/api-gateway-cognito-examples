/**
 * ** DO NOT HARD CODE API KEYS ** 
 * It should be injected during runtime using an environment variable e.g. AUTHORIZATION_KEY=<YOUR_PRIVATE_KEY> node index
 * More info here: https://12factor.net/config
 */
export const AUTHORIZATION_KEY = Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64')


/**
 * The end point responsible for providing you with an access_token/id_token
 */
export const AUTHORIZATION_END_POINT = 'https://ethiopia-covid19.auth.us-east-2.amazoncognito.com/oauth2/token'

/**
 * The API endpoint
 */
export const API_END_POINT = 'https://r33w2v4r05.execute-api.us-east-2.amazonaws.com/dev/covid-gateway/community'
