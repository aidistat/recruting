import React, { Component } from "react";

class Service extends Component {
    state = {
        posts: []
    }
    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => this.setState({posts: json}))
    }

    render() {
        let { posts } = this.state;
        return (
            <div>
                {
                    posts.map(post => {return(
                        <div>
                            <p>{post.userId}</p>
                            <p>{post.id}</p>
                            <p>{post.title}</p>
                            <p>{post.body}</p>
                        </div>
                    )})
                }
            </div>
        );
    }
}

export default Service;
