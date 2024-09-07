import GeckoPrice from "@/components/TokensPriceChip"
import { DMFUSDC_Uniswap, DMFPOL_Sushi, DMFRPF_Uniswap, DMFRGF_Uniswap, DMFRBF_Uniswap, DMFRRF_Uniswap } from "@/consts/parameters";

export default function priceTicker(timeout:number){
    GeckoPrice(DMFUSDC_Uniswap,"polygon_pos",["DMFUSDC_UNI_QUOTE_TOKEN_PRICE_BASE_TOKEN", "ticker_DMFUSDC"])
    GeckoPrice(DMFPOL_Sushi,"polygon_pos",["ticker_DMFPOL", "ticker_DMFPOL_Sushi"])
    GeckoPrice(DMFRPF_Uniswap,"polygon_pos",["ticker_DMFRPF_Uni"])
    GeckoPrice(DMFRGF_Uniswap,"polygon_pos",["ticker_DMFRGF_Uni"])
    GeckoPrice(DMFRBF_Uniswap,"polygon_pos",["ticker_DMFRBF_Uni"])
    GeckoPrice(DMFRRF_Uniswap,"polygon_pos",["ticker_DMFRRF_Uni"])
    setTimeout(
      function(){
        priceTicker(timeout)
      },timeout
    ) 
  }