import "./DiscoveryCard.scss"
export default function DiscoveryCard(
  {
    img = ""
  }
) {
  return (
    <div className="discovery-card">
      <div className="card-img-controller-wrapper">
        <img
          className="icon"
          src='/like_black.svg'
        />
      </div>
      <img
        className="img"
        src={img}
        alt=""
      />
      <div className="discovery-mask">
        <div className="main-info">航空版C型</div>
        <div className="description">￥1999</div>
      </div>
    </div>
  );
}