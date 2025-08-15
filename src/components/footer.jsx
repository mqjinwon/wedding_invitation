import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 20px;
  text-align: center;
  background: var(--dark-green);
  color: var(--white);
  margin-top: 40px;
`;

const Footer = ({ children, ...props }) => {
  return <FooterWrapper {...props}>{children}</FooterWrapper>;
};

export default Footer;
