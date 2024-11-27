import VideoCard from "./video-card";
import { appService } from "@data/services";
import { decodeURIComponent } from "@utils/helpers";
import { useCustomSearchParams } from "@utils/hooks";
import { Skeleton } from "antd";

export function VideoList() {
  const { searchParams } = useCustomSearchParams();
  const { data, isLoading } = appService.useGetPlaylist({
    q: decodeURIComponent(searchParams?.get("q") as string) as string,
    maxResults: 30,
    videoCategoryId: searchParams?.get("videoCategoryId") as string,
  });

  if (isLoading)
    return (
      <div className="flex mt-[30px] gap-[30px] items-center flex-wrap">
        {[...Array(20)].map((_, index) => {
          return (
            <Skeleton.Node
              key={index}
              active={isLoading}
              className="bg-opacity-35 rounded-custom !w-full md:!w-[196px] !h-[188px] bg-[white]"
            />
          );
        })}
      </div>
    );

  if (!data)
    return (
      <div>
        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
          Sorry, we can't get data. Please try again later.{" "}
        </p>
      </div>
    );
  return (
    <div className="flex mt-[30px] gap-[30px] items-center flex-wrap">
      {data?.items.map((item, index) => {
        return <VideoCard isLoading={isLoading} data={item} key={index} />;
      })}
    </div>
  );
}
