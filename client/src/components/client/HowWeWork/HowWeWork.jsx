import React from 'react';
import styled from 'styled-components';
import HowWeWorkImg from '../../../upload/howwework.jpg';
const HowWeWork = () => {
    return (
        <HowWeWorkComponent className="how-we-work">
            <div className="container">
                <div className="row  align-items-center">
                    <div className="how-we-work__second col-lg-6 col-sm-12"/>
                    <div className="how-we-work__first col-lg-6 col-sm-12">
                        <h2 className="how-we-work__first-title">
                            How we work
                        </h2>
                        <p className="how-we-work__first-text">
                            We’ve actually already asked hundreds of women what they want, and made a database with the
                            results. All you have to do is take our short survey that only takes seconds, and our
                            proprietary algorithm will match you with a few perfect gift options.
                        </p>
                        <a href="#" className="how-we-work__first-link">
                            Learn More
                        </a>
                    </div>

                </div>
            </div>
        </HowWeWorkComponent>
    )
};
const HowWeWorkComponent = styled.section`
   .how-we-work{
      &__first{
        padding-left: 100px;
      }
      &__first-title{
        font-size: 56px;
        line-height: 69px; 
        color: #000000;
        margin: 0 0 35px;
      }
      &__first-text{
        font-size: 20px;
        margin-bottom: 52px;
      }
      &__first-link{
        display: inline-block;
        color: #fff;
        text-decoration: none;
        padding: 15px 25px;
        background-color: var(--theme-color);
        border-radius: 5px;
        transition: all .3s;
        &:hover{
          opacity: .5;
        }
      }
      &__second{
          height: 600px;
          background: url(${HowWeWorkImg});
          background-repeat: no-repeat!important;
          background-size: cover!important;
          background-position: center center!important; 
      }
      
   }
`;
export default HowWeWork;