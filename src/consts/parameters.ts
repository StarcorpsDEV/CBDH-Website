import { createThirdwebClient, getContract } from "thirdweb";
import { ethereum, polygon } from "thirdweb/chains";

/** Change these values to configure the application for your own use. **/

export const client = createThirdwebClient({
  clientId: import.meta.env.VITE_TEMPLATE_CLIENT_ID,
});

export const DMF_Contract={network:"polygon",address:"0xd5bd4BeEf25b5952a1462e92C73CF8dc5870D683"}
export const RBF_Contract={network:"polygon",address:"0x512037B66BacD1b020AA439e159934095Df8A2C8"}
export const RRF_Contract={network:"polygon",address:"0x7F8A9B97d252E76919eb70fe48cE78835af7a6D9"}
export const RGF_Contract={network:"polygon",address:"0x645Cb7A052b178cbB4eDCF9bc4A28F9Fcc67b5A7"}
export const RPF_Contract={network:"polygon",address:"0x6238F788a7291f5D1b4786F7CE0835468cd84fBa"}
export const SMF_Contract={network:"polygon",address:"0x1fD0E55C66B42be30793Eae30DbCdB8A8184DF42"}

export const DMFSB_ADDRESS = "0xd4bd30B0C6143f352b1a4d138e4ac231e7200BA7"
export const SMFSB_ADDRESS = "0x37B1c0f1648aA496b04657c8cA639e11731D737b"
export const RPFSB_ADDRESS = "0x303060B9ec801D809C660687D1e5BAA540b40B62"
export const RGFSB_ADDRESS = "0x5dF79DD2f30269b1065f8D3497919e1E49702305"
export const RBFSB_ADDRESS = "0x8Dbfce5096567259a8839C80c6ca15e169381560"
export const RRFSB_ADDRESS = "0x852CEbD22E2DedC5844F594D70fd2Bd44704De48"
export const RFGB_ADDRESS = "0x3a5b142bE5C3C8D3651f17Ad3080f572eeDfd491"

export const DMFSBnftContract = getContract({
  address: "0xd4bd30B0C6143f352b1a4d138e4ac231e7200BA7",
  chain: polygon,
  client,
});

export const SMFSBnftContract = getContract({
  address: "0x37B1c0f1648aA496b04657c8cA639e11731D737b",
  chain: polygon,
  client,
});

export const RPFSBnftContract = getContract({
  address: "0x303060B9ec801D809C660687D1e5BAA540b40B62",
  chain: polygon,
  client,
});


export const RGFSBnftContract = getContract({
  address: "0x5dF79DD2f30269b1065f8D3497919e1E49702305",
  chain: polygon,
  client,
});

export const RBFSBnftContract = getContract({
  address: "0x8Dbfce5096567259a8839C80c6ca15e169381560",
  chain: polygon,
  client,
});

export const RRFSBnftContract = getContract({
  address: "0x852CEbD22E2DedC5844F594D70fd2Bd44704De48",
  chain: polygon,
  client,
});

export const RFGBnftContract = getContract({
  address: "0x3a5b142bE5C3C8D3651f17Ad3080f572eeDfd491",
  chain: ethereum,
  client,
});

export const blockExplorer = "https://polygonscan.com";

export const NFT_Drop_URL = "https://drop.badgerscollectif.com"
export const STAKING_URL="https://staking.badgerscollectif.com"
export const MARKETPLACE_URL="https://marketplace.badgerscollectif.com"
export const DEX_URL="https://dex.badgerscollectif.com"

export const BFH_Staking_Pool_URL = "https://badgerscollectif-dmfsb-nft-staking.surge.sh/"
export const BDT_Staking_Pool_URL = "https://badgerscollectif-smfsb-nft-staking.surge.sh/"
export const RRF_Staking_Pool_URL = "https://badgerscollectif-rrfsb-nft-staking.surge.sh/"
export const RGF_Staking_Pool_URL = "https://badgerscollectif-rgfsb-nft-staking.surge.sh/"
export const RBF_Staking_Pool_URL = "https://badgerscollectif-rbfsb-nft-staking.surge.sh/"
export const RPF_Staking_Pool_URL = "https://badgerscollectif-rpfsb-nft-staking.surge.sh/"

export const BPC_SMF_Drop_URL = "https://badgerscollectif-smf-erc-20.surge.sh/"

export const RFGB_tw_embed = `<iframe
    src="${NFT_Drop_URL}?contract=${RFGB_ADDRESS}&chain=ethereum&theme=dark&primaryColor=orange"
    width="100%"
    height="600px"
    style="min-width:100%;"
    frameborder="0"
></iframe>`

export const RRFSB_tw_embed = `<iframe
    src="${NFT_Drop_URL}?contract=${RRFSB_ADDRESS}&chain=polygon&theme=dark&primaryColor=red"
    width="100%"
    height="600px"
    style="min-width:100%;"
    frameborder="0"
></iframe>`


export const RBFSB_tw_embed = `<iframe
    src="${NFT_Drop_URL}?contract=${RBFSB_ADDRESS}&chain=polygon&theme=dark&primaryColor=blue"
    width="100%"
    height="600px"
    style="min-width:100%;"
    frameborder="0"
></iframe>`

export const RGFSB_tw_embed = `<iframe
    src="${NFT_Drop_URL}?contract=${RGFSB_ADDRESS}&chain=polygon&theme=dark&primaryColor=green"
    width="100%"
    height="600px"
    style="min-width:100%;"
    frameborder="0"
></iframe>`


export const RPFSB_tw_embed = `<iframe
    src="${NFT_Drop_URL}?contract=${RPFSB_ADDRESS}&chain=polygon&theme=dark&primaryColor=purple"
    width="100%"
    height="600px"
    style="min-width:100%;"
    frameborder="0"
></iframe>`

export const SMFSB_tw_embed = `<iframe
    src="${NFT_Drop_URL}?contract=${SMFSB_ADDRESS}&chain=polygon&theme=dark&primaryColor=yellow"
    width="100%"
    height="600px"
    style="min-width:100%;"
    frameborder="0"
></iframe>`

export const DMFSB_tw_embed = `<iframe
    src="${NFT_Drop_URL}?contract=${DMFSB_ADDRESS}&chain=polygon&theme=dark&primaryColor=grey"
    width="100%"
    height="600px"
    style="min-width:100%;"
    frameborder="0"
></iframe>`


export const DAO_interface = "https://app.aragon.org/#/daos/polygon/"

export const BPC_Aragon_DAO = "0xf57603ab0c56e44386cb0d7125bbcbfcfd9caff2"
export const BFH_Aragon_DAO = "0xe859c29639a688cd82be694d612f60a3e3c2275e"
export const BDT_Aragon_DAO = "0xe3364fc73c95744b79e87847dc96424d1d481edf"
export const RRF_Aragon_DAO = "0xa9c6b23bf913c625c6c2dc9d6d7d5d80f8f54380"
export const RPF_Aragon_DAO = "0xbf108ce882d73dac78788e4518defd1d70b60ec7"
export const RGF_Aragon_DAO = "0x8958a7ed50392ee75e347a65a924e369bf66e876"
export const RBF_Aragon_DAO = "0x35069486d0f31e7c14b235011c73f4dc1282a9be"

export const liquidity_pool_interface = "https://coinmarketcap.com/dexscan/polygon/"

export const DMFPOL_Sushi = "0xe44daf2772bc1334aa64b150d55c8a3555221cb7"
export const DMFUSDC_Uniswap = "0xe9d83264765d264dfa4732402a053f180763c9a2"

export const DMFRBF_Uniswap = "0xe7f863c23143af80c4d6ff2fc819c1a96a9bdd5b"
export const DMFRRF_Uniswap = "0x9d4c66834e8089e448a2aac58ba62c7dd516a18d"
export const DMFRGF_Uniswap = "0x427e19a08255c9943595ea63cad79cfc3a363b2d"
export const DMFRPF_Uniswap = "0xacdd0fad49cbba08e9f7d337045af0b16c701046"

export const DMFPOL_Sushi_APP = "https://badgerscollectif-dmfPOL-sushi.surge.sh/"
export const DMFUSDC_Uniswap_APP = "https://badgerscollectif-dmfusdc-uniswap.surge.sh/"
export const DMFRBF_Uniswap_APP = "https://badgerscollectif-rbfdmf-uniswap.surge.sh/"
export const DMFRRF_Uniswap_APP = "https://badgerscollectif-rrfdmf-uniswap.surge.sh/"
export const DMFRGF_Uniswap_APP = "https://badgerscollectif-rgfdmf-uniswap.surge.sh/"
export const DMFRPF_Uniswap_APP = "https://badgerscollectif-rpfdmf-uniswap.surge.sh/"