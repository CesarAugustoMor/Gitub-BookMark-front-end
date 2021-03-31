import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  textLoading?: string;
  icon?: React.ComponentType<IconBaseProps>;
  sizeIcon?: number;
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  textLoading = 'Loading...',
  icon: Icon,
  sizeIcon = 32,
  ...rest
}) => (
  <Container type="button" {...rest}>
    {loading ? (
      textLoading
    ) : (
      <>
        {Icon && <Icon size={sizeIcon} />}
        {children}
      </>
    )}
  </Container>
);

export default Button;
