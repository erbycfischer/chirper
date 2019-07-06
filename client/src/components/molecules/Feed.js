import React from 'react';
import PostChirp from '../atoms/PostChirp';
import Chirp from '../atoms/Chirp';

class Feed extends React.Component {

    constructor() {
        super();
        this.state = {
            chirps: []
        }

        this.element_chirps = [];
    }
    componentDidMount() {
        fetch("http://localhost:8080/feed", {mode: 'cors'})
            .then(res => {
                console.log(res);
                this.setState({
                    chirps: res
                })
            }).finally(() => {
                this.element_chirps = this.state.chirps.map(value => <Chirp key={value.id} title={value.title} text={value.text} user={value.user} />);
            });
    }

    render() {
        return (
            <div className="feed">
                <PostChirp key="1" />
                {this.element_chirps}
            </div>
        );
    }
  }

  export default Feed;