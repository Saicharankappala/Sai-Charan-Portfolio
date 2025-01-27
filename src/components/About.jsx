import React, { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const Avatar3D = () => {
  const { scene } = useGLTF(`${process.env.PUBLIC_URL}/assets/avatar.glb`);
  const avatarRef = useRef();

  const handlePointerOver = () => {
    if (avatarRef.current) {
      gsap.to(avatarRef.current.scale, {
        x: 1.8,
        y: 1.8,
        z: 1.8,
        duration: 0.3,
      });
      gsap.to(avatarRef.current.rotation, {
        y: "+=0.5",
        duration: 0.3,
      });
    }
  };

  const handlePointerOut = () => {
    if (avatarRef.current) {
      gsap.to(avatarRef.current.scale, {
        x: 1.5,
        y: 1.5,
        z: 1.5,
        duration: 0.3,
      });
      gsap.to(avatarRef.current.rotation, {
        y: 0,
        duration: 0.3,
      });
    }
  };

  return (
    <Canvas style={{ height: "1000px", width: "1000px" }}>
      <ambientLight intensity={1.9} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <pointLight position={[0, 5, 5]} intensity={1} color="#64ffda" />
      <primitive
        object={scene}
        ref={avatarRef}
        scale={1.5}
        position={[-1, -1, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

const About = () => {
  const aboutRef = useRef(null);
  const textRef = useRef(null);
  const avatarRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%", // Start animation when 80% of the section is visible
        end: "bottom 20%",
        scrub: true, // Smooth scrubbing
      },
    });

    timeline
      .from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
      })
      .from(
        avatarRef.current,
        {
          opacity: 0,
          scale: 0.5,
          duration: 1,
        },
        "-=0.5"
      );
  }, []);

  return (
    <div id="about" className="about" ref={aboutRef}>
      <div className="about-content">
        <div className="about-text" ref={textRef}>
          <h1>
            Hey, there <span className="wave">👋</span>
          </h1>
          <h2>
            I'm <span className="highlight">Sai Charan Kappala</span>
          </h2>
          <h3 className="role">a Software Engineer</h3>
          <p>
            <span>
              <Typewriter
                words={[
                  "Building scalable software solutions...",
                  "Creating impactful user experiences...",
                  "Solving real-world problems with technology...",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
        </div>
        <div className="avatar-container" ref={avatarRef}>
          <Avatar3D />
        </div>
      </div>
    </div>
  );
};

export default About;