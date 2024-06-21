import {Container, Row, Col} from '@acrool/react-grid';
import styled from "styled-components";
import React from "react";


const data = [
    {id: '1', iconCode: 'fa-regular fa-clone fa-2x'},
    {id: '2', iconCode: 'fa-regular fa-circle-user fa-2x'},
    {id: '3', iconCode: 'fa-solid fa-sliders fa-2x'},
];

const data2 = [
    {id: '1', iconCode: 'fa-solid fa-sliders'},
    {id: '2', iconCode: 'fa-solid fa-microchip'},
    {id: '3', iconCode: 'fa-solid fa-screwdriver-wrench'},
];

const data3 = [
    {
        id: '1',
        backgroundUrl: 'https://getbootstrap.com/docs/5.0/examples/features/unsplash-photo-1.jpg',
        title: 'Short title, long jacket',
        landmark:'Earth',
        days:'3d',
    },
    {
        id: '2',
        backgroundUrl: 'https://getbootstrap.com/docs/5.0/examples/features/unsplash-photo-2.jpg',
        title: 'Much longer title that wraps to multiple lines',
        landmark:'Pakistan',
        days:'4d',
    },
    {
        id: '3',
        backgroundUrl: 'https://getbootstrap.com/docs/5.0/examples/features/unsplash-photo-3.jpg',
        title: 'Another longer title belongs here',
        landmark:'California',
        days:'5d',
    },
];

const data4 = [
    {id: '1', iconCode: 'fa-solid fa-square-rss fa-2x'},
    {id: '2', iconCode: 'fa-solid fa-square-up-right fa-2x'},
    {id: '3', iconCode: 'fa-solid fa-square-poll-horizontal fa-2x'},
    {id: '4', iconCode: 'fa-solid fa-square-share-nodes fa-2x'},
    {id: '5', iconCode: 'fa-solid fa-square-parking fa-2x'},
    {id: '6', iconCode: 'fa-solid fa-square-caret-up fa-2x'},
    {id: '7', iconCode: 'fa-solid fa-square-h fa-2x'},
    {id: '8', iconCode: 'fa-solid fa-square-poll-vertical fa-2x'},
];



const Features = () => {
    return (
        <FeaturesRoot>

            {/* Section 1 */}
            <Container className="px-4 py-5">
                <TopTitle>Columns with icons</TopTitle>
                <Row className="g-4 py-5 d-flex flex-column flex-lg-row">
                    {data.map(row => (
                        <Col lg={4} key={row.id}>
                            <FirstIcon className={`${row.iconCode} mb-2`}></FirstIcon>
                            <H4Title>Featured title</H4Title>
                            <p className="mb-3">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                            <Action>
                                Call to action
                                <i className="fa-solid fa-chevron-right ml-1"></i>
                            </Action>
                        </Col>
                    ))}
                </Row>
            </Container>

            <GraySection/>

            {/* Section 2 */}
            <Container className="px-4 py-5">
                <TopTitle>Hanging icons</TopTitle>
                    <Row className="g-4 py-5 d-flex flex-column flex-lg-row">
                        {data2.map(row => (
                            <Col lg={4} className="d-flex align-items-start" key={row.id}>
                                <SecondIcon className={`${row.iconCode} mt-1`}></SecondIcon>
                                <div>
                                    <H4Title className="mb-1">Featured title</H4Title>
                                    <p className="mb-3">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                                    <PriButton>Primary button</PriButton>
                                </div>
                            </Col>
                        ))}
                    </Row>
            </Container>

            <GraySection/>

            {/* Section 3 */}
            <Container className="px-4 py-5">
                <TopTitle>Custom cards</TopTitle>
                <Row className="g-3 py-5">
                    {data3.map(row => (
                        <Col lg={4} key={row.id}>
                            <Card bgUrl={row.backgroundUrl}>
                                <div className="d-flex flex-column h-100 px-5 py-4">
                                    <H3Title className="pt-5 mt-5 mb-3">{row.title}</H3Title>
                                    <div className="d-flex align-items-center justify-content-between mb-3 mt-auto">
                                        <BootImg src="https://github.com/twbs.png" alt=""/>
                                        <div>
                                            <i className="fa-solid fa-map-pin mr-2"></i>
                                            <small className="mr-3">{row.landmark}</small>
                                            <i className="fa-regular fa-calendar-days mr-2"></i>
                                            <small>{row.days}</small>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <GraySection/>

            {/* Section 4 */}
            <Container className="px-4 py-5">
                <TopTitle>Icon grid</TopTitle>
                <Row className="g-4 py-5 d-flex flex-column flex-sm-row">
                    {data4.map(row => (
                        <Col sm={6} md={4} lg={3} className="d-flex align-items-start mb-3" key={row.id}>
                            <FourthIcon className={`${row.iconCode} mr-3`}></FourthIcon>
                            <div>
                                <H4Title className="fw-bold mb-0">Featured title</H4Title>
                                <p>Paragraph of text beneath the heading to explain the heading.</p>
                            </div>
                        </Col>
                    ))}
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
  border: 1px solid #fff;
  width: 32px;
  height: 32px;
`;

const H3Title= styled.h3`
  font-weight:900;
`;

const Card = styled.div<{
    bgUrl: string,
}>`
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
  background-image: url(${props => props.bgUrl});
`;

const PriButton = styled.button`
  color: #fff;
  background-color: #0d6efd;
  border: 1px solid #0d6efd;
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
  padding: 0;
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

