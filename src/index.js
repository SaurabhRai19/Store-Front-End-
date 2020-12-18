import React from 'react'
import Routes from "./Routes";
import ReactDOM from "react-dom";

ReactDOM.render(<Routes />,document.getElementById("root"));

/*core contains component that are common in every page like navigatioon bar,footer
helper folders will have connection/talking to database related things,and routes then this calls will be injected in these files.
auth helper will have isSigendIn isAuthenticated isAdmin and other routers related to authentication
Base and home files will have visual parts like cards etc.
We have divided all the logic,call to backend and visual part different to make our application future proof
For styling bootstrap css cdn and font-awesome cdn in index.html
For styling we write className instead of class 
Must watch serverless-stack.com/enviroments-in-create-react-app.html
const Base =() => { return (<div>if curly brace then need to return something</div>)} otherwise use ()
const Base =() => (<div>if curly brace then need to return something</div>)
And one more difference { means wait for some event to happen like onClick or some time } , (means do it right now like function calls) 
*/