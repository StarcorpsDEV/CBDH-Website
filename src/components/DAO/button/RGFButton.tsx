

import { DMFUSDC_Uniswap_APP, DMFMATIC_Sushi_APP, RGFDMF_Uniswap_APP, liquidity_pool_interface,DMFUSDC_Uniswap, DMFMATIC_Sushi, RGFDMF_Uniswap, RGF_Staking_Pool_URL, DAO_interface, RGF_Aragon_DAO } from "@/consts/parameters";

export default function RGF(){
  return (
    <div>
<a onClick={
         function (){
          $("#RGF").html(`
          <div class='row'>
          <div class='relative items-center p-12'>
          <div class='col s6 m12' style='margin-bottom:60px;'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-green pointer hover'
          id = 'NFTpool'>
          NFT Pool</a>
          </div>
          <div class='col s6 m4' style='margin-bottom:60px;'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-green pointer hover'
          id = 'DMFUSDC_Uni'>
          DMFUSDC</a>
          </div>
          <div class='col s6 m4' style='margin-bottom:60px;'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-green pointer hover'
          id = 'DMFMATIC_Sushi'>
          DMFMATIC</a>
          </div>
          <div class='col s6 m4'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-green pointer hover'
          id = 'RGFDMF_Uni'>
          RGFDMF</a>
          </div>
          </div>
          </div>
          `)
          $("#NFTpool").on("click", function(){
            $("#RGF").html("<embed src="+RGF_Staking_Pool_URL+" style='width:100% !Important; min-height:700px !Important;'></embed>")
          })
          $("#DMFUSDC_Uni").on("click", function(){
            $("#RGF").html("<embed src="+DMFUSDC_Uniswap_APP+" style='width:100% !Important; min-height:700px !Important;'></embed>")
          })
          $("#DMFMATIC_Sushi").on("click", function(){
            $("#RGF").html("<embed src="+DMFMATIC_Sushi_APP+" style='width:100% !Important; min-height:700px !Important;'></embed>")
          })
          $("#RGFDMF_Uni").on("click", function(){
            $("#RGF").html("<embed src="+RGFDMF_Uniswap_APP+" style='width:100% !Important; min-height:700px !Important;'></embed>")
          })
       }
      } 
      style={{padding:"12px", paddingRight:"24px", paddingLeft:"24px", margin:"12px", border: '1px solid #806868', borderRadius: '12px'}}
      className="text-transparent transition bg-clip-text tw-gradient-green pointer hover">
      dApp list
      </a>
      <a onClick={
         function (){
          $("#RGF").html(`
          <div class='row'>
          <div class='relative items-center p-12'>
          <div class='col s6 m12' style='margin-bottom:60px;'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-green pointer hover' target='_blank' href='${DAO_interface+RGF_Aragon_DAO}'>
          AragonDAO</a>
          </div>
          <div class='col s6 m4' style='margin-bottom:60px;'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-green pointer hover' target='_blank' href='${liquidity_pool_interface+DMFUSDC_Uniswap}'>
          $DMFUSDC</a>
          </div>
          <div class='col s6 m4' style='margin-bottom:60px;'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-green pointer hover' target='_blank' href='${liquidity_pool_interface+DMFMATIC_Sushi}'>
          $DMFMATIC</a>
          </div>
          <div class='col s6 m4'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-green pointer hover' target='_blank' href='${liquidity_pool_interface+RGFDMF_Uniswap}'>
          $RGFDMF</a>
          </div>
          </div>
          </div>
          `)
        }
      } 
      style={{padding:"12px", paddingRight:"24px", paddingLeft:"24px", margin:"12px", border: '1px solid #806868', borderRadius: '12px'}}
      className="text-transparent transition bg-clip-text tw-gradient-green pointer hover">
      RGF DAO
      </a>
    </div>
  );
};
