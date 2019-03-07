import React from 'react';
// import axios from 'axios';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList';

class App extends React.Component {
    state = {images: []};
    onSearchSubmit = async term => {
        // console.log(term)
        /*
        axios.get('https://api.unsplash.com/search/photos',{
            headers: {
                Authorization: 'Client-ID c9a032ce46ceeb37c5e2599e3532db9d285fba37f63daf48467b8194c09fc209'
            },
            params: {
                query: term
            }
        }).then((response)=>{
            console.log('RESPONSE', response.data.results)
        });
        */
        const response = await unsplash.get('/search/photos',{
            
            params: {
                query: term
            }
        });
        // console.log('RESPONSE', response.data.results);
        console.log(this);
        this.setState({images: response.data.results});
    }

    render () {
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmitRun={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;
