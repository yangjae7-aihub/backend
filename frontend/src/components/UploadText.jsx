import React from "react";
import { useState } from "react";
import axios from "axios";

function UploadText({ history }) {
  const [value, setValue] = useState("");
  const onChange = e => {
    setValue(e.target.value);
    console.log(value);
  };
  const onSubmitText = async text => {
    axios
      .post(`http://localhost:3001/text`, text, {
        headers: { "Content-type": "application/json" }
      })
      .then(response => {
        console.log("response");
      })
      .catch(error => {
        console.log("failed", error);
      });
  };
  return (
    <div className="main">
      <div id="features">
        <div className="photo">
          <div className="features-text">
            <h2>텍스트로 업로드하기</h2>
            <h3></h3>
            <p>
              텍스트로 일기를 써서 업로드해보세요!
              <br />
              <br />
              시간이 걸릴 수 있습니다.
            </p>
            <form onSubmit={() => onSubmitText}>
              <div className="b-container">
                <button className="cv-btn">+ 일기 추가하기</button>
                <textarea
                  className="ta"
                  type="text"
                  onplaceholder="텍스트 입력"
                  value={value}
                  onChange={onChange}
                />
              </div>
              <div>{value}</div>
              <button>취소</button>
              <button
                type="submit"
                onClick={() => {
                  history.push("/Result");
                }}
              >
                제출
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadText;
