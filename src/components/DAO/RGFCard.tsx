
import { RGF_Staking_Pool_URL } from "@/consts/parameters";
import { Breadcrumb } from "@/components/Nav/Breadcrumb"

export default function RGFCard({
	children,
	content,
}: {
	children: React.ReactNode;
	content: string;
}) {

	return (
		<div className="relative">
		<div className="z-10 card h-full flex flex-col relative items-center rounded-xl bg-black/75 border-slate-800 border-2">
		<div className="center card-content font-bold text-transparent transition bg-clip-text tw-gradient-green rounded-xl bg-black/75">
		<Breadcrumb url={"/DAO/RGF"} nftName={"Refined Green Fluid"} nftId={"null"}/>
			<img
					src={"/sRGF.webp"}
					alt="CBDH"
					className="mb-12 mt-12 responsive nftBox"
					style={{width:"33%", marginLeft:"33%", border: '1px solid #f4aa11', borderRadius: '12px'}}
				/>
				{children}
				<div className="text-slate-300 font-semibold mt-12">
					{content}
					<div id="RGF">				
					<img
					src={"/cbdh_logo.webp"}
					alt="CBDH"
					className="pointer mt-12 nftBox"
					style={{width:"25%", marginLeft:"37.5%", padding:"12px", border: '1px solid #f4aa11', borderRadius: '12px'}}
					onClick={
						function (){
							$("#RGF").html(`
							<embed src='${RGF_Staking_Pool_URL}' style='width:100% !Important; min-height:700px !Important;'>
							</embed>
							`)
						  }
					}
				/></div>
				</div>
			</div>
			</div>
			<div className="absolute inset-0 z-0 tw-gradient-green blur-[50px] opacity-50" />
		</div>

	);
}
