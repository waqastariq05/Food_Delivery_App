import React, { useEffect, useState } from 'react'

const Contact = () => {
    const [contact, setContact] = useState([])

    const getContact = async () => {
        const response = await fetch(
            "http://localhost:5000/api/contact/getcontact",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const json = await response.json();
        setContact(json);
    };

    useEffect(() => {
        getContact()
    }, [])

    const handleDlt = async (id) => {
        const response = await fetch(`http://localhost:5000/api/contact/deletecontact/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();

        window.location.reload();

        // Alert
        if (json.Success) {
            alert("Contact Delted SuccessFully",);
        } else {
            alert("Contact Not Delted SuccessFully",);
        }
    }


    return (
        <div className='contacts py-3 px-4'>
            <div className="top text-start">
                <h2 className='mb-3 text-uppercase'>Contact</h2>
            </div>
            <div className="adminBody table-responsive">
                <table className="table table-dark table-hover table-bordered text-center align-middle">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Message</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        {contact && contact.slice(0).reverse().map((con, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{con.name}</td>
                                    <td>{con.email}</td>
                                    <td>{con.message}</td>
                                    <td>
                                        <button className='btn py-1 px-2 rounded-1' onClick={() => handleDlt(con._id)}><i className="fa-solid fa-trash"></i></button>
                                    </td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Contact
