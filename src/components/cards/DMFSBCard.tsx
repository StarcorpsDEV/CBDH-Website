import  DMFSBGallery from "@/components/gallery/NFTGalleryDMFSB"
import { DMFSB_tw_embed } from "@/consts/parameters";
import { Breadcrumb } from "@/components/Nav/Breadcrumb"
export default function DMFSBCard({
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
			<Breadcrumb url={"/DMFSB"} nftName={"Diamond Badger"} nftId={"null"}/>
				<img
					src={"/DMFSB_banner_image.webp"}
					alt="CBDH"
					className="mb-12 responsive nftBox"
					style={{width:"100%", border: '1px solid #f4aa11', borderRadius: '12px'}}
				/>
				{children}
				<div className="text-slate-300 font-semibold mt-12">
					{content}
					<div id="DMFSB">				
					<img
					src={"/DMFSB_featured_image.webp"}
					alt="CBDH"
					className="pointer nftBox mb-12 mt-12"
					style={{width:"33%", marginLeft:"33%", border: '1px solid #f4aa11', borderRadius: '12px'}}
					onClick={
					function (){
						$("#DMFSB").html(DMFSB_tw_embed)
						}
					}
				/></div>
					<DMFSBGallery/>
				</div>
			</div>
			</div>
			<div className="absolute inset-0 z-0 tw-gradient-silver blur-[50px] opacity-50" />
		</div>

	);
}
