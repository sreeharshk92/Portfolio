import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="flex justify-center items-center h-screen bg-customColor"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="loader"
        style={{
          width: "3rem",
          height: "3rem",
          border: "10px solid #ffffff",
          borderTop: "4px solid #facc15",
          borderRadius: "50%",
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      ></motion.div>
    </motion.div>
  );
};

export default Loader;
