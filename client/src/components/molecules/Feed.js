import React from 'react';
import PostChirp from '../atoms/PostChirp';
import Chirp from '../atoms/Chirp';

class Feed extends React.Component {

    constructor() {
        super();
        this.state = {
            chirps: []
        }

        this.chirps = [];
    }
    componentDidMount() {
        fetch("http://localhost:8080/feed")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    chirps: JSON.parse(res)
                })
            });
        
        this.state.chirps.forEach(value => {
            this.chirps.push(<Chirp key={value} title={value.title} text={value.text} user={value.user} />);
        });
    }

    render() {
        return (
            <div className="feed">
                <PostChirp key="1" />
                {this.chirps}
            </div>
        );
    }
  }

  export default Feed;