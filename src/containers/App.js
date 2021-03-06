import React, { Component } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            robots: [],
            searchField: ''
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots:  users }))
    }

    onSearchChange = (e) => {
        this.setState({ searchField: e.target.value }) 
    }

    render() {
        const { robots, searchField } = this.state;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return !robots.length ? 
        <h1 className="tc">Loading...</h1> :
        (
            <div className="tc">
                <h1 className="f1">Robofriends</h1>
                <Searchbox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App;