import { Flex, Typography } from "antd";
import styled from "styled-components";

const Container = styled(Flex)`
  height: 100%;
`;

const HeaderTitle = styled(Typography.Text)`
  font-size: 20px;
  font-weight: 600;
`;

export default {
  Container,
  HeaderTitle,
};
