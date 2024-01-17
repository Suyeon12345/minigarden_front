import { React} from 'react';
const Cardnavbar=()=>{
return (
<nav className='nav nav-pills flex-column'>
<div className='container-fluid '>
  <ul className='navbar-nav'>
    <h2 className='m-1'>이용자안내</h2>
    <li className='nav-item m-1'>
      <a className='nav-link' href='#'><strong className='text-info-emphasis fs-5 px-1'>이용자기본정보</strong></a>
    </li>
    <li className='nav-item'>
      <a className='nav-link' href='#'><p className="fs-5 px-2">이용자상담관리</p></a>
    </li>
  </ul>
</div>
</nav>

);
};
export default Cardnavbar;