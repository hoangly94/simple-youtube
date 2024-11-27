import { MenuUnfoldOutlined } from "@ant-design/icons";
import {
  categorites,
  menuItems,
  subscriptionItems,
} from "@constants/data.constant";
import { MenuIcon, YoutubeIcon } from "@repo/ui/icons";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import { useAppStore } from "@repo/data/store";
import { mobileBreakpoint } from "@constants/common.constants";
import classNames from "classnames";

export function Sidebar() {
  const isMobile = useMediaQuery(mobileBreakpoint);
  const { openSidebar: open, setSidebar: setOpen } = useAppStore();

  useEffect(() => {
    if (isMobile) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isMobile]);

  return (
    <div
      className={classNames(
        "h-[100vh] flex flex-col  bg-black py-8 duration-300",
        open ? "pr-6 pl-[30px] w-[300px]" : "px-3",
      )}
    >
      <div
        className={classNames(
          "w-full flex items-center mb-7",
          open ? "pl-[5px] justify-between" : "justify-center",
        )}
      >
        {open && (
          <Link to="/" style={{ lineHeight: 0 }}>
            {" "}
            <YoutubeIcon />
          </Link>
        )}
        {open ? (
          <span
            className="cursor-pointer"
            onClick={() => {
              setOpen(false);
            }}
          >
            <MenuIcon />
          </span>
        ) : (
          <MenuUnfoldOutlined
            onClick={() => {
              setOpen(true);
            }}
            style={{
              fontSize: "18px",
            }}
          />
        )}
      </div>
      <div className="flex-1 overflow-y-scroll">
        <div
          className={`flex ${open && "border-b pl-[5px] border-b-[#e5e7eb29]"} pb-[30px] flex-col gap-4`}
        >
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`flex ${!open && "justify-center"} items-center gap-[30px] cursor-pointer`}
              >
                <div className="relative">
                  {item.showNotification && (
                    <div className="absolute w-2 h-2 rounded-full top-[2px] left-[-4px] bg-noti"></div>
                  )}

                  <Icon />
                </div>
                {open && <span className="p2">{item.title}</span>}
              </div>
            );
          })}
        </div>

        {open && (
          <>
            <div className="pt-[25px] border-b border-b-[#e5e7eb29] pb-[30px] pl-[5px]">
              <span className="p3">SUBSCRIPTIONS</span>

              <div className="flex mt-[22px] flex-col pl-[3px] gap-[15px]">
                {subscriptionItems.map((item) => {
                  return (
                    <div key={item.id} className="flex items-center gap-[27px]">
                      <div className="w-[22px] h-[22px] rounded-full bg-white"></div>
                      <div className="p2">{item.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-[25px] pb-[30px] pl-[5px]">
              <span className="p3">TOP CATEGORIES</span>

              <div className="flex mt-[26px] flex-col pl-[3px] gap-[23px]">
                {categorites.map((item) => {
                  return (
                    <div key={item.id} className="flex items-center gap-[34px]">
                      <div
                        style={{ backgroundColor: `#${item.color}` }}
                        className={`w-2 h-2 rounded-full`}
                      ></div>
                      <div className="p2">{item.name}</div>
                    </div>
                  );
                })}
              </div>
              {open && (
                <div className="p3 mt-[185px] block">© 2021 Google LLC</div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
