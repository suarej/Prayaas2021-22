import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Button } from "../button";
import { SCREENS } from "../responsive";

interface ICarProps extends ICar {}

const CarContainer = styled.div`
  width: 80%;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
        h-96
        md:h-[535px]
        lg:h-[595px]
        p-3
        pb-4
        bg-gray-50
        rounded-md
          m-0
          sm:m-3
          // md:m-6
    `};
`;

const CarThumbnail = styled.div`
  widht: 100%;
  height: auto;

  img {
    width: 100%;
    height: 22.7em;
    border: "1px solid gray"
  }

  @media (min-width: ${SCREENS.md}) {
    img {
      width: 100%;
      height: 29.9  em;
      margin-left:auto;
    margin-right:auto;
}
@media (min-width: ${SCREENS.lg}) {
  img {
    width: 100%;
    height: 35.8em;
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

export function CourseHomepage(props: ICarProps) {
  const { thumbnailSrc, name, info } = props;

  return (
    <CarContainer>
      <CarThumbnail>
        <img src={thumbnailSrc} />
      </CarThumbnail>
    </CarContainer>
  );
}
