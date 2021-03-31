import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';

import { useTheme } from '../../hooks/theme';

import tmp from '../../assets/broken_robot_120px.png';

import { Container, Header } from './styles';

const Head: React.FC = () => {
  const { toogleTheme } = useTheme();
  const { title, colors } = useContext(ThemeContext);

  return (
    <Container>
      <Header>
        <h1>Github Bookmark</h1>
        <Link to="/">
          <img src={tmp} alt="tmp" />
          <strong>João das Colves</strong>
        </Link>
        <div>
          <Switch
            onChange={toogleTheme}
            checked={title === 'dark'}
            checkedIcon
            uncheckedIcon
            height={16}
            width={42}
            handleDiameter={24}
            onColor={colors.blue}
            offColor={colors.blue}
            onHandleColor={colors.primary}
            offHandleColor={colors.primary}
          />
          <span>{title}</span>
        </div>
      </Header>
    </Container>
  );
};

export default Head;
