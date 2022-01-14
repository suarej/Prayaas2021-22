import React from "react";
import { NavBar } from "../../components/navbar";
import styled from "styled-components";
import tw from "twin.macro";
import { Footer } from "../../components/footer";
import { TopSection } from "../HomePage/topSection";
import { ReachUs } from "./ReachUs";
import { GoogleMaps } from "./gMap";
import { Marginer } from "../../components/marginer";

const ContactContainer = styled.div`
  ${tw`
w-full
h-full
flex
flex-col
`}
`;

const Title = styled.h1`
  ${tw`
        w-full
        text-center
        text-black
        text-xl
        md:p-4
        mt--8
        // bg-blue-200
        md:text-3xl
        font-medium
        md:font-semibold
        md:leading-normal
    `};
`;

const WhatsappContainer = styled.div`
  ${tw`
        flex
        flex-col
        md:flex-row
        md:m-20
        md:mt-2
    `}
`;

const NavContainer = styled.div`
  ${tw`
    items-center
    md:mt--20
    mt--10
    flex
    flex-col
    // overflow-x-hidden
    `}
`;

export function ContactUs() {
  return (
    <ContactContainer>
      <NavContainer>
        <NavBar />
      </NavContainer>
      <Marginer direction="vertical" margin="2em"/>

      <Title>Contact Us!</Title>
      <WhatsappContainer>
        <ReachUs />
        <GoogleMaps />
      </WhatsappContainer>

      <Footer />
    </ContactContainer>
  );
}
