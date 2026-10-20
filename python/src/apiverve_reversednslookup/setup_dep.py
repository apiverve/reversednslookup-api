from setuptools import setup, find_packages

setup(
    name='apiverve_reversednslookup',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Reverse DNS Lookup resolves IPv4 and IPv6 addresses into their associated hostnames via PTR records. Pass any IP address to check if reverse records exist and receive all matching hostnames.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/reversednslookup?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
