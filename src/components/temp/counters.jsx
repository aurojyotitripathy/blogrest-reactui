import React, { Component } from 'react'
import Counter from  "./counter";

export default class counters extends Component {
    state={
        counters :[
            {"id":1,"label":"Azur",value:0},
            {"id":2,"label":"Google",value:0},
            {"id":3,"label":"Amazone",value:0},
            {"id":4,"label":"Digital Ocean",value:0},
            {"id":5,"label":"Oracle",value:0},
            {"id":6,"label":"IBM",value:0}
        ]
    }
    handleDelete = counter =>{
        console.log("coming",counter);
        const counters=this.state.counters.filter(c => c.id!=counter.id);
        this.setState({counters});
        //this.setState({value: this.state.value-1});
    };

    handleReset =() =>{
        const counters=this.state.counters.map(c => { 
            c.count=0 ;
            return c;
        })
        this.setState({counters});
    }

    handleIncrement = counter =>{
        const counters=[...this.state.counters];
        const index=counters.indexOf(counter);
        counters[index]={...counter};
        counters[index].value++;
        this.setState({counters});
        //this.setState({value: this.state.value+1});
    };
    handleDecrement = counter =>{
        console.log("coming",counter);
        //this.setState({value: this.state.value-1});
    };
    render() {
        return (
            <div>
                <button className="btn btn-primary btn-lg" onClick={this.handleReset}>Reset</button>
                {
                    this.state.counters.map(counter =>
                         <Counter key={counter.id}  value={counter.value} label={counter.label} counter={counter} onDelete={this.handleDelete} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}> 
                             <h1>{counter.label}</h1>
                        </Counter>
                    )
                }
            </div>
        )
    }
}
