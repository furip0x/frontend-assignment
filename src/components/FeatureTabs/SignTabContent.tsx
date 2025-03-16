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
      staggerChildren: 0.1,
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

const item: Variants = {
  active: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  inactive: {
    scale: 0,
    opacity: 0,
  },
};

const SignTabContent = () => {
  return (
    <motion.div
      className="feature-content-anim"
      variants={containerVariant}
      initial="inactive"
      animate="active"
    >
      <motion.img
        variants={item}
        className="phone-sign-signature-left"
        src="/src/assets/img/phone-sign-signature-left.png"
      />
      <motion.img
        variants={item}
        className="phone-sign-signature-right"
        src="/src/assets/img/phone-sign-signature-right.png"
      />
      <img src="/src/assets/img/phone-sign.png" />
    </motion.div>
  );
};

export default SignTabContent;
