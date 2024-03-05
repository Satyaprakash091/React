import { Component } from "react";
import './App.css'

class AppClass extends Component {
    constructor()
    {
        super()
        this.state={
            background:'#ffffff'
        }
    }
    change=()=>
    {
        const random_color="#"+Math.round(Math.random()*10000000).toString(16);
        this.setState(random_color);
    }
  render() {
    return (
      <div className="changer" style={{ backgroundColor:this.state.background }}>
        <button onClick={this.change}>change</button>
      </div>
    );
  }
}
export default AppClass;
