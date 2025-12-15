import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  min-height: 70vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.theme.body};
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 900px;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 2px ${(props) => props.theme.body};
  margin-bottom: 2rem;
  line-height: 1.2;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const Subtitle = styled(motion.p)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  margin-bottom: 3rem;
  opacity: 0.9;
  line-height: 1.6;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(motion(Link))`
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.2rem 3rem;
  border-radius: 50px;
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 600;
  text-decoration: none;
  border: 2px solid ${(props) => props.theme.text};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 48em) {
    padding: 1rem 2rem;
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const SecondaryButton = styled(motion(Link))`
  background-color: transparent;
  color: ${(props) => props.theme.text};
  padding: 1.2rem 3rem;
  border-radius: 50px;
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 600;
  text-decoration: none;
  border: 2px solid ${(props) => props.theme.text};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    transform: translateY(-3px);
  }

  @media (max-width: 48em) {
    padding: 1rem 2rem;
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const FloatingIcon = styled(motion.div)`
  position: absolute;
  font-size: 4rem;
  opacity: 0.1;
  z-index: 1;

  @media (max-width: 48em) {
    font-size: 2rem;
  }
`;

const features = ["💰", "📊", "🎯", "🔒", "📱", "🔔", "💳", "📈"];

const CallToAction = () => {
  return (
    <Section id="cta">
      {features.map((icon, index) => (
        <FloatingIcon
          key={index}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {icon}
        </FloatingIcon>
      ))}

      <Container>
        <Title
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Take Control of Your Finances?
        </Title>

        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join thousands of users who are already saving smarter and achieving
          their financial goals with Xpense.
        </Subtitle>

        <ButtonContainer
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <PrimaryButton
            to="/login"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Free
          </PrimaryButton>
          <SecondaryButton
            to="/login"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Demo
          </SecondaryButton>
        </ButtonContainer>
      </Container>
    </Section>
  );
};

export default CallToAction;
