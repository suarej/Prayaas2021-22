import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useHistory } from "react-router-dom";
import NameLogo from '../../../assets/images2/Prayaas_Logo-01.svg';

interface ILogoProps {
    color?: "white" | "dark";
    bgColor?: "white" | "dark";
}

const LogoContainer = styled.div`
${tw`
flex
items-center
`};
`;

const LogoText = styled.div`
${tw`
text-xl
md:text-2xl
font-bold
text-black
m-1
`};
${({color}: any) => color === "white" ? tw`text-white` : tw`text-black`}

` as any;



const LogoImage = styled.div`
${tw`
h-48
pl-0
ml-auto
mr-auto
md:pl-8
pt-0
md:h-60
md:ml--32
cursor-pointer
`};

img{
width: auto;
height: 100%;
};

`;

const LogoImageFooter = styled.div`
${tw`
h-52
ml-auto
mr-auto
md:h-60
md:mt--6
cursor-pointer
`};

img{
width: auto;
height: 100%;
};

`;


export function Logo(props: ILogoProps) {
    const {color, bgColor} = props;

    const history = useHistory();

  const routeChange = () =>{
    history.push('/');
  }

    return <LogoContainer>
        {bgColor === 'dark' ? <LogoImageFooter onClick={routeChange}>
        <img src={NameLogo}/>
    </LogoImageFooter>  : <LogoImage onClick={routeChange}>
            <img src={NameLogo}/>
        </LogoImage>
        
         }
        
    </LogoContainer>
}

