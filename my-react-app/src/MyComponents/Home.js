import React from "react";
import HooksExample from "./HooksExample";
import ReduxCounter from "./ReduxCounter";
import ThunkExample from "./ReduxThunkExample/ThunkExample";
import ContextApiExample from "./ContextApiExample";
class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {text: "Hello there!"};
    }
    shouldComponentUpdate() {
      return true;
    }
    componentDidMount() {
        setTimeout(() => {
          this.setState({text: "Welcome"})
        }, 3000)
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
        "Before the update, the text was " + prevState.text;
    }
    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
        "The updated text is " + this.state.text;
    }
    changeText = () => {
      this.setState({text: "Welcome Folks!"});
    }

    myStyle = {
      minHeight: "40vh"
  }
    
    render() {
      return (
        <>
        <div style={this.myStyle}>
        <h1>{this.state.text}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
        <button type="button" onClick={this.changeText}>Change text</button>
        </div> 
        <HooksExample/>
        <ReduxCounter/>
        <ThunkExample/>
        <ContextApiExample/>
        </>
    );
    }
}
export default Home;