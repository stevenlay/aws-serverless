<h1 align="center">Serverless Framework Auction Service</h1>

## Features

- Create Auctions
- Get all opened auctions
- Get a particular auction
- Place bids
- Close Auctions
- Upload Auction Pictures
- Only authorized requests can be made


- S3 - used to store saved objects such as auction pictures
- DynamoDB - used to persist auctions and their information, as well as create, update, or delete
- SQS / SES - Send messages to close auctions and notify buyer and seller about a bid

## Getting started

### 1. Install dependencies

```sh
npm install
```

### 3. Deploy the stack

We need to deploy the stack in order to consume the private/public testing endpoints.

```sh
sls deploy -v
```
