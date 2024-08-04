import RGFCard from "@/components/manager/RGFCard";
import RGF from "@/components/manager/button/RGFButton";

function AppRGF() {
return (
<div className="row">
<div className="flex flex-col min-h-screen bg-transparent text-slate-100">
	<div className="flex-1 max-w-7xl mx-auto flex items-start justify-center py-8">
		<div className="mx-auto flex items-center flex-col">
			<div className="col s12">
				<div className="text-slate-100 mb-8 text-center font-bold text-3xl">
					<a
					className="text-transparent transition bg-clip-text tw-gradient-green"
					>
					Refined Green Fluid DAO
					</a>
					</div>
					<div className="row">
						<div className="col s12">
					<RGFCard content="Manage the RGFSB NFTs Staking Pools, the RGF token Liquidity Pools, make Proposals and Vote in the RGF DAO">
						<RGF />
					</RGFCard>
					</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
)
  
    
}

export default AppRGF;
