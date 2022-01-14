import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Carousel, {
  Dots,
  slidesToShowPlugin,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import { CourseHomepage } from "../../components/courseHomepage";
import Pareekshan2 from "../../../assets/images2/Pareekshan2.0.jpeg";
import Pareekshan1 from "../../../assets/images2/Pareekshan1.0.jpeg";
import EssayModule from "../../../assets/images2/EssayModuleNov21.jpg";
import PrathamModule from "../../../assets/images2/pratham.jpeg";


const TopCarsContainer = styled.div`
  ${tw`
        max-w-screen-xl
        w-full
    `};
`;

const CarsContainer = styled.div`
  ${tw`
        w-full
        mt-9

    `};
`;

export function CoursesHomepage() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const [current, setCurrent] = useState(1);

  const HomeCourses = [
    <CourseHomepage
      name="Pratham"
      thumbnailSrc={PrathamModule}
      info=""
    />,
    <CourseHomepage
      name="Daily Writing Initiative"
      thumbnailSrc={Pareekshan1}
      info=""
    />,
    <CourseHomepage
      name="Essay Writing Module"
      thumbnailSrc={Pareekshan2}
      info="ABCD of writing a good essay."
    />,
    // <CourseHomepage
    //   name="Pareekshan 1.0"
    //   thumbnailSrc={EssayModule}
    //   info="Targeting for 2022 Prelim attempt ? Then this specially customized course is for you."
    // />,
  ];

  const numberOfDots = isMobile
    ? HomeCourses.length
    : Math.ceil(HomeCourses.length / 1.5);

  return (
    <TopCarsContainer>
      <CarsContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={HomeCourses}
          plugins={[
            "infinite",
            "clickToChange",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 2,
              },
            },
            {
              resolve: autoplayPlugin,
              options: {
                interval: 2000,
              },
            },
          ]}
          animationSpeed={1000}
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
                    numberOfSlides: 1,
                  },
                },
              ],
            },
          }}
        ></Carousel>
        <Dots value={current} onChange={setCurrent} number={numberOfDots} />
      </CarsContainer>
    </TopCarsContainer>
  );
}
