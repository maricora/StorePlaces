import React, {Component} from 'react';
import './App.css';
import Map from "./components/Map";


class App extends Component {
    state = {locations: []}

    componentDidMount() {
        fetch('/locations')
            .then(res => res.json())
            .then(locations => {
                return this.setState({locations});
            });
    }

    render() {
        return (
            <div className="App">
                <h1>Locations</h1>

                {/*Todo - new listing*/}
                {this.state.locations.map(location =>
                    <div key={location.id}>{location.name}</div>
                )}
                { /* Todo - add map functionality
                        * Display/hide specific points
                        * Routes
                    <Map
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{height: `100%`}}/>}
                        containerElement={<div style={{height: `400px`}}/>}
                        mapElement={<div style={{height: `100%`}}/>}
                    />
                */ }

            </div>

        );
    }
}

export default App;