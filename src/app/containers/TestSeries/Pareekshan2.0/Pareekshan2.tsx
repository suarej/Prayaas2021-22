import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { PareekshanTwoData } from "./linksTwo";

const SectionContainer = styled.div`
  ${tw`
w-full
md:w-3/4
items-center
justify-center
`}
`;

const ListContainer = styled.ul`
  ${tw`
            flex
            flex-col
            mb-7
            list-none
            bg-gray-50  
            mb-20
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
        mb-16
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
        p-2
        // mb-20
        // shadow-lg
    `};
`;

export function PareekshanTwoDetails() {
  return (
    <SectionContainer>
      <Title> Pareekshan 2.0 </Title>
      {PareekshanTwoData.map((el) => {
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
