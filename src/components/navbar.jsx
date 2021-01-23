import {IoMedicalSharp} from 'react-icons/io5';
import {BiMenu} from 'react-icons/bi';
import Btn from '../commons/btns'

const NavBar = () => {
    
    return ( 
        <nav className="nav">
            <div className="logo"><IoMedicalSharp size={"5rem"} onClick={()=>window.location.href= "/"}/></div>
            <div>
                <h1 onClick={()=>window.location.href= "/"}>DOC<span>TAP</span></h1>
            </div>
            <div className="nav-btns">
                <Btn className={'small-btn-white'} text={'About Us'}></Btn>
                <Btn className={'small-btn-white'} text={'How it works'}></Btn>
                <Btn className={'small-btn-white'} text={'Your Account'}></Btn>
            </div>
            <div className="nav-BiMenu">
                <BiMenu size={"4rem"}></BiMenu>
            </div>
        </nav>
     );
}
 
export default NavBar;