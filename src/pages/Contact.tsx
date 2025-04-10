import { motion } from "framer-motion";
import WorkNavbar from "../components/Work/WorkNavbar";
import ContactWrapper from "../components/Contact/Contact-Wrapper";

const Contact = () => {
  return (
    <div
      id="contact-page"
      className="w-screen h-screen bg-[#FFE7DE] flex justify-center items-center relative overflow-hidden"
    >
      <motion.div
        id="wrapper"
        initial={{ height: "0vh", opacity: 0 }}
        animate={{ height: "100vh", opacity: 1 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="w-screen bg-[#28282B] h-screen flex flex-row relative z-40"
      >
        <WorkNavbar />
        <ContactWrapper />
      </motion.div>
    </div>
  );
};

export default Contact;
