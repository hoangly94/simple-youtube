import { Outlet } from "react-router-dom";
import { Layout as AntdLayout } from "antd";
import { useAppStore } from "@data/store";
import { useMediaQuery } from "usehooks-ts";
import { mobileBreakpoint } from "@constants/common.constants";
import classNames from "classnames";
import { Header, Sidebar } from "@/components/common";

export const UnAuthenticatedLayout = () => {
  const isMobile = useMediaQuery(mobileBreakpoint);
  const { openSidebar } = useAppStore();
  const isLoading = false;

  const isShowBlur = isMobile && openSidebar;

  return (
    <AntdLayout className="w-full bg-black">
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          <div
            className={classNames([
              "h-full !fixed w-[300px] top-0 left-0 z-50",
              openSidebar ? "!w-[300px]" : "!w-[40px] md:!w-[60px]",
            ])}
          >
            <Sidebar />
          </div>
          <div
            className={classNames([
              "flex flex-col overflow-y-hidden w-full h-screen",
              openSidebar ? "md:pl-[300px]" : "pl-10 md:pl-16",
            ])}
          >
            <Header />
            <div className="bg-black overflow-y-scroll flex-1">
              <Outlet />
            </div>
          </div>

          {isShowBlur && (
            <div
              className={`absolute z-[10] w-full h-full flex-1 top-0 bg-black bg-opacity-60 left-0`}
            ></div>
          )}
        </>
      )}
    </AntdLayout>
  );
};
