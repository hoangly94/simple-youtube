import S from "./styled";
import { useHeaderTitle } from "./header.helpers";
import { Breadcrumb, UserSettings } from "@ui/components";

const Header = () => {
  const title = useHeaderTitle();
  return (
    <S.Container justify="space-between" align="center">
      {title ? <S.HeaderTitle>{title}</S.HeaderTitle> : <Breadcrumb />}
      <UserSettings />
    </S.Container>
  );
};

export default Header;
