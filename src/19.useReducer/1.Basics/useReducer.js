// 3rd HOOK after useState and useRef that can Store items in component.
// 2nd HOOK after useState that can Re-render the COMPONENT.

// It means this useReducer can do Both Storing the values and Re-render the component.

// -----  TERMNOLOGIES  -------

/*
 1. Reducer Function.. -> WHICH IS UNLIMATELY RESPONSIBLE FOR THE CHANGE of state
 has to be a STRICTLY PURE FUNCTION.

 2. Action Object: -> Action object is an Object with Intent 
 example : you want to run 
 action object  = {
    type: "run"
 }

 you want to box
 Boxing = {
    type: "boxing"
 }

 3. dispatch => transport through which the REDUCER FUNCTION will get the Action Object.
*/

// SEE EXAMPLE FOLDER THEN COME BACK

// We have concluded that useState and useReducer are Preety much Simialr.
// When to use What ?
/*
 Practically I have Never seen the major use of useReduceder

 Seperation of concerns (seperate files)
 If the Component becomes VV large then we can DEeploy this technique.

*/
