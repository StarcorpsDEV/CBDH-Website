import { Footer } from "@/components/nav/Footer";
import useDebounce from "@/hooks/useDebounce";
import { SearchIcon } from "@/icons/SearchIcon";
import { useEffect, useState } from "react";
import { NFT } from "thirdweb";
import { getContractMetadata } from "thirdweb/extensions/common";
import { getNFT, getNFTs, totalSupply } from "thirdweb/extensions/erc721";
import { useReadContract } from "thirdweb/react";

import { RBFSBnftContract } from "@/consts/parameters";
import { NFTCard } from "@/components/NFTCard";


export default function RBFSBGallery() {
const nftsPerPage = 20;
const [page, setPage] = useState(1);
const [search, setSearch] = useState<string>("");
const debouncedSearchTerm = useDebounce(search, 500);
const { data: nfts, isLoading } = useReadContract(getNFTs, {
contract: RBFSBnftContract,
count: nftsPerPage,
start: (page - 1) * nftsPerPage,
});
const { data: totalCount } = useReadContract(totalSupply, {
contract: RBFSBnftContract,
});
const { data: contractMetadata, isLoading: contractLoading } =
useReadContract(getContractMetadata, {
    contract: RBFSBnftContract,
});
const [nft, setNft] = useState<NFT | null>(null);
const [isSearching, setIsSearching] = useState(false);

const fetchNFT = async () => {
const nft = await getNFT({
    contract: RBFSBnftContract,
    tokenId: BigInt(debouncedSearchTerm),
});
setNft(nft!);
setIsSearching(false);
};

useEffect(() => {
if (debouncedSearchTerm) {
    setIsSearching(true);
    fetchNFT();
} else {
    setNft(null);
}
}, [debouncedSearchTerm]);

return (
<div className="m-0 p-0 font-inter text-neutral-200">
<div className="z-20 mx-auto flex min-h-screen w-full flex-col px-4">
{contractMetadata ? (
<div className="mb-8 text-center">
<h1 className="text-4xl font-bold text-white">
{contractMetadata.name}
</h1>
<h2 className="text-xl font-bold text-white">
{String(contractMetadata.description).split("- Badgers Fluids Holding DAO:")[0]}
</h2>
</div>
) : contractLoading ? (
<div className="mx-auto mb-8 text-center">
<div className="mx-auto h-8 w-96 animate-pulse rounded-lg bg-gray-800" />
<div className="mx-auto mt-4 h-8 w-96 animate-pulse rounded-lg bg-gray-800" />
</div>
) : null}

<div className="mx-auto mb-8 flex h-12 w-96 max-w-full items-center rounded-lg border border-white/10 bg-white/5 px-4 text-xl text-white">
<SearchIcon />
<input
type="number"
onChange={(e) => {
if (
e.target.value.match(/^[0-9]*$/) &&
Number(e.target.value) > 0
) {
setSearch(e.target.value);
} else {
setSearch("");
}
}}
placeholder="Search by Token ID"
className="w-full bg-transparent px-4 text-white focus:outline-none"
/>
</div>

{isSearching ? (
<div className="mx-auto !h-60 !w-60 animate-pulse rounded-lg bg-gray-800" />
) : null}

{search && nft && !isSearching ? (
<NFTCard nft={nft} nftName = {"RBFSB"} key={nft.id.toString()} />
) : null}

{isLoading && (
<div className="mx-auto flex flex-wrap items-center justify-center gap-8">
{Array.from({ length: nftsPerPage }).map((_, i) => (
<div
className="!h-60 !w-60 animate-pulse rounded-lg bg-gray-800"
key={i}
/>
))}
</div>
)}

{nfts && !search && (
<div className="flex flex-wrap items-center justify-center gap-8">
{nfts.map((nft) => (
<NFTCard nft={nft} nftName = {"RBFSB"} key={nft.id.toString()} />
))}
</div>
)}

{!search && (
<Footer
page={page}
setPage={setPage}
nftsPerPage={nftsPerPage}
totalCount={totalCount ? Number(totalCount) : undefined}
loading={isLoading}
/>
)}
</div>
</div>

)
}

