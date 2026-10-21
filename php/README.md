# Reverse DNS Lookup API - PHP Package

Reverse DNS Lookup resolves IPv4 and IPv6 addresses into their associated hostnames via PTR records. Pass any IP address to check if reverse records exist and receive all matching hostnames.

## Installation

Install via Composer:

```bash
composer require apiverve/reversednslookup
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Reversednslookup\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute(['ip' => '8.8.8.8']);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Reversednslookup\Client;
use APIVerve\Reversednslookup\Exceptions\APIException;
use APIVerve\Reversednslookup\Exceptions\ValidationException;

try {
    $response = $client->execute(['ip' => '8.8.8.8']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/reversednslookup?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/reversednslookup?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/reversednslookup?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
