import React, { Component } from "react";

class LifecycleComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            todos:[],
          };
        
    }
 
  componentDidMount() {
    console.log('Установлен');
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVsZW5hMTExMUBleGFtcGxlLmNvbSIsImlkIjo0NDksImlhdCI6MTcwMzI2MTc0MX0._dYDcZ0Nlth88Q6E3952ALB3FSToSf5_wp-GPlqyd48';
    fetch("https://todo-redev.herokuapp.com/api/todos",{
        headers: {
            Authorization: `Bearer ${token}`,
          },
        })

      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ todos: data });
      });

  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`Count: ${this.state.count}`);
  }

  componentWillUnmount() {
    console.log('Компонент удален');
  }

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count % 2 === 0) {
      return true; 
    } else {
      return false; 
    }
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Увеличить</button>
      </div>
    );
  }
}

export default LifecycleComponent;