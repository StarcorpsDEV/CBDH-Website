

import { liquidity_pool_interface,DMFUSDC_Uniswap, DMFMATIC_Sushi, RRFDMF_Uniswap, RRF_Staking_Pool_URL, RRF_Aragon_DAO_URL } from "@/consts/parameters";

export default function RRF(){
  return (
    <div>
      <a onClick={
      function (){
          $("#RRF").html(`
          <embed src='${RRF_Staking_Pool_URL}' style='width:100% !Important; min-height:700px !Important;'>
          </embed>
          `)
        }
      } 
      style={{padding:"12px", paddingRight:"24px", paddingLeft:"24px", margin:"12px", border: '1px solid #806868', borderRadius: '12px'}}
      className="text-transparent transition bg-clip-text tw-gradient-red pointer hover">
      NFTs Pool
      </a>
      <a onClick={
         function (){
          $("#RRF").html(`
          <div class='row'>
          <div class='relative items-center p-12'>
          <div class='col s6 m12' style='margin-bottom:60px;'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-red pointer hover' target='_blank' href='${RRF_Aragon_DAO_URL}'>
          AragonDAO</a>
          </div>
          <div class='col s6 m4' style='margin-bottom:60px;'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-red pointer hover' target='_blank' href='${liquidity_pool_interface+DMFUSDC_Uniswap}'>
          DMFUSDC</a>
          </div>
          <div class='col s6 m4' style='margin-bottom:60px;'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-red pointer hover' target='_blank' href='${liquidity_pool_interface+DMFMATIC_Sushi}'>
          DMFMATIC</a>
          </div>
          <div class='col s6 m4'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-red pointer hover' target='_blank' href='${liquidity_pool_interface+RRFDMF_Uniswap}'>
          RRFDMF</a>
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
