import RRFSBCard from "@/components/cards/RRFSBCard";
import RRFSB from "@/components/buttons/RRFSBButton";
import Carousel from "@/components/Carousel"

function AppRRFSB() {
  return (
<div className="row">
	<div className="flex flex-col min-h-screen bg-transparent text-slate-100">
		<div className="flex-1 max-w-7xl mx-auto flex items-start justify-center py-8">
			<div className="mx-auto flex items-center flex-col">
				<div className="col s12">
					<div className="text-slate-100 mb-8 text-center font-bold text-3xl">
						<a
							className="text-transparent transition bg-clip-text tw-gradient-red"
						>
							Refined Red Fluid Staking Badger ERC-721 NFTs
						</a></div>
	
					<div className="row">
						<div className="col s12">
						<RRFSBCard content="The Refined Red Fluid Staking Badger NFT collection grant the right to earn Refined Red Fluid tokens
					 in the Collectif NFTs Staking Pools. Mint a new collectors NFT and stake it to get the reward of 50% APR.">
							<RRFSB />
						</RRFSBCard>
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

export default AppRRFSB;
