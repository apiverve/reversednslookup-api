# Reverse DNS Lookup API - Dart/Flutter Client

Reverse DNS Lookup resolves IPv4 and IPv6 addresses into their associated hostnames via PTR records. Pass any IP address to check if reverse records exist and receive all matching hostnames.

[![pub package](https://img.shields.io/pub/v/apiverve_reversednslookup.svg)](https://pub.dev/packages/apiverve_reversednslookup)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is the Dart/Flutter client for the [Reverse DNS Lookup API](https://apiverve.com/marketplace/reversednslookup?utm_source=dart&utm_medium=referral&utm_content=readme).

## Installation

Add this to your `pubspec.yaml`:

```yaml
dependencies:
  apiverve_reversednslookup: ^1.2.6
```

Then run:

```bash
dart pub get
# or for Flutter
flutter pub get
```

## Usage

```dart
import 'package:apiverve_reversednslookup/apiverve_reversednslookup.dart';

void main() async {
  final client = ReversednslookupClient('YOUR_API_KEY');

  try {
    final response = await client.execute({
      'ip': '8.8.8.8'
    });

    print('Status: ${response.status}');
    print('Data: ${response.data}');
  } catch (e) {
    print('Error: $e');
  }
}
```

## Response

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

## API Reference

- **API Home:** [Reverse DNS Lookup API](https://apiverve.com/marketplace/reversednslookup?utm_source=dart&utm_medium=referral&utm_content=readme)
- **Documentation:** [docs.apiverve.com/ref/reversednslookup](https://docs.apiverve.com/ref/reversednslookup?utm_source=dart&utm_medium=referral&utm_content=readme)

## Authentication

All requests require an API key. Get yours at [apiverve.com](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme).

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with Dart for [APIVerve](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme)
