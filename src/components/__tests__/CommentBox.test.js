import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    wrapped = mount (
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    //after each is a statement that allows testing actions after the test suite has finished
    wrapped.mount();
});

it('has a text area and 2 buttons', () => {
    // const wrapped = mount(<CommentBox />);
    // console.log(wrapped.find('textarea'));
    // console.log(wrapped.find('button'));
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
})

describe('the text area', () => {
    // the describe statement allows testing limited to scope of the describe statement. 
    //allows before each statement to be limited to these tests only
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });
        //wrapped.update updates to rendering of the DOM
        wrapped.update();
    });

    it('has a text area that users can type in', () => {
        // wrapped.find('textarea').simulate('change', {
        //     target: { value: 'new comment' }
        // });
        // wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });
    
    it('when form is submitted, text area gets emptied', () => {
        // wrapped.find('textarea').simulate('change', {
        //     target: { value: 'new comment' }
        // });
        // wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual(' ');
    
    });
});