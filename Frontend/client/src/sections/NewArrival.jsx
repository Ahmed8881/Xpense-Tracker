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
  background-color: ${(props) => props.theme.body};
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 2px ${(props) => props.theme.body};
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 48em) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Card = styled(motion.div)`
  background-color: ${(props) => props.theme.text};
  border-radius: 20px;
  padding: 2.5rem;
  border: 2px solid ${(props) => props.theme.body};
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.body};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.2);
    border-color: ${(props) => props.theme.text};
    
    &::before {
      opacity: 0.05;
    }
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  background-color: ${(props) => props.theme.body};
  border: 2px solid ${(props) => props.theme.body};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
`;

const CardTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 600;
  color: ${(props) => props.theme.body};
  margin-bottom: 1rem;
  font-family: "Kaushan Script";
  position: relative;
  z-index: 1;
`;

const CardDescription = styled.p`
  font-size: ${(props) => props.theme.fontsm};
  color: ${(props) => props.theme.body};
  line-height: 1.6;
  position: relative;
  z-index: 1;
  opacity: 0.8;
`;

const features = [
  {
    title: "Smart Tracking",
    description: "Track your expenses automatically with AI-powered categorization and insights.",
    icon: "💰"
  },
  {
    title: "Real-time Analytics",
    description: "Get instant insights into your spending patterns with beautiful visualizations.",
    icon: "📊"
  },
  {
    title: "Budget Goals",
    description: "Set and achieve your financial goals with intelligent budget recommendations.",
    icon: "🎯"
  },
  {
    title: "Secure & Private",
    description: "Your data is encrypted and protected with bank-level security measures.",
    icon: "🔒"
  },
  {
    title: "Multi-Platform",
    description: "Access your finances anywhere, anytime on mobile, tablet, or desktop.",
    icon: "📱"
  },
  {
    title: "Smart Alerts",
    description: "Never miss a payment with intelligent notifications and reminders.",
    icon: "🔔"
  }
];

const NewArrival = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <Section className="features-section">
      <Title
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Powerful Features
      </Title>

      <Grid>
        {features.map((feature, index) => (
          <Card
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <IconWrapper>
              <span style={{ fontSize: '2rem' }}>{feature.icon}</span>
            </IconWrapper>
            <CardTitle>{feature.title}</CardTitle>
            <CardDescription>{feature.description}</CardDescription>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default NewArrival;
