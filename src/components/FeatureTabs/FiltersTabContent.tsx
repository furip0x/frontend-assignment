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
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  inactive: {
    opacity: 0,
  },
};

const FiltersTabContent = () => {
  return (
    <motion.div
      className="feature-content-anim"
      variants={containerVariant}
      initial="inactive"
      animate="active"
    >
      <motion.img
        variants={item}
        className="phone-filters-leftbar"
        src="/src/assets/img/phone-filters-leftbar.png"
      />
      <motion.img
        variants={item}
        className="phone-filters-rightbar"
        src="/src/assets/img/phone-filters-rightbar.png"
      />
      <img src="/src/assets/img/phone-filters.png" />
    </motion.div>
  );
};

export default FiltersTabContent;
