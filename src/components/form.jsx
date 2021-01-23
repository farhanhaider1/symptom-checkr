import React, { useState, useEffect } from 'react';
import {useTransition, animated} from 'react-spring'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import UserContext from '../context/UserDataContext';
import '../css/form.css';

const Form = () => {

    const history = useHistory();

    // state to track page number
    const [page, set] = useState(0);
    // symptoms to show
    const [allSymptoms, setAllSymptoms] = useState([]);
    const [symptomInput, setSymptomInput] = useState("");
    const [userSymptoms, setUserSymptom] = useState([]);
    // show continue button
    const [continueBtn, setContinue] = useState(true);
    // show back button
    const [backBtn, setBack] = useState(false);
    // show submit button
    const [submitBtn, setSubmit] = useState(false);
    // gender
    const [gender, setGender] = useState();
    // dob
    const [dob, setDob] = useState("");
    
    // pages
    const pages = [
        ({ style }) => 
            <animated.div className="heading-from" style={{ ...style}}>
                <h1>
                Gender
                </h1>
            </animated.div>,
        ({ style }) => <animated.div className="heading-from" style={{ ...style}}>
            <h1>
            Date of birth
            </h1>
            </animated.div>,
        ({ style }) => <animated.div className="heading-from" style={{ ...style}}><h1>
            Finally, Symptoms
        </h1></animated.div>
    ];

    
    const getAllSymptoms = async() => {
        let symptomArray = await axios.get('https://doc-tap-farhan.herokuapp.com/issues/getSymptoms');
        setAllSymptoms(symptomArray.data)
        return symptomArray.data;
    }


    useEffect(() => {
        
       getAllSymptoms();
        
    },[]);

    const updateUserSymptoms = (name) => {
        if(userSymptoms.includes(name)) return;
        setUserSymptom(userSymptoms=>[...userSymptoms,name]);
    }

    const deleteUserSymptoms = (name) => {
        const array = userSymptoms.filter(s => s !== name);
        setUserSymptom(array);
    }

    const selections = [
        <div className="btns-form gender-btn">
            <button id="male" className={"c " + ((gender==="male") && 'active')} onClick={(e)=>setGender(e.target.id)} >Male</button>
            <button id="female" className={"c " +((gender==="female") && 'active')}  onClick={(e)=>setGender(e.target.id)}>Female</button>
        </div>,
        <div className="dob-select"><input type="text" id="dob-input" placeholder="e.g 1998" onChange={e=>setDob(e.target.value.trim())}/></div>,
        <div className="symptoms-select">
            <div>
                <input onChange={(e)=> setSymptomInput((e.target.value).toLowerCase().trim())} type="text" name="symptoms" placeholder="Type and/or select" id="symptom-input"/>
            </div>
            <div className="symptoms-select-btns">
                {(allSymptoms.filter(s => s.Name.includes(symptomInput)).map(s =>
                    <button className={"symptoms-select-btns "+((userSymptoms.includes(s.Name)) && 'active')} key={s.ID} id={s.Name}
                        onClick={(e)=> updateUserSymptoms(e.target.id)}
                        onDoubleClick={(e)=> deleteUserSymptoms(e.target.id)}
                    >
                        {s.Name}
                    </button>
                ))}
            </div>
        </div>
    ];

    useEffect(() => {
        if(page === 1){
            setBack(true);
            setContinue(true);
            setSubmit(false);
        }
        if(page === 2){
            setContinue(false);
            setSubmit(true);
        }
        if(page === 0){
            setBack(false)   
        }
    },[page]);

    

    const handleContinue = async() => {
        if(page === pages.length-1) return;
        set((page => (page + 1)))
    };

    const handleBack = () => {
        if(page === 0) return;
        set((page => (page - 1)))
    };

    const transitions = useTransition(page,null, {
        from: { opacity: 0, position: "absolute" },
        enter: { opacity: 1,position: "absolute"  },
        leave: { opacity: 0, transform: 'translateX(-100%)',position: "absolute"  },
        config:{duration:500}
    });

    return (
        <UserContext.Provider
            value={
                
                gender
                
            }
        >
        <div className="main-form">
            <div className="body-form-heading" >
                {transitions.map(({ item, props, key }) => {
                    const Page = pages[item]
                    return <Page key={key} style={props} />
                })}
            </div> 
            <div className="selections-form">
               <div className="data-form">
                    {selections[page]}
               </div>
               <div className="btns-form">
                   <div>
                       {continueBtn && <button type="button" onClick={handleContinue}>Continue</button>}
                       {submitBtn && <button type="submit" onClick={()=> history.push({
                           pathname: '/result',
                           state: {
                               dob: dob,
                               gender: gender,
                               symptoms: userSymptoms
                           }
                       })}>Submit</button>}
                   </div>
                   <div>
                       {backBtn && <button type="button" onClick={handleBack}>Back</button>}
                   </div>
               </div>
            </div>             
        </div>
        </UserContext.Provider>
    );
}
 
export default Form;