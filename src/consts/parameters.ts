import { createThirdwebClient, getContract } from "thirdweb";
import { polygon } from "thirdweb/chains";

/** Change these values to configure the application for your own use. **/

export const client = createThirdwebClient({
  clientId: import.meta.env.VITE_TEMPLATE_CLIENT_ID,
});

export const DMFSBnftContract = getContract({
  // Your smart contract address (available on the thirdweb dashboard)
  address: "0xd4bd30B0C6143f352b1a4d138e4ac231e7200BA7",
  // The chain object of the chain your contract is deployed to.
  // If that chain isn't in the default list of our SDK, use `defineChain` - for example: defineChain(666666)
  chain: polygon,
  client,
});

export const SMFSBnftContract = getContract({
  // Your smart contract address (available on the thirdweb dashboard)
  address: "0x37B1c0f1648aA496b04657c8cA639e11731D737b",
  // The chain object of the chain your contract is deployed to.
  // If that chain isn't in the default list of our SDK, use `defineChain` - for example: defineChain(666666)
  chain: polygon,
  client,
});

export const RPFSBnftContract = getContract({
  // Your smart contract address (available on the thirdweb dashboard)
  address: "0x303060B9ec801D809C660687D1e5BAA540b40B62",
  // The chain object of the chain your contract is deployed to.
  // If that chain isn't in the default list of our SDK, use `defineChain` - for example: defineChain(666666)
  chain: polygon,
  client,
});


export const RGFSBnftContract = getContract({
  // Your smart contract address (available on the thirdweb dashboard)
  address: "0x5dF79DD2f30269b1065f8D3497919e1E49702305",
  // The chain object of the chain your contract is deployed to.
  // If that chain isn't in the default list of our SDK, use `defineChain` - for example: defineChain(666666)
  chain: polygon,
  client,
});

export const RBFSBnftContract = getContract({
  // Your smart contract address (available on the thirdweb dashboard)
  address: "0x8Dbfce5096567259a8839C80c6ca15e169381560",
  // The chain object of the chain your contract is deployed to.
  // If that chain isn't in the default list of our SDK, use `defineChain` - for example: defineChain(666666)
  chain: polygon,
  client,
});

export const RRFSBnftContract = getContract({
  // Your smart contract address (available on the thirdweb dashboard)
  address: "0x852CEbD22E2DedC5844F594D70fd2Bd44704De48",
  // The chain object of the chain your contract is deployed to.
  // If that chain isn't in the default list of our SDK, use `defineChain` - for example: defineChain(666666)
  chain: polygon,
  client,
});

export const RFLBanftContract = getContract({
  // Your smart contract address (available on the thirdweb dashboard)
  address: "0xa41573F9A4791be31D538FA5916d1Ee8B849eC52",
  // The chain object of the chain your contract is deployed to.
  // If that chain isn't in the default list of our SDK, use `defineChain` - for example: defineChain(666666)
  chain: polygon,
  client,
});

// The block explorer you want to use (Opens when user clicks on history of events. i.e. transfers)
export const blockExplorer = "https://polygonscan.com";
export const STAKING_URL="https://cbdh-nft-staking-bl1yvcfjq-starcorps-projects.vercel.app"

export const RFLBa_URL="https://refined-fluids-liquid-badgers-a.nfts2.me/"
export const RFLBa_embed_URL="https://0xa41573f9a4791be31d538fa5916d1ee8b849ec52_137.nfts2.me/?widget=classic&hideBanner=true"
export const BFH_Staking_Pool_URL = "https://badgerscollectif-dmfsb-nft-staking.surge.sh/"
export const BDT_Staking_Pool_URL = "https://badgerscollectif-smfsb-nft-staking.surge.sh/"
export const BPC_Staking_Pool_URL = "https://badgerscollectif-rflba-nft-staking.surge.sh/"
export const RRF_Staking_Pool_URL = "https://badgerscollectif-rrfsb-nft-staking.surge.sh/"
export const RGF_Staking_Pool_URL = "https://badgerscollectif-rgfsb-nft-staking.surge.sh/"
export const RBF_Staking_Pool_URL = "https://badgerscollectif-rbfsb-nft-staking.surge.sh/"
export const RPF_Staking_Pool_URL = "https://badgerscollectif-rpfsb-nft-staking.surge.sh/"

export const BPC_Aragon_DAO_URL = "https://app.aragon.org/#/daos/polygon/0xf57603ab0c56e44386cb0d7125bbcbfcfd9caff2/"
export const BFH_Aragon_DAO_URL = "https://app.aragon.org/#/daos/polygon/0xe859c29639a688cd82be694d612f60a3e3c2275e/"
export const BDT_Aragon_DAO_URL = "https://app.aragon.org/#/daos/polygon/0xe3364fc73c95744b79e87847dc96424d1d481edf/"
export const RRF_Aragon_DAO_URL = "https://app.aragon.org/#/daos/polygon/0xa9c6b23bf913c625c6c2dc9d6d7d5d80f8f54380/"
export const RPF_Aragon_DAO_URL = "https://app.aragon.org/#/daos/polygon/0xbf108ce882d73dac78788e4518defd1d70b60ec7/"
export const RGF_Aragon_DAO_URL = "https://app.aragon.org/#/daos/polygon/0x8958a7ed50392ee75e347a65a924e369bf66e876/"
export const RBF_Aragon_DAO_URL = "https://app.aragon.org/#/daos/polygon/0x35069486d0f31e7c14b235011c73f4dc1282a9be/"

export const liquidity_pool_interface = "https://coinmarketcap.com/dexscan/polygon/"

export const DMFMATIC_Sushi = "0xe44daf2772bc1334aa64b150d55c8a3555221cb7"
export const DMFUSDC_Uniswap = "0xe9d83264765d264dfa4732402a053f180763c9a2"

export const RBFDMF_Uniswap = "0xe7f863c23143af80c4d6ff2fc819c1a96a9bdd5b"
export const RRFDMF_Uniswap = "0x9d4c66834e8089e448a2aac58ba62c7dd516a18d"
export const RGFDMF_Uniswap = "0x427e19a08255c9943595ea63cad79cfc3a363b2d"
export const RPFDMF_Uniswap = "0xacdd0fad49cbba08e9f7d337045af0b16c701046"
