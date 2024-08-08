

import { STAKING_URL, RFGB_tw_embed } from "@/consts/parameters";

export default function RFGB(){
  return (
    <div>
      <a onClick={
            function (){
                $("#RFGB").html(RFGB_tw_embed)
              }
          }
      style={{padding:"12px", paddingRight:"48px", paddingLeft:"48px", margin:"12px", border: '1px solid #806868', borderRadius: '12px'}}
      className="text-transparent transition bg-clip-text tw-gradient-silver pointer hover">
      Mint
      </a>

      <a onClick={
         function (){
          $("#RFGB").html(`
          <embed src='${STAKING_URL}/RFGB/stake' style='width:100% !Important;min-height:700px !Important;'><embed>
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
