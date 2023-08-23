import React, { useState } from 'react'
import axios from 'axios';

const DealModal = () => {
    const [deal, setDeal] = useState({ name: "", price: "", desc: "" });
    const [file, setFile] = useState();

    const handleAdd = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', file)
        formData.append('title', deal.name)
        formData.append('description', deal.desc)
        formData.append('price', deal.price)
        const response = await axios.post("http://localhost:5000/api/deal/addDeal", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        setDeal({ name: null, price: null, desc: null })
        setFile("")

        window.location.reload();

        if (response.statusText === "OK") {
            alert("Deal Added")
        } else {
            alert("Not Deal Added")
        }
    }

    const change = (e) => {
        setDeal({ ...deal, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className="modal fade" id="dealModal" tabIndex="-1" aria-labelledby="dealModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="dealModal">Add Deals</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleAdd}>
                            <div className="modal-body row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="name" className="form-label">Deal Name</label>
                                    <input type="text" className="form-control" id="name" name='name' value={deal.name} onChange={change} required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <input type="text" className="form-control" id="price" name='price' value={deal.price} onChange={change} required />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="desc" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="desc" name='desc' value={deal.desc} onChange={change} required />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="img" className="form-label">Image</label>
                                    <input type="file" className="form-control" id="img" name='image' onChange={e => setFile(e.target.files[0])} required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DealModal
