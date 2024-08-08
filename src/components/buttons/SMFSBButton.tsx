

import { STAKING_URL, SMFSB_tw_embed } from "@/consts/parameters";

export default function SMFSB(){
  return (
    <div>
      <a onClick={
        function(){
          $("#SMFSB").html(SMFSB_tw_embed)
        }
      } 
      style={{padding:"12px", paddingRight:"48px", paddingLeft:"48px", margin:"12px", border: '1px solid #806868', borderRadius: '12px'}}
      className="text-transparent transition bg-clip-text tw-gradient-gold pointer hover">
      Mint
      </a>

      <a onClick={
         function (){
          $("#SMFSB").html(`<embed src='${STAKING_URL}/SMFSB/stake' style='width:100% !Important;min-height:700px !Important;'><embed>`)
        }
      } 
      style={{padding:"12px", paddingRight:"48px", paddingLeft:"48px", margin:"12px", border: '1px solid #806868', borderRadius: '12px'}}
      className="text-transparent transition bg-clip-text tw-gradient-gold pointer hover">
      Stake 
      </a>
    </div>
  );
};
