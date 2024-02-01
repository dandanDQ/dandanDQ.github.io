import Input from './Input'
import "./Header.scss"

export default function Header() {
    return (
        <div className="header-background">
            <div className='header-container'>
                <div className="top-nav">
                    <div className="location">
                        <img
                            className="icon"
                            src="/location.svg" alt="" />
                        党演灯塔营地
                    </div>
                    <div className="menu">
                        <img
                            className="icon"
                            src="/more.svg" alt="" />
                        <img
                            className="icon"
                            src="/back.svg" alt="" />
                    </div>
                </div>
                <div className="slogan">嘟嘟房车          ，创造美好生活！</div>
                <div className='input-area'>
                    <Input placeholder='嘟嘟党演营地' />
                </div>
            </div>
        </div>
    );
}
