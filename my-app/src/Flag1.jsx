import logo from './independence.jpg'
import './App.css';

function Flag(){
    return (
        <div className='App'>
            <header className='App-header'>
                <p>
                    JAI HIND
                </p>
                
            </header>
            <header className='App-header-image'>
            <img src = {logo} className="App-logo" alt="logo" height="50px"/>
            </header>
        </div>
    );
}

export default Flag;