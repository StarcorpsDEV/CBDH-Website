

import { STAKING_URL, RBFSB_tw_embed } from "@/consts/parameters";

export default function RBFSB(){
  return (
    <div>
      <a onClick={
      function (){
            $("#RBFSB").html(RBFSB_tw_embed)
        }
      } 
      style={{padding:"12px", paddingRight:"48px", paddingLeft:"48px", margin:"12px", border: '1px solid #806868', borderRadius: '12px'}}
      className="text-transparent transition bg-clip-text tw-gradient-blue pointer hover">
      Mint
      </a>

      <a onClick={
         function (){
          $("#RBFSB").html(`
            <embed src='${STAKING_URL}/RBFSB/stake' style='width:100% !Important;min-height:700px !Important;'><embed>
            `)
        }
      } 
      style={{padding:"12px", paddingRight:"48px", paddingLeft:"48px", margin:"12px", border: '1px solid #806868', borderRadius: '12px'}}
      className="text-transparent transition bg-clip-text tw-gradient-blue pointer hover">
      Stake 
      </a>
    </div>
  );
};
