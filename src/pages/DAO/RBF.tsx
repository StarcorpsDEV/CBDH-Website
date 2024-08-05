import RBFCard from "@/components/DAO/RBFCard";
import RBF from "@/components/DAO/button/RBFButton";

function AppRBF() {
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
					Refined Blue Fluid DAO
					</a>
					</div>
					<div className="row">
						<div className="col s12">
					<RBFCard content="Manage the RBFSB NFTs Staking Pools, the RBF token Liquidity Pools, make Proposals and Vote in the RBF DAO">
						<RBF />
					</RBFCard>
					</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
)
  
    
}

export default AppRBF;
