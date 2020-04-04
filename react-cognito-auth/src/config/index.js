// https://aws-amplify.github.io/docs/js/authentication#manual-setup
export const awsconfig = {
  mandatorySignIn: true,
  region: "us-east-2",
  userPoolId: "us-east-2_4Sh8lFrAm",
  userPoolWebClientId: "7jctcp36oj9el7ep6h5r88o9ji",
};

/**
 * The API endpoint
 */
export const API_END_POINT =
  process.env.API_END_POINT ||
  "https://api.ethiopia-covid19.com/gateway/communities";
