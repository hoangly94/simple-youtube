import { comments } from "@constants/data.constant";
import { DislikeIcon, LikeIcon } from "@ui/icons";
import { getRelativeTime } from "@utils/helpers";

export function Comment() {
  return (
    <div className="mt-5">
      <div className="p1">Comments</div>
      <div className="mt-[21px] flex flex-col gap-5">
        {comments?.map((item) => {
          return (
            <div key={item.id} className="flex gap-[13px]">
              <div className="w-7 h-7 rounded-full bg-white"></div>
              <div className="">
                <div className="p2">{item?.user}</div>
                <div className="p3 mt-[3px]">
                  {getRelativeTime(item?.created)}
                </div>
                <div className="p2 mt-[10px]">{item?.content}</div>

                <div className="flex mt-[15px] items-center gap-[15px]">
                  <div className="flex items-center gap-2">
                    <LikeIcon />
                    <span className="p3">{item?.likeCount}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DislikeIcon />
                    <span className="p3">{item?.dislikeCount}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
