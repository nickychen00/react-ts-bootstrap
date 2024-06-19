import {Container} from '@acrool/react-grid';
import styled from "styled-components";
import React from "react";


const StickyFooter = () => {
    return (
        <StickyFooterRoot>
            <CustomContainer>
                <h1 className="mt-5 mb-1">Sticky footer</h1>
                <Narrative>Pin a footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS.</Narrative>
                <p className="mb-3">
                    Use <Link href="https://getbootstrap.com/docs/5.0/examples/sticky-footer-navbar/">the
                    sticky footer with a fixed navbar</Link> if need be, too.</p>
            </CustomContainer>
            <Footer className="py-3 mt-auto">
                <CustomContainer>
                    <FooterSpan>Place sticky footer content here.</FooterSpan>
                </CustomContainer>
            </Footer>
        </StickyFooterRoot>
    );
}


export default StickyFooter;

const FooterSpan = styled.span`
  color: #6c757d;
  font-weight: 500;
`;

const Footer = styled.footer`
  background-color: #f8f9fa;
`;

const Link = styled.a`
  color: #0d6efd;
  text-decoration: underline;
`;

const Narrative = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const CustomContainer = styled(Container)`
  max-width: 680px;
  padding: 0 15px;
`;

const StickyFooterRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
