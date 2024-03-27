
//using js:
//const hellowrld = document.createElement("h1");
//hellowrld.textContent = "<h1> Hello World </h1>";

//const divID = document.getElementById("root");

//divID.appendChild(hellowrld);



//using react:
// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Hello World"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);




// <div id ="parent">
//     <div id = "child">
//          <h1>Hello World from nested React</h1>
         //   <h2>I'm h2</h2>
//     </div>
 //    <div id = "child2">
//          <h1>Hello World from nested React2</h1>
         //   <h2>I'm h2 2</h2>
//     </div>
// </div>

const heading = React.createElement("div",{id :"parent"}, [React.createElement(
    "div",
    {id : "child"},
    [React.createElement
        ("h1",{},"Hello World from Nested React"),
        React.createElement("h2",{},"I'm h2")]) , React.createElement(
            "div",
            {id : "child2"},
            [React.createElement
                ("h1",{},"Hello World from Nested React2"),
                React.createElement("h2",{},"I'm h2 2")])]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);