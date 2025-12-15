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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
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
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }
`;

const Quote = styled.div`
  font-size: 3rem;
  color: ${(props) => props.theme.body};
  opacity: 0.3;
  margin-bottom: 1rem;
  font-family: "Kaushan Script";
`;

const Review = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => props.theme.body};
  line-height: 1.8;
  margin-bottom: 2rem;
  font-style: italic;
  opacity: 0.9;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid ${(props) => props.theme.body};
  padding-top: 1.5rem;
`;

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${(props) => props.theme.body};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${(props) => props.theme.text};
  font-weight: bold;
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.h4`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => props.theme.body};
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const AuthorRole = styled.p`
  font-size: ${(props) => props.theme.fontsm};
  color: ${(props) => props.theme.body};
  opacity: 0.7;
`;

const Stars = styled.div`
  color: ${(props) => props.theme.body};
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Freelance Designer",
    avatar: "SJ",
    review:
      "Xpense has completely transformed how I manage my finances. The automated tracking saves me hours every week, and the insights help me make smarter financial decisions.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Small Business Owner",
    avatar: "MC",
    review:
      "As a business owner, I need clear visibility into my expenses. Xpense delivers exactly that with beautiful charts and real-time analytics. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    avatar: "ER",
    review:
      "The budget goals feature is a game-changer! I've saved more in the last 3 months than I did all last year. The app keeps me accountable and motivated.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Software Engineer",
    avatar: "DP",
    review:
      "Clean interface, powerful features, and bank-level security. Everything you need in a finance app. The mobile experience is particularly impressive.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Teacher",
    avatar: "LT",
    review:
      "I was skeptical about finance apps, but Xpense made it so easy to get started. The categorization is spot-on, and I love the smart alerts feature.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Entrepreneur",
    avatar: "JW",
    review:
      "Finally, an expense tracker that doesn't feel like a chore to use. The design is beautiful and the features are exactly what I need. Worth every penny!",
    rating: 5,
  },
];

const Testimonials = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <Section id="testimonials">
      <Title
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        What Our Users Say
      </Title>

      <Grid>
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <Quote>"</Quote>
            <Stars>{"⭐".repeat(testimonial.rating)}</Stars>
            <Review>{testimonial.review}</Review>
            <AuthorSection>
              <Avatar>{testimonial.avatar}</Avatar>
              <AuthorInfo>
                <AuthorName>{testimonial.name}</AuthorName>
                <AuthorRole>{testimonial.role}</AuthorRole>
              </AuthorInfo>
            </AuthorSection>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Testimonials;
