import  RRFSBGallery from "@/components/gallery/NFTGalleryRRFSB"
import { STAKING_URL } from "@/consts/parameters";
import { Breadcrumb } from "@/components/Nav/Breadcrumb"

export default function RRFSBCard({
	children,
	content,
}: {
	children: React.ReactNode;
	content: string;
}) {

	return (
		<div className="relative">
				<div className="z-10 card h-full flex flex-col relative items-center rounded-xl bg-black/75 border-slate-800 border-2">
				<div className="center card-content font-bold text-transparent transition bg-clip-text tw-gradient-silver rounded-xl bg-black/75">
				<Breadcrumb url={"/RRFSB"} nftName={"Refined Red Fluid"} nftId={"null"}/>
				<img
					src={"RRFSB_banner_image.webp"}
					alt="CBDH"
					className="mb-12 responsive nftBox"
					style={{width:"100%", border: '1px solid #f4aa11', borderRadius: '12px'}}
				/>
				{children}
				<div className="text-slate-300 font-semibold mt-12">
					{content}
					<div id="RRFSB">				
					<img
					src={"RRFSB_featured_image.webp"}
					alt="CBDH"
					className="pointer nftBox mb-12 mt-12"
					style={{width:"33%", marginLeft:"33%", border: '1px solid #f4aa11', borderRadius: '12px'}}
					onClick={
						function (){
							$("#RRFSB").html(`
							<embed src='${STAKING_URL}/RRFSB/mint' style='width:100% !Important; min-height:700px !Important;'>
							</embed>
							`)
						  }
					}
				/></div>
					<RRFSBGallery/>
				</div>
			</div>
			</div>
			<div className="absolute inset-0 z-0 tw-gradient-red blur-[50px] opacity-50" />
		</div>

	);
}
