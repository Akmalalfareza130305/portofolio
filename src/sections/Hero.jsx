
import React from "react";
import HeroText from "../components/HeroText";
import ParallaxBacckground from "../components/ParallaxBackground";

const Hero = () => {
  return (
    <section className="flex items-start justify-center 
md:items-start md:justify-start min-h-screen overflow-hidden c-space">
  <HeroText /> 
  <ParallaxBacckground />
</section>
  );
};

export default Hero;