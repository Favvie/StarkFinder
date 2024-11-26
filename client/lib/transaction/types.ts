// lib/transaction/types.ts
export interface TransactionStep {
  contractAddress: string;
  entrypoint: string;
  calldata: string[];
}

export interface BrianStep {
  approve?: TransactionStep;
  transactionData?: TransactionStep;
  contractAddress?: string;
  entrypoint?: string;
  calldata?: string[];
}

export interface BrianToken {
  address: string;
  symbol: string;
  decimals: number;
}

export interface NetworkConfig {
  chainId: string;
  name: string;
}

export interface BridgeConfig {
  source: NetworkConfig;
  destination: NetworkConfig;
  supportedTokens: {
    [key: string]: {
      sourceToken: string;
      destinationToken: string;
    };
  };
}

export interface LayerswapAction {
  call_data: string; // JSON string of TransactionStep[]
  chain_id: string;
  created_date: string;
  network: string;
  status: string;
  type: string;
}

export interface LayerswapResponse {
  data: {
    id: string;
    status: string;
    created_date: string;
    deposit_actions: LayerswapAction[];
    source_network: string;
    destination_network: string;
    source_token: string;
    destination_token: string;
    source_amount: number;
    destination_amount: number;
    source_address: string;
    destination_address: string;
  };
}

// lib/layerswap/types.ts
export interface LayerswapRequest {
  sourceAddress: string;
  destinationAddress: string;
  sourceNetwork: string;
  destinationNetwork: string;
  sourceToken: string;
  destinationToken: string;
  amount: number;
}

export interface LayerswapErrorResponse {
  errors?: Array<{
    code: string;
    message: string;
  }>;
  error?: string;
}

export interface LayerswapCreateSwapRequest {
  source: string;
  destination: string;
  amount: number;
  source_asset: string;
  destination_asset: string;
  destination_address: string;
  refuel: boolean;
  reference_id?: string;
}

export interface LayerswapCreateSwapResponse {
  data: {
    swap_id: string;
  };
  error: null | {
    message: string;
  };
}


export interface LayerswapAction {
  call_data: string;
  chain_id: string;
  created_date: string;
  network: string;
  status: string;
  type: string;
}

export interface LayerswapSuccessResponse {
  data: {
    id: string;
    status: string;
    created_date: string;
    deposit_actions: LayerswapAction[];
    source_network: string;
    destination_network: string;
    source_token: string;
    destination_token: string;
    source_amount: number;
    destination_amount: number;
    source_address: string;
    destination_address: string;
  };
}

export interface BridgeTransactionData {
  sourceNetwork: string;
  destinationNetwork: string;
  sourceToken: string;
  destinationToken: string;
  amount: number;
  sourceAddress: string;
  destinationAddress: string;
  depositActions?: TransactionStep[];
}

export interface BrianTransactionData {
  description: string;
  steps: BrianStep[];
  fromToken?: BrianToken;
  toToken?: BrianToken;
  fromAmount?: string;
  toAmount?: string;
  receiver?: string;
  amountToApprove?: string;
  gasCostUSD?: string;
  protocol?: string;
  bridge?: BridgeTransactionData;
}

export interface BrianResponse {
  solver: string;
  action: 'swap' | 'transfer' | 'deposit' | 'withdraw' | 'bridge';
  type: 'write';
  data: BrianTransactionData;
  extractedParams?: {
    [x: string]: string | undefined;
    action: string;
    token1: string;
    token2: string;
    chain: string;
    amount: string;
    protocol: string;
    address: string;
    destinationChain?: string;
    destinationAddress?: string;
  };
}

export interface ProcessedTransaction {
  success: boolean;
  description: string;
  transactions: TransactionStep[];
  action: string;
  solver: string;
  fromToken?: BrianToken;
  toToken?: BrianToken;
  fromAmount?: string;
  toAmount?: string;
  receiver?: string;
  estimatedGas: string;
  protocol?: string;
  bridge?: BridgeTransactionData;
}

export interface NostraTokenAddresses {
  [key: string]: {
    token: string;
    iToken: string;
  };
}
