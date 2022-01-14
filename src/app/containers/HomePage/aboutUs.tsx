import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";
import aditya from '../../../assets/images2/Aditya.png'
import Chaitanya from '../../../assets/images2/chaitanya.png'
import Mohit from '../../../assets/images2/Mohit.png'
import Vishal from '../../../assets/images2/vishal.png'




const AboutUsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-col
        items-center
        justify-center
        pt-2
        pb-4
        pr-7
        pl-7
        md:pl-0
        md:pt-10
        md:pb-10
        md:pr-0
        bg-white
        bg-blue-50

    `};
`;

const StepsContainer = styled.div`
  ${tw`
        flex
        justify-evenly
        flex-wrap
        // mt-7
        lg:mt-4
    `};
`;

const StepContainer = styled.div`
  ${tw`
        flex
        flex-col
        md:w-80
        items-center
        transition-colors
        hover:text-red-500
    `};
`;

const ImageContainer = styled.div`
    // height:15em;

    ${tw`
    md:m-4
    `};

    img {
        width:13em;
        height:13em;
        border-radius: 50%;
        filter: grayscale(100%);
    }

    // @media (min-width: ${SCREENS.md}) {
    //     width:14em;
    //     height:14em;
    // }

    // @media (min-width: ${SCREENS.lg}) {
    //     width:15em;
    //     height:15em;
    // }

    // @media (min-width: ${SCREENS["2xl"]}) {
    //     height:17em;
    //     width: 17em;
    // }
`;

const InfoContainer = styled.div`
    ${tw`
        flex
        flex-col
        p-3
    `};
`;

const Title = styled.h1`
    ${tw`
        w-full
        text-center
        text-black
        text-2xl
        mb-2
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `};
`;

const InfoText = styled.p`
    ${tw`
        // md:max-w-2xl
        text-sm
        md:text-base
        text-gray-500
        font-normal
        text-center
        mb-4

    `};
`;

const InfoTitle = styled.p`
    ${tw`
        text-lg
        md:text-base
        text-black
        font-normal
        text-center
        font-semibold
    `};
`;

export function AboutUs() {
    return (
        <AboutUsContainer>
                <Title> About Us ! </Title>
            <StepsContainer>
                <StepContainer>
                <ImageContainer>
                <img src={aditya} alt="bio" />
            </ImageContainer>
            <InfoContainer>
                <InfoTitle> 
                   Aaditya Deore
                    </InfoTitle>
                    <InfoTitle> 
                   Founder, Teacher, Motivator, Friend
                    </InfoTitle>
                <InfoText>
                    7+ Years of teaching experience
                </InfoText>
            </InfoContainer>
                </StepContainer>

                <StepContainer>
                <ImageContainer>
                <img src={Mohit} alt="bio" />
            </ImageContainer>
            <InfoContainer>
                <InfoTitle> 
                   Mohit Sawant
                    </InfoTitle>
                    <InfoTitle> 
                   Partner, Teacher
                    </InfoTitle>
                <InfoText>
                    6+ Years of teaching experience, go to guy for economy and environment
                </InfoText>
            </InfoContainer>
                </StepContainer>

                <StepContainer>
                <ImageContainer>
                <img src={Chaitanya} alt="bio" />
            </ImageContainer>
            <InfoContainer>
                <InfoTitle> 
                   Chaitanya Tatte
                    </InfoTitle>
                    <InfoTitle> 
                   Partner, Manager in Chief, Backbone
                    </InfoTitle>
                <InfoText>
                    5+ Years of teaching experience
                </InfoText>
            </InfoContainer>
                </StepContainer>
                <StepContainer>
                <ImageContainer>
                <img src={Vishal} alt="bio" />
            </ImageContainer>
            <InfoContainer>
                <InfoTitle> 
                   Vishal Badal
                    </InfoTitle>
                    <InfoTitle> 
                   Partner, Mentor
                    </InfoTitle>
                <InfoText>
                    5+ Years of teaching experience, go to guy for ethics, essays and international relations.
                </InfoText>
            </InfoContainer>
                </StepContainer>

            

            
            </StepsContainer>

           
        </AboutUsContainer>
    )
}