/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Multicall, MulticallInterface } from "../Multicall";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "aggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes[]",
        name: "returnData",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockCoinbase",
    outputs: [
      {
        internalType: "address",
        name: "coinbase",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockDifficulty",
    outputs: [
      {
        internalType: "uint256",
        name: "difficulty",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockGasLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "gaslimit",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
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
        name: "addr",
        type: "address",
      },
    ],
    name: "getEthBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610adc806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806372425d9d1161005b57806372425d9d1461012a57806386d516e814610148578063a8b0574e14610166578063ee82ac5e1461018457610088565b80630f28c97d1461008d578063252dba42146100ab57806327e86d6e146100dc5780634d2301cc146100fa575b600080fd5b6100956101b4565b6040516100a291906107a6565b60405180910390f35b6100c560048036038101906100c091906105cf565b6101bc565b6040516100d39291906107c1565b60405180910390f35b6100e46103a7565b6040516100f1919061078b565b60405180910390f35b610114600480360381019061010f91906105a6565b6103bc565b60405161012191906107a6565b60405180910390f35b6101326103dd565b60405161013f91906107a6565b60405180910390f35b6101506103e5565b60405161015d91906107a6565b60405180910390f35b61016e6103ed565b60405161017b9190610770565b60405180910390f35b61019e60048036038101906101999190610610565b6103f5565b6040516101ab919061078b565b60405180910390f35b600042905090565b60006060439150825167ffffffffffffffff811115610204577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561023757816020015b60608152602001906001900390816102225790505b50905060005b83518110156103a157600080858381518110610282577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff168684815181106102dd577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151602001516040516102f69190610759565b6000604051808303816000865af19150503d8060008114610333576040519150601f19603f3d011682016040523d82523d6000602084013e610338565b606091505b50915091508161034757600080fd5b80848481518110610381577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018190525050508080610399906109c0565b91505061023d565b50915091565b60006001436103b691906108d3565b40905090565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600044905090565b600045905090565b600041905090565b600081409050919050565b600061041361040e84610816565b6107f1565b9050808382526020820190508285602086028201111561043257600080fd5b60005b8581101561047c57813567ffffffffffffffff81111561045457600080fd5b808601610461898261052d565b85526020850194506020840193505050600181019050610435565b5050509392505050565b600061049961049484610842565b6107f1565b9050828152602081018484840111156104b157600080fd5b6104bc84828561094d565b509392505050565b6000813590506104d381610a78565b92915050565b600082601f8301126104ea57600080fd5b81356104fa848260208601610400565b91505092915050565b600082601f83011261051457600080fd5b8135610524848260208601610486565b91505092915050565b60006040828403121561053f57600080fd5b61054960406107f1565b90506000610559848285016104c4565b600083015250602082013567ffffffffffffffff81111561057957600080fd5b61058584828501610503565b60208301525092915050565b6000813590506105a081610a8f565b92915050565b6000602082840312156105b857600080fd5b60006105c6848285016104c4565b91505092915050565b6000602082840312156105e157600080fd5b600082013567ffffffffffffffff8111156105fb57600080fd5b610607848285016104d9565b91505092915050565b60006020828403121561062257600080fd5b600061063084828501610591565b91505092915050565b600061064583836106e0565b905092915050565b61065681610907565b82525050565b600061066782610883565b61067181856108a6565b93508360208202850161068385610873565b8060005b858110156106bf57848403895281516106a08582610639565b94506106ab83610899565b925060208a01995050600181019050610687565b50829750879550505050505092915050565b6106da81610919565b82525050565b60006106eb8261088e565b6106f581856108b7565b935061070581856020860161095c565b61070e81610a67565b840191505092915050565b60006107248261088e565b61072e81856108c8565b935061073e81856020860161095c565b80840191505092915050565b61075381610943565b82525050565b60006107658284610719565b915081905092915050565b6000602082019050610785600083018461064d565b92915050565b60006020820190506107a060008301846106d1565b92915050565b60006020820190506107bb600083018461074a565b92915050565b60006040820190506107d6600083018561074a565b81810360208301526107e8818461065c565b90509392505050565b60006107fb61080c565b9050610807828261098f565b919050565b6000604051905090565b600067ffffffffffffffff82111561083157610830610a38565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561085d5761085c610a38565b5b61086682610a67565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006108de82610943565b91506108e983610943565b9250828210156108fc576108fb610a09565b5b828203905092915050565b600061091282610923565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561097a57808201518184015260208101905061095f565b83811115610989576000848401525b50505050565b61099882610a67565b810181811067ffffffffffffffff821117156109b7576109b6610a38565b5b80604052505050565b60006109cb82610943565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156109fe576109fd610a09565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610a8181610907565b8114610a8c57600080fd5b50565b610a9881610943565b8114610aa357600080fd5b5056fea2646970667358221220c2822adbcba50e1f8e3401bc16657a7995a89f4790879d78ae804ef4c169b60364736f6c63430008040033";

export class Multicall__factory extends ContractFactory {
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
  ): Promise<Multicall> {
    return super.deploy(overrides || {}) as Promise<Multicall>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Multicall {
    return super.attach(address) as Multicall;
  }
  connect(signer: Signer): Multicall__factory {
    return super.connect(signer) as Multicall__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MulticallInterface {
    return new utils.Interface(_abi) as MulticallInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Multicall {
    return new Contract(address, _abi, signerOrProvider) as Multicall;
  }
}
