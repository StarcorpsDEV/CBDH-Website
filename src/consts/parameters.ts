import { createThirdwebClient, getContract } from "thirdweb";
import { ethereum, polygon } from "thirdweb/chains";

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

export const RFGBnftContract = getContract({
  // Your smart contract address (available on the thirdweb dashboard)
  address: "0x3a5b142bE5C3C8D3651f17Ad3080f572eeDfd491",
  // The chain object of the chain your contract is deployed to.
  // If that chain isn't in the default list of our SDK, use `defineChain` - for example: defineChain(666666)
  chain: ethereum,
  client,
});



// The block explorer you want to use (Opens when user clicks on history of events. i.e. transfers)
export const blockExplorer = "https://polygonscan.com";

export const STAKING_URL="https://staking.badgerscollectif.com"

export const BFH_Staking_Pool_URL = "https://badgerscollectif-dmfsb-nft-staking.surge.sh/"
export const BDT_Staking_Pool_URL = "https://badgerscollectif-smfsb-nft-staking.surge.sh/"
export const RRF_Staking_Pool_URL = "https://badgerscollectif-rrfsb-nft-staking.surge.sh/"
export const RGF_Staking_Pool_URL = "https://badgerscollectif-rgfsb-nft-staking.surge.sh/"
export const RBF_Staking_Pool_URL = "https://badgerscollectif-rbfsb-nft-staking.surge.sh/"
export const RPF_Staking_Pool_URL = "https://badgerscollectif-rpfsb-nft-staking.surge.sh/"

export const BPC_SMF_Drop_URL = "https://badgerscollectif-smf-erc-20.surge.sh/"

export const RFGB_tw_embed = `<iframe
    src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0x3a5b142bE5C3C8D3651f17Ad3080f572eeDfd491&chain=%7B%22name%22%3A%22Ethereum+Mainnet%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F1.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22eth%22%2C%22chainId%22%3A1%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22ethereum%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmdwQDr6vmBtXmK2TmknkEuZNoaDqTasFdZdu3DRw8b2wt%22%2C%22width%22%3A1000%2C%22height%22%3A1628%2C%22format%22%3A%22png%22%7D%7D&clientId=20a005c403f089b6b726937429862c33&theme=dark&primaryColor=orange"
    width="100%"
    height="600px"
    style="min-width:100%;"
    frameborder="0"
></iframe>`

export const RRFSB_tw_embed = `<iframe
    src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0x852CEbD22E2DedC5844F594D70fd2Bd44704De48&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F137.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%3A137%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22polygon%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmRNqgazYuxUa5WdddFPftTWiP3KwzBMgV9Z19QWnLMETc%22%2C%22width%22%3A2000%2C%22height%22%3A2000%2C%22format%22%3A%22png%22%7D%7D&clientId=20a005c403f089b6b726937429862c33&theme=dark&primaryColor=red"
    width="100%"
    height="600px"
    style="min-width:100%;"
    frameborder="0"
></iframe>`


export const RBFSB_tw_embed = `<iframe
    src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0x8Dbfce5096567259a8839C80c6ca15e169381560&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F137.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%3A137%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22polygon%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmRNqgazYuxUa5WdddFPftTWiP3KwzBMgV9Z19QWnLMETc%22%2C%22width%22%3A2000%2C%22height%22%3A2000%2C%22format%22%3A%22png%22%7D%7D&clientId=20a005c403f089b6b726937429862c33&theme=dark&primaryColor=blue"
    width="100%"
    height="600px"
    style="min-width:100%;"
    frameborder="0"
></iframe>`

export const RGFSB_tw_embed = `<iframe
    src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0x5dF79DD2f30269b1065f8D3497919e1E49702305&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F137.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%3A137%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22polygon%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmRNqgazYuxUa5WdddFPftTWiP3KwzBMgV9Z19QWnLMETc%22%2C%22width%22%3A2000%2C%22height%22%3A2000%2C%22format%22%3A%22png%22%7D%7D&clientId=20a005c403f089b6b726937429862c33&theme=dark&primaryColor=green"
    width="100%"
    height="600px"
    style="min-width:100%;"
    frameborder="0"
></iframe>`


export const RPFSB_tw_embed = `<iframe
    src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0x303060B9ec801D809C660687D1e5BAA540b40B62&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F137.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%3A137%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22polygon%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmRNqgazYuxUa5WdddFPftTWiP3KwzBMgV9Z19QWnLMETc%22%2C%22width%22%3A2000%2C%22height%22%3A2000%2C%22format%22%3A%22png%22%7D%7D&clientId=20a005c403f089b6b726937429862c33&theme=dark&primaryColor=purple"
    width="100%"
    height="600px"
    style="min-width:100%;"
    frameborder="0"
></iframe>`



export const SMFSB_tw_embed = `<iframe
    src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0x37B1c0f1648aA496b04657c8cA639e11731D737b&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F137.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%3A137%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22polygon%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmRNqgazYuxUa5WdddFPftTWiP3KwzBMgV9Z19QWnLMETc%22%2C%22width%22%3A2000%2C%22height%22%3A2000%2C%22format%22%3A%22png%22%7D%7D&clientId=20a005c403f089b6b726937429862c33&theme=dark&primaryColor=yellow"
    width="100%"
    height="600px"
    style="min-width:100%;"
    frameborder="0"
></iframe>`

export const DMFSB_tw_embed = `<iframe
    src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0xd4bd30B0C6143f352b1a4d138e4ac231e7200BA7&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F137.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%3A137%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22polygon%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmRNqgazYuxUa5WdddFPftTWiP3KwzBMgV9Z19QWnLMETc%22%2C%22width%22%3A2000%2C%22height%22%3A2000%2C%22format%22%3A%22png%22%7D%7D&clientId=20a005c403f089b6b726937429862c33&theme=dark&primaryColor=teal"
    width="100%"
    height="600px"
    style="min-width:100%;"
    frameborder="0"
></iframe>`


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

export const DMFMATIC_Sushi_APP = "https://badgerscollectif-dmfmatic-sushi.surge.sh/"
export const DMFUSDC_Uniswap_APP = "https://badgerscollectif-dmfusdc-uniswap.surge.sh/"
export const RBFDMF_Uniswap_APP = "https://badgerscollectif-rbfdmf-uniswap.surge.sh/"
export const RRFDMF_Uniswap_APP = "https://badgerscollectif-rrfdmf-uniswap.surge.sh/"
export const RGFDMF_Uniswap_APP = "https://badgerscollectif-rgfdmf-uniswap.surge.sh/"
export const RPFDMF_Uniswap_APP = "https://badgerscollectif-rpfdmf-uniswap.surge.sh/"