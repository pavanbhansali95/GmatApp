import React, { useState } from 'react';
import ScoreInput from './scoreInput';
import ScoreCard from './scoreCard';
const ScoreDashboard = (props) => {
    const [totalCurrentScore,setTotalCurrentScore] = useState(0);
    const [totalTargetScore,setTotalTargetScore] = useState(0);
    const [inputCurrentQuantScore,setTinputCurrentQuantScore] = useState(0);
    const [inputCurrentVerbalScore,setinputCurrentVerbalScore] = useState(0);
    const [inputTargetQuantScore,setinputTargetQuantScore] = useState(0);
    const [inputTargetVerbalScore,setinputTargetVerbalScore] = useState(0);
    const [displayCurrentQuantScore,setdisplayCurrentQuantScore] = useState('');
    const [displayCurrentVerbalScore,setdisplayCurrentVerbalScore] = useState('');
    const [displayTargetQuantScore,setdisplayTargetQuantScore] = useState('');
    const [displayTargetVerbalScore,setdisplayTargetVerbalScore] = useState('');
    const [showScoreCard, setshowScoreCard] = useState(false);
    const quantScoreCardObj = {
         width: '35%',
        'marginLeft': '190px',
        'marginRight': '0px'
    };
    const verbalScoreCardObj = {
         width: '35%',
        'marginLeft': '1px'
    };
    const totalScoreCardObj = {
        width: '70%',
        display: 'flex',
        'flexDirection': 'column',
        'justifyContent': 'start'
   };
    const scoreCardHandler = (totalCurrentScore,totalTargetScore,inputCurrentQuantScore,inputCurrentVerbalScore,inputTargetQuantScore,inputTargetVerbalScore) => {
        let displayCurrentQuantScore = "Q" +inputCurrentQuantScore;
        let displayCurrentVerbalScore = "V" +inputCurrentVerbalScore;
        let displayTargetQuantScore = "Q" +inputTargetQuantScore;
        let displayTargetVerbalScore = "V" +inputTargetVerbalScore;
        setTotalCurrentScore(totalCurrentScore);
        setTotalTargetScore(totalTargetScore);
        setTinputCurrentQuantScore(inputCurrentQuantScore);
        setinputCurrentVerbalScore(inputCurrentVerbalScore);
        setinputTargetQuantScore(inputTargetQuantScore);
        setinputTargetVerbalScore(inputTargetVerbalScore);
        setshowScoreCard(true);
        setdisplayCurrentQuantScore(displayCurrentQuantScore);
        setdisplayTargetQuantScore(displayTargetQuantScore);
        setdisplayCurrentVerbalScore(displayCurrentVerbalScore);
        setdisplayTargetVerbalScore(displayTargetVerbalScore);
    }
    return (
        <div>
                <ScoreInput getTotalScore = {scoreCardHandler} />
                {(showScoreCard === true) ?
                <div>
                 <ScoreCard displayTargetScore = {totalTargetScore} displayCurrentScore = {totalCurrentScore} displayCurrentQuantScore = {displayCurrentQuantScore} displayCurrentVerbalScore = {displayCurrentVerbalScore} displayTargetQuantScore = {displayTargetQuantScore} displayTargetVerbalScore = {displayTargetVerbalScore} title="Total Score" currentScorePercentage = {(totalCurrentScore/800)*100} 
                targetScorePercentage = {(totalTargetScore/800)*100} 
                currentScore = {totalCurrentScore} targetScore = {totalTargetScore} styleObj = {totalScoreCardObj} />
                <div style = {{display: 'flex'}}>
                <ScoreCard displayCurrentScore = {displayCurrentQuantScore} displayTargetScore = {displayTargetQuantScore}  displayCurrentQuantScore = {displayCurrentQuantScore} displayCurrentVerbalScore = {displayCurrentVerbalScore} displayTargetQuantScore = {displayTargetQuantScore} displayTargetVerbalScore = {displayTargetVerbalScore}  currentScorePercentage = {(inputCurrentQuantScore/60)*100} 
                targetScorePercentage = {(inputTargetQuantScore/60)*100}  title="Quant Score" currentScore = {inputCurrentQuantScore} targetScore= {inputTargetQuantScore} styleObj = {quantScoreCardObj} />
                <ScoreCard displayTargetScore = {displayTargetVerbalScore} displayCurrentScore = {displayCurrentVerbalScore} displayCurrentQuantScore = {displayCurrentQuantScore} displayCurrentVerbalScore = {displayCurrentVerbalScore} displayTargetQuantScore = {displayTargetQuantScore} displayTargetVerbalScore = {displayTargetVerbalScore}  currentScorePercentage = {(inputCurrentVerbalScore/60)*100} 
                targetScorePercentage = {(inputTargetVerbalScore/60)*100} title="Verbal Score" currentScore = {inputCurrentVerbalScore} targetScore = {inputTargetVerbalScore} styleObj = {verbalScoreCardObj} /> :
                </div>
                </div> : ''
                }
                
            
        </div>
    )
}
export default ScoreDashboard;