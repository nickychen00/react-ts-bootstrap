import {Container, Row, Col, Flex, media} from '@acrool/react-grid';
import styled from "styled-components";
import React, {useState} from "react";

const Dashboard = () => {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <DashboardRoot>
            <Header className="d-flex flex-column d-md-flex flex-md-row p-0">
                <Col md={3} lg={2} className="d-flex">
                    <CompanyA className="px-3 mr-0" href="#">Company name</CompanyA>
                </Col>
                <HiddenBtn onClick={() => setIsVisible(!isVisible)} className="d-md-none">
                    <HiddenI className="fa-solid fa-bars"></HiddenI>
                </HiddenBtn>
                <SearchInput type="text" placeholder="Search"/>
                <SignA className="px-3" href="#">Sign out</SignA>
            </Header>

            <Container fluid>
                <Row>
                    <ShowNavCol md={3} lg={2} className="d-md-block px-0 pt-3" isVisible={isVisible}>
                        <ShowNavUl>
                            <ShowNavA isActive className="nav-link" href="#">
                                <Icon isActive className="fa-solid fa-house"></Icon>
                                Dashboard
                            </ShowNavA>
                            <ShowNavA className="nav-link link-dark" href="#">
                                <Icon className="fa-regular fa-file text-muted"></Icon>
                                Orders
                            </ShowNavA>
                            <ShowNavA className="nav-link link-dark" href="#">
                                <Icon className="fa-solid fa-cart-shopping text-muted"></Icon>
                                Products
                            </ShowNavA>
                            <ShowNavA className="nav-link link-dark" href="#">
                                <Icon className="fa-solid fa-user text-muted"></Icon>
                                Customers
                            </ShowNavA>
                            <ShowNavA className="nav-link link-dark" href="#">
                                <Icon className="fa-brands fa-gitter text-muted"></Icon>
                                Reports
                            </ShowNavA>
                            <ShowNavA className="nav-link link-dark" href="#">
                                <Icon className="fa-solid fa-layer-group text-muted"></Icon>
                                Integrations
                            </ShowNavA>
                        </ShowNavUl>

                        <h6 className="d-flex align-items-center justify-content-between text-muted mt-4 px-3">
                            <SavedTitle>SAVED REPORTS</SavedTitle>
                            <a href="#"><Icon className="fa-solid fa-circle-plus text-muted"></Icon></a>
                        </h6>

                        <ShowNavUl>
                            <ShowNavA className="nav-link link-dark" href="#">
                                <Icon className="fa-regular fa-file-lines text-muted"></Icon>
                                Current month
                            </ShowNavA>
                            <ShowNavA className="nav-link link-dark" href="#">
                                <Icon className="fa-regular fa-file-lines text-muted"></Icon>
                                Last quarter
                            </ShowNavA>
                            <ShowNavA className="nav-link link-dark" href="#">
                                <Icon className="fa-regular fa-file-lines text-muted"></Icon>
                                Social engagement
                            </ShowNavA>
                            <ShowNavA className="nav-link link-dark" href="#">
                                <Icon className="fa-regular fa-file-lines text-muted"></Icon>
                                Year-end sale
                            </ShowNavA>
                        </ShowNavUl>
                    </ShowNavCol>

                    <Col col={12} md={9} lg={10} className="px-md-4 ml-auto">

                        {/*  1  */}
                        <MainFlex className="align-items-center py-3 flex-wrap">
                            <h2 className="d-inline mr-auto">Dashboard</h2>
                            <Flex>
                                <div className="mr-2">
                                    <BtnCombo>Share</BtnCombo>
                                    <BtnCombo isActive>Export</BtnCombo>
                                </div>
                                <WeekBtn>
                                    <i className="fa-regular fa-calendar mr-1"></i>
                                    <span>This week</span>
                                    <i className="fa-solid fa-caret-down ml-1"></i>
                                </WeekBtn>
                            </Flex>
                        </MainFlex>

                        {/*  2  */}
                        <img className="w-100 my-4"
                             src="https://img.applealmond.com/2021/12/1639398004-f3ccdd27d2000e3f9255a7e3e2c48800.jpg"
                             alt=""
                             width="952" height="400"/>

                        {/*  3  */}
                        <h2 className="pt-4">Section title</h2>

                        <div className="overflow-x-auto">
                            <table className="w-100 mb-3">
                                <thead>
                                <tr>
                                    <SectionTh>#</SectionTh>
                                    <SectionTh>Header</SectionTh>
                                    <SectionTh>Header</SectionTh>
                                    <SectionTh>Header</SectionTh>
                                    <SectionTh>Header</SectionTh>
                                </tr>
                                </thead>
                                <tbody>
                                <CustomTr>
                                    <Line>1,001</Line>
                                    <Line>random</Line>
                                    <Line>data</Line>
                                    <Line>placeholder</Line>
                                    <Line>text</Line>
                                </CustomTr>
                                <CustomTr>
                                    <Line>1,002</Line>
                                    <Line>placeholder</Line>
                                    <Line>irrelevant</Line>
                                    <Line>visual</Line>
                                    <Line>layout</Line>
                                </CustomTr>
                                <CustomTr>
                                    <Line>1,003</Line>
                                    <Line>data</Line>
                                    <Line>rich</Line>
                                    <Line>dashboard</Line>
                                    <Line>tabular</Line>
                                </CustomTr>
                                <CustomTr>
                                    <Line>1,003</Line>
                                    <Line>information</Line>
                                    <Line>placeholder</Line>
                                    <Line>illustrative</Line>
                                    <Line>data</Line>
                                </CustomTr>
                                <CustomTr>
                                    <Line>1,004</Line>
                                    <Line>text</Line>
                                    <Line>random</Line>
                                    <Line>layout</Line>
                                    <Line>dashboard</Line>
                                </CustomTr>
                                <CustomTr>
                                    <Line>1,005</Line>
                                    <Line>dashboard</Line>
                                    <Line>irrelevant</Line>
                                    <Line>text</Line>
                                    <Line>placeholder</Line>
                                </CustomTr>
                                <CustomTr>
                                    <Line>1,006</Line>
                                    <Line>dashboard</Line>
                                    <Line>illustrative</Line>
                                    <Line>rich</Line>
                                    <Line>data</Line>
                                </CustomTr>
                                <CustomTr>
                                    <Line>1,007</Line>
                                    <Line>placeholder</Line>
                                    <Line>tabular</Line>
                                    <Line>information</Line>
                                    <Line>irrelevant</Line>
                                </CustomTr>
                                <CustomTr>
                                    <Line>1,008</Line>
                                    <Line>random</Line>
                                    <Line>data</Line>
                                    <Line>placeholder</Line>
                                    <Line>text</Line>
                                </CustomTr>
                                <CustomTr>
                                    <Line>1,009</Line>
                                    <Line>placeholder</Line>
                                    <Line>irrelevant</Line>
                                    <Line>visual</Line>
                                    <Line>layout</Line>
                                </CustomTr>
                                <CustomTr>
                                    <Line>1,010</Line>
                                    <Line>data</Line>
                                    <Line>rich</Line>
                                    <Line>dashboard</Line>
                                    <Line>tabular</Line>
                                </CustomTr>
                                <CustomTr>
                                    <Line>1,011</Line>
                                    <Line>information</Line>
                                    <Line>placeholder</Line>
                                    <Line>illustrative</Line>
                                    <Line>data</Line>
                                </CustomTr>
                                <CustomTr>
                                    <Line>1,012</Line>
                                    <Line>text</Line>
                                    <Line>placeholder</Line>
                                    <Line>layout</Line>
                                    <Line>dashboard</Line>
                                </CustomTr>
                                <CustomTr>
                                    <Line>1,013</Line>
                                    <Line>dashboard</Line>
                                    <Line>irrelevant</Line>
                                    <Line>text</Line>
                                    <Line>visual</Line>
                                </CustomTr>
                                <CustomTr>
                                    <Line>1,014</Line>
                                    <Line>dashboard</Line>
                                    <Line>illustrative</Line>
                                    <Line>rich</Line>
                                    <Line>data</Line>
                                </CustomTr>
                                <CustomTr>
                                    <Line>1,015</Line>
                                    <Line>random</Line>
                                    <Line>tabular</Line>
                                    <Line>information</Line>
                                    <Line>text</Line>
                                </CustomTr>
                                </tbody>
                            </table>
                        </div>
                    </Col>
                </Row>
            </Container>

        </DashboardRoot>
    );
}


export default Dashboard;






const Line = styled.td`
  border-bottom: 1px solid #dee2e6;
  padding: .25rem .25rem;
`;


const CustomTr = styled.tr`
    :nth-child(odd){
      ${Line}{
        background-color: #f6f6f5;
      }
    }    
`;

const SectionTh = styled.th`
  border-bottom: 1px solid black;
  padding: .25rem .25rem;
`;

const MainFlex = styled(Flex)`
  border-bottom: 1px solid #dee2e6;
`;

const WeekBtn = styled.button`
  color: #6c757d;
  border: 1px solid #6c757d;
  padding: .25rem .5rem;
  font-size: .875rem;
  border-radius: .2rem;
  white-space: nowrap;

  :hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }

  :focus {
    box-shadow: 0 0 0 .25rem rgba(108, 117, 125, .5);
  }
`;

const BtnCombo = styled.button<{
    isActive?: boolean,
}>`
  position: relative;
  flex: 1 1 auto;
  padding: .25rem .5rem;
  font-size: .875rem;
  font-weight: 500;
  border-radius: .2rem 0 0 .2rem;
  color: #6c757d;
  border: 1px solid #6c757d;

  :hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }

  :focus {
    box-shadow: 0 0 0 .25rem rgba(108, 117, 125, .5);
  }

  ${props => props.isActive && `
   border-radius: 0 .2rem .2rem 0;
   border-left:none;
  `}
`;

const SavedTitle = styled.small`
  color: #6c757d;
  font-weight: 600;
`;

const Icon = styled.i<{
    isActive?: boolean,
}>`
  color: #727272;
  margin-right: 4px;
  width: 16px;
  height: 16px;
  font-size: 12px;
  display: flex;
  justify-content: center;

  :hover {
    color: #333;
  }

  ${props => props.isActive && `
    color: #2470dc;
   
    :hover{
        color: #2470dc;
    }
  `}

`;

const ShowNavA = styled.a<{
    isActive?: boolean,
}>`
  font-size: .875rem;
  color: #333;
  font-weight: 500;
  padding: .5rem 1rem;
  display: flex;
  align-items: center;

  ${props => props.isActive && `
    color: #2470dc;
  `}
`;

const ShowNavUl = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ShowNavCol = styled(Col)<{
    isVisible: boolean,
}>`
  position: fixed;
  display: ${props => props.isVisible ? 'block' : 'none'};
  background-color: #f8f9fa;
  top: 8rem;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);

  ${media.md`
    display: block;
    top: 46px;
  `}
`;

const SignA = styled.a`
  white-space: nowrap;
  color: rgba(255, 255, 255, .55);
  padding: .5rem 1rem;

  :hover {
    color: rgba(255, 255, 255, .75);
  }
`;

const SearchInput = styled.input`
  padding: .75rem 1rem;
  border-width: 0;
  color: #fff;
  background-color: rgba(255, 255, 255, .1);
  border-color: rgba(255, 255, 255, .1);
  width: 100%;

  ::placeholder {
    color: #5a6269;
    font-weight: 500;
  }

  :focus {
    box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
    color: #212529;
    background-color: #fff;
  }
`;

const HiddenI = styled.i`
  font-size: 26px;
  width: 30px;
`;

const HiddenBtn = styled.button`
  color: rgba(255, 255, 255, .55);
  border: 1px solid rgba(255, 255, 255, .1);
  font-size: 1.25rem;
  padding: .25rem .75rem;
  border-radius: .25rem;
  position: absolute;
  top: .25rem;
  right: 1rem;

  :focus {
    box-shadow: 0 0 0 .25rem;
  }
`;

const CompanyA = styled.a`
  white-space: nowrap;
  padding: .75rem 0;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, .25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
  color: #fff;

  ${media.md`
    width: 100%;
  `}
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 1020;
  background-color: #212529;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);

`;

const DashboardRoot = styled.div`
`;
