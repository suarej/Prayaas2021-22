import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PareekshanOneData } from "./linksOne";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

const SectionContainer = styled.div`
  ${tw`
        w-full
        md:w-3/4
        md:mt-5
        items-center
        justify-center
        bg-blue-50
        rounded-md
`}
`;

const ListContainer = styled.ul`
  ${tw`
            flex
            flex-col
            bg-gray-50
            // mb-7
            list-none
            
        `};
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
        text-xs
        text-blue-700
        font-medium
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
        md:text-4xl
        font-medium
        md:font-black
        md:leading-normal
    `};
`;

const Heading = styled.h1`
  ${tw`
        w-full
        items-center
        justify-center
        text-center
        text-gray-500
        text-xl
        md:text-xl
        font-medium
        md:font-normal
        md:leading-normal
    `};
`;

const StepIcon = styled.span`
  ${tw`
        text-red-600
        text-2xl
        p-2
        
    `};
`;

const StepContainer = styled.div`
  ${tw`
        flex
        w-full
        items-center
        justify-center
        transition-colors
        hover:text-red-500
        p-1
        mb-4
        shadow-lg
    `};
`;

export function PareekshanOneDetails() {
  return (
    <SectionContainer>
      <Title> Pareekshan 1.0 </Title>
      {PareekshanOneData.map((el) => {
        return (
          <ListContainer>
            <Heading>{el.Week}</Heading>
            <StepContainer>
              <StepIcon>
                <FontAwesomeIcon icon={faPaperclip} />
              </StepIcon>
              <NavItem>
                <a href={el.pdfLink} target="_blank">
                  {" "}
                  {el.name}{" "}
                </a>
              </NavItem>
            </StepContainer>
          </ListContainer>
        );
      })}
    </SectionContainer>
  );
}
