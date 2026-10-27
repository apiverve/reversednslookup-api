Pod::Spec.new do |s|
  s.name             = 'APIVerveReverseDNSLookup'
  s.version          = '1.2.3'
  s.summary          = 'Reverse DNS Lookup resolves IPv4 and IPv6 addresses into their associated hostnames via PTR records.'
  s.description      = <<-'DESC'
Reverse DNS Lookup resolves IPv4 and IPv6 addresses into their associated hostnames via PTR records. Pass any IP address to check if reverse records exist and receive all matching hostnames.

This iOS/macOS SDK provides a convenient way to access the Reverse DNS Lookup from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/reversednslookup?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/reversednslookup-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveReverseDNSLookup/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
