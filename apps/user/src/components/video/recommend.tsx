import { appService } from "@data/services";
import VideoCard from "./video-card";
import { Skeleton } from "antd";

export function Recommend() {
  const { data, isLoading } = appService.useGetRecommendedList({});

  if (!data) return null;
  return (
    <>
      <div className="p1 mb-6">Recommended</div>
      <div className="flex flex-col gap-[25px]">
        {isLoading ? (
          <>
            {[...Array(10)].map((_, index) => {
              return (
                <Skeleton.Node
                  key={index}
                  active={isLoading}
                  className="bg-opacity-35 rounded-custom !w-[422px] !h-[117px] bg-[white]"
                />
              );
            })}
          </>
        ) : (
          <>
            {data?.items?.map((item, index) => {
              return <VideoCard data={item} key={index} />;
            })}
          </>
        )}
      </div>
    </>
  );
}
