import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Car } from "../../components/car";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";

const CoursesContainer = styled.div`
  ${tw`
        max-w-screen-lg
        w-full
        flex
        flex-col
        items-center
        justify-center
        pr-4
        pl-4
        md:pl-0
        md:pr-0
        md:mt-10
        // bg-red-100
    `};
`;

const Title = styled.h2`
  ${tw`
        text-center
        text-3xl
        lg:text-5xl
        text-black
        font-extrabold
    `};
`;

const CarsContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-wrap
        justify-center
        items-center
        mt-7
        md:mt-10

    `};
`;

export function VideoSectionHomepage() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const [current, setCurrent] = useState(0);

  const videos = [
    <iframe src='https://youtube.com/embed/hh72dXNs2Pw'
    // width="640" height="360"

      frameBorder='0'
      allow='autoplay; encrypted-media'
      allowFullScreen
      title='video'
    />,
    <iframe src='https://youtube.com/embed/WJl3plL1uD4'
    // width="640" height="360"

      frameBorder='0'
      allow='autoplay; encrypted-media'
      allowFullScreen
      title='video'
    />,
    <iframe src='https://youtube.com/embed/_MDzQtDAPK8'
    // width="640" height="360"

      frameBorder='0'
      allow='autoplay; encrypted-media'
      allowFullScreen
      title='video'
    />,
    <iframe src='https://youtube.com/embed/I-PpliSdiUc'
    // width="640" height="360"

      frameBorder='0'
      allow='autoplay; encrypted-media'
      allowFullScreen
      title='video'
    />
  ]

  const cars = [
    <Car
      name=""
      thumbnailSrc="https://youtube.com/embed/hh72dXNs2Pw"
      info="This is a free initiative and open to all. Daily morning at 8 am we post a
       Question on our Telegram Group. Aspirants have to write 
       the answers and upload to us."
    />,
    <Car
      name=""
      thumbnailSrc="https://youtube.com/embed/WJl3plL1uD4"
      info="ABCD of writing a good essay."
    />,
    <Car
      name=""
      thumbnailSrc="https://youtube.com/embed/_MDzQtDAPK8"
      info="Targeting for 2022 Prelim attempt ? Then this specially customized course is for you."
    />,
    <Car
      name=""
      thumbnailSrc="https://youtube.com/embed/I-PpliSdiUc"
      info="Special Module for GS 4 Paper"
    />
  ];

  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 1.5);

  return (
    <CoursesContainer>
      <Title> Follow us on Youtube! </Title>
      <CarsContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={cars}
          plugins={[
            "clickToChange",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        ></Carousel>
        <Dots value={current} onChange={setCurrent} number={numberOfDots} />
      </CarsContainer>
    </CoursesContainer>
  );
}
