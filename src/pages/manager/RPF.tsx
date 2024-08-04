import RPFCard from "@/components/manager/RPFCard";
import RPF from "@/components/manager/button/RPFButton";

function AppRPF() {
return (
<div className="row">
<div className="flex flex-col min-h-screen bg-transparent text-slate-100">
	<div className="flex-1 max-w-7xl mx-auto flex items-start justify-center py-8">
		<div className="mx-auto flex items-center flex-col">
			<div className="col s12">
				<div className="text-slate-100 mb-8 text-center font-bold text-3xl">
					<a
					className="text-transparent transition bg-clip-text tw-gradient-purple"
					>
					Refined Purple Fluid DAO
					</a>
					</div>
					<div className="row">
						<div className="col s12">
					<RPFCard content="Manage the RPFSB NFTs Staking Pools, the RPF token Liquidity Pools, make Proposals and Vote in the RPF DAO">
						<RPF />
					</RPFCard>
					</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
)
  
    
}

export default AppRPF;
