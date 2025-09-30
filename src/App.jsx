import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const App = () => {
  // ✅ fixed naming here
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />

      <div className="container">
        <section id="hero">
          <Hero />
        </section>

        <section id="program">
          <Title subtitle="Our Program" title="What We Offer" />
          <Programs />
        </section>

        <section id="about">
          {/* ✅ About can trigger video open */}
          <About setPlayState={setPlayState} />
        </section>

        <section id="campus">
          <Title subtitle="Gallery" title="Campus Photos" />
          <Campus />
        </section>

        <section id="testimonials">
          <Title subtitle="Testimonials" title="What Students Say" />
          <Testimonials />
        </section>

        <section id="contact">
          <Title subtitle="Contact Us" title="Get in Touch" />
          <Contact />
        </section>

        <Footer />
      </div>

      {/* ✅ Video player overlay */}
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
