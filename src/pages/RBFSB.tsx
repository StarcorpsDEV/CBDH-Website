import RBFSBCard from "@/components/cards/RBFSBCard";
import RBFSB from "@/components/buttons/RBFSBButton";
import Carousel from "@/components/Carousel"

function AppRBFSB() {
  return (
<div className="row">
	<div className="flex flex-col min-h-screen bg-transparent text-slate-100">
		<div className="flex-1 max-w-7xl mx-auto flex items-start justify-center py-8">
			<div className="mx-auto flex items-center flex-col">
			<div className="col s12">
					<div className="text-slate-100 mb-8 text-center font-bold text-3xl">
					<a
						className="text-transparent transition bg-clip-text tw-gradient-blue"
					>
						Refined Blue Fluid Staking Badger ERC-721 NFTs
					</a></div>

				<div className="row">
			<div className="col s12">
			<RBFSBCard content="The Refined Blue Fluid Staking Badger NFT collection grant the right to earn Refined Blue Fluid tokens
					 in the Collectif NFTs Staking Pools. Mint a new collectors NFT and stake it to get the reward of 50% APR.">
				<RBFSB />
			</RBFSBCard>
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

export default AppRBFSB;
