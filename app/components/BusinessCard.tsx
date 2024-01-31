import "./BusinessCard.scss"
interface Business {
  name: string;
  icon: string
}
export default function BusinessCard({
  name,
  icon
}: Business) {
  return <div className="business-container">
    <div className="business-card">
      <img className="business-icon" src={icon}/>
    </div>
    <div className="business-title">
    {name}
    </div>
  </div>
}