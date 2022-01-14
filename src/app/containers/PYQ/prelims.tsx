import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { PrelimLinks } from "./prelimslinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

const SectionContainer = styled.div`
  ${tw`
  max-w-screen-2xl
w-full
flex
flex-col
items-center
bg-blue-50
mt-5
`}
`;

const ListContainer = styled.ul`
  ${tw`
  flex
  flex-col
  md:w-full
  md:flex-row
  mb-7
  list-none
  items-center
  justify-center
        `};
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
        
    text-xs
    text-blue-600
    font-medium
    m-1
    md: ml-2
    md:mr-2
    md: text-base
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-500
    `};
`;

const Title = styled.h1`
  ${tw`
        w-full
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

const Heading = styled.h1`
  ${tw`
        w-full
        md:w-1/3
        text-center
        text-black
        text-xl
        mb-2
        md:text-xl
        font-medium
        md:font-black
        md:leading-normal
    `};
`;

const StepIcon = styled.span`
  ${tw`
        text-red-500
        text-2xl
    `};
`;

const StepContainer = styled.div`
  ${tw`
        flex
        transition-colors
        hover:text-red-500
        shadow-lg
        pl-2
        pr-2
        m-1

    `};
`;

export function PrelimsPYQ() {
  return (
    <SectionContainer>
      <Title> Civil Services (Preliminary) </Title>

      {PrelimLinks.map((el) => {
        return (
          <ListContainer>
            <Heading>{el.Year}</Heading>

            <StepContainer>
              <StepIcon>
                <FontAwesomeIcon icon={faFilePdf} />
              </StepIcon>
              <NavItem>
                <a href={el.urlPaperI} target="_blank">
                  {el.headerI}
                </a>
              </NavItem>
            </StepContainer>

            <StepContainer>
              <StepIcon>
                <FontAwesomeIcon icon={faFilePdf} />
              </StepIcon>
              <NavItem>
                <a href={el.urlPaperII} target="_blank">
                  {el.headerII}
                </a>
              </NavItem>
            </StepContainer>
          </ListContainer>
        );
      })}
    </SectionContainer>
  );
}
