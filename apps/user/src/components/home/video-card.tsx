import { videoPath } from "@/pages/video";
import { VideoItem } from "@models/app.model";
import { getRelativeTime } from "@utils/helpers";

import { Link } from "react-router-dom";

interface VideoCardProps {
  data: VideoItem;
  isLoading?: boolean;
}
function VideoCard({ data }: VideoCardProps) {
  if (!data) return null;
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Link to={videoPath.detail((data?.id as any)?.videoId || "")}>
      <div className="w-full md:w-[196px] animate-fade-in animate-duration-1000 animate-delay-500 hover:scale-105 transition-all h-[188px]">
        <img
          className="rounded-custom w-full h-[117px] object-cover"
          src={data?.snippet?.thumbnails.high.url}
          alt="video"
        />
        <div className="p2 line-clamp-2 max-h-[56px] overflow-ellipsis whitespace-normal !leading-[17px] mt-[15px] w-[80%]">
          {data?.snippet?.title}
        </div>
        <div className="p3 !leading-[17px] mt-[2px] md:mt-[5px]">
          {getRelativeTime(data?.snippet?.publishTime)}
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
