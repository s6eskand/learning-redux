import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        }

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
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };

    render() {
        return (
            <div style={{margin: '70px'}}>
                <h1>Add Post</h1>
                <form style={{marginTop: '20px'}} onSubmit={this.onSubmit}>
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
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }

}

export default PostForm;