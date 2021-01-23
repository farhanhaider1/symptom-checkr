import React, {useEffect,useState} from 'react';
import axios from 'axios';
import TableComp from './table';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../css/result.css';


const Result = (props) => {
    

    const {dob,gender,symptoms} = props.location.state;

    const [issues, setIssues] = useState([]);
    const [isLoading, setLoader] = useState(true);
    const [noSymptom, setNoSymptom] = useState(false);

    const getSymptomArray = () => {
        let arrayString = '';
        
        for (let i = 0; i < symptoms.length; i++) {
            const element = symptoms[i];
            console.log(element);
            arrayString += ('symptoms=' + element+"&")
        }

        return arrayString;
    }

    useEffect(() => {
        async function fetchMyAPI(){
            setLoader(true);
            let error = false;
            const symptom = getSymptomArray();
        
            let url = `https://doc-tap-farhan.herokuapp.com/issues?${symptom}&gender=${gender}&birth=${dob}`;
            try {
               let symptomArray = await axios.get(url).then(setLoader(false));
                console.log(symptomArray);
                if(error === true) return;
                setIssues(symptomArray.data);
                if(symptomArray.data.length === 0 ){
                    setNoSymptom(true);
                } 
            } catch (error) {
                console.log(error);
                setIssues([{Name: "Server Error/ Contact Support",ProfName:"404"}]);
            }
            
        }

        fetchMyAPI()
    },[]);

    return (  
        <div className="result-main">
            
            <div className="result-heading">
                <h1>Result</h1>
            </div>
            <div className="result-issues">
                {issues.length === 0 && !noSymptom &&
                    <div className={"loader"}>
                        <CircularProgress size="70px" color="secondary" />
                    </div>
                }
                {issues.length === 0 && noSymptom &&
                    <div className={"loader"}>
                        <h1>no issues found</h1>
                    </div>
                }
                <TableComp data={issues} ></TableComp>
            </div>
        </div>
        
    );
}
 
export default Result;