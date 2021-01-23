import '../css/btns.css';

const Btn = (props) => {

    const handleClick = () => {
        window.location.href= props.link
    }
    
    return ( 
        <div className={props.className}>
            <button type="button" color={'white'} onClick={handleClick}> <div className="center"> {props.text}</div></button>
        </div>
     );
}
 
export default Btn;
