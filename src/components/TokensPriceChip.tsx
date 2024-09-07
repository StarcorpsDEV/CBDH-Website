import {  PRICE_TYPE, fetchTokenPrice } from "../utils/gecko_utils"

export default function GeckoPrice(pool:string,network:string,el:any){
    fetchTokenPrice(
    pool,
    network,
PRICE_TYPE.QUOTE_TOKEN_PRICE_BASE_TOKEN ).then(
    (req) => {
        for (var i in el) {
            $(`#${el[i]}`).html(`
                ${Math.round(req*1000)/1000}
            `)
        }

    }
)
}