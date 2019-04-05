import React, {Component} from 'react';
import "./Clock.css";
class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            time : new Date().toLocaleTimeString()
        };    
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: new Date().toLocaleTimeString() }), 1000);
    }
     componentWillUnmount() {
        clearInterval(this.interval);
     }
    
    render(){
               
        return(
         
         <div>            
          <p className="Time">{this.state.time}</p>
        </div>  
        );
    }
}

export default Clock;