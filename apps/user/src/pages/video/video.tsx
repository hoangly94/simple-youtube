import { Recommend, VideoContent } from "@/components/video";
import classNames from "classnames";
import { useMediaQuery } from "usehooks-ts";

export function Video() {
  const isChangeLayout = useMediaQuery("(max-width: 1296px)");

  return (
    <div
      className={classNames([
        "pt-1 md:pt-[15px] flex gap-[30px] pl-2 md:pl-5 pr-4 md:pr-[34px] pb-[63px]",
        isChangeLayout && "flex-col",
      ])}
    >
      <VideoContent />
      <div className={isChangeLayout ? "w-full md:w-[70%]" : "w-[422px]"}>
        <Recommend />
      </div>
    </div>
  );
}
