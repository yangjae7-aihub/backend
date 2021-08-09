import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Card from "./Card";

function Usage() {
  const { ref, inView } = useInView({
    threshold: 0.1
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeInOut" }
      });
    }
    if (!inView) {
      animation.start({
        y: -100,
        opacity: 0,
        transition: { duration: 0.5, ease: "easeInOut" }
      });
    }
    console.log("print inView", inView);
  }, [inView]);

  return (
    <div id="services">
      <div className="s-heading">
        <h1>일기를 업로드하고, 그림일기를 그려보세요!</h1>
        <p></p>
      </div>
      <motion.div ref={ref} animate={animation} className="b-container">
        <Card
          label="View"
          title="01 텍스트/필기체 사진을 업로드한다."
          discipline="ai가 분석해줍니다."
          tldr="ai가 분석해줘요."
        />
        <Card
          label="View"
          title="02 결과를 기다립니다."
          discipline="ai가 분석해줍니다."
          tldr="ai가 분석해줘요."
        />
        <Card
          label="View"
          title="03 감정에 맞는 노래를 추천해주고, 그림일기를 그려줘요!"
          discipline="ai가 분석해줍니다."
          tldr="ai가 분석해줘요."
        />
      </motion.div>
    </div>
  );
}

export default Usage;
