
import { BDT_Staking_Pool_URL } from "@/consts/parameters";
import { Breadcrumb } from "@/components/Nav/Breadcrumb"

export default function BDTCard({
	children,
	content,
}: {
	children: React.ReactNode;
	content: string;
}) {

	return (
		<div className="relative">
			<div className="z-10 card h-full flex flex-col relative items-center rounded-xl bg-black/75 border-slate-800 border-2">
			<div className="center card-content font-bold text-transparent transition bg-clip-text tw-gradient-gold rounded-xl bg-black/75">
			<Breadcrumb url={"/DAO/BDT"} nftName={"Badgers Diamond Trust"} nftId={"null"}/>
					<img
					src={"/sBDT.webp"}
					alt="CBDH"
					className="mb-12 mt-12 responsive nftBox"
					style={{width:"33%", marginLeft:"33%", border: '1px solid #f4aa11', borderRadius: '12px'}}
				/>
				{children}
				<div className="text-slate-300 font-semibold mt-12">
					{content}
					<div id="BDT">				
					<img
					src={"/cbdh_logo.webp"}
					alt="CBDH"
					className="pointer nftBox mt-12"
					style={{width:"25%", marginLeft:"37.5%", padding:"12px", border: '1px solid #f4aa11', borderRadius: '12px'}}
					onClick={
						function (){
							$("#BDT").html(`
							<embed src='${BDT_Staking_Pool_URL}' style='width:100% !Important; min-height:700px !Important;'>
							</embed>
							`)
						  }
					}
				/></div>
				</div>
			</div>
			</div>
			<div className="absolute inset-0 z-0 tw-gradient-gold blur-[50px] opacity-50" />
		</div>

	);
}
