import React from "react";
import { motion } from "framer-motion";
import WaveLine from "./WaveLine";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <motion.div
      animate={{
        opacity: 1
      }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      initial={{ opacity: 0 }}
      id="topofpage"
      className="main"
    >
      <WaveLine />

      <div className="name">
        <motion.h1
          id="hello"
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{ ease: "easeInOut", delay: 0.5, duration: 0.5 }}
          initial={{ opacity: 0, y: 50 }}
        >
          <span>AI가 그려주는 그림일기</span>
          <span id="wave-emoji" role="img" aria-label="wave">
            👋
          </span>
        </motion.h1>

        <motion.p
          className="details"
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{ ease: "easeInOut", delay: 1, duration: 0.5 }}
          initial={{ opacity: 0, y: 50 }}
        >
          클릭 한 번으로 그림일기를 그려보세요!
        </motion.p>
        <motion.div
          className="header-btns"
          animate={{
            opacity: 1
          }}
          transition={{ ease: "easeInOut", delay: 1.5, duration: 0.5 }}
          initial={{ opacity: 0 }}
        >
          <Link to={props.path1} className="logo">
            <button className="cv-btn">사진으로 업로드하기</button>
          </Link>
          <Link to={props.path2} className="logo">
            <button className="cv-btn1">텍스트로 업로드하기</button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Header;
