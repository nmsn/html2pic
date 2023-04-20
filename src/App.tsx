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
      html2canvas(ref?.current, { useCORS: true }).then((canvas) => {
        const image = canvas.toDataURL("image/png", 1);
        setImgUrl(image);
        console.log(image);
      });
  };
  return (
    <div style={{ background: "grey" }}>
      <div
        className="content"
        ref={ref}
        style={{
          background: "black",
        }}
      >
        {/* <img src={publicPng} className="pic" /> */}
        <img
          src="https://s2.loli.net/2023/04/20/4t8NgpMxkdVCJcs.png"
          className="pic"
        />
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
    <div style={{ background: "grey" }}>
      <div
        className="content"
        ref={ref}
        style={{
          background: "black",
        }}
      >
        {/* <img src={publicPng} className="pic" /> */}
        <img
          src="https://s2.loli.net/2023/04/20/4t8NgpMxkdVCJcs.png"
          className="pic"
        />
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

/**
 * 1.html2canvas 不能继承父元素背景色
 * 2.html2canvas 在 pc 端尺寸有差异
 * 3.html-to-image 在移动端生成物有时候图片没加载出来
 * 4.html2canvas 有图片跨域问题，但是没有提示，需要静态资源进行服务端配置
 * 5.html2canvas 较慢
 * 6.html2canvas 不支持部分 css 样式，看了下， box-shadow 可能会使用
 * 7.html2canvas 会对包含文本但不设置字体的标签添加默认的字体
 */
