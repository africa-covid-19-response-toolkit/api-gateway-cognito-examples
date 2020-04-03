Example 

```
HttpWebRequest apiRequest = AuthHelper.GetWebRequest("https://api.ethiopia-covid19.com/gateway/communities");
apiRequest.Method = "GET";
WebResponse apiResponse = apiRequest.GetResponse();
```