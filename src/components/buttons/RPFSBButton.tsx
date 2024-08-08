

import { STAKING_URL, RPFSB_tw_embed } from "@/consts/parameters";

export default function RPFSB(){
  return (
    <div>
      <a onClick={
        function(){
          $("#RPFSB").html(RPFSB_tw_embed)
        }
      } 
      style={{padding:"12px", paddingRight:"48px", paddingLeft:"48px", margin:"12px", border: '1px solid #806868', borderRadius: '12px'}}
      className="text-transparent transition bg-clip-text tw-gradient-purple pointer hover">
      Mint
      </a>

      <a onClick={
         function (){
          $("#RPFSB").html(`
          <embed src='${STAKING_URL}/RPFSB/stake' style='width:100% !Important;min-height:700px !Important;'><embed>
          `)
        }
      } 
      style={{padding:"12px", paddingRight:"48px", paddingLeft:"48px", margin:"12px", border: '1px solid #806868', borderRadius: '12px'}}
      className="text-transparent transition bg-clip-text tw-gradient-purple pointer hover">
      Stake 
      </a>
    </div>
  );
};
