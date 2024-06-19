import {Row, Col, Container} from '@acrool/react-grid';
import styled from "styled-components";
import React from "react";


const Pricing = () => {
    return (
        <PricingRoot>
            <PricingContainer>

                {/*Section 1*/}
                <Head className="flex-md-row">
                    <HeadTitle href="https://getbootstrap.com/">
                        <i className=" fa-brands fa-bootstrap fa-2x"></i>
                        <HeadSpan>Pricing example</HeadSpan>
                    </HeadTitle>
                    <nav className="mt-3 mt-md-0 mb-2 mb-md-0 ml-0 ml-md-auto">
                        <NavA href="#" className="mr-3">Features</NavA>
                        <NavA href="#" className="mr-3">Enterprise</NavA>
                        <NavA href="#" className="mr-3">Support</NavA>
                        <NavA href="#">Pricing</NavA>
                    </nav>
                </Head>

                {/*Section 2*/}
                <SecondBlock className="mb-4 mb-md-4">
                    <h1>Pricing</h1>
                    <SecondP>Quickly build an effective pricing table for your potential customers with this Bootstrap
                        example. It’s built with default Bootstrap components and utilities with little
                        customization.</SecondP>
                </SecondBlock>

                {/*Section 3*/}
                <Row className="mb-3 text-center">
                    <Col col={12} md={4} className="d-flex align-items-stretch">
                        <Card className="mr-md-0">
                            <CardH1>Free</CardH1>
                            <div className="d-flex flex-column p-3 flex-grow-1">
                                <Price>
                                    <h2>$0</h2>
                                    <Unit>/mo</Unit>
                                </Price>
                                <ul className="flex-grow-1">
                                    <li>10 users included</li>
                                    <li>2 GB of storage</li>
                                    <li>Email support</li>
                                    <li>Help center access</li>
                                </ul>
                                <CardBtn1>Sign up for free</CardBtn1>
                            </div>
                        </Card>
                    </Col>
                    <Col col={12} md={4} className="d-flex align-items-stretch">
                        <Card className="mr-md-0">
                            <CardH1>Pro</CardH1>
                            <div className="d-flex flex-column p-3 flex-grow-1">
                                <Price>
                                    <h2>$15</h2>
                                    <Unit>/mo</Unit>
                                </Price>
                                <ul className="flex-grow-1">
                                    <li>20 users included</li>
                                    <li>10 GB of storage</li>
                                    <li>Priority email support</li>
                                    <li>Help center access</li>
                                </ul>
                                <CardBtn2>Get started</CardBtn2>
                            </div>
                        </Card>
                    </Col>
                    <Col col={12} md={4} className="d-flex align-items-stretch">
                        <Card isActive>
                            <CardH2>Enterprise</CardH2>
                            <div className="d-flex flex-column p-3 flex-grow-1">
                                <Price>
                                    <h2>$29</h2>
                                    <Unit>/mo</Unit>
                                </Price>
                                <ul className="flex-grow-1">
                                    <li>30 users included</li>
                                    <li>15 GB of storage</li>
                                    <li>Phone and email support</li>
                                    <li>Help center access</li>
                                </ul>
                                <CardBtn2>Contact us</CardBtn2>
                            </div>
                        </Card>
                    </Col>
                </Row>

                {/*Section 4*/}
                <h1 className="text-center mb-4">Compare plans</h1>
                <Table>
                    <thead>
                        <TableTr isActive>
                            <TableTh style={{width: '34%'}}></TableTh>
                            <TableTh style={{width: '22%'}}>Free</TableTh>
                            <TableTh style={{width: '22%'}}>Pro</TableTh>
                            <TableTh style={{width: '22%'}}>Enterprise</TableTh>
                        </TableTr>
                    </thead>

                    <tbody>
                        <TableTr>
                            <TableTh isActive>Public</TableTh>
                            <td><i className="fa-solid fa-check"></i></td>
                            <td><i className="fa-solid fa-check"></i></td>
                            <td><i className="fa-solid fa-check"></i></td>
                        </TableTr>
                        <TableTr isActive>
                            <TableTh isActive>Private</TableTh>
                            <td></td>
                            <td><i className="fa-solid fa-check"></i></td>
                            <td><i className="fa-solid fa-check"></i></td>
                        </TableTr>
                        <TableTr>
                            <TableTh isActive>Permissions</TableTh>
                            <td><i className="fa-solid fa-check"></i></td>
                            <td><i className="fa-solid fa-check"></i></td>
                            <td><i className="fa-solid fa-check"></i></td>
                        </TableTr>
                        <TableTr>
                            <TableTh isActive>Sharing</TableTh>
                            <td></td>
                            <td><i className="fa-solid fa-check"></i></td>
                            <td><i className="fa-solid fa-check"></i></td>
                        </TableTr>
                        <TableTr>
                            <TableTh isActive>Unlimited members</TableTh>
                            <td></td>
                            <td><i className="fa-solid fa-check"></i></td>
                            <td><i className="fa-solid fa-check"></i></td>
                        </TableTr>
                        <TableTr>
                            <TableTh isActive>Extra security</TableTh>
                            <td></td>
                            <td></td>
                            <td><i className="fa-solid fa-check"></i></td>
                        </TableTr>
                    </tbody>
                </Table>

                {/*Section 5*/}
                <Footer className="my-md-5 pt-md-5">
                    <Row>
                        <Col col={12} className="d-flex flex-column">
                            <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="24"
                                 height="19"/>
                            <Small>&copy; 2017–2021</Small>
                        </Col>
                        <Col col={6}>
                            <h5>Features</h5>
                            <div className="d-flex flex-column mt-2">
                                <FooterA href="#">Cool stuff</FooterA>
                                <FooterA href="#">Random feature</FooterA>
                                <FooterA href="#">Team feature</FooterA>
                                <FooterA href="#">Stuff for developers</FooterA>
                                <FooterA href="#">Another one</FooterA>
                                <FooterA href="#">Last time</FooterA>
                            </div>
                        </Col>
                        <Col col={6}>
                            <h5>Resources</h5>
                            <div className="d-flex flex-column mt-2">
                                <FooterA href="#">Resource</FooterA>
                                <FooterA href="#">Resource name</FooterA>
                                <FooterA href="#">Another resource</FooterA>
                                <FooterA href="#">Final resource</FooterA>
                            </div>
                        </Col>
                        <Col col={6}>
                            <h5 className="mt-3">About</h5>
                            <div className="d-flex flex-column mt-2">
                                <FooterA href="#">Team</FooterA>
                                <FooterA href="#">Locations</FooterA>
                                <FooterA href="#">Privacy</FooterA>
                                <FooterA href="#">Terms</FooterA>
                            </div>
                        </Col>
                    </Row>
                </Footer>

            </PricingContainer>
        </PricingRoot>
    );
}


export default Pricing;


const FooterA = styled.a`
  color: #6c757d;
  margin-bottom: .25rem;
`;

const Small = styled.small`
  color: #6c757d;
  font-weight: bold;
  margin-top: .5rem;
  margin-bottom: 1rem;
`;

const Footer = styled.footer`
  padding-top: 1.5rem;
  border-top: 1px solid #dee2e6;
`;

const TableTh = styled.th<{
    isActive?: boolean,
}>`
  padding: .5rem;
  font-weight: bold;

  ${props => props.isActive && `
      text-align: start;
    `}
`;

const TableTr = styled.tr<{
    isActive?: boolean,
}>`
  border-bottom: 1px solid #dee2e6;

  ${props => props.isActive && `
      border-bottom: 1px solid black;
    `}
`;

const Table = styled.table`
  width: 100%;
  margin-bottom: 1rem;
  text-align: center;
`;

const CardH2 = styled.h5`
  padding: 0.8rem 1rem;
  margin-bottom: 0;
  margin-top: 0;
  color: white;
  background-color: #0d6efd;
  border-radius: .2rem .2rem 0 0;
`;

const CardBtn2 = styled.button`
  width: 100%;
  font-weight: 400;
  text-align: center;
  padding: .5rem 1rem;
  font-size: 1.25rem;
  border-radius: .3rem;
  color: white;
  border: 1px solid #0d6efd;
  background-color: #0d6efd;
  margin-top: 1.5rem;

  :hover {
    background-color: #0b5ed7;
    border-color: #0a58ca;
  }

  :focus {
    box-shadow: 0 0 0 .25rem rgba(49, 132, 253, .5);
  }
`;

const CardBtn1 = styled.button`
  width: 100%;
  font-weight: 400;
  text-align: center;
  padding: .5rem 1rem;
  font-size: 1.25rem;
  border-radius: .3rem;
  color: #0d6efd;
  border: 1px solid #0d6efd;
  margin-top: 1.5rem;

  :hover {
    background-color: #0d6efd;
    color: white;
  }

  :focus {
    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .5);
  }
`;

const Unit = styled.h4`
  color: #6c757d;
`;

const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const CardH1 = styled.h5`
  padding: 0.8rem 1rem;
  margin-bottom: 0;
  margin-top: 0;
  background-color: rgba(0, 0, 0, .03);
  border-bottom: 1px solid rgba(0, 0, 0, .125);
`;

const Card = styled.div<{
    isActive?: boolean,
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, .125);
  border-radius: .3rem;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075);

  ${props => props.isActive && `
        border: 1px solid #0d6efd;
    `}
`;

const SecondP = styled.p`
  color: #6c757d;
  font-size: 1.25rem;
  font-weight: 500;
`;

const SecondBlock = styled.div`
  max-width: 700px;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  padding: 1rem;
`;

const NavA = styled.a`
  color: black;
`;

const HeadSpan = styled.span`
  font-size: 1.4rem;
  margin-left: 0.5rem;
`;

const HeadTitle = styled.a`
  display: flex;
  align-items: center;
  color: black;
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #dee2e6;
`;

const PricingContainer = styled(Container)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  max-width: 960px;
`;

const PricingRoot = styled.div``;
