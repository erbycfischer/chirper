import React from 'react';

class PostChirp extends React.Component {
    render() {
        return (
            <form method="POST" action="http://localhost:8080/feed">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title"><input type="text" value="Title..."></input></h5>
                        <p className="card-text"><input type="text" value="Text..."></input></p>
                    </div>
                    <input type="submit" value="Submit"></input>
                </div>
            </form>
        )
    }
  }

  export default PostChirp;