// ----- CSR VS SSR VS Static Generatoin -------------

// ------- What is rendering ------
/*
    Rendering means creation of Elements (HTML) in the Memeory, 

*/

// -------- is Rendering === Display on the screen -------
/*
    After Rendering (All the elements are  created)
    
    (reflow and repaint)
    then painting happens That is Display on the screen

*/

// ----------- Server side vs Client Side ----------
/*
    Server -> Fb server, Google Server, we can have our own server
    Client -> WEb Browser, Mobile Browser, (Basically Its a browser).

*/

// 1. CSR -> Client Side rendering

/*
    1. Client calls for Server to give the HOME page

    2. Server Returns (Blank HTML, JS File to Fill the Blank HTML up) to CLinet
    3. Client Browser SHows Blank HTML and Meanwhile JS (Renders the Elemeent) in CLINET RAM.
    4. NExt Paint Happens But only Limited (Dynmaic Data is not there).
    5. JS (client) does API call. and get the data
    6. 3rd Painting Happens with Full DATA.

    CONS: 1st Rendering is TIme taking.
    NO SEO

    PROS: Site is Interactive


    REACT JS by default is a CSR, it dosent DO SSR (until you code it in the Backend).

*/

// 2. SSR -> Server Side Rendering

/*
    1. Clinet Call for the server to Give some page
    2. Server goes ahead and Create the page (Render) on the server side only, with Dynamic Data (API calls)
    3. WhatEver HTML is created on server is now given to client.
    4. 1st painting will happen in the client and we will see the FULL PAGE

    CONS: Less Interactive

    PROS: High SEO ranking.
    1st Rendering is Very FAST.


    NEXT.js Supports CSR and SSR both and other things on the tip..

*/

// 3 Static Site Generation (Subset of SSR)

/*
    Data Like Planets DO not change over tie very quickly (once in 10 years).

    Why not We crete a PAGE already and serve it.
    instead of everytime creating a page on a request like in SSR.

*/

// READING MATERIAL: https://javascriptpatterns.vercel.app/patterns/rendering-patterns/server-side-rendering
