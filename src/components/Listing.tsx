import { client } from "@/consts/parameters";
import { Link } from "react-router-dom";
import { MediaRenderer } from "thirdweb/react";
import { useState } from "react";

export default function Listing(){
const [hover, setHover] = useState<boolean>(false);
return(
<div className="relative">
<div className="z-10 h-full flex flex-col relative items-center rounded-xl bg-black/75 border-slate-800 border-2">
<div className="flex mt-12 mb-12 flex-wrap items-center justify-center gap-8" style={{padding:"12px"}}>

<Link to={`/RGFSB`}>
      <div
        className="z-10 nftBox mx-auto flex h-42 w-42 cursor-pointer flex-col items-center justify-center gap-4 bg-transparent transition-all duration-300 hover:scale-105 md:h-60 md:w-60"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
	      >
        <MediaRenderer client={client} src={"RGFSB_featured_image_small.webp"} />
        {hover && (
          <div className="absolute flex h-42 w-42 flex-col items-center justify-center rounded-lg bg-black/50 backdrop-filter md:h-60 md:w-60">
            <h1 className="text-2xl font-bold text-gray-200">
			{"Refined Green Fluid"}
            </h1>
            <h1 className="text-2xl text-gray-200">
             {"Staking Badger"}
            </h1>
          </div>
        )}
      </div>
    </Link>

<Link to={`/RBFSB`}>
	<div
	className="z-10 nftBox mx-auto flex h-42 w-42 cursor-pointer flex-col items-center justify-center gap-4 bg-transparent transition-all duration-300 hover:scale-105 md:h-60 md:w-60"
	onMouseEnter={() => setHover(true)}
	onMouseLeave={() => setHover(false)}
		>
	<MediaRenderer client={client} src={"RBFSB_featured_image_small.webp"} />
	{hover && (
		<div className="absolute flex h-42 w-42 flex-col items-center justify-center rounded-lg bg-black/50 backdrop-filter md:h-60 md:w-60">
		<h1 className="text-2xl font-bold text-gray-200">
		{"Refined Blue Fluid"}
		</h1>
		<h1 className="text-2xl text-gray-200">
			{"Staking Badger"}
		</h1>
		</div>
	)}
	</div>
</Link>
<Link to={`/RPFSB`}>
      <div
        className="z-10 nftBox mx-auto flex h-42 w-42 cursor-pointer flex-col items-center justify-center gap-4 bg-transparent transition-all duration-300 hover:scale-105 md:h-60 md:w-60"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
	      >
        <MediaRenderer client={client} src={"RPFSB_featured_image_small.webp"} />
        {hover && (
          <div className="absolute flex h-42 w-42 flex-col items-center justify-center rounded-lg bg-black/50 backdrop-filter md:h-60 md:w-60">
            <h1 className="text-2xl font-bold text-gray-200">
			{"Refined Purple Fluid"}
            </h1>
            <h1 className="text-2xl text-gray-200">
             {"Staking Badger"}
            </h1>
          </div>
        )}
      </div>
    </Link>
<Link to={`/RRFSB`}>
      <div
        className="z-10 nftBox mx-auto flex h-42 w-42 cursor-pointer flex-col items-center justify-center gap-4 bg-transparent transition-all duration-300 hover:scale-105 md:h-60 md:w-60"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
	      >
        <MediaRenderer client={client} src={"RRFSB_featured_image_small.webp"} />
        {hover && (
          <div className="absolute flex h-42 w-42 flex-col items-center justify-center rounded-lg bg-black/50 backdrop-filter md:h-60 md:w-60">
            <h1 className="text-2xl font-bold text-gray-200">
			{"Refined Red Fluid"}
            </h1>
            <h1 className="text-2xl text-gray-200">
             {"Staking Badger"}
            </h1>
          </div>
        )}
      </div>
    </Link>


	<Link to={`/DMFSB`}>
      <div
        className="z-10 nftBox mx-auto flex h-42 w-42 cursor-pointer flex-col items-center justify-center gap-4 bg-transparent transition-all duration-300 hover:scale-105 md:h-60 md:w-60"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
	      >
        <MediaRenderer client={client} src={"DMFSB_featured_image_small.webp"} />
        {hover && (
          <div className="absolute flex h-42 w-42 flex-col items-center justify-center rounded-lg bg-black/50 backdrop-filter md:h-60 md:w-60">
            <h1 className="text-2xl font-bold text-gray-200">
			      {"Diamond Fluid"}
            </h1>
            <h1 className="text-2xl text-gray-200">
             {"Staking Badger"}
            </h1>
          </div>
        )}
      </div>
    </Link>
	<Link to={`/SMFSB`}>
      <div
        className="z-10 nftBox mx-auto flex h-42 w-42 cursor-pointer flex-col items-center justify-center gap-4 bg-transparent transition-all duration-300 hover:scale-105 md:h-60 md:w-60"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
	      >
        <MediaRenderer client={client} src={"SMFSB_featured_image_small.webp"} />
        {hover && (
          <div className="absolute flex h-42 w-42 flex-col items-center justify-center rounded-lg bg-black/50 backdrop-filter md:h-60 md:w-60">
            <h1 className="text-2xl font-bold text-gray-200">
			{"Staked Mater Fluid"}
            </h1>
            <h1 className="text-2xl text-gray-200">
             {"Staking Badger"}
            </h1>
          </div>
        )}
      </div>
    </Link>
	</div>
	</div>
	</div>

)

}