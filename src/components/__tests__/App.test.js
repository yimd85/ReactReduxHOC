import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
});

//The before each applies to every test inside this FILE

it('shows a comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);

    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);

    // Looks inside the div and checsk to see if the CommentBox is in there
    //to run tst write out npm run test

    // console.log(div.innerHTML);
    // expect(div.innerHTML).toContain('Comment Box');
    // expect(div).toHaveAnInstanceOf(CommentBox);

    // ReactDOM.unmountComponentAtNode(div); 
    //find the div component and remove the App component. This is referred to as "Clean Up"
    //destorys any component/objects. 
});

it('shows a component box', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
});
