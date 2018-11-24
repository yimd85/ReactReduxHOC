//this file has a lower capitol because, by convention, this file will export by default a function 

import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
    class ComposedComponent extends Component {
        componentDidMount(){
            this.shouldNavigateAway();
        }

        componentDidUpdate(){
            this.shouldNavigateAway();
        }


        shouldNavigateAway() {
            if (!this.props.auth) {
                this.props.history.push('/');
            }
        }

        render() {
            return <ChildComponent {...this.props}/>
            // {...this.props} takes any props recieved and passes them down to parent and then passes them to the child
        }
    }

    function mapStateToProps(state) {
            return { auth: state.auth}
        }

    return connect(mapStateToProps)(ComposedComponent);
};


// Imagine that we are in CommentBox.js
//Take this file and import it. And to do that: 

//import requireAuth from 'components/requireAuth';
//class CommentBox {}
//export default requireAuth(CommentBox);

//we are importing the "requireAuth" function and class that with CommentBox class

// Imagine that we are in App.js
//import CommentBox from 'components/CommentBox'
//this variable will the result from --requireAuth(CommentBox)--