import React, { Fragment } from 'react';
import styled from "styled-components";
import Title from './Title';
import pricing1 from "assets/pricing1.png";
import pricing2 from "assets/pricing2.png";
import play from "assets/play.png";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { pricingAnimation } from "animation";

function Pricing() {
  const [element, controls] = useScroll();
  const plans = [
    {
      name: "Basic",
      price: 13,
    },
    {
      name: "Pro",
      price: 35,
    },
    {
      name: "Expert",
      price: 77,
    },
  ];

  const data = [
    {
      value: "Full face Rs.250",
      type: "Basic",
    },
    {
      value: "Cheeks Rs. 90",
      type: "Basic",
    },
    {
      value: "Jawline Rs.50",
      type: "Basic",
    },
    {
      value: "Lower Lip Rs.50",
      type: "Basic",
    },
    {
      value: "Upper Lip Rs.50",
      type: "Basic",
    },
    {
      value: "Under arms Rs.100",
      type: "Basic",
    },
    {
      value: "Full Legs Rs.450",
      type: "Pro",
    },
    {
      value: "Half Legs Rs.300",
      type: "Pro",
    },
    {
      value: "Daily Backups",
      type: "Expert",
    },
    {
      value: "One Click Setup",
      type: "Expert",
    },
  ]

  return (
    <Section ref={element}>
      <Title value="pricing" />
      <div className="background">
        <img src={pricing1} alt="background" className="bg1" />
        <img src={pricing2} alt="background" className="bg2" />
      </div>
      <div className="pricing__title">
        <p>Find your pricing plan</p>
        <h2>Finding the best salons in your city could be time consuming..</h2>
      </div>
      <div className="pricing">
        {plans.map(({ name, price }, index) => {
          return(
            <motion.div className="pricing__plan" 
            key={index}
            variants={pricingAnimation}
            animate={controls}
            transition={{
              delay: 0.03,
              type: "tween",
              duration: 0.8,
            }}
            >
              <div className="pricing__plan__name">
                <h2>{name}</h2>
                <div className="pricing__plan__name__price">
                  <span>$</span>
                  <p>{price}</p>
                </div>
              </div>
              <div className="pricing__plan__content">
                <ul className={`pricing__plan__content__features ${name}`}>
                  {data.map(({ value, type }, index2) => {
                    return (
                      <Fragment key={index2}>
                        {name === "Basic" ? (
                          type === name ? (
                            <li>{value}</li>
                          ) : (
                            <li className="line">{value}</li>
                          )
                        ) : name === "Pro" ? (
                          type === "Basic" || type === name ? (
                            <li>{value}</li>
                          ) : (
                            <li className="line">{value}</li>
                          )
                        ) : (
                          name === "Expert" && <li>{value}</li>
                        )}
                      </Fragment>
                    );
                  })}
                </ul>
                <div className="pricing__plan__content__actions">
                  <span>Order Now</span>
                  <img src={play} alt="Order Now" />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}

const Section = styled.section`
min-height: 100vh;
padding: 5rem 0;
position: relative;
overflow: hidden;
.background {
  .bg1 {
    position: absolute;
    top: -60%;
    left: -5%;
    z-index: -1;
  }
  .bg2 {
    position: absolute;
    right: 0;
    bottom: 5rem;
  }
}
.pricing__title {
  margin: 6rem 10rem;
  p {
    color: var(--secondary-color);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
  }
  h2 {
    color: var(--primary-color);
    font-size: 2rem;
  }
}
.pricing {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 10rem;
  &__plan {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    &:nth-child(2) {
      .pricing__plan__content {
        padding: 0 5rem;
        border-left: 0.2rem solid var(--primary-color);
        border-right: 0.2rem solid var(--primary-color);
      }
    }
    &__name {
      background-color: var(--primary-color);
      width: 15rem;
      height: 15rem;
      border-radius: 10rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: var(--secondary-color);
      h2 {
        font-size: 2rem;
        line-height: 1.3rem;
      }
      &__price {
        color: #fff;
        display: flex;
        position: relative;
        span {
          position: absolute;
          top: 1rem;
          left: -0.9rem;
          font-size: 1.3rem;
        }
        p {
          font-size: 4rem;
          font-weight: bold;
        }
      }
    }
    &__content {
      &__features {
        list-style-type: none;
        text-align: center;
        color: var(--primary-color);
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        .line {
          text-decoration: line-through;
        }
        margin-bottom: 2rem
      }
      &__actions {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: var(--primary-color);
        gap: 0.5rem;
        span {
          text-transform: uppercase;
        }
      }
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) { 
  padding: 1rem;
  background-color: var(--secondary-color);
  .pricing__title {
    margin: 0;
    padding: 0 2rem;
    text-align: center;
    h2 {
      font-size: 1.3rem;
    }
  }
  .background {
    display: none;
  }
  .pricing {
    grid-template-columns: 1fr;
    padding: 1rem;
    gap: 4rem;
    &__plan {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      &__name {
        height: 10rem;
        width: 10rem;
        h2 {
          font-size: 1.5rem;
        }
        &__price {
          p {
            font-size: 3rem;
          }
        }
      }
      &:nth-child(2) {
        .pricing__plan__content {
          padding: 0rem;
          border: none;
        }
      }
    }
  }
}
`;
export default Pricing