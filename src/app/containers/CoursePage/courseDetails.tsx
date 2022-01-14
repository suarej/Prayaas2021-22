import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Pareekshan2 from "../../../assets/images2/Pareekshan2.0.jpeg";
import Pareekshan1 from "../../../assets/images2/Pareekshan1.0.jpeg";
import EssayModule from "../../../assets/images2/EssayModuleNov21.jpg";
import ComprehensiveBatch from "../../../assets/images2/ComprehensiveBatch.png";
import Essaymodule01 from "../../../assets/images2/Essaymodule01.png";
import Ethicsmodule01 from "../../../assets/images2/Essaymodule01.png";
import optionalcourses from "../../../assets/images2/optionalcourses-01.png";
import prelimsBatch2020MCQ from "../../../assets/images2/prelimsBatch2020(mcq).png";
import SpecialMainsBatch from "../../../assets/images2/SpecialMainsBatch.png";
import DailyAnswerWriting from "../../../assets/images2/DailyAnswerWriting.png";
import { SCREENS } from "../../components/responsive";



const SectionContainer = styled.div`
  ${tw`
      flex
      flex-col
      md:m-20
      m-4
      mt-0
  `};
`;

const RowContainer = styled.div`
  ${tw`
      flex
      flex-col
      md:flex-row
  `};
`;

const CourseWrapper = styled.div`
  
  ${tw`
    md:w-[500px]
  `};
`;


const CourseContainer = styled.div`
  ${tw`
      flex
      flex-col
      m-2
      md:m-4
      p-2
      md:p-4
      rounded-md
      shadow-md

  `};
`;

const ThumbnailContainer = styled.div`
  // widht: 100%;
  // height: auto;

  img {
    width: 100%;
    height: 22.7em;
  }

  @media (min-width: ${SCREENS.md}) {
    img {
      width: 90%;
      height: 22.9  em;
      margin-left:auto;
    margin-right:auto;
}
@media (min-width: ${SCREENS.lg}) {
  img {
    width: 90%;
    height: 31.8em;
    margin-left:auto;
    margin-right:auto;
  }
}
@media (min-width: ${SCREENS["2xl"]}) {
    height:35em;
    width: 100%;
    margin-left:auto;
    margin-right:auto;
}
`;

const NameContainer = styled.h3`
  ${tw`
        md:text-2xl
        text-xl
        text-center
        font-bold
        text-black
        mt-1
        mb-1
        underline
        // md:bg-white
        md:p-1
    `};
`;

const InfoTextContainer = styled.h6`
  ${tw`
       text-gray-800
       md:text-lg
       text-center
       mt-3
       md: h-24
       md:bg-white
    `};
`;

export function CoursesInDetails() {
  return (
    <SectionContainer>
      <RowContainer> 

      <CourseWrapper>
      <CourseContainer>
        <ThumbnailContainer>
          <img src={prelimsBatch2020MCQ} alt="2022Prelims" />
        </ThumbnailContainer>
        <NameContainer> Pratham - Special Prelims Module for 2022 </NameContainer>

        <InfoTextContainer>
        Focused on Prelims 2022 ? Specially curated batch for 2022 Prelims.
        </InfoTextContainer>
      </CourseContainer>
      </CourseWrapper>
        
       

      <CourseWrapper>
      <CourseContainer>
        <ThumbnailContainer>
          <img src={Pareekshan2} alt="Pareekshan2.0" />
        </ThumbnailContainer>
        <NameContainer>PAREEKSHAN 2.0</NameContainer>

        <InfoTextContainer>
        This module is specially designed for those who could not clear prelims 2021. This is fast track version of Pareekshan1.0 
        </InfoTextContainer>
      </CourseContainer>
      </CourseWrapper>

        <CourseWrapper>
      <CourseContainer>
        <ThumbnailContainer>
          <img src={Essaymodule01} alt="EssayModule" />
        </ThumbnailContainer>
        <NameContainer>Essay Module</NameContainer>

        <InfoTextContainer>
          A special module designed for essay writing practice.
        </InfoTextContainer>
      </CourseContainer>
      </CourseWrapper>
      </RowContainer>

      <RowContainer> 
        <CourseWrapper>
      <CourseContainer>
        <ThumbnailContainer>
          <img src={DailyAnswerWriting} alt="Pareekshan2.0" />
        </ThumbnailContainer>
        <NameContainer>Daily Answer Writing</NameContainer>
        <InfoTextContainer>
        Daily answer writing of UPSC PYQs. This initiative is free and open for all.
        </InfoTextContainer>
      </CourseContainer>
      </CourseWrapper>

      <CourseWrapper>
      <CourseContainer>
        <ThumbnailContainer>
          <img src={SpecialMainsBatch} alt="Pareekshan2.0" />
        </ThumbnailContainer>
        <NameContainer>Special Mains Batch</NameContainer>

        <InfoTextContainer>
        This is for students who have cleared Prelims2021. Focused mentoring will be given to a very limited admissions. 
        </InfoTextContainer>
      </CourseContainer>
      </CourseWrapper>

      <CourseWrapper>
      <CourseContainer>
       
        <ThumbnailContainer>
          <img src={optionalcourses} alt="Pareekshan2.0" />
        </ThumbnailContainer>
        <NameContainer>
          Optional Courses
          </NameContainer>
        <InfoTextContainer>
        Comprehensive optional courses for Sociology, Geography and History in both mediums (Marathi and English).
        </InfoTextContainer>
      </CourseContainer>
      </CourseWrapper>
      </RowContainer>

      <RowContainer> 
        <CourseWrapper>
      <CourseContainer>
        <ThumbnailContainer>
          <img src={Ethicsmodule01} alt="Ethics Special" />
        </ThumbnailContainer>
        <NameContainer> Ethics special Batch</NameContainer>
        <InfoTextContainer>
        Special batch focused on ethics module 
        </InfoTextContainer>
      </CourseContainer>
      </CourseWrapper>

      

      <CourseWrapper>
      <CourseContainer>
       
        <ThumbnailContainer>
          <img src={ComprehensiveBatch} alt="Mission2023" />
        </ThumbnailContainer>
        <NameContainer>
          Mission 2023 Comprehensive
          </NameContainer>
        <InfoTextContainer>
        Comprehensive batch for 2023. Coming soon ... 
        </InfoTextContainer>
      </CourseContainer>
      </CourseWrapper>

      <CourseWrapper> 
      <CourseContainer>
        <ThumbnailContainer>
          <img src={Pareekshan1} alt="pareekshan1.0" />
        </ThumbnailContainer>
        <NameContainer>PAREEKSHAN 1.0</NameContainer>

        <InfoTextContainer>
          Targetting UPSC 2022-23 for first time? then this module is for you.</InfoTextContainer>
      </CourseContainer>
      </CourseWrapper>
      </RowContainer>

       

    </SectionContainer>
  );
}
