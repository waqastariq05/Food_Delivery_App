import React from 'react'
import { useState } from 'react';

const CategoryModal = () => {
    const [cate, setCate] = useState("");

    const handleAdd = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/category/addcategory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: cate,
            }),
        });
        const json = await response.json();

        window.location.reload();

        // Alert
        if (json.Success) {
            alert("Category Added")
        } else {
            alert("Not Category Added")
        }
    }

    const change = (e) => {
        setCate(e.target.value)
    }
    return (
        <>
            <div className="modal fade" id="cateModal" tabIndex="-1" aria-labelledby="cateModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="cateModal">Add Category</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleAdd}>
                            <div className="modal-body row g-3">
                                <div className="col-12">
                                    <label htmlFor="name" className="form-label">Category Name</label>
                                    <input type="text" className="form-control" id="name" name='name' value={cate} onChange={change} required />
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

export default CategoryModal
