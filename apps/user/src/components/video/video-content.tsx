import { appService } from "@data/services";
import { EyeIcon, MessageIcon } from "@ui/icons";
import { useCustomSearchParams } from "@utils/hooks";
import { Comment } from "@/components/video";
import Loading from "./loading";

export function VideoContent() {
  const { searchParams } = useCustomSearchParams();
  const { data, isLoading } = appService.useGetDetail({
    videoId: searchParams?.get("v") as string,
  });

  const videoDetail = data?.items?.[0];

  if (isLoading) return <Loading />;
  if (!data)
    return (
      <div>
        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
          Sorry, we can't get data. Please try again later.{" "}
        </p>
      </div>
    );

  return (
    <div className="flex-1">
      <div className="video-container w-full">
        <iframe
          className="w-full"
          src={`https://www.youtube.com/embed/${searchParams?.get("v")}?autoplay=1`}
          allow="autoplay"
        ></iframe>
      </div>
      <div className="mt-[19px]">
        <span className="h2">{videoDetail?.snippet?.title}</span>
      </div>
      <div className="flex mt-3 items-center gap-5 w-full pb-5 border-b border-divider">
        <div className="flex items-center gap-[10px]">
          <EyeIcon />
          <span className="p2">
            {new Intl.NumberFormat().format(
              Number(videoDetail?.statistics?.viewCount),
            )}
          </span>
        </div>
        <div className="flex items-center gap-[10px]">
          <MessageIcon />
          <span className="p2">
            {new Intl.NumberFormat().format(
              Number(videoDetail?.statistics?.commentCount),
            )}
          </span>
        </div>
      </div>

      <div className="pt-5 pb-[30px] border-b border-divider">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[13px]">
            <div className="w-7 h-7 rounded-full bg-white"></div>
            <div className="">
              <div className="p2">{videoDetail?.snippet?.channelTitle}</div>
              <div className="p3 mt-[3px]">322,156 Subscribers</div>
            </div>
          </div>

          <button className="p3 py-[6px] px-5 rounded-custom bg-noti !text-white">
            SUBSCRIBE
          </button>
        </div>
        <div className="mt-[18px] p2">{videoDetail?.snippet?.description}</div>
      </div>

      <Comment />
    </div>
  );
}
