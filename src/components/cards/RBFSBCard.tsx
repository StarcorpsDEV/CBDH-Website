import  RBFSBGallery from "@/components/gallery/NFTGalleryRBFSB"
import { STAKING_URL } from "@/consts/parameters";
import { Breadcrumb } from "@/components/nav/Breadcrumb"

export default function RBFSBCard({
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
				<Breadcrumb url={"/RBFSB"} nftName={"Refined Blue Fluid"} nftId={"null"}/>
				<img
					src={"RBFSB_banner_image.webp"}
					alt="CBDH"
					className="mb-12 responsive nftBox"
					style={{width:"100%", border: '1px solid #f4aa11', borderRadius: '12px'}}
				/>
				{children}
				<div className="text-slate-300 font-semibold mt-12">
					{content}
					<div id="RBFSB">				
					<img
					src={"RBFSB_featured_image.webp"}
					alt="CBDH"
					className="pointer nftBox mb-12 mt-12"
					style={{width:"33%", marginLeft:"33%", border: '1px solid #f4aa11', borderRadius: '12px'}}
					onClick={
						function (){
							$("RBFSB").html(`
							<embed src='${STAKING_URL}/RBFSB/mint' style='width:100% !Important; min-height:700px !Important;'>
							</embed>
							`)
						  }
					}
				/></div>
					<RBFSBGallery/>
				</div>
			</div>
			</div>
			<div className="absolute inset-0 z-0 tw-gradient-blue blur-[50px] opacity-50" />
		</div>

	);
}
