import {Container, Row, Col} from '@acrool/react-grid';
import styled, {css} from "styled-components";


const GridExamples = () => {

    return (
        <GridExamplesRoot>
            <Container>
                <MainTitle>Bootstrap grid examples</MainTitle>
                <HeaderDesc>Basic grid layouts to get you familiar with building within the Bootstrap grid system.</HeaderDesc>
                <Desc>In these examples the <code>.themed-grid-col </code>class is added to the columns to add some theming. This is not a class that is available in Bootstrap by default.</Desc>

                <SubTitle>Five grid tiers</SubTitle>
                <Desc>There are five tiers to the Bootstrap grid system, one for each range of devices we support. Each tier starts at a minimum viewport size and automatically applies to the larger devices unless overridden.</Desc>
                <Row className="mb-3">
                    {Array.from({length: 3}).map((row, index) => (
                        <ColStyle col={4} key={index.toString()}>.col-4</ColStyle>
                    ))}
                </Row>
                <Row className="mb-3">
                    {Array.from({length: 3}).map((row, index) => (
                        <ColStyle sm={4} key={index.toString()}>.col-sm-4</ColStyle>
                    ))}
                </Row>
                <Row className="mb-3">
                    {Array.from({length: 3}).map((row, index) => (
                        <ColStyle md={4} key={index.toString()}>.col-md-4</ColStyle>
                    ))}
                </Row>
                <Row className="mb-3">
                    {Array.from({length: 3}).map((row, index) => (
                        <ColStyle lg={4} key={index.toString()}>.col-lg-4</ColStyle>
                    ))}
                </Row>
                <Row className="mb-3">
                    {Array.from({length: 3}).map((row, index) => (
                        <ColStyle xl={4} key={index.toString()}>.col-xl-4</ColStyle>
                    ))}
                </Row>
                <Row className="mb-3">
                    {Array.from({length: 3}).map((row, index) => (
                        <ColStyle xxl={4} key={index.toString()}>.col-xxl-4</ColStyle>
                    ))}
                </Row>

                <SubTitle>Three equal columns</SubTitle>
                <Desc>Get three equal-width columns <strong>starting at desktops and scaling to large desktops.</strong>  On mobile devices, tablets and below, the columns will automatically stack.</Desc>
                <Row>
                    {Array.from({length: 3}).map((row, index) => (
                        <ColStyle md={4} key={index.toString()}>.col-md-4</ColStyle>
                    ))}
                </Row>

                <SubTitle>Three equal columns alternative</SubTitle>
                <Desc>By using the <code>.row-cols-*</code> classes, you can easily create a grid with equal columns.</Desc>
                <Row>
                    {Array.from({length: 3}).map((row, index) => (
                        <ColStyle col={4} key={index.toString()}><code>.col</code> child of <code>.row-cols-md-3</code></ColStyle>
                    ))}
                </Row>

                <SubTitle>Three unequal columns</SubTitle>
                <Desc>Get three columns <strong>starting at desktops and scaling to large desktops</strong> of various widths. Remember, grid columns should add up to twelve for a single horizontal block. More than that, and columns start stacking no matter the viewport.</Desc>
                <Row>
                    <ColStyle md={3}>.col-md-3</ColStyle>
                    <ColStyle md={6}>.col-md-6</ColStyle>
                    <ColStyle md={3}>.col-md-3</ColStyle>
                </Row>

                <SubTitle>Two columns</SubTitle>
                <Desc>Get two columns <strong>starting at desktops and scaling to large desktops.</strong></Desc>
                <Row>
                    <ColStyle md={8}>.col-md-8</ColStyle>
                    <ColStyle md={4}>.col-md-4</ColStyle>
                </Row>

                <SubTitle>Full width, single column</SubTitle>
                <Desc themeColor="warning">No grid classes are necessary for full-width elements.</Desc>

                <Hr/>

                <SubTitle>Two columns with two nested columns</SubTitle>
                <Desc>Per the documentation, nesting is easy—just put a row of columns within an existing column. This gives you two columns <strong>starting at desktops and scaling to large desktops,</strong> with another two (equal widths) within the larger column.</Desc>
                <Desc>At mobile device sizes, tablets and down, these columns and their nested columns will stack.</Desc>
                <Row>
                    <ColStyle md={8}>
                        .col-md-8
                        <InsideRow>
                            <ColStyle md={6}>.col-md-6</ColStyle>
                            <ColStyle md={6}>.col-md-6</ColStyle>
                        </InsideRow>
                    </ColStyle>
                    <ColStyle md={4}>.col-md-4</ColStyle>
                </Row>

                <Hr/>

                <SubTitle>Mixed: mobile and desktop</SubTitle>
                <Desc>The Bootstrap v4 grid system has five tiers of classes: xs (extra small, this class infix is not used), sm (small), md (medium), lg (large), and xl (extra large). You can use nearly any combination of these classes to create more dynamic and flexible layouts.</Desc>
                <Desc>Each tier of classes scales up, meaning if you plan on setting the same widths for md, lg and xl, you only need to specify md.</Desc>
                <Row className="mb-3">
                    <ColStyle col={12} md={8}>.col-md-8</ColStyle>
                    <ColStyle col={6} md={4}>.col-6 .col-md-4</ColStyle>
                </Row>
                <Row className="mb-3">
                    {Array.from({length: 3}).map((row, index) => (
                        <ColStyle col={6} md={4} key={index.toString()}>.col-6 .col-md-4</ColStyle>
                    ))}
                </Row>
                <Row className="mb-3">
                    {Array.from({length: 2}).map((row, index) => (
                        <ColStyle col={6}key={index.toString()}>.col-6</ColStyle>
                    ))}
                </Row>

                <Hr/>

                <SubTitle>Mixed: mobile, tablet, and desktop</SubTitle>
                <Row className="mb-3">
                    <ColStyle col={12} sm={6} lg={8}>.col-sm-6 .col-lg-8</ColStyle>
                    <ColStyle col={6} lg={4}>.col-6 .col-lg-4</ColStyle>
                </Row>
                <Row className="mb-3">
                    {Array.from({length: 3}).map((row, index) => (
                        <ColStyle col={6} sm={4} key={index.toString()}>.col-6 .col-sm-4</ColStyle>
                    ))}
                </Row>

                <Hr/>

                <SubTitle>Gutters</SubTitle>
                <Desc>With <code>.gx-*</code> classes, the horizontal gutters can be adjusted.</Desc>
                <Row>
                    {Array.from({length: 6}).map((row, index) => (
                        <ColStyle col={12} md={4} key={index.toString()}><code>.col</code> with <code>.gx-4</code> gutters</ColStyle>
                    ))}
                </Row>
                <Desc className="mt-4">Use the <code>.gy-*</code> classes to control the vertical gutters.</Desc>
                <Row className="gy-4">
                    {Array.from({length: 6}).map((row, index) => (
                        <ColStyle col={12} md={4} key={index.toString()}><code>.col</code> with <code>.gy-4</code> gutters</ColStyle>
                    ))}
                </Row>
                <Desc className="mt-4">With <code>.g-*</code> classes, the gutters in both directions can be adjusted.</Desc>
                <Row className="g-3">
                    {Array.from({length: 6}).map((row, index) => (
                        <ColStyle col={12} md={4} key={index.toString()}><code>.col</code> with <code>.g-3</code> gutters</ColStyle>
                    ))}
                </Row>

                <Hr/>

                <SubTitle>Containers</SubTitle>
                <Desc>Additional classes added in Bootstrap v4.4 allow containers that are 100% wide until a particular breakpoint. v5 adds a new <code>xxl</code> breakpoint.</Desc>
            </Container>

            <ContainerStyle>.container</ContainerStyle>
            <ContainerStyle fluid="sm">.container-sm</ContainerStyle>
            <ContainerStyle fluid="md">.container-md</ContainerStyle>
            <ContainerStyle fluid="lg">.container-lg</ContainerStyle>
            <ContainerStyle fluid="xl">.container-xl</ContainerStyle>
            <ContainerStyle fluid="xxl">.container-xxl</ContainerStyle>
            <ContainerStyle fluid>.container-fluid</ContainerStyle>

        </GridExamplesRoot>
    );
}


export default GridExamples;

const ContainerStyle = styled(Container)`
  padding: .75rem;
  margin-bottom: 1.5rem;
  background-color: rgba(0, 123, 255, .15);
  border: 1px solid rgba(0, 123, 255, .2);
  font-weight: 500;
`;

const InsideRow = styled(Row)`
  margin: 1rem -.75rem 0 -.75rem;
`;

const Hr = styled.hr`
  margin: 1.5rem 0;
`;

const ColStyle = styled(Col)`
  padding: .75rem;
  background-color: rgba(86, 61, 124, .15);
  border: 1px solid rgba(86, 61, 124, .2);
  font-weight: 500;
`;

const SubTitle = styled.h2`
  margin:1.5rem 0 .5rem 0;
  font-size: calc(1.325rem + .9vw);
`;

const Desc = styled.p<{
    themeColor?: string,
}>`
  margin-bottom: 1rem;

  ${props => props.themeColor === 'warning' && css`
    color: #ffc107;
    font-weight: 500;
  `}
`;

const HeaderDesc = styled.p`
  margin-bottom: 1rem;
  font-size: 1.25rem;
`;

const MainTitle = styled.h1`
  font-size: calc(1.375rem + 1.5vw);
  margin-bottom: 0.5rem;
`;

const GridExamplesRoot = styled.div`
    padding: 1.5rem 0;
`;