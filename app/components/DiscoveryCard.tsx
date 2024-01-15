import "./DiscoveryCard.scss"
export default function DiscoveryCard(
  {
    img = "/background/bg2.jpg"
  }
) {
  return (
    <div className="discovery-card">
      <img
        className="img"
        src={img}
        alt=""
      />
    </div>
  );
}