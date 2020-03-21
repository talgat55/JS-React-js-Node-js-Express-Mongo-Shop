import React from 'react';
import styled from 'styled-components';

const SignUp = () => {
    return (
        <SignUpComponent className="sign-up">
            <div className="container">
                <div className="row">
                    <div className="sign-up__first col-lg-6 col-md-12">
                        <h3>
                            Ready to get started?
                        </h3>
                        <p>
                            Sign up or contact us
                        </p>
                    </div>
                    <div className="sign-up__second col-lg-6 col-md-12 d-md-flex  align-items-center">
                        <a href="#" className="sign-up__first-link">
                            Find gift now
                        </a>
                        <a href="#" className="sign-up__second-link">
                            how it works
                        </a>
                    </div>

                </div>
            </div>

        </SignUpComponent>
    )
};
const SignUpComponent = styled.section`
  background: #F7941E;
  padding: 50px 0;
  .sign-up{
    &__first{
      h3{
        margin-top: 0;
        font-size: 32px;  
        margin-bottom: 0;
        font-weight: bold;
      }
      p{
         font-size: 32px;  
         margin-bottom: 0;
      } 
      
    }
    &__first-link{
        display: inline-block;
        padding: 18px 35px;
        text-decoration: none;
        background: #231F20;
        border-radius: 5px;
        color: #fff;
        max-height: 57px;
        &:hover{
          opacity: .5;
        }
    }
    &__second-link{
        display: inline-block;
        padding: 18px 35px;
        text-decoration: none;
        margin-left: 5px;
        background: transparent;
        border-radius: 5px;
        color: #231F20;
        border: 1px solid #231F20;
        max-height: 57px;
        &:hover{
          opacity: .5;
        }
    }

  }
  
`;
export default SignUp;