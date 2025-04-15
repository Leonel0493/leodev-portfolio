import { motion } from "framer-motion";
import AboutNavbar from "../components/About/AboutNavbar";
import AboutContainer from "../components/About/AboutContainer";

const About = () => {
  return (
    <div
      id="about-page"
      className="w-screen bg-[#28282B] h-auto flex justify-center items-center overflow-y-auto relative"
    >
      <motion.div
        id="about-wrapper"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-screen bg-[#FFE7DE] flex flex-col relative z-40
             md:flex-row"
      >
        <AboutNavbar />
        <AboutContainer />
      </motion.div>
    </div>
  );
};

export default About;
