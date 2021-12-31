/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ITManToken, ITManTokenInterface } from "../ITManToken";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523073ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff1660601b81525034801561004657600080fd5b5060805160601c61357a61007a6000396000818161068c0152818161071b015281816109f70152610a86015261357a6000f3fe60806040526004361061012a5760003560e01c80635c975abb116100ab5780638da5cb5b1161006f5780638da5cb5b1461039957806395d89b41146103c4578063a457c2d7146103ef578063a9059cbb1461042c578063dd62ed3e14610469578063f2fde38b146104a65761012a565b80635c975abb146102ec57806370a0823114610317578063715018a6146103545780638129fc1c1461036b5780638456cb59146103825761012a565b80633659cfe6116100f25780633659cfe61461022a57806339509351146102535780633f4ba83a1461029057806340c10f19146102a75780634f1ef286146102d05761012a565b806306fdde031461012f578063095ea7b31461015a57806318160ddd1461019757806323b872dd146101c2578063313ce567146101ff575b600080fd5b34801561013b57600080fd5b506101446104cf565b60405161015191906128a4565b60405180910390f35b34801561016657600080fd5b50610181600480360381019061017c91906124dc565b610561565b60405161018e9190612889565b60405180910390f35b3480156101a357600080fd5b506101ac61057f565b6040516101b99190612b26565b60405180910390f35b3480156101ce57600080fd5b506101e960048036038101906101e49190612439565b610589565b6040516101f69190612889565b60405180910390f35b34801561020b57600080fd5b50610214610681565b6040516102219190612b41565b60405180910390f35b34801561023657600080fd5b50610251600480360381019061024c91906123d4565b61068a565b005b34801561025f57600080fd5b5061027a600480360381019061027591906124dc565b610839565b6040516102879190612889565b60405180910390f35b34801561029c57600080fd5b506102a56108e5565b005b3480156102b357600080fd5b506102ce60048036038101906102c991906124dc565b61096b565b005b6102ea60048036038101906102e59190612488565b6109f5565b005b3480156102f857600080fd5b50610301610b32565b60405161030e9190612889565b60405180910390f35b34801561032357600080fd5b5061033e600480360381019061033991906123d4565b610b49565b60405161034b9190612b26565b60405180910390f35b34801561036057600080fd5b50610369610b92565b005b34801561037757600080fd5b50610380610c1a565b005b34801561038e57600080fd5b50610397610db5565b005b3480156103a557600080fd5b506103ae610e3b565b6040516103bb919061286e565b60405180910390f35b3480156103d057600080fd5b506103d9610e65565b6040516103e691906128a4565b60405180910390f35b3480156103fb57600080fd5b50610416600480360381019061041191906124dc565b610ef7565b6040516104239190612889565b60405180910390f35b34801561043857600080fd5b50610453600480360381019061044e91906124dc565b610fe2565b6040516104609190612889565b60405180910390f35b34801561047557600080fd5b50610490600480360381019061048b91906123fd565b611000565b60405161049d9190612b26565b60405180910390f35b3480156104b257600080fd5b506104cd60048036038101906104c891906123d4565b611087565b005b6060603680546104de90612e9c565b80601f016020809104026020016040519081016040528092919081815260200182805461050a90612e9c565b80156105575780601f1061052c57610100808354040283529160200191610557565b820191906000526020600020905b81548152906001019060200180831161053a57829003601f168201915b5050505050905090565b600061057561056e61117f565b8484611187565b6001905092915050565b6000603554905090565b6000610596848484611352565b6000603460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006105e161117f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610661576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065890612a26565b60405180910390fd5b6106758561066d61117f565b858403611187565b60019150509392505050565b60006012905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161415610719576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071090612966565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166107586115d6565b73ffffffffffffffffffffffffffffffffffffffff16146107ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a5906129a6565b60405180910390fd5b6107b78161162d565b61083681600067ffffffffffffffff8111156107fc577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561082e5781602001600182028036833780820191505090505b5060006116ac565b50565b60006108db61084661117f565b84846034600061085461117f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546108d69190612be4565b611187565b6001905092915050565b6108ed61117f565b73ffffffffffffffffffffffffffffffffffffffff1661090b610e3b565b73ffffffffffffffffffffffffffffffffffffffff1614610961576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095890612a46565b60405180910390fd5b61096961187d565b565b61097361117f565b73ffffffffffffffffffffffffffffffffffffffff16610991610e3b565b73ffffffffffffffffffffffffffffffffffffffff16146109e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109de90612a46565b60405180910390fd5b6109f1828261191f565b5050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161415610a84576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7b90612966565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610ac36115d6565b73ffffffffffffffffffffffffffffffffffffffff1614610b19576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b10906129a6565b60405180910390fd5b610b228261162d565b610b2e828260016116ac565b5050565b6000606560009054906101000a900460ff16905090565b6000603360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610b9a61117f565b73ffffffffffffffffffffffffffffffffffffffff16610bb8610e3b565b73ffffffffffffffffffffffffffffffffffffffff1614610c0e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0590612a46565b60405180910390fd5b610c186000611a80565b565b600060019054906101000a900460ff16610c425760008054906101000a900460ff1615610c4b565b610c4a611b46565b5b610c8a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c81906129e6565b60405180910390fd5b60008060019054906101000a900460ff161590508015610cda576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b610d4e6040518060400160405280600a81526020017f49544d616e546f6b656e000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f49544d0000000000000000000000000000000000000000000000000000000000815250611b57565b610d56611bbc565b610d5e611c1d565b610d66611c7e565b610d9133610d72610681565b600a610d7e9190612c8d565b620f4240610d8c9190612dab565b61191f565b8015610db25760008060016101000a81548160ff0219169083151502179055505b50565b610dbd61117f565b73ffffffffffffffffffffffffffffffffffffffff16610ddb610e3b565b73ffffffffffffffffffffffffffffffffffffffff1614610e31576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e2890612a46565b60405180910390fd5b610e39611cdf565b565b6000609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060378054610e7490612e9c565b80601f0160208091040260200160405190810160405280929190818152602001828054610ea090612e9c565b8015610eed5780601f10610ec257610100808354040283529160200191610eed565b820191906000526020600020905b815481529060010190602001808311610ed057829003601f168201915b5050505050905090565b60008060346000610f0661117f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610fc3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fba90612ae6565b60405180910390fd5b610fd7610fce61117f565b85858403611187565b600191505092915050565b6000610ff6610fef61117f565b8484611352565b6001905092915050565b6000603460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b61108f61117f565b73ffffffffffffffffffffffffffffffffffffffff166110ad610e3b565b73ffffffffffffffffffffffffffffffffffffffff1614611103576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110fa90612a46565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611173576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161116a90612926565b60405180910390fd5b61117c81611a80565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156111f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ee90612aa6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611267576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161125e90612946565b60405180910390fd5b80603460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516113459190612b26565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156113c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113b990612a86565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611432576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611429906128c6565b60405180910390fd5b61143d838383611d82565b6000603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156114c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114bb90612986565b60405180910390fd5b818103603360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546115599190612be4565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516115bd9190612b26565b60405180910390a36115d0848484611dda565b50505050565b60006116047f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611ddf565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61163561117f565b73ffffffffffffffffffffffffffffffffffffffff16611653610e3b565b73ffffffffffffffffffffffffffffffffffffffff16146116a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116a090612a46565b60405180910390fd5b50565b60006116b66115d6565b90506116c184611de9565b6000835111806116ce5750815b156116df576116dd8484611ea2565b505b600061170d7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd914360001b611f86565b90508060000160009054906101000a900460ff166118765760018160000160006101000a81548160ff0219169083151502179055506117d98583604051602401611757919061286e565b6040516020818303038152906040527f3659cfe6000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611ea2565b5060008160000160006101000a81548160ff0219169083151502179055506117ff6115d6565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161461186c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161186390612906565b60405180910390fd5b61187585611f90565b5b5050505050565b611885610b32565b6118c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118bb906128e6565b60405180910390fd5b6000606560006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa61190861117f565b604051611915919061286e565b60405180910390a1565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561198f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161198690612b06565b60405180910390fd5b61199b60008383611d82565b80603560008282546119ad9190612be4565b9250508190555080603360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611a039190612be4565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611a689190612b26565b60405180910390a3611a7c60008383611dda565b5050565b6000609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081609760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000611b5130611fdf565b15905090565b600060019054906101000a900460ff16611ba6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b9d90612ac6565b60405180910390fd5b611bae611ff2565b611bb88282612043565b5050565b600060019054906101000a900460ff16611c0b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c0290612ac6565b60405180910390fd5b611c13611ff2565b611c1b6120c4565b565b600060019054906101000a900460ff16611c6c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c6390612ac6565b60405180910390fd5b611c74611ff2565b611c7c612130565b565b600060019054906101000a900460ff16611ccd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cc490612ac6565b60405180910390fd5b611cd5612191565b611cdd6121e2565b565b611ce7610b32565b15611d27576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d1e906129c6565b60405180910390fd5b6001606560006101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258611d6b61117f565b604051611d78919061286e565b60405180910390a1565b611d8a610b32565b15611dca576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611dc1906129c6565b60405180910390fd5b611dd5838383612233565b505050565b505050565b6000819050919050565b611df281611fdf565b611e31576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e2890612a06565b60405180910390fd5b80611e5e7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611ddf565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6060611ead83611fdf565b611eec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ee390612a66565b60405180910390fd5b6000808473ffffffffffffffffffffffffffffffffffffffff1684604051611f149190612857565b600060405180830381855af49150503d8060008114611f4f576040519150601f19603f3d011682016040523d82523d6000602084013e611f54565b606091505b5091509150611f7c828260405180606001604052806027815260200161351e60279139612238565b9250505092915050565b6000819050919050565b611f9981611de9565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b600080823b905060008111915050919050565b600060019054906101000a900460ff16612041576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161203890612ac6565b60405180910390fd5b565b600060019054906101000a900460ff16612092576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161208990612ac6565b60405180910390fd5b81603690805190602001906120a892919061229f565b5080603790805190602001906120bf92919061229f565b505050565b600060019054906101000a900460ff16612113576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161210a90612ac6565b60405180910390fd5b6000606560006101000a81548160ff021916908315150217905550565b600060019054906101000a900460ff1661217f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161217690612ac6565b60405180910390fd5b61218f61218a61117f565b611a80565b565b600060019054906101000a900460ff166121e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121d790612ac6565b60405180910390fd5b565b600060019054906101000a900460ff16612231576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161222890612ac6565b60405180910390fd5b565b505050565b6060831561224857829050612298565b60008351111561225b5782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161228f91906128a4565b60405180910390fd5b9392505050565b8280546122ab90612e9c565b90600052602060002090601f0160209004810192826122cd5760008555612314565b82601f106122e657805160ff1916838001178555612314565b82800160010185558215612314579182015b828111156123135782518255916020019190600101906122f8565b5b5090506123219190612325565b5090565b5b8082111561233e576000816000905550600101612326565b5090565b600061235561235084612b81565b612b5c565b90508281526020810184848401111561236d57600080fd5b612378848285612e5a565b509392505050565b60008135905061238f816134ef565b92915050565b600082601f8301126123a657600080fd5b81356123b6848260208601612342565b91505092915050565b6000813590506123ce81613506565b92915050565b6000602082840312156123e657600080fd5b60006123f484828501612380565b91505092915050565b6000806040838503121561241057600080fd5b600061241e85828601612380565b925050602061242f85828601612380565b9150509250929050565b60008060006060848603121561244e57600080fd5b600061245c86828701612380565b935050602061246d86828701612380565b925050604061247e868287016123bf565b9150509250925092565b6000806040838503121561249b57600080fd5b60006124a985828601612380565b925050602083013567ffffffffffffffff8111156124c657600080fd5b6124d285828601612395565b9150509250929050565b600080604083850312156124ef57600080fd5b60006124fd85828601612380565b925050602061250e858286016123bf565b9150509250929050565b61252181612e05565b82525050565b61253081612e17565b82525050565b600061254182612bb2565b61254b8185612bc8565b935061255b818560208601612e69565b80840191505092915050565b600061257282612bbd565b61257c8185612bd3565b935061258c818560208601612e69565b61259581612f8c565b840191505092915050565b60006125ad602383612bd3565b91506125b882612faa565b604082019050919050565b60006125d0601483612bd3565b91506125db82612ff9565b602082019050919050565b60006125f3602f83612bd3565b91506125fe82613022565b604082019050919050565b6000612616602683612bd3565b915061262182613071565b604082019050919050565b6000612639602283612bd3565b9150612644826130c0565b604082019050919050565b600061265c602c83612bd3565b91506126678261310f565b604082019050919050565b600061267f602683612bd3565b915061268a8261315e565b604082019050919050565b60006126a2602c83612bd3565b91506126ad826131ad565b604082019050919050565b60006126c5601083612bd3565b91506126d0826131fc565b602082019050919050565b60006126e8602e83612bd3565b91506126f382613225565b604082019050919050565b600061270b602d83612bd3565b915061271682613274565b604082019050919050565b600061272e602883612bd3565b9150612739826132c3565b604082019050919050565b6000612751602083612bd3565b915061275c82613312565b602082019050919050565b6000612774602683612bd3565b915061277f8261333b565b604082019050919050565b6000612797602583612bd3565b91506127a28261338a565b604082019050919050565b60006127ba602483612bd3565b91506127c5826133d9565b604082019050919050565b60006127dd602b83612bd3565b91506127e882613428565b604082019050919050565b6000612800602583612bd3565b915061280b82613477565b604082019050919050565b6000612823601f83612bd3565b915061282e826134c6565b602082019050919050565b61284281612e43565b82525050565b61285181612e4d565b82525050565b60006128638284612536565b915081905092915050565b60006020820190506128836000830184612518565b92915050565b600060208201905061289e6000830184612527565b92915050565b600060208201905081810360008301526128be8184612567565b905092915050565b600060208201905081810360008301526128df816125a0565b9050919050565b600060208201905081810360008301526128ff816125c3565b9050919050565b6000602082019050818103600083015261291f816125e6565b9050919050565b6000602082019050818103600083015261293f81612609565b9050919050565b6000602082019050818103600083015261295f8161262c565b9050919050565b6000602082019050818103600083015261297f8161264f565b9050919050565b6000602082019050818103600083015261299f81612672565b9050919050565b600060208201905081810360008301526129bf81612695565b9050919050565b600060208201905081810360008301526129df816126b8565b9050919050565b600060208201905081810360008301526129ff816126db565b9050919050565b60006020820190508181036000830152612a1f816126fe565b9050919050565b60006020820190508181036000830152612a3f81612721565b9050919050565b60006020820190508181036000830152612a5f81612744565b9050919050565b60006020820190508181036000830152612a7f81612767565b9050919050565b60006020820190508181036000830152612a9f8161278a565b9050919050565b60006020820190508181036000830152612abf816127ad565b9050919050565b60006020820190508181036000830152612adf816127d0565b9050919050565b60006020820190508181036000830152612aff816127f3565b9050919050565b60006020820190508181036000830152612b1f81612816565b9050919050565b6000602082019050612b3b6000830184612839565b92915050565b6000602082019050612b566000830184612848565b92915050565b6000612b66612b77565b9050612b728282612ece565b919050565b6000604051905090565b600067ffffffffffffffff821115612b9c57612b9b612f5d565b5b612ba582612f8c565b9050602081019050919050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000612bef82612e43565b9150612bfa83612e43565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612c2f57612c2e612eff565b5b828201905092915050565b6000808291508390505b6001851115612c8457808604811115612c6057612c5f612eff565b5b6001851615612c6f5780820291505b8081029050612c7d85612f9d565b9450612c44565b94509492505050565b6000612c9882612e43565b9150612ca383612e4d565b9250612cd07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484612cd8565b905092915050565b600082612ce85760019050612da4565b81612cf65760009050612da4565b8160018114612d0c5760028114612d1657612d45565b6001915050612da4565b60ff841115612d2857612d27612eff565b5b8360020a915084821115612d3f57612d3e612eff565b5b50612da4565b5060208310610133831016604e8410600b8410161715612d7a5782820a905083811115612d7557612d74612eff565b5b612da4565b612d878484846001612c3a565b92509050818404811115612d9e57612d9d612eff565b5b81810290505b9392505050565b6000612db682612e43565b9150612dc183612e43565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612dfa57612df9612eff565b5b828202905092915050565b6000612e1082612e23565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b83811015612e87578082015181840152602081019050612e6c565b83811115612e96576000848401525b50505050565b60006002820490506001821680612eb457607f821691505b60208210811415612ec857612ec7612f2e565b5b50919050565b612ed782612f8c565b810181811067ffffffffffffffff82111715612ef657612ef5612f5d565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160011c9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f5061757361626c653a206e6f7420706175736564000000000000000000000000600082015250565b7f45524331393637557067726164653a207570677261646520627265616b73206660008201527f7572746865722075706772616465730000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f64656c656761746563616c6c0000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f6163746976652070726f78790000000000000000000000000000000000000000602082015250565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60008201527f6e74726163740000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6134f881612e05565b811461350357600080fd5b50565b61350f81612e43565b811461351a57600080fd5b5056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220dad946c3bfd1c59885de57ccb113de37da676c025c05a194977a2a22715b46a764736f6c63430008040033";

export class ITManToken__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ITManToken> {
    return super.deploy(overrides || {}) as Promise<ITManToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ITManToken {
    return super.attach(address) as ITManToken;
  }
  connect(signer: Signer): ITManToken__factory {
    return super.connect(signer) as ITManToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ITManTokenInterface {
    return new utils.Interface(_abi) as ITManTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITManToken {
    return new Contract(address, _abi, signerOrProvider) as ITManToken;
  }
}
