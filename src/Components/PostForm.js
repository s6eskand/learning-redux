import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from "../redux/actions/postActions";

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        };

        this.props.createPost(post)

    };

    render() {
        return (
            <div style={{margin: '70px'}}>
                <h1>Add Post</h1>
                <form style={{marginTop: '20px'}}>
                    <div>
                        <label>Title: </label>
                        <input
                            type="text"
                            name="title"
                            style={{width: '70%'}}
                            onChange={this.onChange}
                            value={this.state.title}
                        />
                    </div>
                    <br/>
                    <div>
                        <label>Body: </label>
                        <textarea
                            name="body"
                            style={{width: '70%'}}
                            onChange={this.onChange}
                            value={this.state.body}
                        />
                    </div>
                    <br/>
                    <button onClick={this.onSubmit} type="submit">Submit</button>
                </form>
            </div>
        );
    }

}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);