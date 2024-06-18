import {Row, Col, Container, media} from 'bear-react-grid';
import styled from 'styled-components';
import React from 'react';



const Jumbotron = () => {

    return (
        <JumbotronRoot>
            <Container className="py-4">
                <Logo className="pb-3 mb-4">
                    <Link href="https://getbootstrap.com/">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIDSJXSf-avDYnXD_Ucz0scd86WoH88W5krA&s" width="40" height="32"/>
                        <LinkTitle>Jumbotron example</LinkTitle>
                    </Link>
                </Logo>

                <JumbotronBlock className="mb-4">
                    <JumbotronTitle>Custom jumbotron</JumbotronTitle>
                    <Desc>Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</Desc>
                    <JumbotronBlockBtn type="button">Example button</JumbotronBlockBtn>
                </JumbotronBlock>

                <Row className="g-md-4">
                    <Col col={12} md={6}>
                        <CardDark className="p-5">
                            <CardTitle>Change the background</CardTitle>
                            <CardDesc>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</CardDesc>
                            <CardDarkBtn type="button">Example button</CardDarkBtn>
                        </CardDark>
                    </Col>
                    <Col col={12} md={6}>
                        <CardLight className="p-5">
                            <CardTitle>Add borders</CardTitle>
                            <CardDesc>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</CardDesc>
                            <CardLightBtn type="button">Example button</CardLightBtn>
                        </CardLight>
                    </Col>
                </Row>

                <Footer className="pt-3 mt-4">&copy; 2021</Footer>
            </Container>
        </JumbotronRoot>
    );
}


export default Jumbotron;

const Footer = styled.footer`
  color: #6c757d;
  font-weight: 500;
  border-top: 1px solid #dee2e6;
`;

const CardLightBtn = styled.button`
  padding: .375rem .75rem;
  border-radius: .25rem;
  color: #6c757d;
  border: 1px solid #6c757d;

  :hover {
    color: #fff;
    background-color: #6c757d;
  }

  :focus {
    box-shadow: 0 0 0 .25rem rgba(108, 117, 125, .5);
  }
`;

const CardLight = styled.div`
  border: 1px solid rgba(0, 0, 0, .125);
  border-radius: .3rem;
  background-color: rgba(248, 249, 250, 1);
  height: 100%;
`;

const CardDarkBtn = styled.button`
  padding: .375rem .75rem;
  border-radius: .25rem;
  color: #f8f9fa;
  border: 1px solid #f8f9fa;

  :hover {
    color: #000;
    background-color: #f8f9fa;
  }

  :focus {
    box-shadow: 0 0 0 .25rem rgba(248, 249, 250, .5);
  }
`;

const CardDesc = styled.p`
  margin-bottom: 1rem;
  font-weight: 500;
`;

const CardTitle = styled.h2`
  margin-bottom: .5rem;
  font-size: calc(1.325rem + .9vw);
  font-weight: 500;
`;

const CardDark = styled.div`
  border-radius: .3rem;
  background-color:rgba(33, 37, 41, 1);
  color: white;
  height: 100%;
`;

const JumbotronBlockBtn = styled.button`
  font-weight: 500;
  color: #fff;
  background-color: #0d6efd;
  border: 1px solid #0d6efd;
  padding: .5rem 1rem;
  font-size: 1.25rem;
  border-radius: .3rem;

  :hover {
    background-color: #0b5ed7;
    border-color: #0a58ca;
  }

  :focus {
    background-color: #0b5ed7;
    border-color: #0a58ca;
    box-shadow: 0 0 0 .25rem rgba(49, 132, 253, .5);
  }
`;

const Desc = styled.p`
  font-size: calc(1.275rem + .3vw);
  font-weight: 500;
  margin-bottom: 1rem;
  
  ${media.md`
    width: 66.66666667%;
 `}
`;

const JumbotronTitle = styled.h1`
  font-size: calc(1.425rem + 2.1vw);
  margin-bottom: .5rem;
`;

const JumbotronBlock = styled.div`
  padding: 96px 60px;
  background-color: #f8f9fa;
  border-radius: .3rem;
`;

const LinkTitle = styled.span`
  font-size: 22px;
  margin-left: .5rem;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  color: black;
`;

const Logo = styled.div`
  border-bottom: 1px solid #dee2e6;
`;

const JumbotronRoot = styled.div``;