import React from 'react'
import milestone1 from "assets/milestone1.png";
import milestone2 from "assets/milestone2.png";
import milestone3 from "assets/milestone3.png";
import milestoneBackground from "assets/milestone-background.png";
import styled from "styled-components";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import { milestonesAnimations } from "animation";



function Milestones() {
  const [element, controls] = useScroll();

  const milestone = [
    {
      image: milestone1,
      data: "Client Served",
      amount: "877",
    },
    {
      image: milestone2,
      data: "of raw data",
      amount: "1.4M",
    },
    {
      image: milestone3,
      data: "Reviews",
      amount: "5.4K",
    },
]
  return <Section ref={element}>
    <div className="background">
        <img src={milestoneBackground} alt="Milestone Background" />
    </div>
    <div className="milestones">
      {
        milestone.map(({ image, data, amount }) => {
          return (
            <motion.div className="milestone"
            variants={milestonesAnimations}
            animate={controls}
            transition={{
              delay: 0.03,
              type: "tween",
              duration: 0.8,
            }}
            >
              <p>{amount}</p>
              <span>{data}</span>  
              <img src={image} alt="Milestone" />
            </motion.div>
          );
        })
      }  
    </div>
  </Section>
}

const Section = styled.section`
height: 100vh;
background-color: var(--primary-color);
padding: 0 10rem;
position: relative;
.background {
  position: absolute;
  left: 0;
  bottom: -30%;
  img {
    z-index: 2;
    height: 43rem;
  }
}
.milestones{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  color: #fff;
  align-items: center;
  height: 100%;
  .milestone {
    z-index: 20;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    p {
      font-size: 5rem;
      font-weight: bolder;
      line-height: 3rem;
    }
    span {
      text-transform: uppercase;
      color: #ffffffc7;
    }
    img {
      height: 6rem;
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) { 
  padding: 5rem 2rem;
  min-height: 100ch;
  height: 100%;
  .background {
    display: none;
  }
  .milestones {
    grid-template-columns: 1fr;
    gap: 5rem;
  }
}
`;

export default Milestones;