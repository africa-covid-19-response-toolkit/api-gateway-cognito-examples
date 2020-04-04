
// https://aws-amplify.github.io/docs/js/authentication#manual-setup
export const awsconfig = {
    region: 'us-east-2',
    userPoolId: 'us-east-1_mYsZ1O6Bg',
    userPoolWebClientId: '15i8c6ghc65gjn7cbqbob5a4ie',
    identityPoolId: 'us-east-2:e2338de4-6c26-464d-a1f8-bea30907b715'
}



/**
 * The API endpoint
 */
export const API_END_POINT = process.env.API_END_POINT || 'https://api.ethiopia-covid19.com/gateway/communities'