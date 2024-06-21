import {Flex, Container, media, Row, Col, Grid} from '@acrool/react-grid';
import styled, {css} from "styled-components";
import React from "react";



const Heroes = () => {
    return (
        <HeroesRoot>
            {/* Section 1 */}
                <OneHeroes>
                    <img className="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width={72} height={57}/>
                    <Title>Centered hero</Title>
                    <Col lg={6} className="mx-auto">
                        <Desc>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</Desc>
                    </Col>
                    <Flex className="d-flex flex-column align-items-center flex-sm-row justify-content-sm-center">
                        <Button color="primary" className="w-100 w-sm-auto mb-2 mb-sm-0 mr-sm-2">Primary button</Button>
                        <Button color="secondary" className="w-100 w-sm-auto">Secondary</Button>
                    </Flex>
                </OneHeroes>

            <GraySection/>

            {/* Section 2 */}
                <OneHeroes isVisibleBorderBottom className="pb-0">
                    <Title>Centered screenshot</Title>
                    <Col lg={6} className="mx-auto">
                        <Desc>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</Desc>
                    </Col>
                    <Flex className="d-flex flex-column align-items-center  flex-sm-row justify-content-sm-center mb-5">
                        <Button color="primary" className="w-100 w-sm-auto mb-2 mb-sm-0 mr-sm-4">Primary button</Button>
                        <Button color="secondary" className="w-100 w-sm-auto">Secondary</Button>
                    </Flex>
                    <Picture className="overflow-hidden">
                        <Container className="px-5">
                            <SecondImg className="img-fluid rounded-1" src="https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-docs.png"/>
                        </Container>
                    </Picture>
                </OneHeroes>

            <GraySection/>

            {/* Section 3 */}
                <Container className="my-5 py-5 px-4">
                    <Row>
                        <Col col={10} sm={8} lg={6} className="order-lg-last mt-lg-5">
                            <img className="d-block mx-lg-auto img-fluid" src="https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-themes.png" alt="" width="100%" height="auto"/>
                        </Col>
                        <Col col={12} lg={6}>
                            <Title className="pt-5 pt-lg-0">Responsive left-aligned hero with image</Title>
                            <Desc>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</Desc>
                            <Flex className="d-flex flex-column align-items-center flex-md-row">
                                <Button color="primary" className="w-100 w-md-auto mb-2 mb-md-0 mr-md-3">Primary</Button>
                                <Button color="secondary" className="w-100 w-md-auto">Default</Button>
                            </Flex>
                        </Col>
                    </Row>
                </Container>

            <GraySection/>

            {/* Section 4 */}
                <Container className="px-4 py-5">
                    {/*gx-lg-5調整在row裡的col之間的距離 x左右 y上下*/}
                    <Row className="gx-lg-5 py-5">
                        <Col lg={7} className="my-lg-auto pr-lg-5 mt-3">
                            <Title className="text-center text-lg-left" >Vertically centered hero sign-up form</Title>
                            <Desc className="text-center text-lg-left">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</Desc>
                        </Col>
                        <Col md={10} lg={5} className="mx-auto mt-3">
                            <Box>
                                <Input className="w-100 mb-3" type="email" placeholder="Email address"/>
                                <Input className="w-100 mb-3" type="password" placeholder="Password"/>

                                <div className="mb-3 d-flex align-items-center">
                                    <input className="mr-2" type="checkbox" id="remember"/>
                                    <label htmlFor="remember">Remember me</label>
                                </div>

                                <Button color="primary" className="w-100">Sign up</Button>
                                <hr className="my-4"/>
                                <Hint className="fs-6">By clicking Sign up, you agree to the terms of use.</Hint>
                            </Box>
                        </Col>
                    </Row>
                </Container>

            <GraySection/>

            {/* Section 5 */}
                <Container className="my-5">
                    <ShadowColRow>
                        <Col lg={7} className="px-lg-5 pt-lg-3 pb-lg-5">
                            <Title>Border hero with cropped image and shadows</Title>
                            <Desc>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</Desc>
                            <Flex className="d-flex flex-column align-items-center flex-md-row">
                                <Button color="primary" className="w-100 w-md-auto mb-2 mb-md-4 mb-lg-0 mr-md-3">Primary</Button>
                                <Button color="secondary" className="w-100 w-md-auto mb-5 mb-md-4 mb-lg-0">Default</Button>
                            </Flex>
                        </Col>
                        <ShadowCol lg={4}>
                            <img className="d-block mx-lg-auto img-fluid" src="https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-docs.png" alt="" width="700" height="auto"/>
                        </ShadowCol>
                    </ShadowColRow>
                </Container>

            <GraySection/>

            {/* Section 6 */}
                <TwoHeroes>
                    <div className="py-5">
                        <DTitle>Dark mode hero</DTitle>
                        <Col lg={6} className="mx-auto">
                            <QDesc>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</QDesc>
                        </Col>
                        <Flex className="d-flex flex-column align-items-center flex-sm-row justify-content-sm-center">
                            <Button color="blue" className="w-100 w-sm-auto mb-2 mb-sm-0 mr-sm-4">Custom button</Button>
                            <Button color="black" className="w-100 w-sm-auto">Secondary</Button>
                        </Flex>
                    </div>
                </TwoHeroes>

            <GraySection/>

        </HeroesRoot>
    );
}


export default Heroes;

const QDesc = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: #6c757d;
`;

const DTitle = styled.h1`
  font-weight: 700;
  color: white;
`;

const TwoHeroes = styled.div`
  text-align: center;
  padding: 3rem 1.5rem;
  background-color: #212529;
`;

const Box = styled.div`
  padding: 1.5rem;
  border-radius: .3rem;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  
  ${media.md`
      padding: 3rem;
  `}
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 1rem .75rem;
  color: #212529;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: .25rem;

  :focus {
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25);
  }
  
  ::placeholder{
    color: black;
  }
`;

const ShadowCol = styled(Col)`
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175);
  padding: 0;
  overflow: hidden;
  
  ${media.lg`
    margin-left: 8.33333333%;
  `}
`;

const ShadowColRow = styled(Row)`
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175);
  border: 1px solid #dee2e6;
  border-radius: .3rem;
  padding: 1.5rem 1.5rem 0 1.5rem;
  align-items: center;
  
  ${media.lg`
    padding-right: 0;
    padding-top: 3rem;
  `}
`;

const SecondImg = styled.img`
  border: 1px solid #dee2e6;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175);
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 700px;
`;

const Hint = styled.p`
  color: #6c757d;
  font-weight: 500;
  font-size: .875em;
`;

const Button = styled.button<{
    color: string,
}>`
  padding: .5rem 1.5rem;
  font-size: 1.25rem;
  border-radius: .3rem;

  ${props => props.color === 'primary' && css`
    border: 1px solid #0d6efd;
    color: #fff;
    background-color: #0d6efd;

    :hover {
      background-color: #0b5ed7;
      border-color: #0a58ca;
    }

    :focus {
      box-shadow: 0 0 0 .25rem rgba(49, 132, 253, .5);
    }
  `}

  ${props => props.color === 'secondary' && css`
    border: 1px solid #6c757d;
    color: #6c757d;
    background-color: white;

    :hover {
      color: #fff;
      background-color: #6c757d;
    }

    :focus {
      box-shadow: 0 0 0 .25rem rgba(108, 117, 125, .5);
    }
  `}

  ${props => props.color === 'blue' && css`
    border: 1px solid #0dcaf0;
    color: #0dcaf0;

    :hover {
      color: #000;
      background-color: #0dcaf0;
    }

    :focus {
      box-shadow: 0 0 0 .25rem rgba(13, 202, 240, .5);
    }
  `}

  ${props => props.color === 'black' && css`
    border: 1px solid  #f8f9fa;
    color: #f8f9fa;

    :hover {
      color: #000;
      background-color: #f8f9fa;
    }

    :focus {
      box-shadow: 0 0 0 .25rem rgba(248, 249, 250, .5);
    }
  `}
`;

const Picture = styled.div`
  max-height: 30vh;
`;

const Desc = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  font-size: calc(1.425rem + 2.1vw);
  font-weight: 700;
`;

const OneHeroes = styled.div<{
    isVisibleBorderBottom?: boolean,
}>`
  text-align: center;
  padding: 3rem 1.5rem;
  margin: 3rem 0;

  ${props => props.isVisibleBorderBottom && css`
    border-bottom: 1px solid #dee2e6 !important;
  `}
`;

const GraySection = styled.div`
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
`;

const HeroesRoot = styled.div`
`;

