import React from "react";
import { useTranslation } from "react-i18next";
import Main from "./Main.tsx"
import WhyChoose from "./WhyChoose.tsx";
import OurCourses from "./OurCourses.tsx";
import Helper from "./Helper.tsx";
import Speakers from "./Speakers.tsx";
import Uzinfocom from "./Uzinfocom.tsx";
import Demand from "./Demand.tsx";
import Contact from "./Contact.tsx";
import OurValues from "./OurValues.tsx";
import Ourmission from "./Ourmission.tsx";
import Faq from "./Faq.tsx";
import Address from "./Address.tsx";
import Footer from "./Footer.tsx";

const Home = () => {
  const {t} = useTranslation()
  return (
    <div >
      <Main/> 
      <WhyChoose/>
      <OurCourses/>
      <Helper/>
      <Speakers/>
      <Uzinfocom/>
      <Demand/>
      <Contact/>
      <OurValues/>
      <Ourmission/>
      <Faq/>
      <Address/>
      <Footer/>
      {/* 
      
      
     
     
      
      
     
     
      
     
      <Footer/> */}

    </div>
  );
};

export default Home;
