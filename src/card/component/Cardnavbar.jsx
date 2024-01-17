import { React} from 'react';
const Cardnavbar=()=>{
return (
 <span className='border border-danger'>
<nav className='nav nav-pills flex-column'>
<div className='container-fluid '>
  <ul className='navbar-nav'>
    <h2>이용자안내</h2>
    <li className='nav-item'>
      <a className='nav-link' href='#'>Link 1</a>
    </li>
    <li className='nav-item'>
      <a className='nav-link' href='#'>Link 2</a>
    </li>
  </ul>
</div>
</nav>
 </span>
);
};
export default Cardnavbar;