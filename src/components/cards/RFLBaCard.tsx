import  RFLBaGallery from "@/components/gallery/NFTGalleryRFLBa"
import { STAKING_URL } from "@/consts/parameters";
import { Breadcrumb } from "@/components/nav/Breadcrumb"

export default function RFLBaCard({
	children,
	content,
}: {
	children: React.ReactNode;
	content: string;
}) {

	return (
		<div className="relative">
			<div className="z-10 card h-full flex flex-col relative items-center rounded-xl bg-black/75 border-slate-800 border-2">
			<div className="center card-content font-bold text-transparent transition bg-clip-text tw-gradient-bronze rounded-xl bg-black/75">
			<Breadcrumb url={"/RFLBa"} nftName={"Refined Fluids Liquid Badgers α"} nftId={"1239"}/>
				<img
					src={"https://bafybeiay4hmhtxoie47v4xxjk4z6gnfov4qwebuztkr64jihlip3ww7al4.ipfs.nftstorage.link/banner.webp"}
					alt="CBDH"
					className="mb-12 responsive nftBox"
					style={{width:"100%", border: '1px solid #f4aa11', borderRadius: '12px'}}
				/>
				{children}
				<div className="text-slate-300 font-semibold mt-12">
					{content}
					<div id="RFLBa">				
					<img
					src={"https://nftstorage.link/ipfs/bafybeiay4hmhtxoie47v4xxjk4z6gnfov4qwebuztkr64jihlip3ww7al4/logo.gif"}
					alt="CBDH"
					className="pointer nftBox mb-12 mt-12"
					style={{width:"33%", marginLeft:"33%", border: '1px solid #f4aa11', borderRadius: '12px'}}
					onClick={
						function (){
							$("RFLBa").html(`
							<embed src='${STAKING_URL}/RFLBa/mint' style='width:100% !Important; min-height:700px !Important;'>
							</embed>
							`)
						  }
					}
				/></div>
					<RFLBaGallery/>
				</div>
			</div>
			</div>
			<div className="absolute inset-0 z-0 tw-gradient-bronze blur-[50px] opacity-50" />
		</div>

	);
}
