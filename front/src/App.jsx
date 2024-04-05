import './style.css'
import channelTalk from "../public/ch_loader_white-1552365640918.gif"
import logo from "../public/logo.png"
import {ChatButton} from "./channel-button.jsx";

export default function App() {
    return (
        <div className="container">
            <div className="main">
                <img className="logo" src={logo} alt="logo" width="200" height="100"    />
                <h4 className="title">신뢰와 고객를 우선시 하는 번개 SP</h4>
                <p className="sub-title">(02.02) 매입 <span className="price">1 : 2000</span></p>
                <p className="sub-title">(02.02) 매매 <span className="price">1 : 2000</span></p>
                <ChatButton/>
                <p className="description">상담은 이모티콘을 클릭 🤟</p>
            </div>
        </div>
    )
}

