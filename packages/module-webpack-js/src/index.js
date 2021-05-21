import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
    render() {
      return (
        <div>
          Hiho, {this.props.name}
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <HelloMessage name="Olli" />,
    document.getElementById('root')
  );