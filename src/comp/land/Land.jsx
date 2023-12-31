import React, { useState, useEffect } from "react";
import { useParallax } from "react-scroll-parallax";
import "./style.css";
import Rocket from "../../assets/rocket.png";
import "./bg.css";
import Moon from "../../assets/moon.png";
import SpaceShip from "../../assets/rocket1.png";
import Stars from "../../assets/stars.png";
import Countdown from "../countdown/Countdown";
import asrto from "../../assets/astro.png";
import vision from "../../assets/timer.png";
import TimeLine from "../timeline/Timeline";
import Theme from "../Themes/Theme";
import Sponsers from "../Sponser/Sponsers";
import Footer_part from "../Footer/Footer_part";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cguests from "../Chiefguests/Cguests";
import Faq from "react-faq-component";
import data from "../FAQ/Faq";
import Contact from "../contact/Contact";
import backgroundImage from "../../assets/stars1.jpg";
import Team from "../Team/Team";
const cards = [
  {
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
    title: "Burgundy Flemming",
    subtitle: "Advertising",
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg",
    title: "Nigel Nigel",
    subtitle: "Sound & Vision",
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg",
    title: "Caspian Bellevedere",
    subtitle: "Accounting",
  },
];

const Land = ({
  homeref,
  aboutRef,
  themesRef,
  timelineRef,
  chiefguestsRef,
  sponsorsRef,
  faqsRef,
  teamRef,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const back = useParallax({
    speed: 30,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const calculateParallaxTranslateY = (width) => {
    if (width > 1200) {
      return [190, -90];
    } else if (width > 768) {
      return [100, -5];
    } else {
      return [100, -5];
    }
  };

  const calculateParallaxTranslateX = (width) => {
    if (width > 1200) {
      return [-170, 40];
    } else if (width > 768) {
      return [-200, 10];
    } else {
      return [-100, 10];
    }
  };

  // const AstroTranslateY = (width) => {
  //   if (width > 1200) {
  //     return [100,300];
  //   } else if (width < 992) {
  //     return [-200,300];
  //   } else {
  //     return [200,300];
  //   }
  // };
  // const AstroTranslateX = (width) => {
  //   if (width > 1200) {
  //     return [-100,-100];
  //   } else if (width <992) {
  //     return [-10,-100];
  //   } else {
  //     return [200,-100];
  //   }
  // };

  // const astro_man = useParallax({
  //   translateX: AstroTranslateX(windowWidth) ,
  //   translateY:AstroTranslateY(windowWidth)
  // })

  const MoonTranslateX = (width) => {
    if (width > 1200) {
      return [40, 10];
    } else if (width > 768) {
      return [-50, 10];
    } else {
      return [60, 65];
    }
  };
  const MoonTranslateY = (width) => {
    if (width > 1200) {
      return [-70, 10];
    } else if (width > 768) {
      return [-100, 10];
    } else {
      return [-10, -50];
    }
  };
  console.log(windowWidth);
  const image_rocket = useParallax({
    translateY: calculateParallaxTranslateY(windowWidth),
    translateX: calculateParallaxTranslateX(windowWidth),
  });
  const moon = useParallax({
    translateX: MoonTranslateX(windowWidth),
    translateY: MoonTranslateY(windowWidth),
  });
  // const spaceshipX = (width) => {
  //   if (width > 1200) {
  //     return [-50, 100];
  //   } else if (width > 768) {
  //     return [-50, 100];
  //   } else {
  //     return [-100, 100];
  //   }
  // };
  // const spaceshipY = (width) => {
  //   if (width > 1200) {
  //     return [30, -40];
  //   } else if (width > 762) {
  //     return [30, -40];
  //   } else {
  //     return [170, -100];
  //   }
  // };
  // const space_ship = useParallax({
  //   translateX: spaceshipX(windowWidth),
  //   translateY: spaceshipY(windowWidth),
  //   // scale: [0.9, 1.4],
  // });

  const stars = useParallax({
    speed: 10,
  });

  const line = useParallax({
    translateX: [-30, 20],
  });
  const head = useParallax({
    translateX: [-60, 20],
  });

  // Add an event listener to adjust parallax values on window resize
  // window.addEventListener("resize", () => {
  //   if (window.innerWidth > 1024) {
  //     // Adjust values for smaller screens
  //     space_ship.translateX = [45, 50];
  //     space_ship.translateY = [50, -50];
  //     // space_ship.scale = [0.7, 1.2];
  //     // Adjust stars speed for smaller screens
  //     stars.speed = 5;
  //   } else {
  //     // Reset values for larger screens
  //     space_ship.translateX = [45, 50];
  //     space_ship.translateY = [50, -50];
  //     // space_ship.scale = [0.9, 1.4];

  //     // Reset stars speed for larger screens
  //     stars.speed = 10;
  //   }
  // });
  const styles = {
    bgColor: "transparent",
    backgroundImage: "url(../../assets/stars1.jpg)",
    titleTextColor: "white",
    rowTitleColor: "white",
    rowContentColor: "grey",
    arrowColor: "red",
  };

  return (
    <div className="landing_page" ref={homeref}>
      {/* <section className='page_1' >
        <div className='upper_part'>
            <div className='logo_image'>
                Logo
            </div>
            <div className='right_text'>
                <h1>Hackathons</h1>
            </div>
        </div>
        
      </section> */}
     
      <section className="page_2" ref={back.ref}>
        <div className="head_1" >
          <div className="slide_1">
            <h1>AVISHKAAR Hackathon 2023</h1>
            <div className="con_1">
              <p>-Igniting Inventions, Inspiring Innovators</p>
            </div>

            <div className="mt-6">
              <a
                href="#_"
                class="relative inline-flex items-center justify-start px-8 py-2 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
              >
                <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span class="relative w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  Register
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="image_2">
          <div className="astro">
            <img src={asrto} alt="" />
          </div>
          <div className="moon" ref={moon.ref}>
            <img src={Moon} alt="" className="moon_img" />
          </div>
          <div className="rocket" ref={image_rocket.ref}>
            <img src={Rocket} />
          </div>
        </div>
      </section>
      <section className="timer_sec" ref={stars.ref}>

        <div className="about_section" >
          <h1 ref={aboutRef}>ABOUT</h1>
          

          <p>
            "Welcome to <span>AVISHKAAR</span>, a national-level hackathon dedicated to
            harnessing innovation and technology to tackle real-time challenges
            in India's rural and urban communities. This event unites creative
            minds, tech enthusiasts, and problem solvers from across the country
            to collaborate on solutions that can make a positive societal
            impact. Aavishkar's primary mission is to offer students a unique
            platform to address pressing issues in both rural and urban contexts
            by nurturing innovative solutions. Focusing on themes like digital
            empowerment, agriculture, healthcare, education, sustainability, and
            more, we strive to ignite meaningful change in our nation."
          </p>
        </div>
        <div className="timer relative">
          <img src={vision} alt="" className="absolute -z-10" />
          <Countdown />
        </div>
      </section>

      <Theme themesRef={themesRef} />
      {/* <div className="gradi"></div> */}
      <div className="col-md-12 text-center  " ref={head.ref}>
        <h3 className="animate-character "> TIMELINE</h3>
      </div>

      <TimeLine timelineRef={timelineRef}/>

      <Cguests chiefguestsRef={chiefguestsRef} />
      <Sponsers  sponsorsRef={sponsorsRef}/>
      <div
        className="faq"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          fontFamily: "'DM Sans', sans-serif" // Use camelCase for font-family
        }}
        
      >
        <div className="col-md-12 text-center " ref={line.ref}>
          <h3 className="animate-character" ref={faqsRef}> FAQs</h3>
        </div>
        <Faq data={data} styles={styles} />
      </div>
      <Team teamRef={teamRef} />
      <Footer_part />
    </div>
  );
};

export default Land;
