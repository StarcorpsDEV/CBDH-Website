import { HistoryCard } from "@/components/HistoryCard";
import { client, SMFSBnftContract } from "@/consts/parameters";
import { truncateAddress } from "@/utils/truncateAddress";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import SMFSBGallery from "@/components/gallery/NFTGallerySMFSB"
import { Breadcrumb } from "@/components/Nav/Breadcrumb"

import {
  MediaRenderer,
  useContractEvents,
  useReadContract,
} from "thirdweb/react";
import { getNFT, transferEvent } from "thirdweb/extensions/erc721";
import { getContractMetadata } from "thirdweb/extensions/common";

const NFTPage = () => {
  const { id } = useParams();
  const { data: nft, isLoading } = useReadContract(getNFT, {
    contract: SMFSBnftContract,
    tokenId: BigInt(id as string),
  });
  const { data: contractMetadata } = useReadContract(getContractMetadata, {
    contract: SMFSBnftContract,
  });
  const { data: eventsData, isLoading: eventsLoading } = useContractEvents({
    contract: SMFSBnftContract,
    events: [
      transferEvent({
        tokenId: BigInt(id as string),
      }),
    ],
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
    <div className="card z-10 h-full rounded-xl bg-black/75 border-slate-800 border-2">
    <div className="font-bold text-transparent transition bg-clip-text tw-gradient-gold">

      <Helmet>
        <title>{nft?.metadata.name}</title>
      </Helmet>
      
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 md:flex-row ">
        <div className="flex flex-col px-10 md:min-h-screen md:w-1/2 ">
    <Breadcrumb url={"/SMFSB"} nftName={"Staked Badger"} nftId={String(id)}/>
          {nft ? (
            <MediaRenderer
              client={client}
              src={nft?.metadata.image}
              className="!md:h-96 !md:w-96 !h-full !max-h-[600px] !w-full !max-w-[600px] !rounded-lg !object-cover"
            />
          ) : (
            isLoading && (
              <div className="h-full max-h-[600px] w-full !max-w-[600px] animate-pulse rounded-lg bg-gray-800 md:h-96 md:w-96" />
            )
          )}

          {eventsData && eventsData?.length > 0 ? (
            <p className="mt-8 hidden text-lg font-semibold uppercase text-[#646D7A] md:flex">
              History
            </p>
          ) : (
            isLoading && (
              <div className="mt-8 hidden h-8 w-1/2 animate-pulse rounded-lg bg-gray-800 md:flex" />
            )
          )}

          {eventsLoading ? (
            <div className="mt-2 hidden h-8 w-1/2 animate-pulse rounded-lg bg-gray-800 md:flex" />
          ) : (
            <div className="mt-4 hidden flex-col gap-4 md:flex">
              {eventsData?.map((event) => (
                <HistoryCard event={event} />
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 flex w-full flex-col gap-6 px-10 md:mt-0 md:min-h-screen md:w-1/2">
          <div className="flex flex-col">
            {contractMetadata?.name ? (
              <p className="text-lg font-semibold uppercase text-[#646D7A]">
                Collection
              </p>
            ) : (
              isLoading && (
                <div className="mt-2 h-8 w-1/2 animate-pulse rounded-lg bg-gray-800" />
              )
            )}

            {isLoading ? (
              <div className="mt-2 h-8 w-1/2 animate-pulse rounded-lg bg-gray-800" />
            ) : (
              <p className="text-3xl font-bold text-white">
                {contractMetadata?.name}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <p className="text-lg font-semibold uppercase text-[#646D7A]">
              #{id}
            </p>

            {nft?.metadata.name && nft?.metadata.attributes ? (
              <p className="text-3xl font-bold text-white">
                {Object(nft?.metadata.attributes[6]).value + " - " + Object(nft?.metadata.attributes[0]).value + " " + Object(nft?.metadata.attributes[7]).value}
              </p>
            ) : (
              isLoading && (
                <div className="mt-2 h-8 w-1/2 animate-pulse rounded-lg bg-gray-800" />
              )
            )}
          </div>

          <div className="flex flex-col">
            {nft?.owner ? (
              <p className="text-lg font-semibold uppercase text-[#646D7A]">
                CURRENT OWNER
              </p>
            ) : (
              isLoading && (
                <div className="mt-2 h-8 w-1/2 animate-pulse rounded-lg bg-gray-800" />
              )
            )}

            {isLoading ? (
              <div className="mt-2 h-8 w-1/2 animate-pulse rounded-lg bg-gray-800" />
            ) : (
              <p className="text-3xl font-bold text-white">
                {nft?.owner ? truncateAddress(nft?.owner!) : "N/A"}
              </p>
            )}
          </div>

          {nft?.metadata.description ? (
            <p className="text-lg font-semibold uppercase text-[#646D7A]">
              Description
            </p>
          ) : (
            isLoading && (
              <div className="mt-8 h-8 w-1/2 animate-pulse rounded-lg bg-gray-800" />
            )
          )}

          {isLoading ? (
            <div className="mt-2 h-8 w-1/2 animate-pulse rounded-lg bg-gray-800" />
          ) : (
            <p className="text-lg font-medium text-white">
              {String(nft?.metadata.description).split("- Badgers Fluids Holding DAO:")[0]}
            </p>
          )}

          <div className="-mt-4 flex flex-col gap-4">
            {nft?.metadata.attributes &&
              // @ts-ignore
              nft?.metadata.attributes.length > 0 && (
                <>
                  {isLoading ? (
                    <div className="mt-2 h-8 w-1/2 animate-pulse rounded-lg bg-gray-800" />
                  ) : (
                    <p className="text-lg font-semibold uppercase text-[#646D7A]">
                      Attributes
                    </p>
                  )}
                  <div className="flex flex-wrap gap-4">
                    {/* @ts-ignore */}
                    {nft?.metadata.attributes?.map(
                      (attr: { trait_type: string; value: string }) => (
                        <div className="flex flex-col rounded-lg border border-gray-700 p-4">
                          <h2 className="text-sm font-semibold text-[#646D7A]">
                            {attr.trait_type}
                          </h2>
                          <h1 className="text-xl font-semibold text-gray-200">
                            {attr.value}
                          </h1>
                        </div>
                      ),
                    )}
                  </div>
                </>
              )}

            {eventsData && eventsData?.length > 0 ? (
              <p className="mt-8 flex text-lg font-semibold uppercase text-[#646D7A] md:hidden">
                History
              </p>
            ) : (
              isLoading && (
                <div className="mt-8 flex h-8 w-1/2 animate-pulse rounded-lg bg-gray-800 md:hidden" />
              )
            )}

            {eventsLoading ? (
              <div className="mt-2 flex h-8 w-1/2 animate-pulse rounded-lg bg-gray-800 md:hidden" />
            ) : (
              <div className="mt-4  flex flex-col gap-4 md:hidden">
                {eventsData?.map((event) => (
                  <HistoryCard event={event} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <SMFSBGallery/>
      </div>
    </div>
    </div>
    </div>
  );

};

export default NFTPage;
