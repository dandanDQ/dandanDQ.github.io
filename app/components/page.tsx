import Navbar from './NavBar';
import "./page.scss"
import Input from './Input'

// 使用示例
export default function Page() {
  return (
    <div className='component-sample'>
      <div className='input-area'><Input placeholder='请输入搜索内容'/></div>
      <div className='nav-bar'>
        <Navbar></Navbar>
      </div>
    </div>

  );
}
