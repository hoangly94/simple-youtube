import { appService } from "@data/services";
import { useCustomSearchParams } from "@utils/hooks";
import { useMemo } from "react";

export function FilterTag() {
  const { data } = appService.useGetCategories();
  const { updateSearchParams, searchParams, parseSearchParams } =
    useCustomSearchParams();

  const filters = useMemo(() => {
    return data?.items.map((item) => {
      return {
        id: item.id,
        name: item.snippet.title,
      };
    });
  }, [data, searchParams.get("videoCategoryId")]);
  if (!filters?.length) return null;

  return (
    <div className="flex z-0 items-center gap-[10px] flex-nowrap md:flex-wrap w-full md:w-[85%] overflow-y-auto pb-1">
      {[
        {
          id: "all",
          name: "All",
        },
        ...filters,
      ]?.map((item) => {
        return (
          <div
            onClick={() => {
              if (item.id === "all") {
                const params = parseSearchParams();
                delete params.videoCategoryId;
                updateSearchParams(params);
                return;
              }
              updateSearchParams({
                videoCategoryId: item.id,
                q: searchParams.get("q"),
              });
            }}
            key={item.id}
            style={{
              background:
                searchParams.get("videoCategoryId") === item.id
                  ? "#f00"
                  : "bg-inputBackground",
            }}
            className={`py-[7px] bg-opacity-75 hover:opacity-80 cursor-pointer px-[15px] p2 rounded-custom whitespace-nowrap`}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}
