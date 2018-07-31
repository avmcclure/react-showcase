import React, { Component } from 'react';
import PhotoCard from 'Components/PhotoCard';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <PhotoCard
                    url={'http://placehold.it/600/92c952'}
                    title={'accusamus beatae ad facilis cum similique qui sunt'}
                    id={1}
                    albumId={1}
                />
            </div>
        );
    }
}

export default App;
