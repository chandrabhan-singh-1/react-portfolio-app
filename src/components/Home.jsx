import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typerwriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";

import my from "../assets/my4.png";

const Home = () => {
  const clientsCount = useRef(null);
  const projectsCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (clientsCount.current.textContent = v.toFixed()),
    });
  };

  const animationProjectsCount = () => {
    animate(0, 500, {
      duration: 1,
      onUpdate: (v) => (projectsCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I am <br /> Chandrabhan Singh.
          </motion.h1>

          <Typerwriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mainlto:chandrabhansingh813@gmail.com">Hire Me!</a>

            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              <motion.span
                whileInView={animationClientsCount}
                ref={clientsCount}
              >
                100
              </motion.span>
              +
            </p>
            <span>Clients Worldwide</span>
          </article>

          <aside>
            <article>
              <p>
                <motion.span
                  whileInView={animationProjectsCount}
                  ref={projectsCount}
                >
                  500
                </motion.span>
                +
              </p>
              <span>Projects Done!</span>
            </article>
            <article data-special>
              <p>Contact</p>
              <span>chandrabhansingh813@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>

      <section>
        <img src={my} alt="Chandrabhan Singh" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
