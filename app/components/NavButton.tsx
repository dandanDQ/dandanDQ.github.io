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
      <img
        className="img"
        src={icon}
      >
      </img>
        <div className="title">{name}</div>
    </div>
  );
}