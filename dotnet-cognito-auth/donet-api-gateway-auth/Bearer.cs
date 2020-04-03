using System;
using System.Collections.Generic;
using System.Text;

namespace donet_api_gateway_auth
{
    public class Bearer
    {
        public string scope { get; set; }
        public string token_type { get; set; }
        public string expires_in { get; set; }
        public string refresh_token { get; set; }
        public string access_token { get; set; }
    }
}
