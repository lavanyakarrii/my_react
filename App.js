
/*
*
*<div id="parent">
*<div id="child">
*<h1 id="h1">hi h1</h1>
* <h1 id="h1">hi h1</h1>
*</div>
*<div id="child">
*<h1 id="h1">hi h1</h1>
* <h1 id="h1">hi h1</h1>
*</div>
*</div>
*
*
*
*/
const parent = React.createElement("div",{id : "parent"},
[React.createElement("div",{id : "child"},
[React.createElement("div",{id : "h2"},"hi i am h1"),React.createElement("h2",{id : "h2"},"hi i am h2")]
),
React.createElement("div",{id : "child2"},
[React.createElement("div",{id : "h2"},"hi i am h1"),React.createElement("h2",{id : "h2"},"hi i am h2")]
)]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);