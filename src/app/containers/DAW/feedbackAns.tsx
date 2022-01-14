import React from "react";
import { allAnsAndFeedback } from "./allAnsArray";
import styled from "styled-components";
import tw from "twin.macro";

const SectionContainer = styled.div`
  ${tw`
      flex
      flex-col
  `};
`;

const FeedBackContainer = styled.div`
  ${tw`
      flex
      flex-col
  `};
`;

const ModelAnswerContainer = styled.div`
  ${tw`
      flex
      flex-col
      md: flex-row
      text-center
      items-center
      justify-around
      p-4
  `};
`;

const ModelAnswerMarathi = styled.div`
  ${tw`
  p-12
  pt-3
  pb-3
  rounded-md
  font-semibold
  border

  border-red-500
    text-red-500
    bg-transparent
    hover:bg-red-500
    hover:text-white
    hover:border-transparent

  `};
`;

const ModelAnswerEnglish = styled.div`
  ${tw`
  p-12
  pt-3
  pb-3
  rounded-md
  font-semibold
  border
  text-white

  bg-red-500
    hover:bg-transparent
    hover:text-red-500
    hover:border-red-500


  `};
`;

const Title = styled.h1`
  ${tw`
        text-center
        text-black
        text-xl
        mt-6
        mb-8
        md:text-2xl
        font-medium
        md:font-black
        md:leading-normal
    `};
`;

export function FeedbackAndAnswers(props: any) {
  const { day } = props;

  const ABC: any = allAnsAndFeedback;

  return (
    <SectionContainer>
      <FeedBackContainer>{ABC[0][day].Feedback}</FeedBackContainer>
      <Title>Model Answers</Title>
      <ModelAnswerContainer>
        {ABC[0][day].modelAnsMarathi.length > 0 && (
          <ModelAnswerMarathi>
            <a href={ABC[0][day].modelAnsMarathi} target="_blank">
              Marathi
            </a>
          </ModelAnswerMarathi>
        )}

        {ABC[0][day].modelAnsEnglish.length > 0 && (
          <ModelAnswerEnglish>
            <a href={ABC[0][day].modelAnsEnglish} target="_blank">
              English
            </a>
          </ModelAnswerEnglish>
        )}
      </ModelAnswerContainer>
    </SectionContainer>
  );
}
