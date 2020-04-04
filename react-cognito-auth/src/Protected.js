import React, { useState, useEffect } from "react";
import { API_END_POINT } from "./config";
import "@aws-amplify/ui/dist/style.css";
import { withAuthenticator } from "aws-amplify-react";

/**
 * Makes HTTP request with the JWT token as a Bearer token
 * @param {string} jwtToken
 */
const makeAuthenticatedRequest = async (jwtToken) => {
  try {
    const response = await fetch(API_END_POINT, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    // Fetch promise won't reject all errors. E.g. 404 errors instead it will flag the response.ok as false
    // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
    if (!response.ok) {
      throw new Error("Not found");
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const Protected = (props) => {
  const [jwtToken, setJwtToken] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);

  /**
   * On make request button click
   */
  const handleButtonClick = async (e) => {
    e.preventDefault();
    // reset prev result
    setApiResponse(null);

    const response = await makeAuthenticatedRequest(jwtToken);

    // If we have a valid response pretty print it
    if (response) {
      setApiResponse(JSON.stringify(response, null, 2));
    }
  };

  // Run this function when the component mounts/updates and props.authData has changed
  // Setting the jwt token into the state
  useEffect(() => {
    setJwtToken(props.authData.signInUserSession.accessToken.jwtToken);
  }, [props.authData]);

  return (
    <div>
      {jwtToken && (
        <div>
          {/* Outputting the data for demo purposes */}
          <h4>JWT token from Amplify</h4>
          <pre className="jwt-token">{jwtToken}</pre>

          {/* Make req to api using the JWT token as the access token */}
          <hr />
          <h4>Make req to API using token</h4>
          <button className="make-request-btn" onClick={handleButtonClick}>
            Make request >
          </button>
          {apiResponse && <pre>{apiResponse}</pre>}
        </div>
      )}
    </div>
  );
};

export default withAuthenticator(Protected, true);
