import RRFCard from "@/components/DAO/RRFCard";
import RRF from "@/components/DAO/button/RRFButton";

function AppRRF() {
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
					Refined Red Fluid DAO
					</a>
					</div>
					<div className="row">
						<div className="col s12">
					<RRFCard content="Manage the RRFSB NFTs Staking Pools, the RRF token Liquidity Pools, make Proposals and Vote in the RRF DAO">
						<RRF />
					</RRFCard>
					</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
)
  
    
}

export default AppRRF;
