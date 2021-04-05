import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';

import { useTheme } from '../../hooks/theme';

import { Container, Head } from './styles';
import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {
  const { toogleTheme } = useTheme();
  const { title, colors } = useContext(ThemeContext);

  const { user } = useAuth();

  return (
    <Container>
      <Head>
        <Link to="/">
          <h1>Github Bookmark</h1>
        </Link>
        <Link to="/perfil">
          <img src={user.avatar_url} alt={user.name} />
          <strong>{user.name}</strong>
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
      </Head>
    </Container>
  );
};

export default Header;
