


import { liquidity_pool_interface, DMFMATIC_Sushi, DMFUSDC_Uniswap, BFH_Staking_Pool_URL, BFH_Aragon_DAO_URL } from "@/consts/parameters";

export default function BFH(){
  return (
    <div>
      <a onClick={
      function (){
          $("#BFH").html(`
          <embed src='${BFH_Staking_Pool_URL}' style='width:100% !Important; min-height:700px !Important;'>
          </embed>
          `)
        }
      } 
      style={{padding:"12px", paddingRight:"24px", paddingLeft:"24px", margin:"12px", border: '1px solid #806868', borderRadius: '12px'}}
      className="text-transparent transition bg-clip-text tw-gradient-silver pointer hover">
      NFTs Pool
      </a>
      <a onClick={
         function (){
          $("#BFH").html(`
          <div class='row'>
          <div class='relative items-center p-12'>
          <div class='col s12 m4' style='margin-bottom:60px;'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-silver pointer hover' target='_blank' href='${BFH_Aragon_DAO_URL}'>
          AragonDAO</a>
          </div>
          <div class='col s6 m4' style='margin-bottom:60px;'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-silver pointer hover' target='_blank' href='${liquidity_pool_interface+DMFUSDC_Uniswap}'>
          DMFUSDC</a>
          </div>
          <div class='col s6 m4'>
          <a style='padding:12px; padding-right:24px; padding-left:24px; margin:12px; border:1px solid #806868; border-radius:12px;' 
          class='font-bold text-transparent transition bg-clip-text tw-gradient-silver pointer hover' target='_blank' href='${liquidity_pool_interface+DMFMATIC_Sushi}'>
          DMFMATIC</a>
          </div>
          </div>
          </div>
          `)
        }
      } 
      style={{padding:"12px", paddingRight:"24px", paddingLeft:"24px", margin:"12px", border: '1px solid #806868', borderRadius: '12px'}}
      className="text-transparent transition bg-clip-text tw-gradient-silver pointer hover">
      BFH DAO
      </a>
    </div>
  );
};
