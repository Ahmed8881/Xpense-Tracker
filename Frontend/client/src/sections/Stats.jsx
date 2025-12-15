import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 80vh;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 48em) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: 30em) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  border: 3px solid ${(props) => props.theme.text};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.text};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);

    &::before {
      opacity: 0.05;
    }
  }
`;

const Number = styled(motion.h2)`
  font-size: 4rem;
  font-family: "Kaushan Script";
  color: ${(props) => props.theme.text};
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;

  @media (max-width: 48em) {
    font-size: 3rem;
  }
`;

const Label = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  z-index: 1;
  opacity: 0.8;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
`;

const stats = [
  {
    number: "50K+",
    label: "Active Users",
    icon: "👥",
  },
  {
    number: "$10M+",
    label: "Money Tracked",
    icon: "💰",
  },
  {
    number: "99.9%",
    label: "Uptime",
    icon: "⚡",
  },
  {
    number: "4.9★",
    label: "User Rating",
    icon: "⭐",
  },
];

const Stats = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const numberVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.3,
      },
    },
  };

  return (
    <Section id="stats">
      <Title
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Trusted by Thousands
      </Title>

      <Grid>
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <Icon>{stat.icon}</Icon>
            <Number
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={numberVariants}
            >
              {stat.number}
            </Number>
            <Label>{stat.label}</Label>
          </StatCard>
        ))}
      </Grid>
    </Section>
  );
};

export default Stats;
