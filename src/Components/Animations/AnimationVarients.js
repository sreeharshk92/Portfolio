
export const headingVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger animation for each child by 0.1s
      },
    },
  };
  
export const letterVariant = {
    hidden: {
      opacity: 0,
      x: -10, 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  export const contactInfoVariant = {
      hidden: {
        opacity: 0,
        x: -50, 
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          delay: 1
        },
      },
    }
   export const formVariant = {
      hidden: {
        opacity: 0,
        x: 50, 
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          delay: 1
        },
      },
    }



    //Sidebar Animations

    
 export const containerVariant = {
    hidden: { opacity: 0},
    visible: { opacity: 1,
      transition: { 
        delay: 1.5 
      }
     },
  }

 export const homeVariant = {
    hidden : { opacity: 0, x:10 },
    visible : { x:0, opacity: 1,
      transition:{
        delay:1.8,
        type:"spring",
        stiffness:50,
      }
    }
  }
 export const aboutVariant = {
    hidden : { opacity: 0, x:10 },
    visible : { x:0, opacity: 1,
      transition:{
        delay: 2 ,
        type:"spring",
        stiffness:50,
      }
    }
  }
 export const portfolioVariant = {
    hidden : { opacity: 0, x:10 },
    visible : { x:0, opacity: 1,
      transition:{
        delay:2.2,
        type:"spring",
        stiffness:50,
      }
    }
  }
 export const servicesVariant = {
    hidden : { opacity: 0, x:10 },
    visible : { x:0, opacity: 1,
      transition:{
        delay:2.4,
        type:"spring",
        stiffness:50,
      }
    }
  }
 export const contactVariant = {
    hidden : { opacity: 0, x:10 },
    visible : { x:0, opacity: 1,
      transition:{
        delay:2.6,
        type:"spring",
        stiffness:50,
      }
    }
  }


  // cards
  export const cardVariant = {
    hidden : { opacity: 0, y:-50 },
    visible : { y:0, opacity: 1,
      transition:{
        delay:2.6,
        type:"spring",
        stiffness:30,
      }
    }
  }



