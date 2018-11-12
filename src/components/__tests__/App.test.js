import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import CommentBox from '../CommentBox';

it('shows a comment box', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);

    // Looks inside the div and checsk to see if the CommentBox is in there
    //to run tst write out npm run test

    // console.log(div.innerHTML);
    // expect(div.innerHTML).toContain('Comment Box');

    // expect(div).toHaveAnInstanceOf(CommentBox);

    ReactDOM.unmountComponentAtNode(div); //find the div component and remove the App component. This is referred to as "Clean Up"
    //destorys any component/objects. 
});