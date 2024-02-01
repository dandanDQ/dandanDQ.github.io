import "./BusinessCard.scss"
interface Business {
  name: string;
  icon: string;
  width: number
}
export default function BusinessCard({
  name,
  icon,
  width
}: Business) {
  const style = {width: `${width}%`};
  return <div className="business-container">
    <div className="business-card">
      <img  src={icon} style={style}/>
    </div>
    <div className="business-title">
    {name}
    </div>
  </div>
}