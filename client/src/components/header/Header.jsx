import "./header.css"

export default function header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">Krishna Teja's</span>
            <span className="headerTitleLg">Art-iStick</span>
        </div>
        <img className="headerImg" src="./images/bg.jpg" alt="" />
    </div>
  );
}
