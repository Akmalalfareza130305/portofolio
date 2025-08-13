
import React from "react";
import HeroText from "../components/HeroText";
import ParallaxBacckground from "../components/ParallaxBackground";
import { Canvas } from "@react-three/fiber";
import { Astronaut } from "../components/Astronaut";
import { OrbitControls } from "@react-three/drei";


const Hero = () => {
  return (
    <section className="flex items-start justify-center 
md:items-start md:justify-start min-h-screen overflow-hidden c-space">
  <HeroText /> 
  <ParallaxBacckground />
  <figure className="absolute inset-0" style={{ width: "100vw", height: "100vh" }}>
    <Canvas>
     <Astronaut />
     <OrbitControls />
    </Canvas>
  </figure>
</section>
  );
};

export default Hero;