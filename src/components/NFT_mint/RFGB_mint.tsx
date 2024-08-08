import { useState } from "react";
import { RFGB_tw_embed } from "@/consts/parameters";

export default function RFGB_mint(){
const [hover, setHover] = useState<boolean>(false);
return(
<div className="relative">
<div className="z-10 h-full flex flex-col relative items-center rounded-xl bg-black/75 border-slate-800 border-2">
<div className="flex mt-12 mb-12 flex-wrap items-center justify-center gap-8" style={{padding:"12px"}}>
<div id="RFGB">				
	<a
	className="nftBox mb-12 mt-12"
	style={{width:"33%", marginLeft:"33%", border: '1px solid #f4aa11', borderRadius: '12px'}}
	onLoad={
		function (){
			$("#RFGB").html(RFGB_tw_embed)
		}
	}
/>
</div>
</div>
</div>
</div>

)

}