import React from 'react';
import styled from 'styled-components';
import FirstSlider from '../../../upload/first_slider.jpg';
const FirstSlide = () => {
    return (
        <FirstSliderComponent className="first_slide">
            <div className="container">
                <div className="row  align-items-center">
                    <div className="first_slide-first col-lg-6 col-sm-12">
                        <h2 className="first_slide-first-title">
                            Find a gift for your wife or girlfriend
                        </h2>
                        <p  className="first_slide-first-text">
                            Struggling to find a gift for your wife or girlfriend?
                            No problem!
                        </p>
                        <a href="#" className="first_slide-first-link">
                            Find gift now
                        </a>
                    </div>
                    <div className="first_slide-second col-lg-6 col-sm-12"/>
                </div>
            </div>
        </FirstSliderComponent>
    )
};
const FirstSliderComponent = styled.section`
  .first_slide{
    &-first{
      &-title{
        font-size: 56px;
        line-height: 69px; 
        color: #000000;
        margin: 0 0 35px;
      }
      &-text{
        font-size: 20px;
        margin-bottom: 52px;
      }
      &-link{
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
      
    }
    &-second{
      height: 700px;
      background: url(${FirstSlider});
      background-repeat: no-repeat!important;
      background-size: cover!important;
      background-position: center center!important; 
    } 
  } 
`;
export default FirstSlide;