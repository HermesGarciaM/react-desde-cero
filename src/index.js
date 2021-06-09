import React from 'react';
import ReactDOM from 'react-dom';
//import useCounter from "./components/CustomHooks/useCounter";
import App from './components/App';
//import Routes from './components/Routes'

const root = document.getElementById("root");

/*function App(){
    const counterOne = useCounter()
    const counterTwo = useCounter()

    return (
        <div className="data">
            {counterOne.count}
            <br/>
            <button onClick={counterOne.increase}>Incrementar</button>
            <button onClick={counterOne.decrease}>Disminuir</button>

            <br/><br/>
            {counterTwo.count}
            <br/>
            <button onClick={counterTwo.increase}>Incrementar</button>
            <button onClick={counterTwo.decrease}>Disminuir</button>
        </div>
    )
}*/

ReactDOM.render(<App />, root);
//ReactDOM.render(<Routes />, root);
