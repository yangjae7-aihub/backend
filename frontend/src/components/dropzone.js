import React, { useState } from "react";
//import API from "../utils/api";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MyDropzone({ history }) {
  // 파일
  const [imgFile, setImgFile] = useState(null);
  // preview 파일 base64
  const [imgBase64, setImgBase64] = useState("");

  // preview
  const handleChangeFile = e => {
    let reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      console.log(base64);
      // base64 state 업데이트
      if (base64) {
        setImgBase64(base64.toString());
        console.log(imgBase64);
      }
      if (e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]); // 버퍼에 저장
        setImgFile(e.target.files[0]); // 파일 상태 업데이트
      }
      // 전송용 파일
      // const dataString = Array.from(new Uint8Array(reader.result));
    };
  };

  const handlePostImage = async () => {
    try {
      axios.post("http://localhost:3001/image", imgFile, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      console.log("파일 업로드 성공");
    } catch {
      console.log("401 error");
    }
  };

  return (
    <div>
      <label className="cv-btn" for="imgFile">
        파일 입력
      </label>
      <input
        type="file"
        id="imgFile"
        style={{ display: "none" }}
        onChange={handleChangeFile}
      />
      {/* image preview */}
      <div
        style={{
          backgroundColor: "#efefef",
          width: "150px",
          height: "150px"
        }}
      >
        <img alt="img" />
      </div>
      <Link to="./Result">
        <button onClick={handlePostImage}>제출</button>
      </Link>
    </div>
  );
}
