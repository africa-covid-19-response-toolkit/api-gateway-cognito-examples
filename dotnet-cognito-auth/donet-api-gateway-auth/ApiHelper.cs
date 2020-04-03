using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Text;
using Newtonsoft.Json;

namespace donet_api_gateway_auth
{
    public static class ApiHelper
    {
        private static string GenerateOauthToken()
        {
            //TODO: pull this from env vars
            string consumerKey = "5mulvgjjlbbm4cb8p7s1d6li8i";
            string consumerSecret = "1pv83kd7vu9dps5alriaj25c5hfdiqvl3d9ld41dupjlne5goj1q";
            string accessToken;

            byte[] byte1 = Encoding.ASCII.GetBytes("grant_type=client_credentials");

            HttpWebRequest bearerReq = WebRequest.Create("https://et-covid20.auth.us-east-2.amazoncognito.com/oauth2/token") as HttpWebRequest;
            bearerReq.Accept = "application/json";
            bearerReq.Method = "POST";
            bearerReq.ContentType = "application/x-www-form-urlencoded";
            bearerReq.ContentLength = byte1.Length;
            bearerReq.KeepAlive = false;
            bearerReq.Headers.Add("Authorization", "Basic " + Convert.ToBase64String(Encoding.Default.GetBytes(consumerKey + ":" + consumerSecret)));
            Stream newStream = bearerReq.GetRequestStream();
            newStream.Write(byte1, 0, byte1.Length);

            WebResponse bearerResp = bearerReq.GetResponse();

            using (var reader = new StreamReader(bearerResp.GetResponseStream(), Encoding.UTF8))
            {
                var response = reader.ReadToEnd();
                Bearer bearer = JsonConvert.DeserializeObject<Bearer>(response);
                accessToken = bearer.access_token;
            }

            return accessToken;
        }

        public static HttpWebRequest GetWebRequest(string uri)
        {
            string accessToken = ApiHelper.GenerateOauthToken();
            HttpWebRequest apiRequest = WebRequest.Create(uri) as HttpWebRequest;
            apiRequest.ContentType = "application/json";
            apiRequest.KeepAlive = false;
            apiRequest.Headers.Add("Authorization", "Bearer " + accessToken);
            return apiRequest;
        }
    }
}
