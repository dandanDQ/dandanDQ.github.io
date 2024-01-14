
import "./Input.scss"
import Image from "next/image"

interface InputProps {
    placeholder: string
}
export default function Input({placeholder} : InputProps) {
  return (
    <div className="input-component">
        <Image
            className="img"
            src='/search.svg'
            width={18}
            height={18}
            alt="Picture of the author"
            priority
            />
        <input type="text" className="input" placeholder={placeholder}/>
    </div>
  );
}
