

import { DMFUSDC_Uniswap_APP, DMFMATIC_Sushi_APP, liquidity_pool_interface,DMFUSDC_Uniswap, DMFMATIC_Sushi, BPC_SMF_Drop_URL, BPC_Aragon_DAO_URL } from "@/consts/parameters";

export default function BPC(){
  return (
    <div>
      <a onClick={
         function (){
          $("#BPC").html(`
          <div class='row'>
          <div class='relative items-center p-12'>
          <div class='col s12 m4' style='margin-bottom:60px;'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-bronze pointer hover' 
          id = 'SMFDrop'>
          SMF Drop</a>
          </div>
          <div class='col s6 m4' style='margin-bottom:60px;'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-bronze pointer hover'
          id = 'DMFUSDC_Uni'>
          DMFUSDC</a>
          </div>
          <div class='col s6 m4'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-bronze pointer hover'
          id = 'DMFMATIC_Sushi'>
          DMFMATIC</a>
          </div>
          </div>
          </div>
          `)
          $("#SMFDrop").on("click", function(){
            $("#BPC").html("<embed src="+BPC_SMF_Drop_URL+" style='width:100% !Important; min-height:700px !Important;'></embed>")
          })
          $("#DMFUSDC_Uni").on("click", function(){
            $("#BPC").html("<embed src="+DMFUSDC_Uniswap_APP+" style='width:100% !Important; min-height:700px !Important;'></embed>")
          })
          $("#DMFMATIC_Sushi").on("click", function(){
            $("#BPC").html("<embed src="+DMFMATIC_Sushi_APP+" style='width:100% !Important; min-height:700px !Important;'></embed>")
          })
          
        }
      } 
      style={{padding:"12px", paddingRight:"24px", paddingLeft:"24px", margin:"12px", border: '1px solid #806868', borderRadius: '12px'}}
      className="text-transparent transition bg-clip-text tw-gradient-nronze pointer hover">
      dApp list
      </a>

      <a onClick={
         function (){
          $("#BPC").html(`
          <div class='row'>
          <div class='relative items-center p-12'>
          <div class='col s12 m4' style='margin-bottom:60px;'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-bronze pointer hover' target='_blank' href='${BPC_Aragon_DAO_URL}'>
          AragonDAO</a>
          </div>
          <div class='col s6 m4' style='margin-bottom:60px;'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-bronze pointer hover' target='_blank' href='${liquidity_pool_interface+DMFUSDC_Uniswap}'>
          $DMFUSDC</a>
          </div>
          <div class='col s6 m4'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-bronze pointer hover' target='_blank' href='${liquidity_pool_interface+DMFMATIC_Sushi}'>
          $DMFMATIC</a>
          </div>
          </div>
          </div>
          `)
        }
      } 
      style={{padding:"12px", paddingRight:"24px", paddingLeft:"24px", margin:"12px", border: '1px solid #806868', borderRadius: '12px'}}
      className="text-transparent transition bg-clip-text tw-gradient-bronze pointer hover">
      BPC DAO
      </a>
    </div>
  );
};
