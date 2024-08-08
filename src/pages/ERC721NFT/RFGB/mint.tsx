import RFGBCard from "@/components/cards/RFGBCard";
import RFGB from "@/components/buttons/RFGBButton";
import Carousel from "@/components/Carousel"

function AppRFGB() {
  return (
<div className="row">
	<div className="flex flex-col min-h-screen bg-transparent text-slate-100">
		<div className="flex-1 max-w-7xl mx-auto flex items-start justify-center py-8">
			<div className="mx-auto flex items-center flex-col">
			<div className="col s12">
					<div className="text-slate-100 mb-8 text-center font-bold text-3xl">
					<a
						className="text-transparent transition bg-clip-text tw-gradient-bronze"
					>
						Refined Fluids Genesis Badgers ERC-721 NFTs
					</a></div>

				<div className="row">
			<div className="col s12">
			<RFGBCard content="The Refined Fluids Genesis Badgers NFT collection grant the right to earn Fluid tokens. Mint a new collectors NFT.">
				<RFGB />
			</RFGBCard>
			<Carousel/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
)
}

export default AppRFGB;
