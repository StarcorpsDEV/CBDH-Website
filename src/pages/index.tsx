import Carousel from "../components/Carousel"
import Listing  from "../components/Listing";

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
			Select an NFT to mint on Polygon and stake it to get Fluids tokens
			</a></div>
		</div>
    <div className="col s12">
      <Listing/>
		</div>
		</div>
	</div>
	</div>
</div>
)
}

export default App;
