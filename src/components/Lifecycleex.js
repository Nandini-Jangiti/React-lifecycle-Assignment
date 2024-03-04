import React, { Component } from 'react';

class Lifecycleex extends Component {

    //constructior calls first/init and after it goes into render method
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        console.log('Constructor called');
    }

    //after constructor and render method, mounting(component creation)
    componentDidMount() {
        console.log('Component did mount');
    }

    // Updating(passing new props or updating state)
    componentDidUpdate(prevProps, prevState) {
        console.log('Component did update');
    }

    //destroys the component or cleans the code
    componentWillUnmount() {
        console.log('Component will unmount');
    }

    // Updating(passing new props or updating state) 
    //if a specific prop has changed and fetch data accordingly
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should component update');
        return true;
    }



    handleClick = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    };

    //render method, after init method it calls
    render() {
        console.log('Render called');
        return (
            <div>
                <h1>Lifecycle methods</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>Increment Count</button>
            </div>
        );
    }
}

export default Lifecycleex;
