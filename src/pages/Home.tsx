import { motion } from "framer-motion";
import Navbar from "../components/Home/Navbar";
import MainContainer from "../components/Home/MainContainer";

const Home = () => {
  return (
    <div
      id="home-page"
      className="w-screen bg-[#28282B] flex justify-center items-center relative
                 md:h-screen md:overflow-hidden"
    >
      <motion.div
        id="wrapper"
        initial={{ height: "0vh", opacity: 0 }}
        animate={{ height: "100vh", opacity: 1 }}
        transition={{ duration: 0.85, ease: "easeIn" }}
        className="w-screen bg-[#FFE7DE] flex flex-col relative z-40
                   md:flex-row"
      >
        <Navbar />
        <MainContainer />
      </motion.div>
    </div>
  );
};

export default Home;
