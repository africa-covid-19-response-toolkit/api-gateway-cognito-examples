using System;
using System.IO;
using System.Net;
using System.Text;
using Newtonsoft.Json;

namespace donet_api_gateway_auth
{
    class Program
    {
        static void Main(string[] args)
        {
            HttpWebRequest apiRequest = ApiHelper.GetWebRequest("https://api.ethiopia-covid19.com/gateway/communities");
            apiRequest.Method = "GET";
            WebResponse apiResponse = apiRequest.GetResponse();
            using (var reader = new StreamReader(apiResponse.GetResponseStream(), Encoding.UTF8))
            {
                var response = reader.ReadToEnd();
                Console.WriteLine($"Api Response: {response}");
            }
        }
        
    }

    

}
