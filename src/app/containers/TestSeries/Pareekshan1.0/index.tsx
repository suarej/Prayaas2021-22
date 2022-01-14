import React from "react";
import { Footer } from "../../../components/footer";
import { NavBar } from "../../../components/navbar";
import styled from 'styled-components';
import tw from "twin.macro";
import { PareekshanOneDetails } from "./PareekshanOne";
import { Marginer } from "../../../components/marginer";

const PageContainer = styled.div`${tw`
w-full
h-full
flex
flex-col
items-center
overflow-x-hidden
`}
`;

export function PareekshanOne () {
    return (
        <PageContainer> 
        <NavBar/>
        <Marginer direction="vertical" margin="2em"/>

            <PareekshanOneDetails/>
        <Footer/>
        </PageContainer>
    )
}