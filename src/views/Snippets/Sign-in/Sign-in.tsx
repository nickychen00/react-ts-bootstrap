import styled from "styled-components";
import React from "react";




const SignIn = () => {
    return (
        <SignInRoot>
            <Main>
                <Form>
                    <img className="mb-4" src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" width="72"
                         height="57"/>

                    <h4 className="mb-3">Please sign in</h4>

                    <InputGroup isFirst type="email" placeholder="Email address"/>
                    <InputGroup type="password" placeholder="Password"/>

                    <div className="mt-2 mb-3 d-flex align-items-center">
                        <input className="mr-1" type="checkbox" id="remember"/>
                        <Label htmlFor="remember">Remember me</Label>
                    </div>

                    <SignInBtn>Sign in</SignInBtn>

                    <YearsP className="mt-5 mb-3">&copy; 2017–2021</YearsP>
                </Form>
            </Main>
        </SignInRoot>
    );
}


export default SignIn;

const YearsP = styled.p`
  color: #6c757d;
  font-weight: 500;
`;

const SignInBtn = styled.button`
  width: 100%;
  padding: .5rem 1rem;
  font-size: 1.25rem;
  border-radius: .3rem;
  color: #fff;
  background-color: #0d6efd;
  border: 1px solid #0d6efd;
  text-align: center;

  :hover {
    background-color: #0b5ed7;
    border-color: #0a58ca;
  }

  :focus {
    background-color: #0b5ed7;
    border-color: #0a58ca;
    box-shadow: 0 0 0 .25rem rgba(49, 132, 253, .5);
`;

const Label = styled.label`
    font-weight: 500;
`;

const InputGroup  = styled.input<{
    isFirst?: boolean,
}>`
  display: block;
  height: 56px;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  color: #212529;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0  0 .25rem .25rem;
  padding-left: 10px;

  ::placeholder{
    color: black;
    font-weight: 500;
  }

  :focus {
    border-color: #86b7fe;
    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25);
  }

  :focus-within{
    z-index: 2;
  }
  
  ${props => props.isFirst && `
    border-radius:.25rem .25rem 0  0 ;
    border-bottom: none;
  `}
`;

const Form = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Main = styled.main`
  max-width: 330px;
  padding: 15px;
  margin: auto;
  height: 100%;
`;

const SignInRoot = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
  height: 100vh;
`;