# Account APIs

## Get CMP Balance for a single Address

```
https://cmpscan.io/api?module=account&action=balance&address=0xf2519c98a7c5920e28a1e3514726e224c7e27972&tag=latest&apikey=YourApiKeyToken
```

## Get CMP Balance for multiple Addresses in a single call

```
https://cmpscan.io/api?module=account&action=balancemulti&address=0xf2519c98a7c5920e28a1e3514726e224c7e27972,0xd3c22074bdbbb952b9aa861724448f14d2ac57f7,0x99135c5e7a6d3343f3239c50d8f4fd4d12594c55&tag=latest&apikey=YourApiKeyToken
```

Separate addresses by comma, up to a maxium of 20 accounts in a single batch

## Get a list of 'Normal' Transactions By Address

[Optional Parameters] startblock: starting blockNo to retrieve results, endblock: ending blockNo to
retrieve results

```
https://cmpscan.io/api?module=account&action=txlist&address=0x3b03a6e6cf79a7e1d5af56e4eb3c1e1b04cffa7d&startblock=2527710&endblock=2541962&sort=asc&apikey=YourApiKeyToken
```

(Returns up to a maximum of the last 10000 transactions only)

Another example:

```
https://cmpscan.io/api?module=account&action=txlist&address=0x3b03a6e6cf79a7e1d5af56e4eb3c1e1b04cffa7d&startblock=2527710&endblock=2541962&page=0&offset=100&sort=asc&apikey=YourApiKeyToken
```

(To get paginated results use page=[page number] and offset=[max records to return])

## Get a list of 'Internal' Transactions by Address

[Optional Parameters] startblock: starting blockNo to retrieve results, endblock: ending blockNo to
retrieve results

```
https://cmpscan.io/api?module=account&action=txlistinternal&address=0x1fcba3cb797465f38839f48ca7c9cda9d9aac28b&startblock=2825812&endblock=2825860&sort=asc&apikey=YourApiKeyToken
```

(Returns up to a maximum of the last 10000 transactions only)

Another example:

```
https://cmpscan.io/api?module=account&action=txlistinternal&address=0x1fcba3cb797465f38839f48ca7c9cda9d9aac28b&startblock=2825812&endblock=2825860&sort=asc&page=0&offset=10&apikey=YourApiKeyToken
```

(To get paginated results use page=[page number] and offset=[max records to return])

## Get "Internal Transactions" by Transaction Hash

```
https://cmpscan.io/api?module=account&action=txlistinternal&txhash=0x9602d3fc27ac45da81c24fe0fe92bfb358e5abc00257c4d4df1a4508cc2cca63&apikey=YourApiKeyToken
```

(Returns up to a maximum of the last 10000 transactions only)

## Get "Internal Transactions" by Block Range

```
https://cmpscan.io/api?module=account&action=txlistinternal&startblock=2802313&endblock=2825860&sort=asc&page=0&offset=10&apikey=YourApiKeyToken
```

(Returns up to a maximum of the last 10000 transactions only)

## Get a list of "CRC-20 - Token Transfer Events" by Address

[Optional Parameters] startblock: starting blockNo to retrieve results, endblock: ending blockNo to
retrieve results

```
https://cmpscan.io/api?module=account&action=tokentx&address=0xa2de1fccdce3774c99a33f9b23abe4063f937129&startblock=2799201&endblock=2799211&sort=asc&apikey=YourApiKeyToken
```

(Returns up to a maximum of the last 10000 transactions only)

Another example:

```
https://cmpscan.io/api?module=account&action=tokentx&address=0xa2de1fccdce3774c99a33f9b23abe4063f937129&startblock=2799201&endblock=2799211&sort=asc&page=0&offset=2&apikey=YourApiKeyToken
```

(To get paginated results use page=[page number] and offset=[max records to return])

Another example:

```
https://cmpscan.io/api?module=account&action=tokentx&address=0xa2de1fccdce3774c99a33f9b23abe4063f937129&contractaddress=0xb7d2ea9b4dbeb599ffa2dcbb0093ccd8512fcc0d&startblock=2799201&endblock=2799211&sort=asc&apikey=YourApiKeyToken
```

(To get transfer events for a specific token contract, include the contractaddress parameter)

## Get a list of "CRC-721 - Token Transfer Events" by Address

[Optional Parameters] startblock: starting blockNo to retrieve results, endblock: ending blockNo to
retrieve results

```
https://cmpscan.io/api?module=account&action=tokennfttx&contractaddress=0xef2698ce160c3e8602ffa438e3d1cc62836c1ecc&startblock=2792700&endblock=2792712&sort=asc&apikey=YourApiKeyToken
```

(Returns up to a maximum of the last 10000 transactions only)

Another example:

```
https://cmpscan.io/api?module=account&action=tokennfttx&contractaddress=0xef2698ce160c3e8602ffa438e3d1cc62836c1ecc&startblock=2792700&endblock=2792712&sort=asc&page=0&offset=10&apikey=YourApiKeyToken
```

(To get paginated results use page=[page number] and offset=[max records to return])

## Get list of Blocks Validated by Address

```
https://cmpscan.io/api?module=account&action=getminedblocks&address=0xf81f8d2a3c513fef8718ac4c870ef1d2db39646e&blocktype=blocks&apikey=YourApiKeyToken
```

Another example:

```
https://cmpscan.io/api?module=account&action=getminedblocks&address=0xf81f8d2a3c513fef8718ac4c870ef1d2db39646e&blocktype=blocks&page=1&offset=10&apikey=YourApiKeyToken
```

(To get paginated results use page=[page number] and offset=[max records to return])

** type = blocks (full blocks only)

# Contract APIs

## Get Contract ABI for Verified Contract Source Codes

```
https://cmpscan.io/api?module=contract&action=getabi&address=0x1fcba3cb797465f38839f48ca7c9cda9d9aac28b&apikey=YourApiKeyToken
```

## Get Contract Source Code for Verified Contract Source Codes

```
https://cmpscan.io/api?module=contract&action=getsourcecode&address=0x1fcba3cb797465f38839f48ca7c9cda9d9aac28b&apikey=YourApiKeyToken
```

## Verify & Publish Contract Source Code

This is a POST request.

```
https://cmpscan.io/api?module=contract&action=verify&apikey=YourApiKeyToken
```

Here are some example of how this api may be used:

```json
{
    "contract_address": "0x1fcba3cb797465f38839f48ca7c9cda9d9aac28b",
    "compiler_type": "SingleFile",
    "compiler_version": "v0.8.13+commit.abaa5c0e",
    "license_type": "MIT License",
    "contract_code": "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.12;\n\ncontract WCMP {\n    string public name     = \"Wrapped CMP\";\n    string public symbol   = \"WCMP\";\n    uint8  public decimals = 18;\n\n    event  Approval(address indexed src, address indexed who, uint value);\n    event  Transfer(address indexed src, address indexed dst, uint value);\n    event  Deposit(address indexed dst, uint value);\n    event  Withdrawal(address indexed src, uint value);\n\n    mapping (address => uint)                       public  balanceOf;\n    mapping (address => mapping (address => uint))  public  allowance;\n\n    receive() external payable {\n        deposit();\n    }\n    function deposit() public payable {\n        balanceOf[msg.sender] += msg.value;\n        emit Deposit(msg.sender, msg.value);\n    }\n    function withdraw(uint value) public {\n        require(balanceOf[msg.sender] >= value);\n        balanceOf[msg.sender] -= value;\n        payable(msg.sender).transfer(value);\n        emit Withdrawal(msg.sender, value);\n    }\n\n    function totalSupply() public view returns (uint) {\n        return address(this).balance;\n    }\n\n    function approve(address who, uint value) public returns (bool) {\n        allowance[msg.sender][who] = value;\n        emit Approval(msg.sender, who, value);\n        return true;\n    }\n\n    function transfer(address dst, uint value) public returns (bool) {\n        return transferFrom(msg.sender, dst, value);\n    }\n\n    function transferFrom(address src, address dst, uint value) public returns (bool)\n    {\n        require(balanceOf[src] >= value);\n\n        if (src != msg.sender) {\n            require(allowance[src][msg.sender] >= value);\n            allowance[src][msg.sender] -= value;\n        }\n\n        balanceOf[src] -= value;\n        balanceOf[dst] += value;\n\n        emit Transfer(src, dst, value);\n\n        return true;\n    }\n}",
    "contract_name": "WCMP",
    "evm_version": "default",
    "abi": "",
    "optimization": true,
    "optimizer_runs": 200
}
```

### request params

| name             | type   | required | desc                                        |
|------------------|--------|----------|---------------------------------------------|
| contract_address | string | true     | The address of the contract to be verified. |
| compiler_type    | string | true     | SingleFile or MultiFile or Vyper.           |
| compiler_version | string | true     | Version of the compiler.                    |
| license_type     | string | optional | Types of open source protocols.             |
| contract_code    | string | true     | Contract source code.                       |
| contract_name    | string | optional | Contract name.                              |
| evm_version      | string | optional | Use 'default'.                              |
| abi              | string | optional | JSON ABI of the contract.                   |
| optimization     | string | optional | Enable optimization.                        |
| optimizer_runs   | string | optional | Optimize the number of runs.                |

# Transaction APIs

## Check Transaction Receipt Status

Note: status: 0 = Fail, 1 = Pass.

```
https://cmpscan.io/api?module=transaction&action=gettxreceiptstatus&txhash=0x9c3c35834f6ea8b331bd6747d9a14c316475b863c4728238ca05e7734d5963c5&apikey=YourApiKeyToken
```

# Block APIs

## Get Block Rewards by BlockNo

```
https://cmpscan.io/api?module=block&action=getblockreward&blockno=39258&apikey=YourApiKeyToken
```

## Get Estimated Block Countdown Time by BlockNo

```
https://cmpscan.io/api?module=block&action=getblockcountdown&blockno=13787886&apikey=YourApiKeyToken
```

## Get Block Number by Timestamp

[Parameters] timestamp format: Unix timestamp (supports Unix timestamps in seconds), closest
value: 'before' or 'after'

```
https://cmpscan.io/api?module=block&action=getblocknobytime&timestamp=1644245532&closest=after&apikey=YourApiKeyToken
```

# Log APIs

The Event Log API was designed to provide an alternative to the native eth_getLogs.
This is a POST request.

```
https://cmpscan.io/api?module=log&action=getLogs&apikey=YourApiKeyToken
```

Here are some example of how this api may be used:

## Example One

Get event logs from block number 13920 to block number 13930, where log address is 0x715aA09E6950ffDBda55Cea77f72dd7F52Ae1A62 and topic0 is "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"

```json
{
    "toBlock":13930,
    "fromBlock":13920,
    "address":"0x1fcba3cb797465f38839f48ca7c9cda9d9aac28b",
    "topics":[
        ["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"]
    ]
}
```

## Example Two

Get event logs from block number 13920 to block number 13930, where log address is 0x715aA09E6950ffDBda55Cea77f72dd7F52Ae1A62 and topic0,topic1 is nay and topic3 is "0x00000000000000000000000075ecd1ab06c4e34763a47e1033e80de614d09fa4"

```json
{
    "toBlock":13930,
    "fromBlock":13920,
    "address":"0x1fcba3cb797465f38839f48ca7c9cda9d9aac28b",
    "topics":[
        [],
        [],
        ["0x000000000000000000000000af09c38ad49acfd8068dcc342b29afe8201eee6f"]
    ]
}
```

Tips: max range between "fromBlock" and "toBlock" is 10000.

# Token APIs

## Get CRC20-Token TotalSupply by ContractAddress

```
https://cmpscan.io/api?module=stats&action=tokensupply&contractaddress=0x1fcba3cb797465f38839f48ca7c9cda9d9aac28b&apikey=YourApiKeyToken
```

## Get CRC20-Token Circulating Supply by ContractAddress

```
https://cmpscan.io/api?module=stats&action=tokenCsupply&contractaddress=0x1fcba3cb797465f38839f48ca7c9cda9d9aac28b&apikey=YourApiKeyToken
```

## Get CRC20-Token Account Balance for TokenContractAddress

```
https://cmpscan.io/api?module=account&action=tokenbalance&contractaddress=0xb7d2ea9b4dbeb599ffa2dcbb0093ccd8512fcc0d&address=0x298a116ba1ed7ca59eacb679b78217d47328561c&tag=latest&apikey=YourApiKeyToken
```

# Proxy APIs

The following are the limited list of supported Proxied APIs for CMP available through HScan.

## eth_blockNumber

Returns the number of most recent block

```
https://cmpscan.io/api?module=proxy&action=blockNumber&apikey=YourApiKeyToken
```

## eth_getBlockByNumber

Returns information about a block by block number

```
https://cmpscan.io/api?module=proxy&action=getBlockByNumber&tag=0xd3d8&boolean=true&apikey=YourApiKeyToken
```

## eth_getBlockTransactionCountByNumber

Returns the number of transactions in a block from a block matching the given block number

```
https://cmpscan.io/api?module=proxy&action=getBlockTransactionCountByNumber&tag=0x2b3560&apikey=YourApiKeyToken
```

## eth_getTransactionByHash

Returns the information about a transaction requested by transaction hash

```
https://cmpscan.io/api?module=proxy&action=getTransactionByHash&txhash=0xb40f0f6a83afba8a305938b776b3dfb11a63ac73f3e5eb53b8816d10db04cb84&apikey=YourApiKeyToken
```

## eth_getTransactionByBlockNumberAndIndex

Returns information about a transaction by block number and transaction index position

```
https://cmpscan.io/api?module=proxy&action=getTransactionByBlockNumberAndIndex&tag=0x1DCBD9&index=0x0&apikey=YourApiKeyToken
```

## eth_getTransactionCount

Returns the number of transactions sent from an address

```
https://cmpscan.io/api?module=proxy&action=getTransactionCount&address=0x2d104cc9db395d5bc1d0043f7be3f8f5c1cffc88&tag=latest&apikey=YourApiKeyToken
```

## eth_sendRawTransaction

Creates new message call transaction or a contract creation for signed transactions

```
https://cmpscan.io/api?module=proxy&action=sendRawTransaction&hex=0xf8ab1385ba43b7400082afc894715aa09e6950ffdbda55cea77f72dd7f52ae1a6280b84440c10f1900000000000000000000000075ecd1ab06c4e34763a47e1033e80de614d09fa4000000000000000000000000000000000000000000000000000000014b1a92c082023ea0fc44da2f85b9fc598124c81ed13a62b49e6edc6248d8c4940ed9a192f62717cea05832a187f1d413c0fa27669ad277f2bcaa390827c420e314af44d8ee194c0eb3&apikey=YourApiKeyToken
```

(Replace the hex value with your raw hex encoded transaction that you want to send.)

## eth_getTransactionReceipt

Returns the receipt of a transaction by transaction hash

```
https://cmpscan.io/api?module=proxy&action=getTransactionReceipt&txhash=0x4d4c7996d8c52ea12716408cc8a2c0d3fcd7eafc1f7fbb59485bd12b685204e0&apikey=YourApiKeyToken
```

## eth_call

Executes a new message call immediately without creating a transaction on the block chain

```
https://cmpscan.io/api?module=proxy&action=call&to=0xbe05ac1fb417c9ea435b37a9cecd39bc70359d31&data=0x18160ddd&tag=latest&apikey=YourApiKeyToken
```

(The gas parameter to eth_call is 10000000)

## eth_getCode

Returns code at a given address

```
https://cmpscan.io/api?module=proxy&action=getCode&address=0x1fcba3cb797465f38839f48ca7c9cda9d9aac28b&tag=latest&apikey=YourApiKeyToken
```

## eth_getStorageAt

Returns the value from a storage position at a given address

```
https://cmpscan.io/api?module=proxy&action=getStorageAt&address=0x1fcba3cb797465f38839f48ca7c9cda9d9aac28b&position=0x0&tag=latest&apikey=YourApiKeyToken
```

## eth_gasPrice

Returns the current price per gas in wei

```
https://cmpscan.io/api?module=proxy&action=gasPrice&apikey=YourApiKeyToken
```

## eth_estimateGas

Makes a call or transaction, which won't be added to the blockchain and returns the used gas, which
can be used for estimating the used gas

```
https://cmpscan.io/api?module=proxy&action=estimateGas&data=0x40c10f1900000000000000000000000075ecd1ab06c4e34763a47e1033e80de614d09fa4000000000000000000000000000000000000000000000000000000014b1a92c0&to=0x715aa09e6950ffdbda55cea77f72dd7f52ae1a62&value=0x0&gasPrice=0x430E23400&gas=0xF4240&apikey=YourApiKeyToken
```

(The gas parameter to eth_estimateGas is 10000000)

# Stats APIs

## Get Total Supply of CMP on the CMP Chain

```
https://cmpscan.io/api?module=stats&action=cmpsupply&apikey=YourApiKeyToken
```

## Get Circulation Supply of CMP on the CMP Chain

```
https://cmpscan.io/api?module=stats&action=cmpcsupply&apikey=YourApiKeyToken
```

## Get CMP Last Price

```
https://cmpscan.io/api?module=stats&action=cmpprice&apikey=YourApiKeyToken
```

# NFT APIs

## Get Contract Metadata

```
https://cmpscan.io/api?module=nft&action=getcontractmetadata&apikey=YourApiKeyToken&contractAddress=0x8cee805fe5fa49e81266fcbc27f37d85062c1707
```

### request params

| name            | type   | required | desc                                                                 |
|-----------------|--------|----------|----------------------------------------------------------------------|
| contractAddress | string | true     | NFT contract address, eg: 0x8cee805fe5fa49e81266fcbc27f37d85062c1707 |

### response data

| name                   | type    | desc                                                   |
|------------------------|---------|--------------------------------------------------------|
| » address              | string  | contract address                                       |
| » contractMetadata     | object  |                                                        |
| »» name                | string  | The name attribute of the contract                     |
| »» symbol              | string  | The symbol attribute of the contract                   |
| »» totalSupply         | string  | The totalSupply attribute of the contract              |
| »» tokenType           | string  | NFT type, ERC721, ERC1155, UNKNOWN                     |
| »» contractDeployer    | string  | Contract deployer                                      |
| »» deployedBlockNumber | integer | The height of the block where the contract is deployed |
| »» openSea             | object  |                                                        |

## Get NFT Metadata

```
https://cmpscan.io/api?module=nft&action=getnftmetadata&apikey=YourApiKeyToken&contractAddress=0x5bd985f8caa0f4e5ad5124af429d99d1794a94c4&tokenId=0&tokenType=ERC1155
```

### request params

| name            | type   | required | desc                         |      
|-----------------|--------|----------|------------------------------|
| contractAddress | string | true     | NFT contract address         |
| tokenId         | string | true     | NFT token ID, decimal number |
| tokenType       | string | optional | optional. ERC721 or ERC1155  |

### response data

| name                   | type    | desc                                      |
|------------------------|---------|-------------------------------------------|
| » contract             | object  |                                           |     
| »» address             | string  | NFT contract address                      |
| » id                   | object  |                                           |
| »» tokenId             | string  | NFT token ID                              |
| »» tokenMetadata       | object  |                                           |
| »»» tokenType          | string  | ERC721 or ERC1155                         |
| » title                | string  | The name attribute of the metadata        |
| » description          | string  | The description attribute of the metadata |
| » tokenUri             | object  |                                           |
| »» gateway             | string  | IPFS proxy gateway                        |
| »» raw                 | string  | The token uri attribute of the contract   |
| » media                | object  |                                           |
| »» gateway             | string  | Image gateway                             |
| »» thumbnail           | string  | Thumbnail gateway                         |
| »» raw                 | string  | Raw image                                 |
| »» format              | string  | Image format                              |
| »» bytes               | integer | Image length                              |
| » metadata             | object  | The metadata of the token uri             |
| » timeLastUpdated      | string  | Last update time                          |
| » contractMetadata     | object  | Same as returned by getcontractmetadata   |
| »» name                | string  |                                           |
| »» symbol              | string  |                                           |
| »» totalSupply         | string  |                                           |
| »» tokenType           | string  |                                           |
| »» contractDeployer    | string  |                                           |
| »» deployedBlockNumber | integer |                                           |
| »» openSea             | object  |                                           |

## Get NFTs

```
https://cmpscan.io/api?module=nft&action=getnfts&apikey=YourApiKeyToken&owner=0xab4ac15f46cc0d815da7aad30ff31060c0171dce&withMetadata=true&pageSize=10
```

### request params

| name              | type   | required | desc                                                                                                                                                                         |
|-------------------|--------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| owner             | string | true     | owner address                                                                                                                                                                |
| withMetadata      | string | optional | optional. Return metadata, true or false. Defaults to true.                                                                                                                  |
| contractAddresses | array  | optional | optional. Array of contract addresses to filter the responses with. Max limit 45 contracts.                                                                                  |
| pageSize          | string | optional | optional. Number of NFTs to be returned per page. Defaults to 100. Max is 100.                                                                                               |
| pageKey           | string | optional | optional. key for pagination. If more results are available, a pageKey will be returned in the response. Pass back the pageKey as a param to fetch the next page of results. |


### response data

| name                    | type    | desc                                                                                                                                                               |
|-------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| » ownedNfts             | object  |                                                                                                                                                                    |
| »» contract             | object  |                                                                                                                                                                    |
| »»» address             | string  | NFT contract address                                                                                                                                               |
| »» id                   | object  |                                                                                                                                                                    |
| »»» tokenId             | string  | NFT token ID                                                                                                                                                       |
| »»» tokenMetadata       | object  |                                                                                                                                                                    |
| »»»» tokenType          | string  | ERC721 or ERC1155                                                                                                                                                  |
| »» balance              | string  | Token balance                                                                                                                                                      |
| »» title                | string  | The name attribute of the metadata                                                                                                                                 |
| »» description          | string  | The description attribute of the metadata                                                                                                                          |
| »» tokenUri             | object  |                                                                                                                                                                    |
| »»» gateway             | string  | IPFS proxy gateway                                                                                                                                                 |
| »»» raw                 | string  | The token uri attribute of the contract                                                                                                                            |
| »» media                | object  |                                                                                                                                                                    |
| »»» gateway             | string  | Image gateway                                                                                                                                                      |
| »»» thumbnail           | string  | Thumbnail gateway                                                                                                                                                  |
| »»» raw                 | string  | Raw image                                                                                                                                                          |
| »»» format              | string  | Image format                                                                                                                                                       |
| »»» bytes               | integer | Image length                                                                                                                                                       |
| »» metadata             | object  | The metadata of the token uri                                                                                                                                      |
| »» timeLastUpdated      | string  | Last update time                                                                                                                                                   |
| »» contractMetadata     | object  | Same as returned by getContractMetadata                                                                                                                            |
| »»» name                | string  |                                                                                                                                                                    |
| »»» symbol              | string  |                                                                                                                                                                    |
| »»» totalSupply         | string  |                                                                                                                                                                    |
| »»» tokenType           | string  |                                                                                                                                                                    |
| »»» contractDeployer    | string  |                                                                                                                                                                    |
| »»» deployedBlockNumber | integer |                                                                                                                                                                    |
| »»» openSea             | object  |                                                                                                                                                                    |
| »» spamInfo             | object  |                                                                                                                                                                    |
| »»» isSpam              | string  |                                                                                                                                                                    |
| »»» classifications     | string  |                                                                                                                                                                    |
| » totalCount            | integer | Total number of NFTs (distinct tokenIds) owned by the given address                                                                                                |
| » pageKey               | string  | key for pagination. If more results are available, a pageKey will be returned in the response. Pass back the pageKey as a param to fetch the next page of results. |
| » blockHash             | string  | The canonical head block hash of when your request was received                                                                                                    |