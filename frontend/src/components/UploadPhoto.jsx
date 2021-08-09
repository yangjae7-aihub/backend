import React from "react";
//import API from "../utils/api";
import MyDropzone from "./dropzone";

function UploadPhoto(props) {
  return (
    <div className="main">
      <div id="features">
        <div className="photo">
          <div className="features-text">
            <h2>사진으로 업로드하기</h2>
            <p>
              <br />
              <b>01</b> 업로드한 모든 사진은 딥러닝 모델을 학습하는데 사용될 수
              있습니다.
              <br />
              <br />
              <b>02</b> 파일 확장자는 jpg, jpeg만 가능합니다.
              <br />
              <br />
              <b>03</b> 로딩하는데 최대 5분의 시간이 걸릴 수 있습니다.
              <br />
              <br />
            </p>

            <div className="b-container">
              <MyDropzone />
              {/* MyDropzone에 파일이 올라가면 result 페이지로 이동*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadPhoto;
