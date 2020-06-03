import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from "../redux/actions/postActions";
import PropTypes from 'prop-types';

class Post extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    componentDidUpdate(nextProps, nextContext) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost)
        }
    }

    render() {
        return (
            <div>
                <h1 style={{margin: '70px'}}>Posts</h1>
                <div className="post-items">
                    {this.props.posts.map(post =>
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

Post.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object,
};

const mapStateToProps = (state) => ({
    posts: state.posts.items,
    newPost: state.posts.item,
});

export default connect(mapStateToProps, { fetchPosts })(Post);