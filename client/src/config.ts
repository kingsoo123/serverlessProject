// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '34gwlm5b9l'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-7b-xd3x5.us.auth0.com', // Auth0 domain
  clientId: 'cnTRBUrSK4dVW1W7p6AVwdsjPjvhTPsJ', // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
