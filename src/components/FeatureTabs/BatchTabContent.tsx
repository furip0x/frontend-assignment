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
      staggerChildren: 0.4,
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
    y: '0%',
    originY: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  inactive: {
    scale: 1.2,
    y: '115%',
  },
};

const BatchTabContent = () => {
  return (
    <motion.div
      className="feature-content-anim"
      variants={containerVariant}
      initial="inactive"
      animate="active"
    >
      <motion.img
        variants={item}
        className="phone-batch-file3"
        src="/src/assets/img/phone-batch-file3.png"
      />
      <motion.img
        variants={item}
        className="phone-batch-file2"
        src="/src/assets/img/phone-batch-file2.png"
      />
      <motion.img
        variants={item}
        className="phone-batch-file1"
        src="/src/assets/img/phone-batch-file1.png"
      />
      <img src="/src/assets/img/phone-batch.png" />
    </motion.div>
  );
};

export default BatchTabContent;
