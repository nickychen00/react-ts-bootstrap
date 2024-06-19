import {Container, Row, Col} from '@acrool/react-grid';
import styled, {css} from "styled-components";
import React from "react";

const Product = () => {

    return (
        <ProductRoot>
            <Header>
                <ProductContainer>
                    <nav
                        className="d-flex flex-row align-items-center justify-content-center justify-content-md-between">
                        <NavA href="#"><Icon className="fa-regular fa-futbol"></Icon></NavA>
                        <NavA className="d-none d-md-block" href="#">Tour</NavA>
                        <NavA className="d-none d-md-block" href="#">Product</NavA>
                        <NavA className="d-none d-md-block" href="#">Features</NavA>
                        <NavA className="d-none d-md-block" href="#">Enterprise</NavA>
                        <NavA className="d-none d-md-block" href="#">Support</NavA>
                        <NavA className="d-none d-md-block" href="#">Pricing</NavA>
                        <NavA className="d-none d-md-block" href="#">Cart</NavA>
                    </nav>
                </ProductContainer>
            </Header>

            <main>
                {/*  1  */}
                <First className="p-3 mx-md-3 mt-md-3 p-md-5">
                    <Phone1 className="d-none d-md-block"></Phone1>
                    <Phone2 className="d-none d-md-block"></Phone2>
                    <Col col={12} md={5} className="mx-auto my-5 p-lg-5 position-relative">
                        <FirstH>Punny headline</FirstH>
                        <NarrateP>And an even wittier subheading to boot. Jumpstart your marketing efforts with this
                            example based
                            on Apple’s marketing pages.</NarrateP>
                        <Btn>Coming soon</Btn>
                    </Col>
                </First>

                {/*  2  */}
                <div className="d-md-flex pt-md-3">
                    <BgColor color="dark" className="pt-3 px-3 ml-md-3 pt-md-5 px-md-5">
                        <div className="my-3 py-3">
                            <AnotherH>Another headline</AnotherH>
                            <NarrateP>And an even wittier subheading.</NarrateP>
                        </div>
                        <Block color="light"></Block>
                    </BgColor>
                    <BgColor color="light" className="pt-3 px-3 mx-md-3 pt-md-5 px-md-5">
                        <div className="my-3 py-3">
                            <AnotherH>Another headline</AnotherH>
                            <NarrateP>And an even wittier subheading.</NarrateP>
                        </div>
                        <Block color="dark"></Block>
                    </BgColor>
                </div>

                {/*  3  */}
                <div className="d-md-flex pt-md-3">
                    <BgColor color="light" className="pt-3 px-3 ml-md-3 pt-md-5 px-md-5">
                        <div className="my-3 py-3">
                            <AnotherH>Another headline</AnotherH>
                            <NarrateP>And an even wittier subheading.</NarrateP>
                        </div>
                        <Block color="dark"></Block>
                    </BgColor>
                    <BgColor color="blue" className="pt-3 px-3 mx-md-3 pt-md-5 px-md-5">
                        <div className="my-3 py-3">
                            <AnotherH>Another headline</AnotherH>
                            <NarrateP>And an even wittier subheading.</NarrateP>
                        </div>
                        <Block color="light"></Block>
                    </BgColor>
                </div>

                {/*  4  */}
                {/*  5  */}
                {Array.from({length: 2}).map((row, index) => (
                    <div className="d-md-flex pt-md-3" key={index.toString()}>
                        <BgColor color="light" className="pt-3 px-3 ml-md-3 pt-md-5 px-md-5">
                            <div className="my-3 py-3">
                                <AnotherH>Another headline</AnotherH>
                                <NarrateP>And an even wittier subheading.</NarrateP>
                            </div>
                            <Block color="white"></Block>
                        </BgColor>
                        <BgColor color="light" className="pt-3 px-3 mx-md-3 pt-md-5 px-md-5">
                            <div className="my-3 py-3">
                                <AnotherH>Another headline</AnotherH>
                                <NarrateP>And an even wittier subheading.</NarrateP>
                            </div>
                            <Block color="white"></Block>
                        </BgColor>
                    </div>
                ))}
            </main>

            <footer>
                <ProductContainer className="py-5">
                    <Row>
                        <Col col={12} className="d-flex flex-column">
                            <Icon className="fa-regular fa-futbol mb-2"></Icon>
                            <Years className="mb-3">&copy; 2017–2021</Years>
                        </Col>
                        <Col col={6}>
                            <h5>Features</h5>
                            <Title>
                                <li><ListA>Cool stuff</ListA></li>
                                <li><ListA>Random feature</ListA></li>
                                <li><ListA>Team feature</ListA></li>
                                <li><ListA>Stuff for developers</ListA></li>
                                <li><ListA>Another one</ListA></li>
                                <li><ListA>Last time</ListA></li>
                            </Title>
                        </Col>
                        <Col col={6}>
                            <h5>Resources</h5>
                            <Title>
                                <li><ListA>Resource name</ListA></li>
                                <li><ListA>Resource</ListA></li>
                                <li><ListA>Another resource</ListA></li>
                                <li><ListA>Final resource</ListA></li>
                            </Title>
                        </Col>
                        <Col col={6}>
                            <h5>Resources</h5>
                            <Title>
                                <li><ListA>Business</ListA></li>
                                <li><ListA>Education</ListA></li>
                                <li><ListA>Government</ListA></li>
                                <li><ListA>Gaming</ListA></li>
                            </Title>
                        </Col>
                        <Col col={6}>
                            <h5>About</h5>
                            <Title>
                                <li><ListA>Team</ListA></li>
                                <li><ListA>Locations</ListA></li>
                                <li><ListA>Privacy</ListA></li>
                                <li><ListA>Terms</ListA></li>
                            </Title>
                        </Col>
                    </Row>
                </ProductContainer>
            </footer>

        </ProductRoot>
    );
}


export default Product;

const ListA = styled.li`
  color: #6c757d;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
`;

const Title = styled.ul`
  padding-left: 0;
  margin-top: .5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const Years = styled.small`
  color: #6c757d;
  font-weight: 500;
`;

const Block = styled.div<{
    color: string,
}>`
  margin-right: auto;
  margin-left: auto;
  width: 80%;
  height: 300px;
  border-radius: 21px 21px 0 0;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075);

  ${props => props.color === 'dark' && css`
    background-color: #212529;
  `}

  ${props => props.color === 'light' && css`
    background-color: #f8f9fa;
  `}

  ${props => props.color === 'white' && css`
    background-color: #fff;
  `}
`;

const BgColor = styled.div<{
    color: string,
}>`
  text-align: center;
  overflow: hidden;
  width: 100%;

  ${props => props.color === 'dark' && css`
    color: #fff;
    background-color: #212529;
  `}

  ${props => props.color === 'light' && css`
    background-color: #f8f9fa;
  `}

  ${props => props.color === 'blue' && css`
    color: #fff;
    background-color: #0d6efd;
  `}
`;

const AnotherH = styled.h2`
  font-weight: 400;
  font-size: calc(1.1rem + 2.7vw);
`;

const Btn = styled.button`
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  border: 1px solid #6c757d;
  padding: .375rem .75rem;
  font-size: 1rem;
  border-radius: .25rem;
  color: #6c757d;

  :hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }

  :focus {
    box-shadow: 0 0 0 .25rem rgba(108, 117, 125, .5);
  }
`;

const NarrateP = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const FirstH = styled.h1`
  font-weight: 500;
  margin-top: 0;
  margin-bottom: .5rem;
  font-size: calc(1.1rem + 2.7vw);
`;

const Phone2 = styled.div`
  position: absolute;
  right: auto;
  bottom: 0;
  width: 300px;
  height: 540px;
  background-color: rgb(233, 233, 233);
  border-radius: 21px;
  transform: rotate(30deg);
  top: -25%;
  left: 5%;

  ::after {
    content: "";
    position: absolute;
    top: 10%;
    right: 10px;
    bottom: 10%;
    left: 10px;
    background-color: rgba(255, 255, 255, .1);
    border-radius: 5px;
  }
`;

const Phone1 = styled.div`
  position: absolute;
  right: 10%;
  bottom: -30%;
  width: 300px;
  height: 540px;
  background-color: rgb(72, 72, 72);
  border-radius: 21px;
  transform: rotate(30deg);
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075);

  ::after {
    content: "";
    position: absolute;
    top: 10%;
    right: 10px;
    bottom: 10%;
    left: 10px;
    background-color: rgba(255, 255, 255, .1);
    border-radius: 5px;
  }
`;

const First = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #f8f9fa;
  text-align: center;
`;

const Icon = styled.i`
  font-size: 24px;
`;

const NavA = styled.a`
  padding-top: .5rem;
  padding-bottom: .5rem;
  color: #6c757d;
  text-decoration: underline;

  :hover {
    color: #fff;
    text-decoration: none;
  }
`;

const ProductContainer = styled(Container)`
  max-width: 960px;
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 1020;
  padding-top: .25rem;
  padding-bottom: .25rem;
  background-color: rgba(0, 0, 0, .85);
  backdrop-filter: saturate(180%) blur(20px);
`;

const ProductRoot = styled.div`
`;
