import React from 'react';
import './App.css';
import Post from './Components/Post';
import PostForm from "./Components/PostForm";

class App extends React.Component {
    render() {
        return (
            <div>
                <PostForm/>
                <hr style={{ marginRight: '70px', marginLeft: '70px'}}/>
                <Post/>
            </div>
        );
    }
}

export default App;
