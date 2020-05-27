import React, { Component } from 'react'
import Counters from "./components/temp/counters";
import Counter from './components/temp/counter';
import NavBar from './components/NavBar';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <React.Fragment>
                <header>
                    <div className="collapse bg-dark" id="navbarHeader">
                        <div className="container">
                          
                        </div>
                    </div>
                    <NavBar></NavBar>   
                </header>        
                <main role="main">
                    <Counters/>
                </main>
            </React.Fragment>    
        );
    }
}

export default App;