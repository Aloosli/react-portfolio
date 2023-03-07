export const pageAnimations = {
    hidden: {
      opacity: 0,
      y: 300,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: 300,
      scale: 0.5,
      transition: {
        duration: 0.75,
      },
    },
  };
  
  export const titleAnim = {
    hidden: { y: 200 },
    show: {
      y: 0,
      transition: { duration: 0.75, ease: "easeOut" },
    },
  };
  
  export const fade = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { ease: "easeIn", duration: 1 },
    },
  };
  
  export const photoAnim = {
    hidden: { scale: 0, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.75,
      },
    },
  };
  
  export const formAnimations = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 1,
      y: -30,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      y: 200,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

