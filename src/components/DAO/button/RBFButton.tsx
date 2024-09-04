

import { DMFUSDC_Uniswap_APP, DMFMATIC_Sushi_APP, RBFDMF_Uniswap_APP, liquidity_pool_interface,DMFUSDC_Uniswap, DMFMATIC_Sushi, RBFDMF_Uniswap, RBF_Staking_Pool_URL, DAO_interface, RBF_Aragon_DAO } from "@/consts/parameters";

export default function RBF(){
  return (
    <div>
<a onClick={
         function (){
          $("#RBF").html(`
          <div class='row'>
          <div class='relative items-center p-12'>
          <div class='col s6 m12' style='margin-bottom:60px;'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-blue pointer hover'
          id = 'NFTpool'>
          NFT Pool</a>
          </div>
          <div class='col s6 m4' style='margin-bottom:60px;'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-blue pointer hover'
          id = 'DMFUSDC_Uni'>
          DMFUSDC</a>
          </div>
          <div class='col s6 m4' style='margin-bottom:60px;'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-blue pointer hover'
          id = 'DMFMATIC_Sushi'>
          DMFMATIC</a>
          </div>
          <div class='col s6 m4'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-blue pointer hover'
          id = 'RBFDMF_Uni'>
          RBFDMF</a>
          </div>
          </div>
          </div>
          `)
          $("#NFTpool").on("click", function(){
            $("#RBF").html("<embed src="+RBF_Staking_Pool_URL+" style='width:100% !Important; min-height:700px !Important;'></embed>")
          })
          $("#DMFUSDC_Uni").on("click", function(){
            $("#RBF").html("<embed src="+DMFUSDC_Uniswap_APP+" style='width:100% !Important; min-height:700px !Important;'></embed>")
          })
          $("#DMFMATIC_Sushi").on("click", function(){
            $("#RBF").html("<embed src="+DMFMATIC_Sushi_APP+" style='width:100% !Important; min-height:700px !Important;'></embed>")
          })
          $("#RBFDMF_Uni").on("click", function(){
            $("#RBF").html("<embed src="+RBFDMF_Uniswap_APP+" style='width:100% !Important; min-height:700px !Important;'></embed>")
          })
       }
      } 
      style={{padding:"12px", paddingRight:"24px", paddingLeft:"24px", margin:"12px", border: '1px solid #806868', borderRadius: '12px'}}
      className="text-transparent transition bg-clip-text tw-gradient-blue pointer hover">
      dApp list
      </a>
      <a onClick={
         function (){
          $("#RBF").html(`
          <div class='row'>
          <div class='relative items-center p-12'>
          <div class='col s6 m12' style='margin-bottom:60px;'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-blue pointer hover' target='_blank' href='${DAO_interface+RBF_Aragon_DAO}'>
          AragonDAO</a>
          </div>
          <div class='col s6 m4' style='margin-bottom:60px;'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-blue pointer hover' target='_blank' href='${liquidity_pool_interface+DMFUSDC_Uniswap}'>
          $DMFUSDC</a>
          </div>
          <div class='col s6 m4' style='margin-bottom:60px;'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-blue pointer hover' target='_blank' href='${liquidity_pool_interface+DMFMATIC_Sushi}'>
          $DMFMATIC</a>
          </div>
          <div class='col s6 m4'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-blue pointer hover' target='_blank' href='${liquidity_pool_interface+RBFDMF_Uniswap}'>
          $RBFDMF</a>
          </div>
          </div>
          </div>
          `)
        }
      } 
      style={{padding:"12px", paddingRight:"24px", paddingLeft:"24px", margin:"12px", border: '1px solid #806868', borderRadius: '12px'}}
      className="text-transparent transition bg-clip-text tw-gradient-blue pointer hover">
      RBF DAO
      </a>
    </div>
  );
};
