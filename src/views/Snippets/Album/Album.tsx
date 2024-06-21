import {Container, Row, Col} from '@acrool/react-grid';
import styled, {css} from "styled-components";
import React, {useState} from "react";


const Album = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <AlbumRoot>

            {/* Section 1 */}
            {/*  如果只是單純的要顯示不顯示內容只需要  {isActive && (html要顯示的內容)}  */}

            {/* 增加顯示效果要改成 */}
            <HiddenBlock isActive={isActive}>
                <Container>
                    <Row className="py-4">
                        <Col col={12} sm={8} md={7}>
                            <HiddenNavbarH>About</HiddenNavbarH>
                            <HiddenNavbarP>Add some information about the album below, the author, or any other
                                background context. Make it a few sentences long so folks can pick up some informative
                                tidbits. Then, link them off to some social networking sites or contact
                                information.</HiddenNavbarP>
                        </Col>
                        <Col col={12} sm={4} className="mt-5 mt-sm-0 ml-auto">
                            <HiddenNavbarH>Contact</HiddenNavbarH>
                            <LinkGroup>
                                <Link href="#">Follow on Twitter</Link>
                                <Link href="#">Like on Facebook</Link>
                                <Link href="#">Email me</Link>
                            </LinkGroup>
                        </Col>
                    </Row>
                </Container>
            </HiddenBlock>

            <ClickNavbar>
                <Container className="d-flex justify-content-between">
                    <ClickA href="#">
                        <i className="fa-solid fa-camera mr-2"></i>
                        <ClickTitle>Album</ClickTitle>
                    </ClickA>

                    <ClickBtn onClick={() => setIsActive(!isActive)} isActive={isActive}>
                        <i className="fa-solid fa-bars"></i>
                    </ClickBtn>
                </Container>
            </ClickNavbar>


            {/* Section 2 */}
            <SecondContainer>
                <Row className="py-lg-5">
                    <Col md={8} lg={6} className="mx-auto">
                        <h3 className="mb-2">Album example</h3>
                        <SecondP>Something short and leading about the collection below—its contents, the creator, etc.
                            Make it short and sweet, but not too short so folks don’t simply skip over it
                            entirely.</SecondP>
                        <div>
                            <Button color='blue'>Main call to action</Button>
                            <Button color='grey'>Secondary action</Button>
                        </div>
                    </Col>
                </Row>
            </SecondContainer>


            {/* Section 3 */}
            <ThirdBlock>
                <Container>
                    <Row className="g-3">

                        {/*  重複寫一樣的內容時 可用map迴圈  */}

                        {/* 陣列有九個元件   一定要有key */}

                        {Array.from({length: 9}).map((row, index) => (
                            <Col sm={6} md={4} key={index.toString()}>
                                <Card>
                                    <CardImg
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX8oKKngrjN9LdcYqGD5kWBEBRV-d8WEOyNw&s"
                                        alt=""
                                    />
                                    <div className="p-3">
                                        <p className="mb-3">
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This
                                            content is a little bit longer.
                                        </p>
                                        <CardButBlock>
                                            <BtnGroup>
                                                <CardBtn direction="left">View</CardBtn>
                                                <CardBtn direction="right">Edit</CardBtn>
                                            </BtnGroup>
                                            <Small>9 mins</Small>
                                        </CardButBlock>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </ThirdBlock>


            {/* Section 4 */}
            <FooterBlock>
                <Container>
                    <FooterFloat href="#">Back to top</FooterFloat>
                    <p className="mb-1">
                        Album example is &copy; Bootstrap, but please download and customize it for yourself!
                    </p>
                    <p className="mb-0">New to Bootstrap?
                        <Paragraphlink href="https://getbootstrap.com/">Visit the homepage</Paragraphlink>
                        or read our
                        <Paragraphlink href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">getting
                            started guide</Paragraphlink>.
                    </p>
                </Container>
            </FooterBlock>


        </AlbumRoot>
    );
}


export default Album;

const Paragraphlink = styled.a`
  color: #0d6efd;
  text-decoration: underline;
`;

const FooterFloat = styled.a`
  margin-bottom: .25rem;
  float: right;
  color: #0d6efd;
  text-decoration: underline;
`;

const FooterBlock = styled.footer`
  color: #6c757d;
  font-weight: 500;
  padding: 3rem 0;
`;

const Small = styled.small`
  color: #6c757d;
  font-weight: 600;
`;

const CardBtn = styled.button<{
    direction: string,
}>`
  padding: .25rem .5rem;
  font-size: .875rem;
  font-weight: 600;
  color: #6c757d;
  border-radius: .2rem 0 0 .2rem;
  text-align: center;
  
  :hover {
    background-color: #6c757d;
    color: white;
  }

  :focus {
    box-shadow: 0 0 0 .25rem rgba(108, 117, 125, .5);
  }

  ${props => props.direction === 'left' && css`
    border: 1px solid #6c757d;
  `}

  ${props => props.direction === 'right' && css`
    border-radius: 0 .2rem .2rem 0;
    border: 1px solid #6c757d;
    border-left: none;
  `}
`;

const BtnGroup = styled.div`
  position: relative;
  display: inline-flex;
`;

const CardButBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardImg = styled.img`
  border-top-left-radius: calc(.25rem - 1px);
  border-top-right-radius: calc(.25rem - 1px);
  width: 100%;
  height: 225px;
`;

const Card = styled.div`
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075);
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, .125);
  border-radius: .25rem;
`;

const ThirdBlock = styled.div`
  background-color: #f8f9fa;
  padding: 3rem 0;
`;

const Button = styled.button<{
    color: string,
}>`
  margin: 25px 2px;
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: #fff;
  border-radius: .25rem;
  text-align: center;

  ${props => props.color === 'blue' && css`
    background-color: #0d6efd;
    border: 1px solid #0d6efd;

    :hover {
      background-color: #0b5ed7;
      border-color: #0a58ca;
    }

    :focus {
      box-shadow: 0 0 0 .25rem rgba(49, 132, 253, .5);
    }
  `}

  ${props => props.color === 'grey' && css`
    background-color: #6c757d;
    border: 1px solid #6c757d;

    :hover {
      background-color: #5c636a;
      border-color: #565e64;
    }

    :focus {
      box-shadow: 0 0 0 .25rem rgba(130, 138, 145, .5);
    }
  `}
`;

const SecondP = styled.p`
  font-size: large;
  font-weight: 500;
  color: #6c757d;
`;

const SecondContainer = styled.div`
  text-align: center;
  padding: 3rem 0.75rem;
`;

const ClickBtn = styled.button<{
    isActive: boolean,
}>`
  border: 1px solid rgba(255, 255, 255, .1);
  border-radius: .45rem;
  color: rgba(255, 255, 255, .55);
  padding: .25rem 0.9rem;
  font-size: 1.75rem;
  line-height: 1;

  :focus {
    border: 3px solid;
  }
`;

const ClickTitle = styled.strong`
  font-size: 1.25rem;
`;

const ClickA = styled.a`
  color: white;
  display: flex;
  align-items: center;
`;

const ClickNavbar = styled.div`
  background-color: #212529;
  position: relative;
  padding: 0.5rem;
`;

const Link = styled.a`
  color: white;
  text-decoration: underline;
`;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const HiddenNavbarP = styled.p`
  color: #6c757d;
`;

const HiddenNavbarH = styled.h4`
  color: white;
  margin-bottom: 0.5rem;
`;

const HiddenBlock = styled.div<{
    isActive: boolean
}>`
  background-color: #212529;
  max-height: 0;
  overflow: hidden;
  transition: max-height 1s ease;
  
  ${props => props.isActive && css`
    max-height: 100%;
  `}
`;

const AlbumRoot = styled.div`
`;
