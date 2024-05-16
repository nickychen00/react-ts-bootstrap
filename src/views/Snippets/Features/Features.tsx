import {Container, Row, Col} from 'bear-react-grid';
import styled from "styled-components";
import React from "react";


const Features = () => {
    return (
        <FeaturesRoot>

            {/* Section 1 */}
            <Container className="px-4 py-5">
                <TopTitle>Columns with icons</TopTitle>
                <Row className="g-4 py-5 d-flex flex-column flex-lg-row">
                    <Col lg={4}>
                        <FirstIcon className="fa-regular fa-clone fa-2x mb-2"></FirstIcon>
                        <H4Title>Featured title</H4Title>
                        <p className="mb-3">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <Action>
                            Call to action
                            <i className="fa-solid fa-chevron-right ml-1"></i>
                        </Action>
                    </Col>
                    <Col lg={4}>
                        <FirstIcon className="fa-regular fa-circle-user fa-2x mb-2"></FirstIcon>
                        <H4Title>Featured title</H4Title>
                        <p className="mb-3">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <Action>
                            Call to action
                            <i className="fa-solid fa-chevron-right ml-1"></i>
                        </Action>
                    </Col>
                    <Col lg={4}>
                        <FirstIcon className="fa-solid fa-sliders fa-2x mb-2"></FirstIcon>
                        <H4Title>Featured title</H4Title>
                        <p className="mb-3">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <Action>
                            Call to action
                            <i className="fa-solid fa-chevron-right ml-1"></i>
                        </Action>
                    </Col>
                </Row>
            </Container>

            <GraySection/>

            {/* Section 2 */}
            <Container className="px-4 py-5">
                <TopTitle>Hanging icons</TopTitle>
                    <Row className="g-4 py-5 d-flex flex-column flex-lg-row">
                        <Col lg={4} className="d-flex align-items-start">
                            <SecondIcon className="fa-solid fa-sliders mt-1"></SecondIcon>
                            <div>
                                <H4Title className="mb-1">Featured title</H4Title>
                                <p className="mb-3">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                                <PriButton>Primary button</PriButton>
                            </div>
                        </Col>
                        <Col lg={4} className="d-flex align-items-start">
                            <SecondIcon className="fa-solid fa-microchip mt-1"></SecondIcon>
                            <div>
                                <H4Title className="mb-1">Featured title</H4Title>
                                <p className="mb-3">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                                <PriButton>Primary button</PriButton>
                            </div>
                        </Col>
                        <Col lg={4} className="d-flex align-items-start">
                            <SecondIcon className="fa-solid fa-screwdriver-wrench mt-1"></SecondIcon>
                            <div>
                                <H4Title className="mb-1">Featured title</H4Title>
                                <p className="mb-3">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                                <PriButton>Primary button</PriButton>
                            </div>
                        </Col>
                    </Row>
            </Container>

            <GraySection/>

            {/* Section 3 */}
            <Container className="px-4 py-5">
                <TopTitle>Custom cards</TopTitle>
                <Row className="g-3 py-5">
                    <Col lg={4}>
                        <CardOne>
                            <div className="d-flex flex-column h-100 px-5 py-4">
                                <H3Title className="pt-5 mt-5 mb-3">Short title, long jacket</H3Title>
                                <div className="d-flex align-items-center justify-content-between mb-3 mt-auto">
                                    <BootImg src="https://github.com/twbs.png" alt=""/>
                                    <div>
                                        <i className="fa-solid fa-map-pin mr-2"></i>
                                        <small className="mr-3">Earth</small>
                                        <i className="fa-regular fa-calendar-days mr-2"></i>
                                        <small>3d</small>
                                    </div>
                                </div>
                            </div>
                        </CardOne>
                    </Col>
                    <Col lg={4}>
                        <CardTwo>
                            <div className="d-flex flex-column h-100 px-5 py-4">
                                <H3Title className="pt-5 mt-5 mb-3">Much longer title that wraps to multiple lines</H3Title>
                                <div className="d-flex align-items-center justify-content-between mb-3 mt-auto">
                                    <BootImg src="https://github.com/twbs.png" alt=""/>
                                    <div>
                                        <i className="fa-solid fa-map-pin mr-2"></i>
                                        <small className="mr-3">Pakistan</small>
                                        <i className="fa-regular fa-calendar-days mr-2"></i>
                                        <small>4d</small>
                                    </div>
                                </div>
                            </div>
                        </CardTwo>
                    </Col>
                    <Col lg={4}>
                        <CardThree>
                            <div className="d-flex flex-column h-100 px-5 py-4">
                                <H3Title className="pt-5 mt-5 mb-3">Another longer title belongs here</H3Title>
                                <div className="d-flex align-items-center justify-content-between mb-3 mt-auto">
                                    <BootImg src="https://github.com/twbs.png" alt=""/>
                                    <div>
                                        <i className="fa-solid fa-map-pin mr-2"></i>
                                        <small className="mr-3">California</small>
                                        <i className="fa-regular fa-calendar-days mr-2"></i>
                                        <small>5d</small>
                                    </div>
                                </div>
                            </div>
                        </CardThree>
                    </Col>
                </Row>
            </Container>

            <GraySection/>

            {/* Section 4 */}
            <Container className="px-4 py-5">
                <TopTitle>Icon grid</TopTitle>
                <Row className="g-4 py-5 d-flex flex-column flex-sm-row">
                    <Col sm={6} md={4} lg={3} className="d-flex align-items-start">
                        <FourthIcon className="fa-solid fa-square-rss fa-2x mr-3"></FourthIcon>
                        <div>
                            <H4Title className="fw-bold mb-0">Featured title</H4Title>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={3} className="d-flex align-items-start">
                        <FourthIcon className="fa-solid fa-square-up-right fa-2x mr-3"></FourthIcon>
                        <div>
                            <H4Title className="fw-bold mb-0">Featured title</H4Title>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={3} className="d-flex align-items-start">
                        <FourthIcon className="fa-solid fa-square-poll-horizontal fa-2x mr-3"></FourthIcon>
                        <div>
                            <H4Title className="fw-bold mb-0">Featured title</H4Title>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={3} className="d-flex align-items-start">
                        <FourthIcon className="fa-solid fa-square-share-nodes fa-2x mr-3"></FourthIcon>
                        <div>
                            <H4Title className="fw-bold mb-0">Featured title</H4Title>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={3} className="d-flex align-items-start">
                        <FourthIcon className="fa-solid fa-square-parking fa-2x mr-3"></FourthIcon>
                        <div>
                            <H4Title className="fw-bold mb-0">Featured title</H4Title>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={3} className="d-flex align-items-start">
                        <FourthIcon className="fa-solid fa-square-caret-up fa-2x mr-3"></FourthIcon>
                        <div>
                            <H4Title className="fw-bold mb-0">Featured title</H4Title>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={3} className="d-flex align-items-start">
                        <FourthIcon className="fa-solid fa-square-h fa-2x mr-3"></FourthIcon>
                        <div>
                            <H4Title className="fw-bold mb-0">Featured title</H4Title>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={3} className="d-flex align-items-start">
                        <FourthIcon className="fa-solid fa-square-poll-vertical fa-2x mr-3"></FourthIcon>
                        <div>
                            <H4Title className="fw-bold mb-0">Featured title</H4Title>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </FeaturesRoot>
    );
}


export default Features;


const FourthIcon = styled.i`
    color: #6c757d;
`;

const BootImg = styled.img`
  border-radius: 50%;
  border: 1px solid;
  border-color: #fff;
  width: 32px;
  height: 32px;
`;

const H3Title= styled.h3`
  font-weight:900;
`;

const CardThree = styled.div`
  background-image: url(https://getbootstrap.com/docs/5.0/examples/features/unsplash-photo-3.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-color: #212529;
  border-radius: 1rem;
  color: #fff;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  border: 1px solid rgba(0, 0, 0, .125);
`;

const CardTwo = styled.div`
  background-image: url(https://getbootstrap.com/docs/5.0/examples/features/unsplash-photo-2.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-color: #212529;
  border-radius: 1rem;
  color: #fff;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  border: 1px solid rgba(0, 0, 0, .125);
`;

const CardOne = styled.div`
  background-image: url(https://getbootstrap.com/docs/5.0/examples/features/unsplash-photo-1.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-color: #212529;
  border-radius: 1rem;
  color: #fff;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  border: 1px solid rgba(0, 0, 0, .125);
`;

const PriButton = styled.button`
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
  border: 1px solid;
  padding: .4rem .75rem;
  font-size: 1rem;
  border-radius: .25rem;
  font-weight: bold;
`;

const SecondIcon = styled.i`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border-radius: .75rem;
  background-color: #f8f9fa;
  color: #212529;
  margin-right: 1rem;
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
`;

const Action= styled.button`
  color: #0d6efd;
  font-weight:bold;
  text-decoration: underline;
  align-items: center;
  padding: 0rem;
`;

const H4Title = styled.h4`
  font-weight:900;
`;

const FirstIcon= styled.i`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #fff;
  border-radius: .75rem;
  background-color: #0d6efd;
`;

const TopTitle = styled.h3`
  padding-bottom: .5rem;
  border-bottom: 1px solid #dee2e6;
  font-weight:bold;
`;

const GraySection = styled.div`
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
`;

const FeaturesRoot = styled.div`
`;

