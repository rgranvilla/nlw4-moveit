import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";
import { FiMoon, FiSun } from "react-icons/fi";

import { Container, SunIconContainer, MoonIconContainer } from "./styles";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      MoveIt
      <Switch
        className="themeMode"
        onChange={toggleTheme}
        checked={title === "light"}
        checkedIcon={false}
        uncheckedIcon={false}
        checkedHandleIcon={
          <SunIconContainer>
            <FiSun className="iconLight" />
          </SunIconContainer>
        }
        uncheckedHandleIcon={
          <MoonIconContainer>
            <FiMoon className="iconDark" />
          </MoonIconContainer>
        }
        height={18}
        width={60}
        handleDiameter={24}
        onHandleColor={colors.handleColor}
        offHandleColor={colors.handleColor}
        offColor={colors.textHeaderBar}
        onColor={colors.textHeaderBar}
      />
    </Container>
  );
};

export default Header;
