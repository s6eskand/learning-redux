import React from 'react';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => this.setState({ posts: data }))
    }

    render() {
        return (
            <div>
                <h1 style={{margin: '70px'}}>Posts</h1>
                <div className="post-items">
                    {this.state.posts.map(post =>
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                    )}
                </div>
            </div>
        )
    }

}

export default Post;