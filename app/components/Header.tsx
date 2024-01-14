import Input from './Input'
import "./Header.scss"
import Image from 'next/image'

export default function Header() {
    return (
        <div className="header">
            <div className="top-nav">
                <div className="location">
                <span className="icon">→</span>
                嘟嘟一号营地
                </div>
                <div className="avatar">头像</div>
            </div>
            <div className="slogan">幸会！告诉我你想去哪玩</div>
            <div className='input-area'>
                <Input placeholder='嘟嘟二号营地'/>
            </div>
        </div>
    );
  }
  