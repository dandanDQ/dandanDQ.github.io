
import "./Input.scss"

interface InputProps {
  placeholder: string
}
export default function Input({ placeholder }: InputProps) {
  return (
    <div className="input-component">
      <img className="img"
        src='/search.svg' alt="" />
      <input type="text" className="input" placeholder={placeholder} />
    </div>
  );
}
