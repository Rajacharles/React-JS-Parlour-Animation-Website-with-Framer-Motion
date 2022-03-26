import React from 'react';
import styled from "styled-components";
import play from "assets/play.png";
import home from "assets/home.png";
import Title from './Title';
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { blogsAnimation } from "animation";

function Blog() {
  const [element, controls] = useScroll();
  const blogsData = [
    {
      title:"PARLOUR JOURNAL",
      type: "SPA",
      description: "Our blog is intended to help answer your hair related questions and provide information about healthy hair choices and products.",
    },
    {
      title:"REFELXOLOGY SKY",
      type: "Relax",
      description: "Reflexologists believe that these reflex points, pressing them creates real benefits for the person's health. If you have any questions, please email",
    },
    {
      title:"MEDITATION SUN",
      type: "Yoga",
      description: "Keep your body and mind it pure and clean for the soul to reside in. Our Spa Offer yoga classes in areas. creates real benefits for the person's health.",
    },
  ]
  return <Section id="blog" ref={element}>
    <Title value="Blog" />
    <div className="blogs">
        {blogsData.map(({ title, type, description }) => {
          return (
            <motion.div className="blog"
              variants={blogsAnimation}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
            >
              <div className="image"></div>
              <div className="title">
                <h3>{title}</h3>  
              </div>
                <span className="type">{type}</span>
                <div className="description">
                  <p>{description}</p>  
                </div>
                <div className="more">
                  <img src={play} alt="Play" />
                  <span>Read More</span>  
                </div>
            </motion.div>
          )
        })}
    </div>
    </Section>
}

const Section = styled.section`
min-height: 100vh;
position: relative;
.blogs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin: 5rem 15rem;
  .blog {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .image {
      height: 15rem;
      background: url(${home}) no-repeat center center;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .title {
      h3 {
        color: var(--secondary-color);
        font-size: 1.5rem;
      }
    }
    .type {
      color: var(--primary-color);
      font-weight: bolder;
      text-transform: uppercase;
    }
    .description {
      height: 10rem;
      color: var(--primary-color);
    }
    .more {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
      span {
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        color: var(--primary-color);
      }
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) { 
  margin: 2rem 0;
  .blogs {
    padding: 0 2rem;
    grid-template-columns: 1fr;
    margin: 0 1rem;
  }
}
`;

export default Blog