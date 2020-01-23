import React from 'react';
import './scoreCard.css';
const ScoreCard = (props) => {
    let scoreUpper;
    let scoreLower;
    let scoreUpperClass;
    let scoreLowerClass;
    let scoreDiff;
    let scoreMsg;
    let scoreTargetScorePercentage;
    let scoreCurentMarker;
    let scoreTargetMarker;
    let scoreDiffPercentage;
    if (props.targetScore === props.currentScore || props.currentScore > props.targetScore) {
        scoreDiff = '';
        if (props.targetScore === props.currentScore) {
            scoreUpperClass = 'score target';
            scoreLowerClass = 'score current';
            scoreUpper = props.currentScorePercentage + "%";
            scoreCurentMarker = (props.currentScorePercentage - 1.5) + "%";
            scoreLower = "100%";
            scoreMsg = `Your estimated total score as per your performance in this mock test is ${props.displayCurrentScore},which is equal to your target score.`;
        } else if (props.currentScore > props.targetScore) {
            scoreUpperClass = 'score current';
            scoreLowerClass = 'score target';
            scoreUpper = props.currentScorePercentage + "%";
            scoreCurentMarker = (props.currentScorePercentage) + "%";
            scoreTargetMarker = (props.targetScorePercentage + 1) + "%";
            scoreDiffPercentage = (props.currentScorePercentage - props.targetScorePercentage) + "%"
            scoreLower = "0%";
            scoreMsg = `Your estimated total score as per your performance in this mock test is ${props.displayCurrentScore}, which is ${props.currentScore - props.targetScore} points higher than your target score of ${props.displayTargetScore}`;
        }
    } else if (props.targetScore > props.currentScore) {
        scoreDiff = props.targetScore - props.currentScore;
        scoreUpperClass = 'score target';
        scoreLowerClass = 'score current';
        scoreUpper = props.targetScorePercentage + "%";
        scoreLower = (100 / props.targetScorePercentage) * props.currentScorePercentage + "%";
        scoreTargetScorePercentage = (props.targetScorePercentage) + "%";
        scoreCurentMarker = (props.currentScorePercentage + 1) + "%";
        scoreTargetMarker = (props.targetScorePercentage) + "%";
        scoreDiffPercentage = (props.targetScorePercentage - props.currentScorePercentage) + "%";
        let score = `${props.targetScore - props.currentScore} points`;
        scoreMsg = `Your estimated total score as per your performance in this mock test is ${props.displayCurrentScore}, which is ${score} lower than your target score of ${props.displayTargetScore}`;
    }
    return (
        <div style={props.styleObj} className='scorecardmain'>
            <p style={{ fontSize: '25px' }} className="carditems">{props.title}</p>
            <div className="carditems currentscore">{props.displayCurrentScore}</div>
            {(props.currentScore > props.targetScore) ?
                <div style={{ "display": "flex", "marginBottom": "0px", "fontSize": "x-small", "color": "gray", "width": "70%", "margin": "0 auto", "flexDirection": "row" }}>
                    <div style={{ width: scoreTargetMarker }} className="innerdiv1">  <p style={{
                        "display": "flex",
                        "marginBottom": "0"
                    }}>{props.displayTargetScore}</p>
                        <span className="pic arrow-down" style={{ "marginBottom": "0px", "width": "0px", "marginRight": "3px", "border-top": "10px solid yellowgreen" }}></span></div>
                    <div style={{ width: scoreDiffPercentage }} className="innerdiv2">       <p style={{
                        "display": "flex",
                        "marginBottom": "0"
                    }}>{props.displayCurrentScore}</p>
                        <span className="pic arrow-down" style={{ "marginBottom": "0px", "width": "0px", "marginRight": "3px" }}></span></div>

                </div> : ''
            }
            {(props.currentScore === props.targetScore) ?
                <div style={{ "display": "flex", "marginBottom": "0px", "fontSize": "x-small", "color": "gray", "width": "70%", "margin": "0 auto", "flexDirection": "column" }}>
                    <p style={{
                        "paddingLeft": scoreCurentMarker,
                        "display": "flex",
                        "justifyContent": "left",
                        "alignItems": "flex-end",
                        "marginBottom": "0"
                    }}>{props.displayCurrentScore}</p>
                    <span className="pic arrow-down" style={{ "display": "flex", "justifyContent": "left", "marginBottom": "0px", "marginLeft": scoreCurentMarker, "height": "2px", "width": "0px" }}></span>
                </div> : ''
            }
            {(props.currentScore < props.targetScore) ? <div style={{ "display": "flex", "marginBottom": "0px", "fontSize": "x-small", "color": "gray", "width": "70%", "margin": "0 auto", "flexDirection": "row" }}>
                <div style={{ width: scoreCurentMarker }} className="innerdiv1">  <p style={{
                    "display": "flex",
                    "marginBottom": "0"
                }}>{props.displayCurrentScore}</p>
                    <span className="pic arrow-down" style={{ "marginBottom": "0px", "width": "0px", "marginRight": "3px", "border-top": "10px solid blue" }}></span></div>
                {((props.targetScore - props.currentScore) > 2) ? <div style={{ width: scoreDiffPercentage }} className="innerdiv2">       <p style={{
                    "display": "flex",
                    "marginBottom": "0"
                }}>{props.displayTargetScore}</p>
                    <span className="pic arrow-down" style={{ "marginBottom": "0px", "width": "0px", "marginRight": "3px", "border-top": "10px solid yellowgreen" }}></span></div> : ''}

            </div> : ''}

            <div style={{ height: '12px', marginTop: '0px', position: 'relative' }} className="carditems"><div className="container">
                <div style={{ width: scoreUpper }} className={scoreUpperClass}>
                    <div style={{ width: scoreLower }} className={scoreLowerClass}></div>
                </div>


            </div>
                {(props.targetScore > props.currentScore) ? <div style={{
                    'z-index': 2,
                    position: 'absolute',
                    'marginLeft': `${props.currentScorePercentage + 2.5}%`,
                    'marginTop': '0px',
                    'top': '-3px',
                    'fontSize': '12px'
                }}>+{scoreDiff}</div> : ''}
            </div>

            {(props.currentScore === props.targetScore) ? <div style={{ "display": "flex", "marginBottom": "0 px", "fontSize": "x-small", "color": "gray", "width": "70%", "margin": "0 auto", "flexDirection": "column" }}>
                <span className="pic arrow-up" style={{ "display": "flex", "justifyContent": "left", "marginTop": "2px", "marginLeft": scoreCurentMarker, "height": "2px", "width": "0px" }}></span>
            </div> : ''}
            {((props.targetScore > props.currentScore) && (props.targetScore - props.currentScore < 3)) ? <div style={{ "display": "flex", "marginBottom": "0 px", "fontSize": "x-small", "color": "gray", "width": "70%", "margin": "0 auto", "flexDirection": "column" }}>
                <span className="pic arrow-up" style={{ "display": "flex", "justifyContent": "left", "marginTop": "2px", "marginBottom": "0px", "marginLeft": scoreTargetScorePercentage, "height": "2px", "width": "0px" }}></span>
                <p style={{
                    "paddingLeft": scoreTargetScorePercentage,
                    "display": "flex",
                    "justifyContent": "left",
                    "alignItems": "flex-end",
                    "marginTop": "1px"
                }}>{props.displayTargetScore}</p>
            </div> : ''}
            <div className="carditems msg">{scoreMsg}</div>
        </div>

    );
}
export default ScoreCard;