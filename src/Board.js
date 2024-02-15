
import { useState } from "react";
import Square  from "./Square";


export default function Board(){
    const [state,setState] = useState(Array(9).fill(null));
    const [oIsNext,setOIsNext] = useState(false);
    let whoWins = null;
    let status = "Next Move: " + (oIsNext ? "O":"X");
    function changeSquareState(i){
        if (state[i] || gameLogic(state)){
           
            return;
        }
        const newStates = state.slice()
        if (oIsNext){
            newStates[i] = 'O';
            setOIsNext(false);
            ////status = "Next Move: " + (oIsNext ? "O":"X");
        }
        else{
            newStates[i] = 'X';
            setOIsNext(true);
            //status = "Next Move: " + (oIsNext ? "O":"X");
        }
        
        setState(newStates);
        
    }
    whoWins = gameLogic(state);
    if (whoWins){
        
        status = "Winner: " + whoWins;
    
    }
    else{
        status = "Next Move: " + (oIsNext ? "O":"X");
    }
    return (
        <div className="App">
            <h2>{status}</h2>
            <div className='row1'>
                <Square value={state[0]} setValue={() => changeSquareState(0)}/>
                <Square value={state[1]} setValue={() => changeSquareState(1)}/>
                <Square value={state[2]} setValue={() => changeSquareState(2)}/>
        
            </div>
            <div className='row2'>
            <Square value={state[3]} setValue={() => changeSquareState(3)}/>
                <Square value={state[4]} setValue={() => changeSquareState(4)}/>
                <Square value={state[5]} setValue={() => changeSquareState(5)}/>
        
            </div>
            <div className='row3'>
            <Square value={state[6]} setValue={() => changeSquareState(6)}/>
                <Square value={state[7]} setValue={() => changeSquareState(7)}/>
                <Square value={state[8]} setValue={() => changeSquareState(8)}/>
        
            </div>
        </div>
    );
}

function gameLogic(state){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (state[a] && state[a] === state[b] && state[a] === state[c]) {
            return state[a];
        }
    }

    for (let i of state){
        if (i===null){
            return null;
        }
    }
    return "Tie";
    
}