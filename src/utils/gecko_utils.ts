import axios from "axios";

export enum PRICE_TYPE {
  BASE_TOKEN_PRICE_USD = "base_token_price_usd",
  BASE_TOKEN_PRICE_NATIVE_CURRENCY = "base_token_price_native_currency",
  QUOTE_TOKEN_PRICE_USD = "quote_token_price_usd",
  QUOTE_TOKEN_PRICE_NATIVE_CURRENCY = "quote_token_price_native_currency",
  BASE_TOKEN_PRICE_QUOTE_TOKEN = "base_token_price_quote_token",
  QUOTE_TOKEN_PRICE_BASE_TOKEN = "quote_token_price_base_token",
}
// fetch the current price of a token from GeckoTerminal
export const fetchTokenPrice = async (
  _poolAddress: string,
  network: string = "eth",
  priceType: PRICE_TYPE = PRICE_TYPE.BASE_TOKEN_PRICE_USD
): Promise<number> => {
  try {
    // networks where the pool address isn't exclusively checksummed
    const specialNetworks = ["solana", "ton"];
    const poolAddress = specialNetworks.includes(network) ? _poolAddress : _poolAddress.toLowerCase();
    const url = new URL(`https://api.geckoterminal.com/api/v2/networks/${network}/pools/${poolAddress}`);
    const req = await axios.get(url.toString());
    const price = req.data.data.attributes[priceType];
    return price;
  } catch (e) {
    console.log(e);
    return -1;
  }
}

// fetch historical price data for a token from GeckoTerminal
const fetchPriceData = async (
  poolAddress: string,
  network: string = "eth",
  interval: string = "hour",
  aggregate: number = 1,
  limit: number = 1000
): Promise<any[]> => {
  try {
    const url = new URL(`https://api.geckoterminal.com/api/v2/networks/${network}/pools/${poolAddress.toLowerCase()}/ohlcv/${interval}`);
    url.searchParams.append("aggregate", aggregate.toString());
    url.searchParams.append("limit", limit.toString());
    const req = await axios.get(url.toString());
    const priceData = req.data.data.attributes.ohlcv_list;
    return priceData;
  } catch (e) {
    console.log(e);
    return [];
  }
}