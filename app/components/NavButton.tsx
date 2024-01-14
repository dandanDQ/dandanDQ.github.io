import "./NavButton.scss"
import Image from 'next/image'

interface NavButtonProps {
    name: string,
    icon: string
}
export default function NavButton({name, icon}: NavButtonProps) {
  return (
    <div className="nav-button">
        <Image
        className="img"
        src={icon}
        width={24}
        height={24}
        alt="Picture of the author"
        priority
        />
        <div className="title">{name}</div>
    </div>
  );
}