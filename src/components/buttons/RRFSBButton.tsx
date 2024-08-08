

import { STAKING_URL, RRFSB_tw_embed } from "@/consts/parameters";

export default function RRFSB(){
  return (
    <div>
      <a onClick={
        function(){
          $("#RRFSB").html(RRFSB_tw_embed)
        }
      } 
      style={{padding:"12px", paddingRight:"48px", paddingLeft:"48px", margin:"12px", border: '1px solid #806868', borderRadius: '12px'}}
      className="text-transparent transition bg-clip-text tw-gradient-red pointer hover">
      Mint
      </a>

      <a onClick={
         function (){
          $("#RRFSB").html(`<embed src='${STAKING_URL}/RRFSB/stake' style='width:100% !Important;min-height:700px !Important;'><embed>`)
        }
      } 
      style={{padding:"12px", paddingRight:"48px", paddingLeft:"48px", margin:"12px", border: '1px solid #806868', borderRadius: '12px'}}
      className="text-transparent transition bg-clip-text tw-gradient-red pointer hover">
      Stake 
      </a>
    </div>
  );
};
