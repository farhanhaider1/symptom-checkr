import React, { useState } from 'react';
import {useTransition, animated} from 'react-spring'
import '../css/form.css';

const Form = () => {
    
    // pages
    // const pages = [
    //     ({ style }) => 
    //         <animated.div className="heading-from" style={{ ...style}}>
    //             <h1>
    //             Gender
    //             </h1>
    //         </animated.div>,
    //     ({ style }) => <animated.div className="heading-from" style={{ ...style}}><h1>
    //         Date of birth
    //     </h1></animated.div>,
    //     ({ style }) => <animated.div className="heading-from" style={{ ...style}}><h1>
    //         Symptoms
    //     </h1></animated.div>
    // ];

    const handleContinue = () => {
        console.log(page);
        if(page === pages.length - 1){
            // todo redirect to results page
            return;
        } 
        if(page === 0){
            setBack(true);
        } 
        if(page === pages.length){
            setContinue(false);
        } 

        set((page => (page + 1)))
    };

    const handleBack = () => {
        
        if(page === 0){
            // todo redirect to results page
            return;
        } 
        set((page => (page - 1)))
    };
    

    // state to track page number
    const [page, set] = useState(0);
    // show continue button
    const [continueBtn, setContinue] = useState(true);
    // show back button
    const [backBtn, setBack] = useState(false);

    const transitions = useTransition(page,null, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)', position: "absolute" },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)',position: "absolute"  },
        leave: { opacity: 0, transform: 'translate3d(-100%,0,0)',position: "absolute"  },
        // config:{duration:500}
    })

    return (
        <div className="main-form">
            <div className="body-form-heading" >
                {transitions.map(({ item, props, key }) => {
                    const Page = pages[item]
                    return <Page key={key} style={props} />
                })}
            </div> 
            <div className="selections-form">
               <div className="data-form">

               </div>
               <div className="btns-form">
                   <div>
                       {continueBtn && <button onClick={handleContinue}>Continue</button>}
                   </div>
                   <div>
                       {backBtn && <button onClick={handleBack}>Back</button>}
                   </div>
               </div>
            </div>             
        </div>
      );
}
 
export default Form;