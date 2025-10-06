
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 20px;
  text-align: center;
  opacity: 1;
  background: var(--dark-green);
  color: var(--white);
  margin-top: 40px;
`;

const Footer = ({ children, ...props }) => {
  return <FooterWrapper {...props}>{children}</FooterWrapper>;
};

export default Footer;
