import React from 'react';
import './App.css';
import Post from './Components/Post';
import PostForm from "./Components/PostForm";
import { Provider } from 'react-redux';
import store from './redux/store/index';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <PostForm/>
                    <hr style={{ marginRight: '70px', marginLeft: '70px'}}/>
                    <Post/>
                </div>
            </Provider>
        );
    }
}

export default App;
