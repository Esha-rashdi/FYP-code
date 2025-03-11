import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Page from "../Page/Page";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Logos from "../Logos/Logos";
import Testimonial from "../Testimonial/Testimonial";
import Features from "../Features/Features";
import Video from "../Video/Video";
import Pricing from "../Pricing/Pricing";
import FAQ from "../FAQ/FAQ";
import CTA from "../CTA/CTA";
import Footer from "../Footer/Footer";
import Accordion from "../Accordion/Accordion";
import Navigation from "../Navigation/Navigation";
import UserLogin from "../FirebaseLogin/UserLogin";
import SignupForm from "../FirebaseLogin/UserSignup";
import FileUpload from "../FileUpload/FileUpload"; // Import FileUpload

const App = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Page>
              <Header>
                <Navigation />
                <Hero />
              </Header>
              <Logos />
              <Testimonial>
                <h5 className="h5 testimonial__heading">
                  Developers Waste 50% of Their Time Converting Designs into Code - Costing Companies $85 Billion Annually
                </h5>
                <div className="testimonial__author-section">
                  <p className="text-reg testimonial__organization">
                    WebDesign2Code brings efficiency to your workflow
                  </p>
                </div>
              </Testimonial>
              <Features />
              <Video />
              <Pricing />
              <FAQ>
                <Accordion />
              </FAQ>
              <CTA />
              <Footer />
            </Page>
          }
        />
        <Route path="/upload" element={<FileUpload />} /> {/* Fixed: No unnecessary re-render */}
        <Route
          path="/login"
          element={
            !isSignup ? (
              <UserLogin onSignupClick={() => setIsSignup(true)} />
            ) : (
              <SignupForm switchToLogin={() => setIsSignup(false)} />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
