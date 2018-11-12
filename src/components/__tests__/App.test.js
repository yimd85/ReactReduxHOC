import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('shows a comment box', () => {
    const div = document.create('div');

    ReactDOM.render(<App />, div);

    // Looks inside the div and checsk to see if the CommentBox is in there


    ReactDOM.unmountComponentAtNode(div); //find the div component and remove the App component. This is referred to as "Clean Up"
    //destorys any component/objects. 
});