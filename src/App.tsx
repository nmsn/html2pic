import { useRef, useState } from "react";

import publicPng from "/logo-white.png";
import html2canvas from "html2canvas";
import * as htmlToImage from "html-to-image";
import "./App.css";

const Pic1 = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [imgUrl, setImgUrl] = useState("");

  const getImg = () => {
    ref?.current &&
      html2canvas(ref?.current).then((canvas) => {
        const image = canvas.toDataURL("image/png", 1);
        setImgUrl(image);
        console.log(image);
      });
  };
  return (
    <div>
      <div className="content" ref={ref}>
        <img src={publicPng} className="pic" />
        <div className="text">测试文本内容1</div>
      </div>
      <div className="btnContainer">
        <button onClick={getImg} className="btn">
          确定
        </button>

        <button onClick={() => setImgUrl("")} className="btn">
          清空
        </button>
      </div>

      {imgUrl && <img src={imgUrl} className="result" />}
    </div>
  );
};

const Pic2 = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [imgUrl, setImgUrl] = useState("");

  const getImg = () => {
    ref?.current &&
      htmlToImage.toPng(ref?.current).then((dataUrl) => {
        setImgUrl(dataUrl);
        console.log(dataUrl);
      });
  };
  return (
    <div>
      <div className="content" ref={ref}>
        <img src={publicPng} className="pic" />
        <div className="text">测试文本内容2</div>
      </div>
      <div className="btnContainer">
        <button onClick={getImg} className="btn">
          确定
        </button>
        <button onClick={() => setImgUrl("")} className="btn">
          清空
        </button>
      </div>

      {imgUrl && <img src={imgUrl} className="result" />}
    </div>
  );
};

function App() {
  return (
    <>
      <div className="container">
        <Pic1 />
        <Pic2 />
      </div>
    </>
  );
}

export default App;
