import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("Token")) {
            navigate("/admin/dashboard")

        }
    });

    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/admin/loginAdmin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
            }),
        });
        const json = await response.json();

        // Alert
        if (json.Success) {
            localStorage.setItem("Token", json.authToken);
            navigate("/admin/dashboard/category")
        } else {
            alert("Invalid Credentials");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="adminLogin">
                <div className="loginBox shadow">
                    <h1>Admin Panel</h1>
                    <div className="loginBody">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={credentials.email}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={credentials.password}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Admin
