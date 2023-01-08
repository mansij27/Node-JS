import logo from './download.png'
import './App.css';

function App(){
    return (
        <div className='App'>
            <header className='App-header'>
                
                <p>
                    Tiranga
                </p>
            </header>
            <header className='App-header-white'>
            <img src = {logo} className="App-logo" alt="logo" />
            </header>
            <header className='App-header-green'>
                <h5>
                    JAI HIND
                </h5>
            </header>
           
        </div>
    );
}

export default App;