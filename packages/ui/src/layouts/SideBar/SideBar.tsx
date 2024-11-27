import { ReactNode } from "react";
import { SideBarMenu } from "./SideBarMenu";

interface SideBarProps {
  components?: {
    SideBarMenu?: ReactNode;
  };
}

export const SideBar = ({ components }: SideBarProps) => {
  return (
    <div>
      <div>{components?.SideBarMenu ?? <SideBarMenu items={[]} />}</div>
    </div>
  );
};
