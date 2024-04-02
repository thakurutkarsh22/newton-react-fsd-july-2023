// 3 Major LIFECYLE FOR ANY COMPONENT (class or Functional)

/*
1. Mounting: When I see MY COMPONENT for the 1st time IT IS MOUNTING PHASE.

2. Update: When I change any STATE VARIABLE then the Update phase starts.

3. unMounting: WHen the component is TAKEN AWAYS from the Screen.

*/

// ---------- WHAT IS A SIDE EFFECT --------------
// DOing anyting that your UI HAS TO WAIT FOR (API CALL, adding settimeout, localstorage) is a Side effect.

// WHy UseEffect ->  useEffect is the GURANTEE that it will work After the UI is shown (return keyword has worked)
// It will work literally in the last.
