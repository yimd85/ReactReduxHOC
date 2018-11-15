import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
    wrapped = mount (<CommentBox />);
});

afterEach(() => {
    wrapped.mount();
});


it('has a text area and a button', () => {
    // const wrapped = mount(<CommentBox />);
    // console.log(wrapped.find('textarea'));
    // console.log(wrapped.find('button'));
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
})

it('has a text area that users can type in', () => {
    wrapped.find('textarea').simulate('change', {
        target: { value: 'new comment' }
    });
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
});

// it('', () => {
//     wrapped.find('textarea').simulate('change', {
//         target: { value: '' }
//     });
//     wrapped.update();
//     expect(wrapped.find('textarea').prop('value')).toEqual('')
// });