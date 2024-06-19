import {Flex, Container, media, Row, Col, Grid} from '@acrool/react-grid';
import styled, {css} from "styled-components";
import React from "react";

const Header = () => {
    return (
        <HeaderRoot>

            {/* Section 1 */}
            <Container>
                <SimpleHeader>
                    <Flex className="align-items-center mb-2 mb-lg-0">
                        <i className="fa-brands fa-bootstrap fa-2x"></i>
                        <Title>Simple header</Title>
                    </Flex>
                    <Flex className="flex-wrap">
                        <HeaderButton isActive>Home</HeaderButton>
                        <HeaderButton>Features</HeaderButton>
                        <HeaderButton>Pricing</HeaderButton>
                        <HeaderButton>FAQs</HeaderButton>
                        <HeaderButton>About</HeaderButton>
                    </Flex>
                </SimpleHeader>
            </Container>

            <GraySection/>


            {/* Section 2 */}
            <Container>
                <Flex className="d-flex justify-content-lg-center py-3 flex-wrap">
                    <HeaderButton isActive>Home</HeaderButton>
                    <HeaderButton>Features</HeaderButton>
                    <HeaderButton>Pricing</HeaderButton>
                    <HeaderButton>FAQs</HeaderButton>
                    <HeaderButton>About</HeaderButton>
                </Flex>
            </Container>

            <GraySection/>


            {/* Section 3 */}
            <Container>
                <SimpleHeader>
                    <i className="fa-brands fa-bootstrap fa-2x"></i>
                    <Flex className="flex-wrap">
                        <NavA href="" isActive>Home</NavA>
                        <NavA href="">Features</NavA>
                        <NavA href="">Pricing</NavA>
                        <NavA href="">FAQs</NavA>
                        <NavA href="">About</NavA>
                    </Flex>
                    <Flex>
                        <LoginButton color="white">Login</LoginButton>
                        <LoginButton color="blue">Sign-up</LoginButton>
                    </Flex>
                </SimpleHeader>
            </Container>

            <GraySection/>


            {/* Section 4 */}
            <SecondHeader>
                <Container className="d-flex flex-column align-items-center flex-lg-row">
                    <Flex>
                        <i className="fa-brands fa-bootstrap fa-2x" style={{color: '#fff'}}></i>
                        {/*<img src="public/static/images/bootstrap-white.svg" alt="" width={40}/>*/}
                    </Flex>
                    <Flex className="py-2 flex-wrap justify-content-center mb-2 mb-lg-0">
                        <NavB href="" isActive>Home</NavB>
                        <NavB href="">Features</NavB>
                        <NavB href="">Pricing</NavB>
                        <NavB href="">FAQs</NavB>
                        <NavB href="">About</NavB>
                    </Flex>
                    <Flex className="mb-3 mb-lg-0 ml-lg-auto w-100 w-lg-auto">
                        <SearchInput className="w-100" type="search" placeholder="Search..."/>
                    </Flex>
                    <Flex className="ml-lg-3">
                        <LoginButton color="black">Login</LoginButton>
                        <LoginButton color="yellow">Sign-up</LoginButton>
                    </Flex>
                </Container>
            </SecondHeader>


            <GraySection/>


            {/* Section 5 */}
            <BorderBottom>
                <Container className="d-flex flex-column align-items-center justify-content-between flex-lg-row">
                    <Flex>
                        <i className="fa-brands fa-bootstrap fa-2x"></i>
                    </Flex>
                    <Flex className="flex-wrap justify-content-center md-3 md-lg-0">
                        <NavA href="" isActive>Overvier</NavA>
                        <NavA href="">Inventory</NavA>
                        <NavA href="">Customers</NavA>
                        <NavA href="">Products</NavA>
                    </Flex>
                    <Flex className="mb-3 mb-lg-0 ml-lg-auto w-100 w-lg-auto">
                        <SearchInput className="w-100" type="search" placeholder="Search..."/>
                    </Flex>
                    <Flex className="align-items-center position-relative ml-3">
                        <PhotoImg src="https://randomuser.me/api/portraits/women/48.jpg" alt=""/>
                        <i className="fa-solid fa-caret-down"></i>
                    </Flex>
                </Container>
            </BorderBottom>

            <GraySection/>


            {/* Section 6 */}
            <BorderBottom>
                <Container fluid>
                    <Grid col="1fr 2fr" className="w-100">
                        <Flex className="align-items-center justify-content-start mb-2 mb-lg-0">
                            <i className="fa-brands fa-bootstrap fa-2x"></i>
                            <i className="fa-solid fa-caret-down ml-3"></i>
                        </Flex>
                        <div className="d-flex">
                            <SearchInput className="w-100" type="search" placeholder="Search..."/>
                            <Flex className="align-items-center position-relative ml-3">
                                <PhotoImg src="https://randomuser.me/api/portraits/women/48.jpg" alt="" width={35}
                                          height={35}/>
                                <i className="fa-solid fa-caret-down"></i>
                            </Flex>
                        </div>
                    </Grid>
                </Container>
            </BorderBottom>
            <Container fluid>
                <Grid col="1fr 2fr">
                    <Box/>
                    <Box/>
                </Grid>
            </Container>


            <GraySection/>


            {/* Section 7 */}
            <ThirdHeader>
                <Container className="d-flex justify-content-between flex-wrap">
                    <Flex className="flex-wrap">
                        <NavA href="">Home</NavA>
                        <NavA href="">Features</NavA>
                        <NavA href="">Pricing</NavA>
                        <NavA href="">FAQs</NavA>
                        <NavA href="">About</NavA>
                    </Flex>
                    <Flex>
                        <NavA href="">Login</NavA>
                        <NavA href="">Sign-up</NavA>
                    </Flex>
                </Container>
            </ThirdHeader>

            <BorderBottom>
                <Container className="d-flex flex-column align-items-center flex-lg-row">
                    {/*<SimpleHeader>*/}
                        <Flex className="align-items-center mb-3 mb-lg-0">
                            <i className="fa-brands fa-bootstrap fa-2x"></i>
                            <Title>Double header</Title>
                        </Flex>
                        <Flex className="mb-3 mb-lg-0 ml-lg-auto w-100 w-lg-auto">
                            <SearchInput className="w-100" type="search" placeholder="Search..."/>
                        </Flex>
                    {/*</SimpleHeader>*/}
                </Container>
            </BorderBottom>

            <GraySection/>


            {/* Section 8 */}

            <SecondHeader>
                <Container className="d-flex flex-column flex-lg-row align-items-center justify-content-lg-between">
                    <Flex className="mb-3 mb-lg-0">
                        <i className="fa-brands fa-bootstrap fa-2x" style={{color: '#fff'}}></i>
                    </Flex>
                    <Flex className="py-2 flex-wrap justify-content-center">
                        <NavB href="" className="d-flex flex-column align-items-center" isActive><i className="fa-solid fa-house-chimney fa-2x"/>Home</NavB>
                        <NavB href="" className="d-flex flex-column align-items-center"><i className="fa-solid fa-gauge-high fa-2x"></i>Dashboard</NavB>
                        <NavB href="" className="d-flex flex-column align-items-center"><i className="fa-regular fa-calendar-days fa-2x"></i>Orders</NavB>
                        <NavB href="" className="d-flex flex-column align-items-center"><i className="fa-solid fa-border-all fa-2x"></i>Products</NavB>
                        <NavB href="" className="d-flex flex-column align-items-center"><i className="fa-regular fa-circle-user fa-2x"></i>Customers</NavB>
                    </Flex>
                </Container>
            </SecondHeader>

            <SimpleHeader>
                <Container className="d-flex flex-column align-items-center flex-lg-row justify-content-lg-between">
                    <Flex className="mb-3 mb-lg-0 w-100 w-lg-auto">
                        <SearchInput className="w-100" type="search" placeholder="Search..."/>
                    </Flex>
                    <Flex>
                        <LoginButton color="grey">Login</LoginButton>
                        <LoginButton color="blue">Sign-up</LoginButton>
                    </Flex>
                </Container>
            </SimpleHeader>

            <GraySection/>


        </HeaderRoot>
    );
}

export default Header;



const BorderBottom = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #dee2e6;
`;

const Box = styled.div`
  background-color: #F8F8FF;
  height: 242px;
  border: 1px solid #dee2e6;
  border-radius: .30rem;
  margin-bottom: 1.5rem;
`;

const PhotoImg = styled.img`
  border-radius: 50%;
  margin-right: 10px;
  width: 35px;
  height: 35px;
`;

const SearchInput = styled.input`
  padding: .5rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  color: #212529;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  background-color: transparent;
`;

const ThirdHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #dee2e6;
  background-color: #F8F8FF;
`;

const SecondHeader = styled.div`
  padding: 1rem 0;
  background-color: #212529;

  ${media.lg`
        flex-direction: row;
  `}
`;

const NavB = styled.a<{
    isActive?: boolean,
}>`
  font-size: 1rem;
  font-weight: 400;
  color: #ffffff;
  padding: .5rem 1rem;

  ${props => props.isActive && `
        color: #6c757d;
    `}
`;

const LoginButton = styled.button<{
    color?: string,
}>`
  margin-right: .5rem;
  padding: .5rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  border-radius: .25rem;

  ${props => props.color === 'white' && css`
    color: #0d6efd;
    border: 1px solid #0d6efd;

    &:hover{
      color: #fff;
      background-color: #0d6efd;
      border-color: #0d6efd;
    }
  `}

  ${props => props.color === 'grey' && css`
    color: #000000;
    background-color:#F8F8FF;
  `}

  ${props => props.color === 'blue' && css`
    color: #fff;
    background-color: #0d6efd;
  `}

  ${props => props.color === 'yellow' && css`
    color: #000;
    background-color: #ffc107;
  `}

  ${props => props.color === 'black' && css`
    color: #f8f9fa;
    border: 1px solid #f8f9fa;
    
    &:hover{
      color: #000;
      background-color: #f8f9fa;
      border-color: #f8f9fa;
    }
  `}
`;

const NavA = styled.a<{
    isActive?: boolean,
}>`
  font-size: 1rem;
  font-weight: 400;
  color: #212529;
  padding: .5rem 1rem;

  ${props => props.isActive && `
        color: #6c757d;
  `}
`;

const GraySection = styled.div`
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
`;

const HeaderButton = styled.button<{
    isActive?: boolean,
}>`
  font-size: 1rem;
  font-weight: 400;
  color: #0d6efd;
  border-radius: 3px;
  padding: .5rem 1rem;

  ${props => props.isActive && `
        color: #fff;
        background-color: #0d6efd;
    `}
`;

const Title = styled.div`
  color: #212529;
  font-size: 1.5rem;
  font-weight: 400;
  margin-left: 10px;
`;

const SimpleHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #dee2e6;

  ${media.lg`
        flex-direction: row;
    `}
`;

const HeaderRoot = styled.div`
`;
