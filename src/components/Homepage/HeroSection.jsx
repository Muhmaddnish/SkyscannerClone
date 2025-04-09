import React from 'react';
import './HeroSection.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  return (
    <motion.div
      ref={ref}
      className="hero-section"
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <motion.div
        className="hero-content"
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ delay: 0.2 }}
      >
        <motion.h2
          className="hero-title"
          initial="hidden"
          animate={controls}
          variants={titleVariants}
          transition={{ delay: 0.4 }}
        >
          Can't decide where to go?
        </motion.h2>
        <motion.h1
          className="hero-heading"
          initial="hidden"
          animate={controls}
          variants={titleVariants}
          transition={{ delay: 0.6 }}
        >
          Explore every destination
        </motion.h1>
        <motion.button
          className="hero-button"
          initial="hidden"
          animate={controls}
          variants={buttonVariants}
          transition={{ delay: 0.8 }}
        >
          Search flights Everywhere
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;