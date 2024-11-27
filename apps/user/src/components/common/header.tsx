import { SearchInput } from "@/components/common";
import { useAppStore } from "@data/store";
import { MicroIcon, NotiIcon, YoutubeTextIcon } from "@ui/icons";
import { Badge } from "antd";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { openSidebar } = useAppStore();
  const navigate = useNavigate();

  return (
    <div className="w-full pl-2 md:pl-5 gap-2 !leading-none bg-black pt-[25px] pr-4 md:pr-[34px] pb-0 md:pb-[15px] border-none flex md:justify-between items-center">
      <div className="flex flex-col md:flex-row max-w-[648px] flex-1 gap-[15px] items-start md:items-center">
        {!openSidebar && (
          <span
            className="cursor-pointer mr-12"
            onClick={() => {
              navigate("/");
            }}
          >
            <YoutubeTextIcon />
          </span>
        )}

        <SearchInput />
        <MicroIcon className="!hidden md:!block" />
      </div>

      <div className=" items-center gap-[22px] md:flex hidden">
        <Badge className="text-[8px]" size="small" count={10} overflowCount={9}>
          <NotiIcon />
        </Badge>

        <div className="w-[34px] rounded-full h-[34px] bg-[#5F6AB9] flex items-center justify-center">
          <span className="h3 text-white">P</span>
        </div>
      </div>
    </div>
  );
}
