# Reverse DNS Lookup API - Ruby Gem

Reverse DNS Lookup resolves IPv4 and IPv6 addresses into their associated hostnames via PTR records. Pass any IP address to check if reverse records exist and receive all matching hostnames.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_reversednslookup'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_reversednslookup
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_reversednslookup'

# Initialize the client
client = APIVerve::Reversednslookup::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({ ip: "8.8.8.8" })

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ ip: "8.8.8.8" })
  puts response["data"]
rescue APIVerve::Reversednslookup::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Reversednslookup::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Reversednslookup::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "ip": "8.8.8.8",
    "hostname": "dns.google",
    "ptr": [
      "dns.google"
    ],
    "found": true
  }
}
```

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/reversednslookup?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/reversednslookup?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/reversednslookup?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
