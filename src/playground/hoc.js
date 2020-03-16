import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            <p>The info is: {props.info}</p>
        </div>
    )
}

const withAdminWarning = (WrappedComponent) => {

    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info please dont share</p>}
            <WrappedComponent {...props} />
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.isAuth
                    ?
                    <WrappedComponent {...props} />
                    :
                    <p>please do login</p>
            }
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={!false} info="there are the details" />, document.getElementById("app"))
ReactDOM.render(<AuthInfo isAuth={false} info="there are the details" />, document.getElementById("app"))