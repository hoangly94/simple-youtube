import { Link, useLocation } from "react-router-dom";
import S from "./styled";
import { MenuProps } from "antd";
import { ReactNode } from "react";
import { useCustomSearchParams } from "@repo/utils/hooks";

interface MenuIem {
  label: string;
  url: string;
  icon: ReactNode;
  baseUrl: string;
}
interface SideBarMenuItem {
  label: string;
  url: string;
  icon: ReactNode;
  baseUrl: string;
  children?: MenuIem[];
}

interface SideBarMenuProps {
  items: SideBarMenuItem[];
}

export const SideBarMenu = ({ items: menuItems }: SideBarMenuProps) => {
  const location = useLocation();
  const { searchParams } = useCustomSearchParams();

  const items: MenuProps["items"] = menuItems.map((item) => ({
    key: item.label,
    label: <Link to={item.url}>{item.label}</Link>,
    icon: item.icon,
    children: item.children?.map((child) => {
      return {
        key: child.label,
        label: <Link to={child.url}>{child.label}</Link>,
        icon: child.icon,
      };
    }),
  }));
  const item = menuItems.find(({ baseUrl }) => {
    return location.pathname.includes(baseUrl);
  });

  const selectedKey = searchParams.get("tab")
    ? searchParams.get("tab")
    : item?.label;

  const selectedKeys = (() => {
    if (selectedKey === "Forms") {
      const subItem = item?.children?.find((child) => {
        return location.pathname.includes(child.baseUrl);
      });
      return subItem ? [subItem.label] : undefined;
    } else {
      return selectedKey ? [selectedKey] : undefined;
    }
  })();

  return (
    <S.ContentMenu mode="inline" items={items} selectedKeys={selectedKeys} />
  );
};
