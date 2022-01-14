import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Car } from "../../components/car";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import { NavBar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { AboutUs } from "../HomePage/aboutUs";
import { CoursesInDetails } from "./courseDetails";

const PageContainer = styled.div`${tw`
w-full
h-full
flex
flex-col
items-center
overflow-x-hidden

`}
`;

const Title = styled.h2`
  ${tw`
        mt-8
        text-center
        text-xl
        lg:text-5xl
        text-black
        font-extrabold
    `};
`;

export function TopCoursesDetail() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  return (
    <PageContainer>  
      <NavBar/>
      <Title> Explore our top courses </Title>
      <CoursesInDetails/>
      <Footer/>
    </PageContainer>
 
  );
}
