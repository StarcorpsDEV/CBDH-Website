import { client } from "@/consts/parameters";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { NFT } from "thirdweb";
import { MediaRenderer } from "thirdweb/react";

interface INFTCardProps {
  nft: NFT;
  nftName:string
}

export const NFTCard: FC<INFTCardProps> = ({ nft, nftName }) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <Link to={`/${nftName}/${nft.id.toString()}`}>
      <div
        className="z-10 nftBox mx-auto flex h-42 w-42 cursor-pointer flex-col items-center justify-center gap-4 bg-transparent transition-all duration-300 hover:scale-105 md:h-60 md:w-60"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={
          function (){
            window.scrollTo(0, 0);
          }
       } 
      >
        <MediaRenderer client={client} src={nft.metadata.image} />

        {hover && (
          <div className="absolute flex h-42 w-42 flex-col items-center justify-center rounded-lg bg-black/50 backdrop-filter md:h-60 md:w-60">
            <h1 className="text-2xl text-gray-200 font-bold">
              {nft.metadata.attributes ? String(Object(nft.metadata.attributes[6]).value) : String("#"+nft.id)}
            </h1>
            <h1 className="text-2xl text-gray-200">
              {nft.metadata.attributes ? "-" : "NFT not minted"}
            </h1>
            <h1 className="text-2xl text-gray-200">
            {nft.metadata.attributes ? String(Object(nft.metadata.attributes[0]).value) : ""}
            </h1>
            <h1 className="text-2xl text-gray-200">
            {nft.metadata.attributes  ? String(Object(nft.metadata.attributes[7]).value) : ""}
            </h1>
          </div>
        )}
      </div>
    </Link>
  );
};