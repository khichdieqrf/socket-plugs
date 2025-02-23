import {
  ChainSlug,
  DeploymentMode,
  IntegrationTypes,
} from "@socket.tech/dl-core";
import { Tokens } from "../../../src";
import { ProjectConstants } from "../types";

const pc: ProjectConstants = {
  [DeploymentMode.PROD]: {
    [Tokens.USDC]: {
      isFiatTokenV2_1: true,
      appChain: ChainSlug.LYRA,
      nonAppChains: {
        [ChainSlug.OPTIMISM]: {
          [IntegrationTypes.fast]: {
            depositLimit: "10000000",
            depositRate: "115.74",
            withdrawLimit: "1000000",
            withdrawRate: "11.574",
            poolCount: 1,
          },
        },
        [ChainSlug.ARBITRUM]: {
          [IntegrationTypes.fast]: {
            depositLimit: "10000000",
            depositRate: "115.74",
            withdrawLimit: "1000000",
            withdrawRate: "11.574",
            poolCount: 1,
          },
        },
        [ChainSlug.MAINNET]: {
          [IntegrationTypes.fast]: {
            depositLimit: "10000000",
            depositRate: "115.74",
            withdrawLimit: "1000000",
            withdrawRate: "11.574",
            poolCount: 0,
          },
          [IntegrationTypes.native]: {
            depositLimit: "10000000",
            depositRate: "115.74",
            withdrawLimit: "0",
            withdrawRate: "0",
            poolCount: 0,
          },
        },
      },
    },
    [Tokens.USDCE]: {
      isFiatTokenV2_1: true,
      appChain: ChainSlug.LYRA,
      nonAppChains: {
        [ChainSlug.OPTIMISM]: {
          [IntegrationTypes.fast]: {
            depositLimit: "10000000",
            depositRate: "115.74",
            withdrawLimit: "1000000",
            withdrawRate: "11.574",
            poolCount: 0,
          },
        },
        [ChainSlug.ARBITRUM]: {
          [IntegrationTypes.fast]: {
            depositLimit: "10000000",
            depositRate: "115.74",
            withdrawLimit: "1000000",
            withdrawRate: "11.574",
            poolCount: 0,
          },
        },
      },
    },
    [Tokens.USDT]: {
      appChain: ChainSlug.LYRA,
      nonAppChains: {
        [ChainSlug.OPTIMISM]: {
          [IntegrationTypes.fast]: {
            depositLimit: "10000000",
            depositRate: "115.74",
            withdrawLimit: "1000000",
            withdrawRate: "11.574",
            poolCount: 0,
          },
        },
        [ChainSlug.ARBITRUM]: {
          [IntegrationTypes.fast]: {
            depositLimit: "10000000",
            depositRate: "115.74",
            withdrawLimit: "1000000",
            withdrawRate: "11.574",
            poolCount: 0,
          },
        },
        [ChainSlug.MAINNET]: {
          [IntegrationTypes.fast]: {
            depositLimit: "10000000",
            depositRate: "115.74",
            withdrawLimit: "1000000",
            withdrawRate: "11.574",
            poolCount: 0,
          },
          [IntegrationTypes.native]: {
            depositLimit: "10000000",
            depositRate: "115.74",
            withdrawLimit: "0",
            withdrawRate: "0",
            poolCount: 0,
          },
        },
      },
    },
    [Tokens.WETH]: {
      appChain: ChainSlug.LYRA,
      nonAppChains: {
        [ChainSlug.OPTIMISM]: {
          [IntegrationTypes.fast]: {
            depositLimit: "5000",
            depositRate: "0.05787037",
            withdrawLimit: "500",
            withdrawRate: "0.00578703",
            poolCount: 0,
          },
        },
        [ChainSlug.ARBITRUM]: {
          [IntegrationTypes.fast]: {
            depositLimit: "5000",
            depositRate: "0.05787037",
            withdrawLimit: "500",
            withdrawRate: "0.00578703",
            poolCount: 0,
          },
        },
        [ChainSlug.MAINNET]: {
          [IntegrationTypes.fast]: {
            depositLimit: "5000",
            depositRate: "0.05787037",
            withdrawLimit: "500",
            withdrawRate: "0.00578703",
            poolCount: 0,
          },
          [IntegrationTypes.native]: {
            depositLimit: "5000",
            depositRate: "0.05787037",
            withdrawLimit: "0",
            withdrawRate: "0",
            poolCount: 0,
          },
        },
      },
    },
    [Tokens.WBTC]: {
      appChain: ChainSlug.LYRA,
      nonAppChains: {
        [ChainSlug.OPTIMISM]: {
          [IntegrationTypes.fast]: {
            depositLimit: "250",
            depositRate: "0.00289351",
            withdrawLimit: "25",
            withdrawRate: "0.00028935",
            poolCount: 0,
          },
        },
        [ChainSlug.ARBITRUM]: {
          [IntegrationTypes.fast]: {
            depositLimit: "250",
            depositRate: "0.00289351",
            withdrawLimit: "25",
            withdrawRate: "0.00028935",
            poolCount: 0,
          },
        },
        [ChainSlug.MAINNET]: {
          [IntegrationTypes.fast]: {
            depositLimit: "250",
            depositRate: "0.00289351",
            withdrawLimit: "25",
            withdrawRate: "0.00028935",
            poolCount: 0,
          },
          [IntegrationTypes.native]: {
            depositLimit: "250",
            depositRate: "0.00289351",
            withdrawLimit: "0",
            withdrawRate: "0",
            poolCount: 0,
          },
        },
      },
    },
  },
};

export = pc;
