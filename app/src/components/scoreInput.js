import React from 'react';
import './scoreInput.css';
const ScoreInput = (props) => {
    let inputCurrentQuantScore;
    let inputTargetQuantScore;
    let inputCurrentVerbalScore;
    let inputTargetVerbalScore;
    const submit = () => {
        if(inputCurrentQuantScore.value === '' || (parseInt(inputCurrentQuantScore.value) === 0) || (parseInt(inputCurrentQuantScore.value) > 60) || inputTargetQuantScore.value === '' || (parseInt(inputTargetQuantScore.value) === 0) || (parseInt(inputTargetQuantScore.value) > 60) || inputTargetVerbalScore.value === '' || (parseInt(inputTargetVerbalScore.value) === 0) || (parseInt(inputTargetVerbalScore.value) > 60) || inputCurrentVerbalScore.value === '' || (parseInt(inputCurrentVerbalScore.value) === 0) || (parseInt(inputCurrentVerbalScore.value) > 60) )
        {
            alert("Enter values between 1 and 60");
        } else {
            const totalCurrentScore = 200 + 5*(parseInt(inputCurrentQuantScore.value)+parseInt(inputCurrentVerbalScore.value));
            const totalTargetScore = 200 + 5*(parseInt(inputTargetQuantScore.value)+parseInt(inputTargetVerbalScore.value));
            props.getTotalScore(totalCurrentScore,totalTargetScore,inputCurrentQuantScore.value,inputCurrentVerbalScore.value,inputTargetQuantScore.value,inputTargetVerbalScore.value);
        }
        } 
    return (
        <div className="mainInput">
            <div style={{display: 'flex'}}>
            <div className="div1">
            <div className="titleQuant">
                Quant
            </div>
            <div className="quantDiv"><span>
                <label className="label">Current</label>
                <input ref={(score) => inputCurrentQuantScore = score} className="input" type="text"></input>
            </span>
            <span>
                <label style={{paddingLeft:'30px'}} className="label">Target</label>
                <input  ref={(score) => inputTargetQuantScore = score} className="input"  type="text"></input>
            </span></div>
            
            </div>
            <div className="div2">
            <div className="titleVerbal">
                Verbal
            </div>
            <div className="verbalDiv">
            <span>
                <label className="label">Current</label>
                <input  ref={(score) => inputCurrentVerbalScore = score} className="input"  type="text"></input>
            </span>
            <span>
                <label style={{paddingLeft:'30px'}} className="label">Target</label>
                <input  ref={(score) => inputTargetVerbalScore = score} className="input"  type="text"></input>
            </span>
            </div>
            
            </div>
            </div>
           <div className="buttonDiv">
               <button onClick = {submit} className="button" type="submit">Submit and Refresh</button>
           </div>
           
        </div>
    );
}
export default ScoreInput;