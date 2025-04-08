import { motion } from "framer-motion";
import Navbar from "../components/Home/Navbar";
import MainContainer from "../components/Home/MainContainer";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center relative overflow-hidden">
      <motion.div
        id="wrapper"
        initial={{ height: "0vh", opacity: 0 }}
        animate={{ height: "100vh", opacity: 1 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="w-screen bg-[#FFE7DE] h-screen flex flex-row relative z-40"
      >
        <Navbar />
        <MainContainer />
      </motion.div>
    </div>
  );
};

export default Home;
