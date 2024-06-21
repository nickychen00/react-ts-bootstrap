import {Container, Row, Col, Flex} from '@acrool/react-grid';
import styled from "styled-components";
import React from "react";

const Checkout = () => {
    return (
        <CheckoutRoot>
            <CheckoutContainer>
                {/* Section 1 */}
                <div className="py-5 text-center">
                    <img className="mx-auto mb-4"
                         src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt=""
                         width="72" height="57"/>
                    <h3>Checkout form</h3>
                    <NarrativeP>Below is an example form built entirely with Bootstrap’s form controls.
                        Each required
                        form group has a validation state that can be triggered by attempting to submit the form without
                        completing it.
                    </NarrativeP>
                </div>

                {/* Section 2 */}
                <Row className="gx-md-9">

                    {/*購物車*/}
                    <Col col={12} md={5} lg={4} className="order-md-last">
                        <h5 className="d-flex align-items-center justify-content-between mb-3">
                            <Title>Your cart</Title>
                            <Badge>3</Badge>
                        </h5>
                        <List>
                            <Item>
                                <div className="d-flex flex-column">
                                    <ItemSpan>Product name</ItemSpan>
                                    <ItemSmall>Brief description</ItemSmall>
                                </div>
                                <ItemSmall>$12</ItemSmall>
                            </Item>
                            <Item>
                                <div className="d-flex flex-column">
                                    <ItemSpan>Second product</ItemSpan>
                                    <ItemSmall>Brief description</ItemSmall>
                                </div>
                                <ItemSmall>$8</ItemSmall>
                            </Item>
                            <Item>
                                <div className="d-flex flex-column">
                                    <ItemSpan>Third item</ItemSpan>
                                    <ItemSmall>Brief description</ItemSmall>
                                </div>
                                <ItemSmall>$5</ItemSmall>
                            </Item>
                            <Item isActive>
                                <div className="d-flex flex-column">
                                    <ItemSpan isActive>Promo code</ItemSpan>
                                    <ItemSmall isActive>EXAMPLECODE</ItemSmall>
                                </div>
                                <ItemSmall isActive>-$5</ItemSmall>
                            </Item>
                            <Item>
                                <ItemSpan>Total (USD)</ItemSpan>
                                <strong>$20</strong>
                            </Item>
                        </List>

                        <Promo>
                            <PromoInput type="text" placeholder="Promo code"/>
                            <PromoBtn>Redeem</PromoBtn>
                        </Promo>
                    </Col>

                    {/*資料表單*/}
                    <Col col={12} md={7} lg={8}>
                        <h4 className="mt-5 mt-md-0 mb-3">Billing address</h4>

                        <form>
                            <Row className="gy-3">
                                <Col col={12} sm={6}>
                                    <Label>First name</Label>
                                    <Input/>
                                </Col>
                                <Col col={12} sm={6}>
                                    <Label>Last name</Label>
                                    <Input/>
                                </Col>
                                <Col col={12}>
                                    <Label>Username</Label>
                                    <Flex>
                                        <InputGroupText>@</InputGroupText>
                                        <UserInput placeholder="Username"/>
                                    </Flex>
                                </Col>
                                <Col col={12}>
                                    <Label>Email<Mark>(Optional)</Mark></Label>
                                    <Input placeholder="you@example.com"/>
                                </Col>
                                <Col col={12}>
                                    <Label>Address</Label>
                                    <Input placeholder="1234 Main St"/>
                                </Col>
                                <Col col={12}>
                                    <Label>Address 2<Mark>(Optional)</Mark></Label>
                                    <Input placeholder="Apartment or suite"/>
                                </Col>
                                <Col col={12} md={5} className="d-flex flex-column">
                                    <Label>Country</Label>
                                    <Choose>
                                        Choose...
                                        <option>Choose...</option>
                                        <option>United Sta</option>
                                    </Choose>
                                </Col>
                                <Col col={12} md={4} className="d-flex flex-column">
                                    <Label>State</Label>
                                    <Choose>
                                        Choose...
                                        <option>Choose...</option>
                                        <option>California</option>
                                    </Choose>
                                </Col>
                                <Col col={12} md={3}>
                                    <Label>Zip</Label>
                                    <Input/>
                                </Col>

                                <Col col={12}>
                                    <hr/>
                                </Col>

                                <Col col={12}>
                                    <Flex className="align-items-center">
                                        <CheckInput type="checkbox" id="SameAddress"/>
                                        <CheckLabel htmlFor="SameAddress">Shipping address is the same as my billing address</CheckLabel>
                                    </Flex>
                                    <Flex className="align-items-center">
                                        <CheckInput type="checkbox" id="SaveInformation"/>
                                        <CheckLabel htmlFor="SaveInformation">Save this information for next time</CheckLabel>
                                    </Flex>
                                </Col>

                                <Col col={12}>
                                    <hr/>
                                </Col>

                                <h4>Payment</h4>
                                <Col col={12}>
                                    <Flex className="align-items-center">
                                        <RadioInput type="radio" id="CreditCard"/>
                                        <CheckLabel htmlFor="CreditCard">Credit card</CheckLabel>
                                    </Flex>
                                    <Flex className="align-items-center">
                                        <RadioInput type="radio" id="DebitCard"/>
                                        <CheckLabel htmlFor="DebitCard">Debit card</CheckLabel>
                                    </Flex>
                                    <Flex className="align-items-center">
                                        <RadioInput type="radio" id="PayPal"/>
                                        <CheckLabel htmlFor="PayPal">PayPal</CheckLabel>
                                    </Flex>
                                </Col>
                                <Col col={12} md={6}>
                                    <Label>Name on card</Label>
                                    <Input/>
                                    <SmallMark>Full name as displayed on card</SmallMark>
                                </Col>
                                <Col col={12} md={6}>
                                    <Label>Credit card number</Label>
                                    <Input/>
                                </Col>
                                <Col col={12} md={3}>
                                    <Label>Expiration</Label>
                                    <Input/>
                                </Col>
                                <Col col={12} md={3}>
                                    <Label>CVV</Label>
                                    <Input/>
                                </Col>

                                <Col col={12}>
                                    <hr/>
                                    <ContinueBtn>Continue to checkout</ContinueBtn>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>

                {/* Section 3 */}
                <footer className="d-flex flex-column align-items-center justify-content-center my-5 pt-5">
                    <Mark>&copy; 2017–2021 Company Name</Mark>
                    <div className="mt-1">
                        <FooterA href="#" className="mr-2">Privacy</FooterA>
                        <FooterA href="#" className="mr-2">Terms</FooterA>
                        <FooterA href="#" className="mr-2">Support</FooterA>
                    </div>
                </footer>

            </CheckoutContainer>
        </CheckoutRoot>
    );
}


export default Checkout;

const FooterA = styled.a`
  color: #0d6efd;
  text-decoration: underline;
`;

const ContinueBtn = styled.button`
  width: 100%;
  padding: .5rem 1rem;
  font-size: 1.25rem;
  border-radius: .3rem;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
  line-height: 1.5;
  text-align: center;
  margin-top:0.5rem;

  :hover {
    background-color: #0b5ed7;
    border-color: #0a58ca;
  }

  :focus {
    box-shadow: 0 0 0 .25rem rgba(49, 132, 253, .5);
  }
`;

const SmallMark = styled.small`
  color: #6c757d;
`;

const RadioInput = styled.input`
  width: 1em;
  height: 1em;
  margin-right: .5rem;

  :focus {
    border-color: #86b7fe;
    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25);
    border-radius: 50%;
    appearance: none;
  }
  
  :checked{
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
`;

const CheckLabel = styled.label`
    font-weight: 500;
`;

const CheckInput = styled.input`
  width: 1em;
  height: 1em;
  margin-right: .5rem;
  flex: 0 0 auto;

  :focus {
    border-color: #86b7fe;
    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25);
    border-radius: 0.25em;
    -webkit-appearance: none;
    appearance: none;
  }
  :checked{
    background-color: #0d6efd;
    border-color: #0d6efd;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
  }
`;

const Mark = styled.span`
  color: #6c757d;
`;

const Choose = styled.select`
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

  :focus {
    border-color: #86b7fe;
    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25);
  }
`;

const UserInput = styled.input`
  flex: 1 1 auto;
  margin-left: -1px;
  border-radius: 0 .25rem .25rem 0;
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  border: 1px solid #ced4da;

  :focus {
    border-color: #86b7fe;
    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25);
  }
  ::placeholder{
    color: #6c757d;
    font-weight: 500;
  }
`;

const InputGroupText = styled.span`
  display: flex;
  align-items: center;
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: .25rem 0 0 .25rem;
`;

const Input = styled.input`
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

  :focus {
    border-color: #86b7fe;
    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25);
  }

  ::placeholder{
    color: #6c757d;
    font-weight: 500;
  }
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: .5rem;
  font-weight: 500;
`;

const PromoBtn = styled.button`
  color: #fff;
  background-color: #6c757d;
  font-weight: 400;
  text-align: center;
  border: 1px solid #6c757d;
  padding: .375rem .75rem;
  font-size: 1rem;
  border-radius: 0 .25rem 0.25rem 0;

  :hover {
    background-color: #5c636a;
    border-color: #565e64;
  }

  :focus {
    box-shadow: 0 0 0 .25rem rgba(130, 138, 145, .5);
  }
`;

const PromoInput = styled.input`
  width: 100%;
  padding: 0 .75rem;
  font-size: 1rem;
  font-weight: 400;
  color: #212529;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-right: none;
  border-radius: .25rem 0 0 .25rem;

  :focus {
    border-color: #86b7fe;
    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25);
  }

  ::placeholder{
    color: #6c757d;
    font-weight: 500;
  }
`;

const Promo = styled.form`
  padding: .5rem;
  display: flex;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, .125);
  border-radius: .25rem;
`;

const Item = styled.li<{
    isActive?: boolean,
}>`
  display: flex;
  justify-content: space-between;
  padding: .5rem 1rem;
  color: #212529;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, .125);

  :last-child{
    border-bottom: none;
  }

  ${props => props.isActive && `
     background-color: #f8f9fa;
  `}
`;

const ItemSmall = styled.small<{
    isActive?: boolean,
}>`
  color: #6c757d;
  font-weight: 700;

  ${props => props.isActive && `
      color: #198754;
  `}
`;

const ItemSpan = styled.span<{
    isActive?: boolean,
}>`
  font-weight: 500;
  line-height: 1.2;

  ${props => props.isActive && `
    color: #198754;
  `}
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  border-radius: .25rem;
  margin-bottom: 1rem;
  border: solid 1px rgba(0, 0, 0, .125);
  overflow: hidden;
`;

const Badge = styled.span`
  display: inline-block;
  padding: .35em .65em;
  font-size: .75em;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  background-color: #0d6efd;
  border-radius: 50rem;
`;

const Title = styled.span`
  color: #0d6efd;
  font-weight: 800;
`;

const NarrativeP = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  margin-top: 0.5rem;
`;

const CheckoutContainer = styled(Container)`
  max-width: 960px;
`;

const CheckoutRoot = styled.div`
  background-color: #f8f9fa;
`;
