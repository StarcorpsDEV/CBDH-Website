import BPCCard from "@/components/DAO/BPCCard";
import BPC from "@/components/DAO/button/BPCButton";

function AppBPC() {
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
					Badgers Presidency Council DAO
					</a>
					</div>
					<div className="row">
						<div className="col s12">
					<BPCCard content="Manage the DMFSB NFTs Staking Pools, the DMF token Liquidity Pools, make Proposals and Vote in the BPC DAO">
						<BPC />
					</BPCCard>
					</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
)
  
    
}

export default AppBPC;
