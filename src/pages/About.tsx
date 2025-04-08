import { motion } from "framer-motion";
import AboutNavbar from "../components/About/AboutNavbar";
import AboutWrapper from "../components/About/AboutWrapper";

const About = () => {
  return (
    <div
      id="work-page"
      className="w-screen h-screen bg-[#28282B] flex justify-center items-center relative overflow-hidden"
    >
      <motion.div
        id="wrapper"
        initial={{ height: "0vh", opacity: 0 }}
        animate={{ height: "100vh", opacity: 1 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="w-screen bg-[#FFE7DE] h-screen flex flex-row relative z-40"
      >
        <AboutNavbar />
        <AboutWrapper />
      </motion.div>
    </div>
  );
};

export default About;
