import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Exchange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        fetch("https:/api/v1/posts/")
            .then(res => res.json())
            .then(json => {
                console.log(json.rates);
                this.setState({
                    isLoaded: true,
                    items: json.rates
                });
            });
    }

    render() {
        var { items, isLoaded } = this.state;
        console.log(items);
        if (!isLoaded) {
            return <div>...Loading</div>;
        } else {
            return (
                <div>
                <ul>
                {Object.keys(items).map(key => (
                        <li key={key}>{key} - {items[key]}</li>
        ))}
        </ul>
            </div>
        );
        }
    }
}

export default Exchange;

render(<Exchange />, document.getElementById('root'));
