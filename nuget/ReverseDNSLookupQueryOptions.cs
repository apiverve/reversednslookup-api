using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.ReverseDNSLookup
{
    /// <summary>
    /// Query options for the Reverse DNS Lookup API
    /// </summary>
    public class ReverseDNSLookupQueryOptions
    {
        /// <summary>
        /// The IP address to lookup (IPv4 or IPv6)
        /// </summary>
        [JsonProperty("ip")]
        public string Ip { get; set; }
    }
}
