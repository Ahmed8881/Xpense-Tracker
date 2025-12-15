import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.theme.text};
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  color: ${(props) => props.theme.body};
  text-shadow: 1px 1px 2px ${(props) => props.theme.text};
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const StepRow = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 3rem;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};

  @media (max-width: 64em) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const StepNumber = styled.div`
  min-width: 120px;
  height: 120px;
  background-color: ${(props) => props.theme.body};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-family: "Kaushan Script";
  color: ${(props) => props.theme.text};
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 48em) {
    min-width: 80px;
    height: 80px;
    font-size: 2rem;
  }
`;

const StepContent = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  border-radius: 15px;
  border: 2px solid ${(props) => props.theme.text};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const StepTitle = styled.h3`
  font-size: ${(props) => props.theme.fontxl};
  font-family: "Kaushan Script";
  color: ${(props) => props.theme.text};
  margin-bottom: 1rem;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const StepDescription = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => props.theme.text};
  line-height: 1.8;
  opacity: 0.9;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const steps = [
  {
    number: "01",
    title: "Sign Up & Create Account",
    description:
      "Get started in seconds by creating your free account. No credit card required, just your email and you're ready to go.",
  },
  {
    number: "02",
    title: "Connect Your Accounts",
    description:
      "Securely link your bank accounts and credit cards. Our bank-level encryption ensures your data is always protected.",
  },
  {
    number: "03",
    title: "Track & Categorize",
    description:
      "Watch as your transactions automatically sync and get categorized. Our AI learns your spending patterns for accurate insights.",
  },
  {
    number: "04",
    title: "Achieve Your Goals",
    description:
      "Set budgets, create savings goals, and get personalized recommendations. Watch your financial health improve month by month.",
  },
];

const HowItWorks = () => {
  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <Section id="how-it-works">
      <Title
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        How It Works
      </Title>

      <Container>
        {steps.map((step, index) => (
          <StepRow
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stepVariants}
            reverse={index % 2 !== 0}
          >
            <StepNumber
              as={motion.div}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              {step.number}
            </StepNumber>
            <StepContent>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepContent>
          </StepRow>
        ))}
      </Container>
    </Section>
  );
};

export default HowItWorks;
