import fetch from 'node-fetch'

import {AUTHORIZATION_KEY, AUTHORIZATION_END_POINT, API_END_POINT} from './config/index'

/**
 * Get Access Token Example
 * ---
 */
const getAccessTokenExample = async () => {
    try {
        const response = await fetch(AUTHORIZATION_END_POINT, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${AUTHORIZATION_KEY}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials'
        })
        // TODO: cater for 404 errors as won't go into the catch block
        const jsonData = await response.json()
        return jsonData
    } catch(e) {
        console.error(`Error in getAccessTokenExample --> ${e}`)
        return Promise.resolve(null)
    }
}


/**
 * GET request using access token example
 * ---
 */
const getRequestExample = async ({accessToken}) => {
    try {
        const response = await fetch(API_END_POINT, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${accessToken}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        // TODO: cater for 404 errors as won't go into the catch block
        const jsonData = await response.json()
        return jsonData
    } catch(e) {
        console.error(`Error in getAccessTokenExample --> ${e}`)
        return null
    }
}

/**
 * POST request using access token example
 */
const postRequestExample = async ({accessToken, body = {}}) => {
    try {
        const response = await fetch(API_END_POINT, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${accessToken}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body
        })
        // TODO: cater for 404 errors as won't go into the catch block
        const jsonData = await response.json()
        return jsonData
    } catch(e) {
        console.error(`Error in postRequestExample --> ${e}`)
        return null
    }
}


/**
 * Calls all example projects
 */
const init = async () => {
    const accessTokenData = await getAccessTokenExample()
    
    if (accessTokenData && !accessTokenData.error) {
        console.log('Got accessTokenData ~~~~>>>', accessTokenData);
        const {access_token: accessToken } = accessTokenData

        // Do GET
        const getResponse = await getRequestExample({accessToken})
        console.log('Got getResponse ~~~~>>>', getResponse);

        // Do POST
        const postResponse = await postRequestExample({accessToken, body: {}})
        console.log('Got postResponse ~~~~>>>', postResponse);

    } else {
        console.error('Error getting accessTokenData ~~~~>>>', accessTokenData)
    }
}


init()
