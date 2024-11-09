
{/* <div id="parent">
    <div id="child">
        <h1></h1>
        <h2></h2>
    </div>
</div> */}


///////////////////////////////////////////////
const parent = React.createElement(
    "div",
    { id: "parent" },
     React.createElement(
     "div",
     {id: "child"},
     React.createElement(
     "h1",
     null,
     "hi there"
       )
    )
);
    

       const root = ReactDOM.createRoot(document.getElementById ("root"));

       root.render(parent);


   




// const name1 = React.createElement("h1",
//      { id: "heading" },
//       "hello world");

// const root = ReactDOM.createRoot(document.getElementById ("root"));

// root.render(name1);
