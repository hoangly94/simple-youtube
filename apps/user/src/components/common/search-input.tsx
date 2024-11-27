import { appService } from "@data/services";
import { SearchIcon } from "@ui/icons";
import { debounce, decodeURIComponent } from "@utils/helpers";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useCustomSearchParams } from "@repo/utils/hooks";
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { videoPath } from "@/pages/video";
import { IdDetail } from "@models/app.model";
import { message } from "antd";

interface Option {
  videoId: string;
  title: string;
}
export function SearchInput() {
  const navigate = useNavigate();
  const [options, setOptions] = useState<Option[]>([]);
  const { searchParams, parseSearchParams, updateSearchParams } =
    useCustomSearchParams();
  const params = parseSearchParams();
  const refList = useRef<HTMLDivElement>(null);

  const onSearch = useCallback(
    debounce((e) => {
      const searchKeyword = e?.target?.value;

      updateSearchParams({ ...params, q: searchKeyword });
    }, 500),
    [searchParams],
  );
  const { data, isLoading } = appService.useGetPlaylist({
    q: decodeURIComponent(searchParams?.get("q") as string) as string,
    maxResults: 5,
    videoCategoryId: searchParams?.get("videoCategoryId") as string,
  });
  const videoOptions = useMemo(() => {
    return data?.items?.map((item) => {
      return {
        videoId: (item.id as IdDetail).videoId || "",
        title: item.snippet.title || "",
      };
    });
  }, [data]);

  useEffect(() => {
    if (data && searchParams.get("q")) {
      setOptions(videoOptions || []);
    }
  }, [data]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (refList.current && !refList.current.contains(event.target as Node)) {
        setOptions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refList]);

  return (
    <div className="bg-inputBackground z-10 relative flex-1 rounded-custom flex items-center gap-[15px] w-full">
      <div className="py-[10px] pl-[14px] h-[35px]">
        {isLoading ? (
          <LoadingOutlined className="text-white" />
        ) : (
          <SearchIcon />
        )}
      </div>
      <input
        defaultValue={searchParams.get("q") || ""}
        onFocus={() => {
          setOptions(videoOptions || []);
        }}
        onChange={onSearch}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            navigate(`/?q=${searchParams.get("q")}`);
            setOptions([]);
          }
        }}
        type="text"
        placeholder="Search Videos"
        className="h-full flex-1 p2 text-[#787878] rounded-md bg-inputBackground outline-none py-[10px]"
      />

      {Boolean(options?.length) && (
        <div
          ref={refList}
          className="absolute z-[100] bg-[#25242A] rounded-custom w-full top-[110%] bg-opacity-85 left-0 py-[20px] px-[15px] flex flex-col gap-[10px]"
        >
          {options?.map((option, index) => {
            return (
              <span
                onClick={() => {
                  if (!option.videoId) {
                    message.error("Video not found");
                    return;
                  }
                  navigate(
                    `${videoPath.detail(option.videoId)}&q=${searchParams.get("q")}`,
                  );
                  setOptions([]);
                }}
                key={index}
                className="p2 cursor-pointer hover:text-noti"
              >
                {option?.title}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
