import publicPng from "/public/logo-white.png";

import "./App.css";

const Pic = ({ src }: { src: string }) => {
  return (
    <div className="content">
      <img src={src} className="pic" />
      <div className="text">测试文本内容</div>
    </div>
  );
};

function App() {
  return (
    <>
      <div className="container">
        <Pic src={publicPng} />
        <Pic src="https://s2.loli.net/2023/04/20/4t8NgpMxkdVCJcs.png" />
      </div>
    </>
  );
}

export default App;
