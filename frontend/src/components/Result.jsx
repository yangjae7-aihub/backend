import React from "react";
import axios from "axios";
import _ from "lodash";
import VideoDetail from "./VideoDetail";
import YoutubeSearch from "youtube-api-search";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//require("dotenv").config();
//const API_KEY = process.env.API_KEY;

const API_KEY = "AIzaSyBdfRE3QIml7NDjcTQQK4hInUZpwMak6eA";
class Result extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      images: null
    };

    this.videoSearch("surfboard");
    //this.getImage.bind(this);
  }
  videoSearch(term) {
    YoutubeSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0] // 첫번째 검색결과
      });
    });
  }

  /*
  getImage() {
    axios
      .get("http://localhost:3001/result", {
        responseType: "arraybuffer"
      })
      .then(response =>
        Buffer.from(response.data, "binary").toString("base64")
      );

    this.setState({
      images: response.data
    });
  }
*/

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);
    return (
      <div className="main">
        <div id="features">
          <div id="result-container">
            <div className="box1">
              <motion.h2
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{ ease: "easeInOut", delay: 0.5, duration: 0.5 }}
                initial={{ opacity: 0, y: 50 }}
              >
                <h2>당신의 결과는..?</h2>
                <br />
              </motion.h2>
            </div>
            <motion.p
              className="box2"
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{ ease: "easeInOut", delay: 1, duration: 0.5 }}
              initial={{ opacity: 0, y: 50 }}
            >
              <div className="box2">
                <div className="video">
                  <VideoDetail video={this.state.selectedVideo} />
                </div>
                <span></span>
                <div className="content">
                  <div className="result_image" />
                  <p>
                    오늘은 날씨가 좋아서 오랜만에 쇼핑을 하러 백화점에 갔다.
                    가는 길에 핸드폰으로 동영상을 찍었다. 화질이 좋았다.
                  </p>
                </div>
              </div>
            </motion.p>
            <motion.div
              className="box3"
              animate={{
                opacity: 1
              }}
              transition={{ ease: "easeInOut", delay: 1.5, duration: 0.5 }}
              initial={{ opacity: 0 }}
            >
              <div className="box3">
                <br />
                <br />
                <Link to="/">
                  <button className="cv-btn">다시해보기</button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
