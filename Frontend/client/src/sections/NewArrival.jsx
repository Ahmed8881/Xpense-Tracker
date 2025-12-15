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
  background: linear-gradient(135deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.02) 100%);
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  color: ${(props) => props.theme.body};
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
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
  background: linear-gradient(135deg, ${(props) => props.gradient1}, ${(props) => props.gradient2});
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    transform: rotate(45deg);
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  background: rgba(255,255,255,0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
  font-family: "Kaushan Script";
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: rgba(255,255,255,0.9);
  line-height: 1.6;
`;

const features = [
  {
    title: "Smart Tracking",
    description: "Track your expenses automatically with AI-powered categorization and insights.",
    gradient1: "#667eea",
    gradient2: "#764ba2",
    icon: "💰"
  },
  {
    title: "Real-time Analytics",
    description: "Get instant insights into your spending patterns with beautiful visualizations.",
    gradient1: "#f093fb",
    gradient2: "#f5576c",
    icon: "📊"
  },
  {
    title: "Budget Goals",
    description: "Set and achieve your financial goals with intelligent budget recommendations.",
    gradient1: "#4facfe",
    gradient2: "#00f2fe",
    icon: "🎯"
  },
  {
    title: "Secure & Private",
    description: "Your data is encrypted and protected with bank-level security measures.",
    gradient1: "#43e97b",
    gradient2: "#38f9d7",
    icon: "🔒"
  },
  {
    title: "Multi-Platform",
    description: "Access your finances anywhere, anytime on mobile, tablet, or desktop.",
    gradient1: "#fa709a",
    gradient2: "#fee140",
    icon: "📱"
  },
  {
    title: "Smart Alerts",
    description: "Never miss a payment with intelligent notifications and reminders.",
    gradient1: "#30cfd0",
    gradient2: "#330867",
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
            gradient1={feature.gradient1}
            gradient2={feature.gradient2}
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
