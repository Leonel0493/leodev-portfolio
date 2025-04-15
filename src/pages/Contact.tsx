import { motion } from "framer-motion";
import WorkNavbar from "../components/Work/WorkNavbar";
import ContactWrapper from "../components/Contact/Contact-Wrapper";

const Contact = () => {
  return (
    <div
      id="contact-page"
      className="bg-[#FFE7DE] w-screen flex justify-center items-center relative
                 md:h-screen md:overflow-hidden"
    >
      <motion.div
        id="wrapper"
        initial={{ height: "0vh", opacity: 0 }}
        animate={{ height: "100vh", opacity: 1 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="w-screen bg-[#28282B] flex flex-col relative z-40
                   md:flex-row"
      >
        <WorkNavbar />
        <ContactWrapper />
      </motion.div>
    </div>
  );
};

export default Contact;
