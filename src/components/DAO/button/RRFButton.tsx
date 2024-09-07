

import { DMFUSDC_Uniswap_APP, DMFPOL_Sushi_APP, DMFRRF_Uniswap_APP, liquidity_pool_interface, DMFUSDC_Uniswap, DMFPOL_Sushi, DMFRRF_Uniswap, RRF_Staking_Pool_URL, DAO_interface, RRF_Aragon_DAO } from "@/consts/parameters";

export default function RRF(){
  return (
    <div>
<a onClick={
         function (){
          $("#RRF").html(`
          <div class='row'>
          <div class='relative items-center p-12'>
          <div class='col s6 m12' style='margin-bottom:60px;'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-red pointer hover'
          id = 'NFTpool'>
          NFT Pool</a>
          </div>
          <div class='col s6 m4' style='margin-bottom:60px;'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-red pointer hover'
          id = 'DMFUSDC_Uni'>
          DMFUSDC</a>
          </div>
          <div class='col s6 m4' style='margin-bottom:60px;'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-red pointer hover'
          id = 'DMFPOL_Sushi'>
          DMFPOL</a>
          </div>
          <div class='col s6 m4'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-red pointer hover'
          id = 'DMFRRF_Uni'>
          DMFRRF</a>
          </div>
          </div>
          </div>
          `)
          $("#NFTpool").on("click", function(){
            $("#RRF").html("<embed src="+RRF_Staking_Pool_URL+" style='width:100% !Important; min-height:700px !Important;'></embed>")
          })
          $("#DMFUSDC_Uni").on("click", function(){
            $("#RRF").html("<embed src="+DMFUSDC_Uniswap_APP+" style='width:100% !Important; min-height:700px !Important;'></embed>")
          })
          $("#DMFPOL_Sushi").on("click", function(){
            $("#RRF").html("<embed src="+DMFPOL_Sushi_APP+" style='width:100% !Important; min-height:700px !Important;'></embed>")
          })
          $("#DMFRRF_Uni").on("click", function(){
            $("#RRF").html("<embed src="+DMFRRF_Uniswap_APP+" style='width:100% !Important; min-height:700px !Important;'></embed>")
          })
       }
      } 
      style={{padding:"12px", paddingRight:"24px", paddingLeft:"24px", margin:"12px", border: '1px solid #806868', borderRadius: '12px'}}
      className="text-transparent transition bg-clip-text tw-gradient-red pointer hover">
      dApp list
      </a>
      <a onClick={
         function (){
          $("#RRF").html(`
          <div class='row'>
          <div class='relative items-center p-12'>
          <div class='col s6 m12' style='margin-bottom:60px;'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-red pointer hover' target='_blank' href='${DAO_interface+RRF_Aragon_DAO}'>
          AragonDAO</a>
          </div>
          <div class='col s6 m4' style='margin-bottom:60px;'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-red pointer hover' target='_blank' href='${liquidity_pool_interface+DMFUSDC_Uniswap}'>
          $DMFUSDC</a>
          </div>
          <div class='col s6 m4' style='margin-bottom:60px;'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-red pointer hover' target='_blank' href='${liquidity_pool_interface+DMFPOL_Sushi}'>
          $DMFPOL</a>
          </div>
          <div class='col s6 m4'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-red pointer hover' target='_blank' href='${liquidity_pool_interface+DMFRRF_Uniswap}'>
          $DMFRRF</a>
          </div>
          </div>
          </div>
            `)
        }
      } 
      style={{padding:"12px", paddingRight:"24px", paddingLeft:"24px", margin:"12px", border: '1px solid #806868', borderRadius: '12px'}}
      className="text-transparent transition bg-clip-text tw-gradient-red pointer hover">
      RRF DAO
      </a>
    </div>
  );
};
