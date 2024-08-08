import Carousel from "../components/Carousel"
import Listing  from "../components/Listing";
import { RFGB_tw_embed } from "@/consts/parameters";

function App() {
return(
<div className="row">
<div className="flex flex-col min-h-screen bg-transparent text-slate-100">
<div className="flex-1 max-w-7xl mx-auto flex items-start justify-center py-8">
	<div className="mx-auto flex items-center flex-col">
  <div className="col s12">
		<div className="text-slate-100 mb-8 text-center font-bold text-3xl">
			<a
				className="text-transparent transition bg-clip-text tw-gradient-gold"
			>
			Collectif of the Badgers Diamond Hands
			</a>
      </div>
      </div>
			<div className="col s12">
			<Carousel/>
		</div>
		<div className="col s12">
     		<div className="text-slate-100 mb-8 text-center font-bold text-3xl">
			<a
			className="text-transparent transition bg-clip-text tw-gradient-silver"
			>
			Select an NFT to mint on Polygon and stake it to get Fluids tokens.
			</a>
			</div>
		</div>
    <div className="col s12">
      <Listing/>
		</div>
		<div className="col s12">
     		<div className="text-slate-100 mb-8 text-center font-bold text-3xl" style={{marginTop:"24px"}}>
			<a
			className="text-transparent transition bg-clip-text tw-gradient-bronze"
			>
			<a href = "/RFGB">For O.G. NFTs Collectors, the Genesis Badgers on Ethereum.</a>
			</a>
			</div>
			<div className="relative">
			<div className="z-10 h-full flex flex-col relative items-center rounded-xl bg-black/75 border-slate-800 border-2">
			<div className="flex mt-12 mb-12 flex-wrap items-center justify-center gap-8" style={{padding:"12px"}}>
				<a href="/RFGB">
				<img
				src={"/RFGB_featured_image.webp"}
				alt="CBDH"
				className="pointer nftBox mb-12 mt-12"
				style={{width:"33%", marginLeft:"33%", border: '1px solid #f4aa11', borderRadius: '12px'}}
			/>
			</a>

</div>
</div>
</div>


</div>
</div>
</div>
</div>
</div>
)
}

export default App;
