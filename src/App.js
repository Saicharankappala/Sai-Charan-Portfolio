import React, { useState, useEffect, lazy, Suspense } from "react";
import Loader from "./components/Loader";

const Navbar = lazy(() => import("./components/Navbar"));
const LandingPage = lazy(() => import("./components/LandingPage"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const WorkExperience = lazy(() => import("./components/WorkExperience"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Chatbot = lazy(() => import("./components/Chatbot"));

function App() {
  const [showSections, setShowSections] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [isChatbotMinimized, setIsChatbotMinimized] = useState(true);

  const handleExploreClick = () => {
    setShowSections(true); // Show other sections
  };

  const handleBackToLanding = () => {
    setShowSections(false); // Return to the Landing Page
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const landingPage = document.getElementById("home");
      const landingPageHeight = landingPage ? landingPage.offsetHeight : 0;

      // If scroll position is past the landing page, show the chatbot
      if (window.scrollY > landingPageHeight) {
        setShowChatbot(true);
      } else {
        setShowChatbot(false); // Hide the chatbot while on the landing page
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleChatbot = () => {
    setIsChatbotMinimized((prev) => !prev);
  };

  return (
    <Suspense fallback={<Loader />}>
      <div>
        {/* Conditionally render Navbar */}
        {showSections && <Navbar onBackToLanding={handleBackToLanding} />}

        {/* Landing Page */}
        {!showSections && <LandingPage onExplore={handleExploreClick} />}

        {/* Main Sections */}
        {showSections && (
          <div>
            <About id="about" />
            <Skills />
            <WorkExperience />
            <Projects />
            <Contact />
          </div>
        )}

        {/* Chatbot */}
        {showChatbot && (
          <div>
            <button
              style={{
                position: "fixed",  // Changed to fixed for consistent placement
                bottom: isChatbotMinimized ? "20px" : "80px", // Position at the bottom
                right: "20px",
                background: "#64ffda",
                border: "none",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
              onClick={toggleChatbot}
            >
              {isChatbotMinimized ? "💬" : "×"}
            </button>
            {!isChatbotMinimized && <Chatbot />}
          </div>
        )}
      </div>
    </Suspense>
  );
}

export default App;
