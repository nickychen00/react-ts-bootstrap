import {Container, Row, Col} from '@acrool/react-grid';
import styled, {css} from "styled-components";
import React, {useState} from "react";


const data = [
    {id: '1', title: 'Title1', content: 'Some representative placeholder content for the three columns of text below the carousel. This is the first column.'},
    {id: '2', title: 'Title2', content: 'Another exciting bit of representative placeholder content. This time, we\'ve moved on to the second column.'},
    {id: '3', title: 'Title3', content: 'And lastly this, the third column of representative placeholder content.'},
];

const data2 = [
    {
        id: '1',
        title: 'First featurette heading.',
        subTitle: 'It’ll blow your mind.',
        content: 'Some great placeholder content for the first featurette here. Imagine some exciting prose here.',
        thumbUrl: 'https://www.shutterstock.com/shutterstock/photos/2429341363/display_1500/stock-photo-depict-a-queen-sitting-on-a-throne-in-ancient-greece-her-year-old-son-standing-beside-her-2429341363.jpg',
        className: '',
    },
    {
        id: '2',
        title: 'Oh yeah, it’s that good.',
        subTitle: 'See for yourself.',
        content: 'Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.',
        thumbUrl: 'https://www.shutterstock.com/shutterstock/photos/2429341363/display_1500/stock-photo-depict-a-queen-sitting-on-a-throne-in-ancient-greece-her-year-old-son-standing-beside-her-2429341363.jpg',
        className: 'order-md-last',
    },
    {
        id: '3',
        title: 'And lastly, this one.',
        subTitle: 'Checkmate.',
        content: 'And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.',
        thumbUrl: 'https://www.shutterstock.com/shutterstock/photos/2429341363/display_1500/stock-photo-depict-a-queen-sitting-on-a-throne-in-ancient-greece-her-year-old-son-standing-beside-her-2429341363.jpg',
        className: '',
    },
];

const Carousel = () => {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <CarouselRoot>
            {/* nav */}
            <Nav>
                <NavbarBrand href="#">Carousel</NavbarBrand>

                <ul className="d-none d-md-flex mr-auto">
                    <li><Link color="white" href="#">Home</Link></li>
                    <li><Link color="grey" href="#">Link</Link></li>
                    <li><Link color="disabled" href="#">Disabled</Link></li>
                </ul>
                <form className="d-none d-md-flex">
                    <SearchInput placeholder="Search"/>
                    <SearchBtn>Search</SearchBtn>
                </form>

                <IconBtn onClick={() => setIsVisible(!isVisible)} className="d-md-none ml-auto">
                    <Icon className="fa-solid fa-bars"></Icon>
                </IconBtn>
            </Nav>

            {isVisible && (
                <HiddenBlock className="d-md-none">
                    <ul>
                        <li className="mb-3"><Link color="white" href="#">Home</Link></li>
                        <li className="mb-3"><Link color="grey" href="#">Link</Link></li>
                        <li className="mb-3"><Link color="disabled" href="#">Disabled</Link></li>
                    </ul>
                    <form className="d-flex flex-row">
                        <SearchInput placeholder="Search"/>
                        <SearchBtn>Search</SearchBtn>
                    </form>
                </HiddenBlock>
            )}

            {/*  輪播  */}
            <CarouselBlock>
                <Container className="mt-1">
                    <Arrow href="#">
                        <ArrowI className="fa-solid fa-less-than"></ArrowI>
                        <ArrowI className="fa-solid fa-greater-than"></ArrowI>
                    </Arrow>
                    <h1 className="ml-5">Example headline.</h1>
                    <p className="ml-5">Some representative placeholder content for the first slide of the carousel.</p>
                    <SingBtn className="ml-5 my-3">Sing up today</SingBtn>
                    <a className="d-flex justify-content-center" href="#">
                        <BarI className="fa-regular fa-window-minimize"></BarI>
                        <BarI className="fa-regular fa-window-minimize"></BarI>
                        <BarI className="fa-regular fa-window-minimize"></BarI>
                    </a>
                </Container>
            </CarouselBlock>

            <Container>
                {/*  三個圓  */}
                {/* 方法一 */}
                <Row className="py-3">
                    {data.map(row => (
                        <Col col={12} lg={4} className="mt-5 d-flex flex-column align-items-center" key={row.id}>
                            <RoundImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX8oKKngrjN9LdcYqGD5kWBEBRV-d8WEOyNw&s"/>
                            <h2>{row.title}</h2>
                            <p className="mb-4 text-center">{row.content}</p>
                            <RoundA href="#">View details &raquo;</RoundA>
                        </Col>
                    ))}
                </Row>

                {/* 方法二 */}
                {/* 如果資料數目增加則要自行更改length */}

                {/*<Row className="py-3">*/}
                {/*    {Array.from({length: 3}).map((row, index) => (*/}
                {/*        <Col col={12} lg={4} className="mt-5 d-flex flex-column align-items-center" key={index.toString()}>*/}
                {/*            <RoundImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX8oKKngrjN9LdcYqGD5kWBEBRV-d8WEOyNw&s"/>*/}
                {/*            <h2>{data[index].title}</h2>*/}
                {/*            <p className="mb-4 text-center">{data[index].content}</p>*/}
                {/*            <RoundA href="#">View details &raquo;</RoundA>*/}
                {/*        </Col>*/}
                {/*    ))}*/}
                {/*</Row>*/}

                <Divider/>

                {/*  三個正方  */}
                {data2.map(row => (
                    <div key={row.id}>
                        <Row className="align-items-center">
                            <Col col={12} md={7} className={row.className}>
                                <SquareH2>
                                    {row.title}
                                    <SquareSpan>{row.subTitle}</SquareSpan>
                                </SquareH2>
                                <SquareContent>{row.content}</SquareContent>
                            </Col>
                            <Col col={12} md={5}>
                                <img src={row.thumbUrl} className="w-100"/>
                            </Col>
                        </Row>

                        <Divider/>
                    </div>
                ))}

                <footer className="d-flex flex-row justify-content-between pb-3">
                    <p>&copy; 2017–2022 Company, Inc. &middot;
                        <FooterA href="#">Privacy</FooterA> &middot;
                        <FooterA href="#">Terms</FooterA>
                    </p>
                    <FooterA href="#">Back to top</FooterA>
                </footer>

            </Container>

        </CarouselRoot>
    );
}

export default Carousel;

const FooterA = styled.a`
  color: #0d6efd;
  text-decoration: underline;
  white-space: nowrap;
  padding-left: 5px;
`;

const SquareContent = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;

const SquareSpan = styled.span`
  color: #6c757d;
`;

const SquareH2 = styled.h2`
  font-size: calc(1.325rem + .9vw);
`;

const Divider = styled.hr`
  margin: 80px 0;
`;

const RoundA = styled.a`
  color: #fff;
  background-color: #6c757d;
  font-weight: 400;
  text-align: center;
  border: 1px solid #6c757d;
  padding: .375rem .75rem;
  font-size: 1rem;
  border-radius: .25rem;

  :focus {
    box-shadow: 0 0 0 .25rem rgba(130, 138, 145, .5);
  }
`;

const RoundImg = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
`;

const BarI = styled.i`
  color: darkgray;
  margin-right: 5px;
  font-size: 30px;

  :hover {
    color: white;
  }
`;

const SingBtn = styled.button`
  padding: .5rem 1rem;
  font-size: 1.25rem;
  border-radius: .3rem;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;

  :focus {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
    box-shadow: 0 0 0 .25rem rgba(49, 132, 253, .5);
  }
`;

const ArrowI = styled.i`
  font-size: 25px;

  :hover {
    color: white;
  }
`;

const Arrow = styled.a`
  color: darkgray;
  margin-top: 6px;
  display: flex;
  justify-content: space-between;
`;

const CarouselBlock = styled.div`
  background-color: rgb(119, 119, 119);
  width: 100%;
  height: 518px;
  color: white;
  display: flex;
  align-items: end;
  padding-bottom: 1rem;
`;

const HiddenBlock = styled.div`
  background-color: #212529;
  padding: .5rem .75rem;
  position: fixed;
  top: 54px;
  right: 0;
  left: 0;
  z-index: 10;
`;

const Icon = styled.i`
  width: 1.5em;
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

const SearchBtn = styled.button`
  font-weight: 400;
  color: #198754;;
  text-align: center;
  border: 1px solid #198754;;
  padding: .375rem .75rem;
  font-size: 1rem;
  border-radius: .25rem;

  :focus {
    color: #fff;
    background-color: #198754;
    border-color: #198754;
    box-shadow: 0 0 0 .25rem rgba(25, 135, 84, .5);
  }
`;

const SearchInput = styled.input`
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  margin-right: .5rem;

  ::placeholder {
    color: #5a6269;
  }

  :focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25);
  }
`;

const Link = styled.a<{
    color: string,
}>`
  font-size: 1rem;
  font-weight: 400;
  margin-right: 1rem;

  ${props => props.color === 'white' && css`
    color: white;
  `}

  ${props => props.color === 'grey' && css`
    color: rgba(255, 255, 255, .55);

    :hover {
      color: rgba(255, 255, 255, .75);
    }
  `}

  ${props => props.color === 'disabled' && css`
    color: rgba(255, 255, 255, .25);
  `}
`;

const NavbarBrand = styled.a`
  color: white;
  margin-right: 1rem;
  font-size: 1.25rem;
  text-decoration: none;
  white-space: nowrap;
`;

const Nav = styled.nav`
  background-color: #212529;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: .5rem .75rem;
`;

const CarouselRoot = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: #5a5a5a;
`;
