import type { FC } from "react";

interface NFTname {
  nftName: string
  url: string,
  nftId: string
}

export const Breadcrumb: FC<NFTname> = ({
  nftName,
  url,
  nftId
}) => {
return(
<nav className="bg-transparent rounded-xl">
    <div className="nav-wrappe left">
      <div className="col s12 font-bold">
      <a href="/" className="breadcrumb">Collectif</a>
      <a href={url} className="breadcrumb">{nftName}</a>
      {nftId != "null" ?       
      <a href={url+"/"+nftId} className="breadcrumb">{"#"+nftId}</a>
      : null}
      </div>
    </div>
  </nav>
  )
}