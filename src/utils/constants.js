const logos = [
  new URL("../assets/LogoBanner/logo1.svg", import.meta.url).href,
  new URL("../assets/LogoBanner/logo2.svg", import.meta.url).href,
  new URL("../assets/LogoBanner/logo1.svg", import.meta.url).href,
  new URL("../assets/LogoBanner/logo3.svg", import.meta.url).href,
  new URL("../assets/LogoBanner/logo4.svg", import.meta.url).href,
  new URL("../assets/LogoBanner/logo2.svg", import.meta.url).href,
  new URL("../assets/LogoBanner/logo4.svg", import.meta.url).href,
  new URL("../assets/LogoBanner/logo3.svg", import.meta.url).href,
];

const features = [
  {
    gridArea: "tl",
    image: new URL("../assets/features/thumbs-up.svg", import.meta.url).href,
    heading: "AI-Powered Code Generation",
    description: `Transform any web design into production-ready code in minutes
                   with our advanced AI technology.`,
  },
  {
    gridArea: "tr",
    image: new URL("../assets/features/globe.svg", import.meta.url).href,
    heading: "Export Ready",
    description: `Download production-ready code in your preferred format, ready 
                  for immediate deployment.Whether it's HTML, CSS, or any other format, 
                  your code is optimized and deployment-ready with zero extra effort.`,
  },
  {
    gridArea: "bl",
    image: new URL("../assets/features/flag.svg", import.meta.url).href,
    heading: "Pixel-Perfect Accuracy",
    description: `Get precise code that perfectly matches your design
                  specifications, every single time.
                  Ensure that your final product mirrors your vision down to 
                  the smallest detail, leaving no room for compromise.`,
  },
  {
    gridArea: "blm",
    image: new URL("../assets/features/graphic-circle.svg", import.meta.url)
      .href,
    heading: "Responsive By Default",
    description: `Generate fully responsive layouts that work flawlessly across all devices and screen sizes.
                  From mobile to desktop, your websites will adapt seamlessly, 
                  delivering an optimal experience for every user.`,
  },
  {
    gridArea: "brm",
    image: new URL("../assets/features/hash.svg", import.meta.url).href,
    heading: "Clean, Semantic Code",
    description: `Receive well-structured, maintainable code that follows modern development best practices.
                  This ensures easy collaboration, scalability, and future-proofing for your projects.`,
  },
  {
    gridArea: "br",
    image: new URL("../assets/features/branch.svg", import.meta.url).href,
    heading: "Real-Time Preview",
    description: `See your design come to life instantly with our live preview feature as code is generated.
                  Instant feedback lets you iterate quickly, ensuring your designs are perfect before deployment.`,
  },
];

const pricingData = [
  {
    darkMode: false,
    plan: "Individual Plan",
    planIcon: new URL("../assets/pricing/individual-plan.svg", import.meta.url)
      .href,
    planPrice: 9.99,
    bullets: [
      "AI-Powered Code Generation",
      "Pixel Perfect Design Conversion",
      "Responsive Code by Default",
      "Real Time Preview",
      "Export to HTML and CSs",
    ],
    CallToAction: "Start Free Trial",
  },
  {
    darkMode: true,
    plan: "Team Plan",
    planIcon: new URL("../assets/pricing/team-plan.svg", import.meta.url).href,
    planPrice: 19.99,
    bullets: [
      "Everything in the Individual Plan",
      "Unlimited Exports",
      "Advanced Design-to-Code Features",
      "Enhanced Customization Options",
      "Access to Exclusive Templates",
    ],
    CallToAction: "Start Free Trial",
  },
  {
    darkMode: false,
    plan: "Enterprise Plan",
    planIcon: new URL("../assets/pricing/enterprise-plan.svg", import.meta.url)
      .href,
    bullets: [
      "Everything in the Team Plan",
      "Optimized Code Customization Services",
      "Export in Specialized Formats",
      "Expendited Support for Critical Issues",
      
    ],
    CallToAction: "Contact support",
  },
];

const faqItems = [
  {
    id: 1,
    question: "How accurate is the code generation?",
    answerHeading: "How do I get started with WebDesign2Code?",
    answer: `Our Ai generates pixel-perfect code that matches your design with 90%
            accuracy.Each element is precisely positioned and styles to maintain
            design fidelity.`,
  },
  {
    id: 2,
    question: "What file formats are supported?",
    answerHeading: "How do I get started with WebDesiign2Code?",
    answer: `We support all major design file formats PNG,JPG files.The code can be 
             exported in HTML, CSS.`,
  },
  {
    id: 3,
    question: "Is the generated code production-ready?",
    answerHeading: "How do I get started with WebDesign2Code?",
    answer: `Yes! The code follows modern best practices ,is fully responsive.
             and optimized for performance.it's ready to use for Backend and all production services
             after generation`,
  },
  {
    id: 4,
    question: "Do you offer custom solutions for enterprise?",
    answerHeading: "How do I get started with WebDesign2Code?",
    answer: `Absolutely! Our enterprise plan includes custom API access,dedicated
             support,and tailored solutions to meet you organization's specific needs`,
  },
  {
    id: 5,
    question: "How does WebDesign2Code handle responsive design?",
    answerHeading: "How do I get started with WebDesign2Code?",
    answer: `WebDesign2Code automatically generates 
             responsive layouts that adapt seamlessly to different screen sizes and devices, ensuring your website looks
             perfect on desktops, tablets, and smartphones.`,
  },
];

export { logos, features, pricingData, faqItems };
