import Btn from '../commons/btns';
import img from "../css/main-art.png"
import '../css/home.css';

const Home = () => {
    
    return ( 
        <div className="home-main">
            
            <div className="home-left">
                <div>
                    <p className="home-heading">Identify possible <span>conditions</span> and <span>treatments</span></p>
                    <p className="home-details">We use an accurate medical database to serve
                       you with all the information you need like possible 
                        medical conditions, treatments and nearby
                        pharmacies*
                    </p>
                    <div className="home-begin-btn">
                        <Btn link={"/form"} className={'big-btn'} text={'Get Started'}></Btn>
                    </div> 
                </div>
            </div>
            <div className="home-right">
                <img src={img} alt="opps it is missing"/>
            </div>
            
        </div>
    );
}
 
export default Home;