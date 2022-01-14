import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../../components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import {
  faTelegramPlane,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeOpenText,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const SectionContainer = styled.div`
  ${tw`
        flex
        flex-col
        w-full
        md:w-1/3
        justify-center
    `};
`;

const ButtonsContainer = styled.div`
  ${tw`
        flex
        flex-col
        bg-blue-50
        rounded-lg
        m-2
        md:m-5
        p-2
        md:p-5
        cursor-pointer
    `};
`;

const AdressContainer = styled.div`
  ${tw`
        flex
        flex-col
        bg-blue-50
        rounded-lg
        p-2
        md:p-5
        m-2
        md:m-5
    `}
`;

const AdressText = styled.p`
  ${tw`
        text-sm
        md:text-base
        text-gray-500
        font-normal 
        text-center

    `};
`;

const StepIcon = styled.span`
  ${tw`
        text-red-500
        text-4xl
        text-center
        mb-2
    `};
`;

const IconNumberContainer = styled.div`
  ${tw`
        flex
        text-center
        justify-center
        items-center
`};
`;

const Whatsappicon = styled.span`
  ${tw`
        text-green-500
        text-5xl
        text-center
        p-2
    `};
`;

const NumberContainer = styled.span`
  ${tw`
        text-black
        text-lg
    `};
`;

const TelegramIcon = styled.span`
  ${tw`
        text-blue-400
        text-5xl
        text-center
        p-2
    `};
`;

const MailIcon = styled.span`
  ${tw`
        text-red-500
        text-4xl
        text-center
        mb-2
    `};
`;

const ButtonText = styled.p`
  ${tw`
        text-sm
        md:text-base
        text-gray-500
        font-normal
        text-center
    `};
`;

export function ReachUs() {
  return (
    <SectionContainer>

      <ButtonsContainer>
        <MailIcon>
          <FontAwesomeIcon icon={faEnvelopeOpenText} />
        </MailIcon>
        <ButtonText>admin@prayaas.in</ButtonText>
      </ButtonsContainer>

      <ButtonsContainer>
          <IconNumberContainer> 
          <Whatsappicon>
          <FontAwesomeIcon icon={faWhatsapp} />
        </Whatsappicon>
        <NumberContainer>
            +91 98949 98421
        </NumberContainer>
              </IconNumberContainer>
       
        <ButtonText>Reach via Whatsapp ?</ButtonText>
      </ButtonsContainer>

      <ButtonsContainer onClick={() => window.open("https://t.me/AnsWritingUPSC")}>
      <IconNumberContainer>
        <TelegramIcon>
          <FontAwesomeIcon icon={faTelegramPlane} />
        </TelegramIcon>
        <NumberContainer>
            +91 98949 98421
        </NumberContainer>
              </IconNumberContainer>

        <ButtonText>Reach via Telegram ?</ButtonText>
      </ButtonsContainer>

      <AdressContainer>
        <StepIcon>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </StepIcon>
        <AdressText>
          Prayaas Institute of Excellence<br/> 1st Floor, Latkar Press, Pant-Pratinidhi Road, Nr Tilak Rd, Sadashiv Peth,
          <br /> Pune- 411002
        </AdressText>
      </AdressContainer>

    </SectionContainer>
  );
}
