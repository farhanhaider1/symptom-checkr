import React, {useState} from 'react';
import Cards from "../commons/cards";
import {IoIosArrowRoundBack} from 'react-icons/io';
import '../css/table.css';

const TableComp = (props) => {
   
    const data = props.data;

    const [showDetail, setDetail] = useState(false);
    const [showSymptoms, setShowSymptoms] = useState(true);
    const [show, setShow] = useState('');
      
    function handleClick(e){
        setDetail(!showDetail);
        setShowSymptoms(!showSymptoms);
        setShow(e.target.value);
    }
    
    return (
        <div>
            {showSymptoms && <div className="disclaimer"><p>Potential issues* (Click to expand)</p></div>}
            {showDetail && <div>
                <button
                    className="back-btn"
                    onClick={(e)=> handleClick(e)}
                >
                        <IoIosArrowRoundBack size={'3rem'}></IoIosArrowRoundBack>
                </button>
                </div>}
            <div className="table-issues">
                {showSymptoms && 
                    <div>
                        {data.map((row) => (
                            <div>
                                <button value={row.Name} key={row.Name} className="table-issues-btn"
                                    onClick={e=>handleClick(e)}
                                >{row.Name}</button>
                            </div>
                        ))}
                    </div>
                }
                {showDetail && data.filter(s => s.Name === show).map(issue => (
                    <div >
                        <h4>{issue.Name} (prof name: {issue.ProfName}) </h4>
                        {issue.Description && <Cards heading={"Description"} text={issue.Description}></Cards>}
                        {issue.PossibleSymptoms && <Cards heading={"Possible Symptoms"} text={issue.PossibleSymptoms}></Cards>}
                        {issue.TreatmentDescription && <Cards heading={"Treatment"} text={issue.TreatmentDescription}></Cards>}
                        {issue.MedicalCondition && <Cards heading={"Medical Condition"} text={issue.MedicalCondition}></Cards>}
                        {issue.Specialisation && 
                            <div className="card-child">
                                <h3>Specialisation</h3>
                                {issue.Specialisation.map(Specialisation => 
                                    <p className="text">{Specialisation.Name}</p>
                                )} 
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
      );
}
 
export default TableComp;

