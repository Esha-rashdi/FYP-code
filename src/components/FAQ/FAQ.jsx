import React from "react";
import "./FAQ.css";

const FAQ = ({ children }) => {
  return (
    <section className="faq">
      <div className="faq__heading-section">
        <h2 className="h2 faq__heading">Common Questions About WebDesign2Code</h2>
        <p className="text-reg faq__description">
          Everything You Need To Know About Transforfing Your Web Development Workflow
        </p>
      </div>
      {children}
    </section>
  );
};

export default FAQ;
