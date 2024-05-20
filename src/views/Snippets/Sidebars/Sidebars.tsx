import styled, {css} from "styled-components";
import React, {useState} from "react";

const Sidebars = () => {
    const [activeIds, setIsActiveId] = useState([]);

    const handleSetActiveId = (id: number) => {
        // 判斷當前id是否存在 activeIds 陣列裡
        // 存在：將當前的 id 從 activeIds 陣列裡移除
        // 不存在：將當前 id 新增到 activeIds 陣列裡

        if (activeIds.includes(id)) {
            const filterData = activeIds.filter(o => o != id);
            setIsActiveId(filterData);
        } else {
            setIsActiveId((pre) => {
                return [...pre, id];
            });
        }
    };

    return (
        <SidebarsRoot>

            {/*Section 1*/}

            <FirstOutside>
                <SliderBarHeader isWhite href="https://getbootstrap.com/">
                    <i className="fa-brands fa-bootstrap fa-2x mr-2"></i>
                    <ASpan>Sidebar</ASpan>
                </SliderBarHeader>
                <AUl>
                    <li>
                        <ItemA href="#" isActive>
                            <i className="fa-solid fa-house-chimney mr-2"></i>
                            Home
                        </ItemA>
                    </li>
                    <li>
                        <ItemA href="#">
                            <i className="fa-solid fa-gauge-high mr-2"></i>
                            Dashboard
                        </ItemA>
                    </li>
                    <li>
                        <ItemA href="#">
                            <i className="fa-regular fa-calendar-days mr-2"></i>
                            Orders
                        </ItemA>
                    </li>
                    <li>
                        <ItemA href="#">
                            <i className="fa-solid fa-border-all mr-2"></i>
                            Products
                        </ItemA>
                    </li>
                    <li>
                        <ItemA href="#">
                            <i className="fa-regular fa-circle-user mr-2"></i>
                            Customers
                        </ItemA>
                    </li>
                </AUl>
                <Beneath>
                    <PhotoAImg src="https://github.com/mdo.png" alt=""/>
                    <BoldP>mdo</BoldP>
                    <i className="fa-solid fa-caret-down ml-1"></i>
                </Beneath>
            </FirstOutside>

            <GraySection/>

            {/*Section 2*/}

            <SecondOutside>
                <SliderBarHeader href="https://getbootstrap.com/">
                    <i className="fa-brands fa-bootstrap fa-2x mr-2"></i>
                    <ASpan>Sidebar</ASpan>
                </SliderBarHeader>
                <AUl>
                    <li>
                        <ItemB href="#" isActive>
                            <i className="fa-solid fa-house-chimney mr-2"></i>
                            Home
                        </ItemB>
                    </li>
                    <li>
                        <ItemB href="#">
                            <i className="fa-solid fa-gauge-high mr-2"></i>
                            Dashboard
                        </ItemB>
                    </li>
                    <li>
                        <ItemB href="#">
                            <i className="fa-regular fa-calendar-days mr-2"></i>
                            Orders
                        </ItemB>
                    </li>
                    <li>
                        <ItemB href="#">
                            <i className="fa-solid fa-border-all mr-2"></i>
                            Products
                        </ItemB>
                    </li>
                    <li>
                        <ItemB href="#">
                            <i className="fa-regular fa-circle-user mr-2"></i>
                            Customers
                        </ItemB>
                    </li>
                </AUl>
                <Beneath>
                    <PhotoAImg src="https://github.com/mdo.png" alt=""/>
                    <BoldP>mdo</BoldP>
                    <i className="fa-solid fa-caret-down ml-1"></i>
                </Beneath>
            </SecondOutside>

            <GraySection/>

            {/*Section 3*/}

            <ThirdOutside className="pt-3">
                <SliderBarHeader href="https://getbootstrap.com/" className="justify-content-center">
                    <i className="fa-brands fa-bootstrap fa-2x"></i>
                </SliderBarHeader>
                <BUl>
                    <li>
                        <ItemC href="#" isActive>
                            <i className="fa-solid fa-house-chimney fa-2x"></i>
                        </ItemC>
                    </li>
                    <li>
                        <ItemC href="#">
                            <i className="fa-solid fa-gauge-high fa-2x"></i>
                        </ItemC>
                    </li>
                    <li>
                        <ItemC href="#">
                            <i className="fa-regular fa-calendar-days fa-2x"></i>
                        </ItemC>
                    </li>
                    <li>
                        <ItemC href="#">
                            <i className="fa-solid fa-border-all fa-2x"></i>
                        </ItemC>
                    </li>
                    <li>
                        <ItemC href="#">
                            <i className="fa-regular fa-circle-user fa-2x"></i>
                        </ItemC>
                    </li>
                </BUl>
                <BeneathB>
                    <PhotoBImg src="https://github.com/mdo.png" alt=""/>
                    <i className="fa-solid fa-caret-down ml-1"></i>
                </BeneathB>
            </ThirdOutside>

            <GraySection/>

            {/*Section 4*/}

            <FourthOutside>
                <SliderBarHeader href="https://getbootstrap.com/">
                    <i className="fa-brands fa-bootstrap fa-2x mr-2"></i>
                    <DSpan>Collapsible</DSpan>
                </SliderBarHeader>
                <ListChanges>
                    <UpBlock>
                        <ItemD>
                            <OutButton onClick={() => handleSetActiveId(1)} isActive={activeIds.includes(1)}>
                                <i className="fa-solid fa-greater-than mr-2"></i>
                                Home
                            </OutButton>
                        </ItemD>
                        {activeIds.includes(1) && (
                            <HideList>
                                <HideBtn>Overview</HideBtn>
                                <HideBtn>Updates</HideBtn>
                                <HideBtn>Reports</HideBtn>
                            </HideList>
                        )}
                        <ItemD>
                            <OutButton onClick={() => handleSetActiveId(2)} isActive={activeIds.includes(2)}>
                                <i className="fa-solid fa-greater-than mr-2"></i>
                                Dashboard
                            </OutButton>
                        </ItemD>
                        {activeIds.includes(2) && (
                            <HideList>
                                <HideBtn>Overview</HideBtn>
                                <HideBtn>Weekly</HideBtn>
                                <HideBtn>Monthly</HideBtn>
                                <HideBtn>Annually</HideBtn>
                            </HideList>
                        )}
                        <ItemD>
                            <OutButton onClick={() => handleSetActiveId(3)} isActive={activeIds.includes(3)}>
                                <i className="fa-solid fa-greater-than mr-2"></i>
                                Orders
                            </OutButton>
                        </ItemD>
                        {activeIds.includes(3) && (
                            <HideList>
                                <HideBtn>New</HideBtn>
                                <HideBtn>Processed</HideBtn>
                                <HideBtn>Shipped</HideBtn>
                                <HideBtn>Returned</HideBtn>
                            </HideList>
                        )}
                    </UpBlock>
                    <DownBlock>
                        <ItemD>
                            <OutButton onClick={() => handleSetActiveId(4)} isActive={activeIds.includes(4)}>
                                <i className="fa-solid fa-greater-than mr-2"></i>
                                Account
                            </OutButton>
                        </ItemD>
                        {activeIds.includes(4) && (
                            <HideList>
                                <HideBtn>New...</HideBtn>
                                <HideBtn>Profile</HideBtn>
                                <HideBtn>Settings</HideBtn>
                                <HideBtn>Sign out</HideBtn>
                            </HideList>
                        )}
                    </DownBlock>
                </ListChanges>
            </FourthOutside>

            <GraySection/>

            {/*Section 5*/}

            <FifthOutside>
                <SliderBarHeader href="https://getbootstrap.com/" className="p-3">
                    <i className="fa-brands fa-bootstrap fa-2x mr-2"></i>
                    <DSpan>List group</DSpan>
                </SliderBarHeader>
                <ListGroup>
                    <ItemE href="#" isActive>
                        <ListTitle>
                            <HTitle>List group item heading</HTitle>
                            <Week isActive>Wed</Week>
                        </ListTitle>
                        <ListP>
                            <small>Some placeholder content in a paragraph below the heading and data.</small>
                        </ListP>
                    </ItemE>
                    <ItemE href="#">
                        <ListTitle>
                            <HTitle>List group item heading</HTitle>
                            <Week>Tues</Week>
                        </ListTitle>
                        <ListP>
                            <small>Some placeholder content in a paragraph below the heading and data.</small>
                        </ListP>
                    </ItemE>
                    <ItemE href="#">
                        <ListTitle>
                            <HTitle>List group item heading</HTitle>
                            <Week>Mon</Week>
                        </ListTitle>
                        <ListP>
                            <small>Some placeholder content in a paragraph below the heading and data.</small>
                        </ListP>
                    </ItemE>
                    <ItemE href="#">
                        <ListTitle>
                            <HTitle>List group item heading</HTitle>
                            <Week>Wed</Week>
                        </ListTitle>
                        <ListP>
                            <small>Some placeholder content in a paragraph below the heading and data.</small>
                        </ListP>
                    </ItemE>
                    <ItemE href="#">
                        <ListTitle>
                            <HTitle>List group item heading</HTitle>
                            <Week>Tues</Week>
                        </ListTitle>
                        <ListP>
                            <small>Some placeholder content in a paragraph below the heading and data.</small>
                        </ListP>
                    </ItemE>
                    <ItemE href="#">
                        <ListTitle>
                            <HTitle>List group item heading</HTitle>
                            <Week>Mon</Week>
                        </ListTitle>
                        <ListP>
                            <small>Some placeholder content in a paragraph below the heading and data.</small>
                        </ListP>
                    </ItemE>
                    <ItemE href="#">
                        <ListTitle>
                            <HTitle>List group item heading</HTitle>
                            <Week>Wed</Week>
                        </ListTitle>
                        <ListP>
                            <small>Some placeholder content in a paragraph below the heading and data.</small>
                        </ListP>
                    </ItemE>
                    <ItemE href="#">
                        <ListTitle>
                            <HTitle>List group item heading</HTitle>
                            <Week>Tues</Week>
                        </ListTitle>
                        <ListP>
                            <small>Some placeholder content in a paragraph below the heading and data.</small>
                        </ListP>
                    </ItemE>
                    <ItemE href="#">
                        <ListTitle>
                            <HTitle>List group item heading</HTitle>
                            <Week>Mon</Week>
                        </ListTitle>
                        <ListP>
                            <small>Some placeholder content in a paragraph below the heading and data.</small>
                        </ListP>
                    </ItemE>
                    <ItemE href="#">
                        <ListTitle>
                            <HTitle>List group item heading</HTitle>
                            <Week>Wed</Week>
                        </ListTitle>
                        <ListP>
                            <small>Some placeholder content in a paragraph below the heading and data.</small>
                        </ListP>
                    </ItemE>
                    <ItemE href="#">
                        <ListTitle>
                            <HTitle>List group item heading</HTitle>
                            <Week>Tues</Week>
                        </ListTitle>
                        <ListP>
                            <small>Some placeholder content in a paragraph below the heading and data.</small>
                        </ListP>
                    </ItemE>
                    <ItemE href="#">
                        <ListTitle>
                            <HTitle>List group item heading</HTitle>
                            <Week>Mon</Week>
                        </ListTitle>
                        <ListP>
                            <small>Some placeholder content in a paragraph below the heading and data.</small>
                        </ListP>
                    </ItemE>
                </ListGroup>
            </FifthOutside>

            <GraySection/>

        </SidebarsRoot>
    );
}

export default Sidebars;

const HideBtn = styled.button`
  font-size: .875em;
  padding-left: 0.5rem;
  margin-bottom: 0.5rem;
`;

const HideList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 1rem;
  padding-bottom: 1rem;
`;

const ListChanges = styled.ul`
  padding-left: 0;
  list-style: none;
`;

const ListP = styled.p`
  margin-bottom: 0.5rem;
  line-height: 1;
  width: 83.33333333%;
`;

const Week = styled.small<{
    isActive?: boolean,
}>`
  color: #6c757d;
  font-weight: 900;

  ${props => props.isActive && `
        color: #fff;
  `}
`;

const HTitle = styled.h6`
  font-weight: 900;
`;

const ListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.5rem;
`;

const ItemE = styled.a<{
    isActive?: boolean,
}>`
  position: relative;
  display: block;
  padding: .5rem 1rem;
  color: #212529;
  text-decoration: none;
  background-color: #fff;
  border: 0.5px solid rgba(0, 0, 0, .125);

  ${props => props.isActive && `
        color: #fff;
        background-color: #0d6efd;
        border-color: #0d6efd;
  `}
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0;
  border-bottom: 1px solid #dee2e6
`;

const FifthOutside = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 380px;
`;

const DownBlock = styled.div`
  padding-top: 1.5rem;
  padding-left: 0.5rem;
`;

const OutButton = styled.button<{
    isActive: boolean
}>`
  color: rgb(98, 98, 98);
  border-radius: .25rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  padding: .25rem 0.5rem;

  :hover{
    background-color: #d2f4ea;
  }

  ${props => props.isActive && css`
    background-color: #d2f4ea;
    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25);
    
    i{
      transform: rotate(90deg);
    }
  `}
`;

const ItemD = styled.li`
  margin-bottom: 0.75rem;
`;

const UpBlock = styled.div`
  padding-top: 1rem;
  padding-left: 0.5rem;
  border-bottom: 1px solid #dee2e6;
`;

const BeneathB = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-shrink: 0;
  border-top: 1px solid #dee2e6;
  padding: 1rem;
`;

const DSpan = styled.span`
  font-size: 1.25rem;
  font-weight: 900;
`;

const FourthOutside = styled.div`
  flex-shrink: 0;
  padding: 1rem;
  width: 280px;
`;

const PhotoBImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 24px;
  height: 24px;
`;

const ItemC = styled.a<{
    isActive?: boolean,
}>`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #dee2e6;
  display: block;
  color: #0d6efd;
  text-decoration: none;

  ${props => props.isActive && `
        color: #fff;
        background-color: #0d6efd;
  `}
`;

const BUl = styled.ul`
  text-align: center;
  margin-bottom: auto;
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  list-style: none;
`;

const ThirdOutside = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 72px;
`;

const ItemB = styled.a<{
    isActive?: boolean,
}>`
  border-radius: .25rem;
  color: black;
  display: block;
  padding: .5rem 1rem;
  text-decoration: none;
  list-style: none;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;

  ${props => props.isActive && `
        color: #fff;
        background-color: #0d6efd;
  `}
`;

const SecondOutside = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 1rem;
  width: 280px;
`;

const BoldP = styled.p`
  font-weight: 900;
`;

const PhotoAImg = styled.img`
  border-radius: 50%;
  margin-right: .5rem;
  width: 32px;
  height: 32px;
`;

const Beneath = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-shrink: 0;
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: #b8b9bb;
  padding-top: 1rem;
`;

const ItemA = styled.a<{
    isActive?: boolean,
}>`
  background: 0 0;
  border: 0;
  border-radius: .25rem;
  color: #fff;
  display: block;
  padding: .5rem 1rem;
  text-decoration: none;
  list-style: none;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;

  ${props => props.isActive && `
        color: #fff;
        background-color: #0d6efd;
  `}
`;

const AUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  flex-direction: column;
  margin-bottom: auto;
  padding-top: 1rem;
`;

const ASpan = styled.span`
  font-size: 1.5rem;
`;

const SliderBarHeader = styled.a<{
    isWhite?: boolean,
}>`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: black;
  padding-bottom: 1rem;
  border-bottom: solid 1px #b8b9bb;
  
  ${props => props.isWhite && css`
    color: white;
  `}
`;

const FirstOutside = styled(SecondOutside)`
  background-color: #212529;
  color: #fff;
`;

const GraySection = styled.div`
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
`;

const SidebarsRoot = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 100vh;
  overflow-y: hidden;
`;
