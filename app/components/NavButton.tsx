import "./NavButton.scss"
import Image from 'next/image'

interface NavButtonProps {
    name: string,
    icon: string,
    disabled?: boolean
}
export default function NavButton({name, icon, disabled}: NavButtonProps) {
const className = `nav-button ${disabled ? 'disabled': ''}`;
  return (
    <div className={className}>
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