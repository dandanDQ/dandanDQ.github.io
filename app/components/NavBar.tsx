import "./NavBar.scss"
import NavButton from "./NavButton";

export default function Navbar() {
  return (
    <div className="navbar-component">
      <NavButton name="首页" icon="/home.svg" />
      <NavButton name="房车" icon="/car.svg" disabled />
      <NavButton name="营地" icon="/camp.svg" disabled />
      <NavButton name="商城" icon="/mall.svg" disabled />
      <NavButton name="我的" icon="/self_center.svg" disabled />
    </div>
  );
}
