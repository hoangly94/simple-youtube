import { FilterTag, VideoList } from "@/components/home";
import { useCustomSearchParams } from "@utils/hooks";
import { useCallback } from "react";

export function Home() {
  const { searchParams } = useCustomSearchParams();
  const TagComponent = useCallback(() => {
    return <FilterTag />;
  }, [searchParams.get("videoCategoryId")]);
  return (
    <div className="pt-[15px] pl-[20px] pr-[34px] pb-[63px]">
      <TagComponent />
      <VideoList />
    </div>
  );
}
