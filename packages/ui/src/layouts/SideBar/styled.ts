import { Avatar, Button, Flex, Image, Menu, Typography } from "antd";
import styled from "styled-components";
import { themeTokens } from "@ui/contexts";

const { Title } = Typography;
const Container = styled(Flex)<{ $isAdmin?: boolean }>`
  height: 100%;
  overflow-y: scroll;
  background-color: ${(props) =>
    props.$isAdmin ? themeTokens.colorPrimaryBgAdmin : ""};
  .ant-menu {
    border: none !important;
  }
  .ant-menu-item {
    height: 48px !important;
    color: ${(props) => (props.$isAdmin ? "#a2a4c6" : "#454a54")} !important;
    margin: 0 !important;
    width: 100% !important;
    margin-bottom: 8px !important;
    .anticon + span {
      margin-top: 4px !important;
    }
  }
  .ant-menu-item-selected {
    background-color: ${(props) =>
      props.$isAdmin ? "#001d66" : "#f0f0f0"} !important;

    height: 48px !important;
    border-radius: 12px !important;
    color: ${(props) => (props.$isAdmin ? "#f0f0f0" : "#454a54")} !important;
    svg path {
      stroke: ${(props) => (props.$isAdmin ? "#f0f0f0" : "#454a54")} !important;
    }
    .anticon + span {
      margin-top: 4px !important;
    }
  }
  /* .ant-menu-title-content a {
    font-weight: 700 !important;
    color: #344054 !important;
    font-size: 16px;
  } */
`;

const Header = styled.div`
  padding: 20px 24px;
`;

const Logo = styled(Image)`
  height: 55px;
`;

const Content = styled.div<{ $isAdmin?: boolean }>`
  flex: 1;
  padding: ${(props) => (props.$isAdmin ? "40px 16px 16px" : "16px")};
`;
const ContentMenu = styled(Menu)`
  .ant-menu-item {
    display: flex !important;
  }
`;

const Footer = styled.div`
  padding: 16px;
`;

const SettingButton = styled(Button)<{
  $disabled?: boolean;
  $isAdmin?: boolean;
}>`
  text-align: left;
  color: ${(props) => (props.$isAdmin ? "#a2a4c6" : "#454A54")}!important;
  background-color: ${(props) => props.$isAdmin && "#001d66"}!important;
  border: ${(props) => !props.$isAdmin && "1px solid #d9d9d9"}!important;
  color: ${(props) => {
    if (!props.$isAdmin) return "#454a54";
    if (props.$disabled) return "#a2a4c6";
    return "#f1f7fe";
  }}!important;
  height: 48px;
  span:nth-child(1) {
    margin-right: 10px;
  }
`;
const ShopWrarrper = styled(Flex)`
  background-color: black;
  border-radius: 12px;
  margin-bottom: 40px;
  margin-top: 12px;
  padding: 8px 12px;
  cursor: pointer;
`;
const ShopWrarrperOption = styled(Flex)`
  border-radius: 12px;
  padding: 8px 12px;
  cursor: pointer;
`;
const LogoShop = styled(Avatar)`
  background-color: white !important;
  min-width: 32px !important;
`;
const NameShop = styled(Title)`
  color: white !important;
  margin: 0 !important;
`;
const NameShopOption = styled(Title)`
  color: #454a54 !important;
  margin: 0 !important;
  font-weight: 500 !important;
`;
const ShopFormFooter = styled(Flex)`
  background-color: #eff8ff;
  padding: 12px;
  width: 100%;
  justify-content: center;
  gap: 16px;
  align-items: center;
  border-radius: 12px;
`;
const ShopFormInfo = styled.div`
  div:nth-child(1) {
    color: #344054;
    font-weight: 600;
  }
  div:nth-child(2) {
    color: #475467;
  }
`;

export default {
  Container,
  Header,
  ShopFormInfo,
  Logo,
  Content,
  ContentMenu,
  ShopFormFooter,
  Footer,
  SettingButton,
  LogoShop,
  NameShop,
  ShopWrarrper,
  ShopWrarrperOption,
  NameShopOption,
};
