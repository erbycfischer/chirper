import React from 'react';

class Chirp extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.description}</p>
                </div>
                <div className="card-footer">
                    <h5>{this.props.user}</h5>
                </div>
            </div>
        )
    }
  }

  export default Chirp;