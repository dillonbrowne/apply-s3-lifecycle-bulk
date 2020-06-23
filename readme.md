## Attach Lifecycle Rules to S3 Buckets in Bulk
A simple node.js utility to apply a lifecycles rules to a list of buckets.

### Setup
1. Configure your AWS CLI credentials `~/.aws/credentials`
2. `yarn` or `npm i` 
2. `mv buckets.sample.json buckets.json`List the bucket IDs in the `buckets.json` file.
3. `mv lifecycle.sample.json lifecycle.json` Configure lifecycle rules in the `lifecycle.json` file.
### Run
`node index.js`