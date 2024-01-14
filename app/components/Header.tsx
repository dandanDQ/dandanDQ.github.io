import Input from './Input'
import "./Header.scss"
import Image from 'next/image';

export default function Header() {
    return (
        <div className="header-background">
            <div className='header-container'>
                <div className="top-nav">
                    <div className="location">
                        <Image
                            className="img"
                            src='/location.svg'
                            width={18}
                            height={18}
                            alt="Picture of the author"
                            priority
                            />
                        党演灯塔营地
                    </div>
                    <div className="avatar">头像</div>
                </div>
                <div className="slogan">Hey, Martin! Tell us where you want to go.</div>
                <div className='input-area'>
                    <Input placeholder='嘟嘟二号营地'/>
                </div>
            </div>
        </div>
    );
  }
  