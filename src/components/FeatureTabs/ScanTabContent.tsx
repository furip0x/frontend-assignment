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
    },
  },
  inactive: {
    y: 483,
    originY: 1,
  },
};

const ScanTabContent = () => {
  return (
    <motion.div
      className="feature-content-anim"
      variants={containerVariant}
      initial="inactive"
      animate="active"
    >
      <img src="/src/assets/img/phone-scan.png" />
    </motion.div>
  );
};

export default ScanTabContent;
