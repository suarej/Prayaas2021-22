import React from "react";
import { NavBar } from "../../components/navbar";
import styled from "styled-components";
import tw from "twin.macro";
import { Footer } from "../../components/footer";
import { TopSection } from "../HomePage/topSection";
import { allQueAndComponentArray } from "./allQueAnsArray";
import { FeedbackAndAnswers } from "./feedbackAns";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import * as Scroll from "react-scroll";
import { Button } from "../../components/button";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";



const PageContainer = styled.div`
  ${tw`
w-full
h-full
flex
flex-col
items-center
// overflow-x-hidden
`}
`;

const SectionContainer = styled.div`
  ${tw`
      flex
      flex-col
      md:flex-row
  `};
`;

const QueContainer = styled.div`
  ${tw`
      w-full
      // md:w-3/5
      // lg:w-3/5
      text-center
      flex
      flex-col
      p-4
  `};
`;

const QueDayContainer = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);

  ${tw`
      // shadow-md
      hover:bg-yellow-100
      cursor-pointer
      m-3
      rounded-md
`};
`;

const QueIndividualContainer = styled.div`
  ${tw`
      p-2
      font-semibold
      text-base
      text-gray-600
      ml-4
`};
`;

const DayTitleContainer = styled.div`
  ${tw`
      pt-2
      text-center
      font-bold
      text-lg
      text-red-500
`};
`;

const FeedBackContainer = styled.div`
  ${tw`
      w-full
      flex
      flex-col
      p-4
  `};
`;

const ButtonContainer = styled.div`
  ${tw`
    w-full
    text-center
`};
`;

const StepIcon = styled.span`
  ${tw`
        text-red-500
        text-3xl
        cursor-pointer
        right-6
        md: right-10
        top-4
        absolute
    `};
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    // right: 'auto',
    // bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export function DAW() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const [showAns, setShowAns] = React.useState(false);
  const [day, setDay] = React.useState("");

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal(subtitle: any) {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  var Element = Scroll.Element;
  var scroller = Scroll.scroller;

  const handleShow = (el: any) => {
    setDay(el.Day);
    setShowAns(true);
    setIsOpen(true);

    // goToTop();
    // isMobile &&
    //   scroller.scrollTo("myScrollToElement", {
    //     duration: 1500,
    //     delay: 100,
    //     smooth: true,
    //     offset: 0,
    //   });
  };

  const goToTop = () => {
    Scroll.animateScroll.scrollToTop();
  };


  return (
    <PageContainer>
     
      <NavBar />
      <SectionContainer>
        <QueContainer>
          {allQueAndComponentArray.map((el) => {
            return (
              <QueDayContainer onClick={() => handleShow(el)}>
                <DayTitleContainer>{el.Day}</DayTitleContainer>

                <QueIndividualContainer>{el.Question}</QueIndividualContainer>
              </QueDayContainer>
            );
          })}
        </QueContainer>

       

      </SectionContainer>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <FeedBackContainer>

        <StepIcon onClick={closeModal} >
              <FontAwesomeIcon icon={faWindowClose} />
            </StepIcon>

<Element name="myScrollToElement">
    {showAns && <FeedbackAndAnswers day={day} />}
</Element>
</FeedBackContainer>
      </Modal>

      {isMobile && (
        <ButtonContainer onClick={goToTop}>
          <Button text="Back To Top" />
        </ButtonContainer>
      )}

      <Footer />
    </PageContainer>
  );
}
