import React from "react";
import { isAutheticated } from "../auth/helper/index";
import Base from "../core/Base";




const UserDashboard = () => {

    const {
        user: { name, email, role }
    } = isAutheticated();


    return (
        <Base title="UserDashboard page"
            className="container bg-info p-4">
            <h1>ACCOUNT</h1>
            <div className="card mb-4">
                <h4 className="card-header">Welcome back {name}!</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span className="badge badge-warning">User</span>
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Name:</span> {name}
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Email:</span> {email}
                    </li>
                </ul>
            </div>
        </Base>
    );
};

export default UserDashboard;