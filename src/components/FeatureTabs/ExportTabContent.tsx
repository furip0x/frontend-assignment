import { motion, Variants } from 'motion/react';

const containerVariant: Variants = {
  active: {
    y: 0,
    originY: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 80,
      damping: 20,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  inactive: {
    y: 483,
    originY: 1,
    transition: {
      when: 'afterChildren',
    },
  },
};

const arrowVariant: Variants = {
  active: {
    y: '0%',
    x: '0%',
    rotate: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 170,
      damping: 20,
    },
  },
  inactive: {
    y: '210%',
    x: '335%',
    rotate: 35,
  },
};

const pdfVariant: Variants = {
  active: {
    y: '0%',
    x: '0%',
    transition: {
      duration: 0.4,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 170,
      damping: 25,
    },
  },
  inactive: {
    x: '65%',
    y: '100%',
  },
};

const jpgVariant: Variants = {
  active: {
    y: '0%',
    transition: {
      duration: 0.4,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 170,
      damping: 25,
    },
  },
  inactive: {
    y: '135%',
  },
};

const txtVariant: Variants = {
  active: {
    y: '0%',
    x: '0%',
    transition: {
      duration: 0.4,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 170,
      damping: 25,
    },
  },
  inactive: {
    x: '-65%',
    y: '100%',
  },
};

const ExportTabContent = () => {
  return (
    <motion.div
      className="feature-content-anim"
      variants={containerVariant}
      initial="inactive"
      animate="active"
    >
      <motion.img
        variants={arrowVariant}
        className="phone-export-arrow"
        src="/src/assets/img/phone-export-arrow.png"
      />
      <motion.img
        variants={pdfVariant}
        className="phone-export-pdf"
        src="/src/assets/img/phone-export-pdf.png"
      />
      <motion.img
        variants={jpgVariant}
        className="phone-export-jpg"
        src="/src/assets/img/phone-export-jpg.png"
      />
      <motion.img
        variants={txtVariant}
        className="phone-export-txt"
        src="/src/assets/img/phone-export-txt.png"
      />
      <img src="/src/assets/img/phone-export.png" />
    </motion.div>
  );
};

export default ExportTabContent;
