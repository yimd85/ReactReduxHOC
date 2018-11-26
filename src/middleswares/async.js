//this is the middleware the replaces redux promise


// export default function({ dispatch }) {
//     return function(next){
//         return function(action){

//         }
//     }
// }

// export default ({ dispatch })=> 
//     next => 
//         action => {

//         }
//these two things are the same thing. 



export default ({ dispatch })=> next => action => {
    //Check to see if the action has a promise on its payload property
    //if it does, then wait for it to resolve. If it does not, then send the action on to the next middleware
    // debugger;
    if (!action.payload || ! action.payload.then ) {
        return next(action);
    }
    //if there is a promise, we want to wait for the promise to resolve get its data 
    //and then create a new action with that data and dispatch it

    action.payload.then(function(response){
        const newAction = { ...action, payload: response };
        dispatch(newAction);
    });



};