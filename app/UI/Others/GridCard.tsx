import "./GridCard.scss"
export default function GridCard(
  {
    img = ""
  }
) {
  return (
    <div className="ui-grid-card">
      <img
        className="img"
        src={img}
        alt=""
      />
      <div className="mask">
        <div className="main-info">【秒杀立减】灰色连帽卫衣</div>
        <div className="description">￥1999</div>
      </div>
    </div>
  );
}