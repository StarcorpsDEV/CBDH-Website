

import { STAKING_URL, DMFSB_tw_embed } from "@/consts/parameters";

export default function DMFSB(){
  return (
    <div>
      <a onClick={
        function(){
          $("#DMFSB").html(DMFSB_tw_embed)
        }
      } 
      style={{padding:"12px", paddingRight:"48px", paddingLeft:"48px", margin:"12px", border: '1px solid #806868', borderRadius: '12px'}}
      className="text-transparent transition bg-clip-text tw-gradient-silver pointer hover">
      Mint
      </a>

      <a onClick={
         function (){
          $("#DMFSB").html(`
          <embed src='${STAKING_URL}/DMFSB/stake' style='width:100% !Important;min-height:700px !Important;'><embed>
          `)
        }
      } 
      style={{padding:"12px", paddingRight:"48px", paddingLeft:"48px", margin:"12px", border: '1px solid #806868', borderRadius: '12px'}}
      className="text-transparent transition bg-clip-text tw-gradient-silver pointer hover">
      Stake 
      </a>
    </div>
  );
};
