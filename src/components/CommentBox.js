import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';

class CommentBox extends Component {
    state = { comment: '' };

    // //component just got rendered
    // componentDidMount(){
    //     this.shouldNavigateAway();
    // }

    // //Our component just a new set of props or just got updaeted
    // componentDidUpdate(){
    //     this.shouldNavigateAway();
    // }


    // shouldNavigateAway() {
    //     if (!this.props.auth) {
    //         // console.log('i need to leave!');
    //         this.props.history.push('/'); //this navigates to the root route
    //     }
    // }
    
    
    handleChange = event => {
        this.setState({ comment: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({ comment: ' ' })
    }

    render(){
        return(
            <div>

            <form onSubmit={this.handleSubmit}>
                <h4> Add a Comment</h4>
                <textarea
                    onChange={this.handleChange} 
                    value={this.state.comment}
                />
                <div>
                    <button>Submit Button</button>
                </div>
            </form>
                <button className='fetch-comments' onClick={this.props.fetchComments}>
                    Fetch Comments
                </button>
            </div>
        );

    }

}

// function mapStateToProps(state) {
//     return { auth: state.auth}
// }

export default connect(null, actions)(requireAuth(CommentBox));

//transition this from a function based component to a class based component 
//this way this can have component level state and have call back