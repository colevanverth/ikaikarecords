import Image from "next/image";
import { motion } from "framer-motion";

const Button = (props) => {
  return (
    <motion.a
      className={props.className}
      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.25)" }}
      transition={{ duration: 0.25 }}
      href={props.link}
      target={props.external ? "_blank" : null}
      rel={props.external ? "noreferrer" : null}
    >
      {props.text.toUpperCase()}
      {props.external == "true" ? (
        <Image src="/leaving-white.svg" width={18} height={18} alt="" />
      ) : null}
    </motion.a>
  );
};

export default Button;
