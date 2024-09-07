import GeckoPrice from "@/components/TokensPriceChip"
import { DMFUSDC_Uniswap, DMFPOL_Sushi, RPFDMF_Uniswap, RGFDMF_Uniswap, RBFDMF_Uniswap, RRFDMF_Uniswap } from "@/consts/parameters";

export default function priceTicker(timeout:number){
    GeckoPrice(DMFUSDC_Uniswap,"polygon_pos",["DMFUSDC_UNI_QUOTE_TOKEN_PRICE_BASE_TOKEN", "ticker_DMFUSDC"])
    GeckoPrice(DMFPOL_Sushi,"polygon_pos",["ticker_DMFPOL", "ticker_DMFPOL_Sushi"])
    GeckoPrice(RPFDMF_Uniswap,"polygon_pos",["ticker_RPFDMF"])
    GeckoPrice(RGFDMF_Uniswap,"polygon_pos",["ticker_RGFDMF"])
    GeckoPrice(RBFDMF_Uniswap,"polygon_pos",["ticker_RBFDMF"])
    GeckoPrice(RRFDMF_Uniswap,"polygon_pos",["ticker_RRFDMF"])
    setTimeout(
      function(){
        priceTicker(timeout)
      },timeout
    ) 
  }