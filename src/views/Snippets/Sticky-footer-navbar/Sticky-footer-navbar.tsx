import {Container, media} from 'bear-react-grid';
import styled, {css} from "styled-components";
import React, {useState} from "react";



const StickyFooterNavbar = () => {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <StickyFooterNavbarRoot>
            <Nav>
                <Container fluid className="d-flex">

                    <NavbarTitle className="ml-1" href="#">Fixed navbar</NavbarTitle>

                    <IconBtn onClick={() => setIsVisible(!isVisible)} className="d-flex d-md-none ml-auto mr-1">
                        <Icon className="fa-solid fa-bars fa-lg"></Icon>
                    </IconBtn>

                    <HiddenBlock isVisible={isVisible}>
                        <ul className="d-flex flex-column flex-md-row mr-auto mb-2 mb-md-0">
                            <li className="my-2">
                                <ItemLink state="active" href="#">Home</ItemLink>
                            </li>
                            <li className="my-2">
                                <ItemLink state="normal" href="#">Link</ItemLink>
                            </li>
                            <li className="my-2">
                                <ItemLink state="disabled" href="#">Disabled</ItemLink>
                            </li>
                        </ul>

                        <form className="d-flex mx-2 ">
                            <SearchInput className="mr-2" type="search" placeholder="Search"/>
                            <SearchBtn type="submit">Search</SearchBtn>
                        </form>
                    </HiddenBlock>

                </Container>
            </Nav>

            <Main>
                <Container>
                    <Title className="mt-5">Sticky footer with fixed navbar</Title>
                    <Desc>
                        Pin a footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. A fixed navbar has been added wit
                        <Code> padding-top: 60px; </Code>
                        on the
                        <Code> main &gt; .container</Code>
                        .
                    </Desc>
                    <Remark>
                        Back to&nbsp;
                        <RemarkLink href="https://getbootstrap.com/docs/5.0/examples/sticky-footer/">the default sticky footer</RemarkLink>
                        &nbsp;minus the navbar.
                    </Remark>
                </Container>
            </Main>

            <Footer className="py-3 mt-auto">
                <Container>
                    <FooterText>Place sticky footer content here.</FooterText>
                </Container>
            </Footer>

        </StickyFooterNavbarRoot>
    );
}

export default StickyFooterNavbar;


const Title = styled.h3`
  margin-bottom: .5rem;
  font-weight: 900;
  
  ${media.md`
    font-size: 2rem;
  `}
  
  ${media.lg`
    font-size: 2.3rem;
  `}
`;

const FooterText = styled.span`
  color: #6c757d;
  font-weight: 500;
`;

const Footer = styled.footer`
  background-color: #f8f9fa;
`;

const RemarkLink = styled.a`
  color: #0d6efd;
  text-decoration: underline;
`;

const Remark = styled.p`
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Code = styled.code`
  font-weight: 500;
  font-size: .875em;
`;

const Desc = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const Main = styled.main`
  padding-top: 60px;
  padding-left: 6px;
`;

const SearchBtn = styled.button`
  text-align: center;
  border: 1px solid #198754;
  padding: .375rem .75rem;
  border-radius: .25rem;
  color: #198754;

  :hover {
    color: #fff;
    background-color: #198754;
  }
  
  :focus {
    box-shadow: 0 0 0 .25rem rgba(25, 135, 84, .5);
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: .375rem .75rem;
  color: #212529;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: .25rem;

  :focus {
    border-color: #86b7fe;
    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25);
  }
  
  ::placeholder{
    color: #6c757d;
    font-weight: 500;
  }
`;

const ItemLink = styled.a<{
    state?: string,
}>`
  padding:.5rem;

  ${props => props.state === 'active' && css`
    color: #fff;
  `}

  ${props => props.state === 'normal' && css`
    color: rgba(255, 255, 255, .55);

    :hover{
      color: rgba(255, 255, 255, .75);
    }
  `}

  ${props => props.state === 'disabled' && css`
    color: rgba(255, 255, 255, .25);
    cursor: default;
  `}
`;

const HiddenBlock = styled.div<{
    isVisible: boolean,
}>`
  background-color:#212529;
  padding:0 .25rem .5rem .25rem;
  top: 52px;
  right: 0;
  left: 0;
  z-index: 10;
  position: fixed;
  display: ${props => props.isVisible ? 'block' : 'none'};
  
  ${media.md`
    position: unset;
    padding: 0; 
    flex: 1;
    display: flex;
  `}
`;

const Icon = styled.i`
  margin-top: 1px;
  width: 1.2em;
`;

const IconBtn = styled.button`
  color: rgba(255, 255, 255, .55);
  font-size: 1.25rem;
  border: 1px solid rgba(255, 255, 255, .1);
  border-radius: .25rem;
  padding: .25rem .75rem;

  :focus {
    box-shadow: 0 0 0 .25rem;
  }
`;

const NavbarTitle = styled.a`
  color: #fff;
  padding-top: .3125rem;
  padding-bottom: .3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  white-space: nowrap;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding-top: .5rem;
  padding-bottom: .5rem;
  background-color: #212529;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
`;

const StickyFooterNavbarRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;