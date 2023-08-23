import React, { useState, useContext } from 'react'
import '../Modal/Modal.css'
import foodContext from '../../Context/foodContex';
import axios from 'axios';

const ItemModal = () => {
    const contex = useContext(foodContext);
    const { categories } = contex;

    const [item, setItem] = useState({ name: "", price: "", desc: "" });
    const [file, setFile] = useState();
    const [cate, setCate] = useState(0);

    const handleAdd = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', file)
        formData.append('title', item.name)
        formData.append('description', item.desc)
        formData.append('price', item.price)
        formData.append('categories', cate)
        const response = await axios.post("http://localhost:5000/api/item/additem", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        window.location.reload();

        if (response.statusText == "OK") {
            alert("Item Added")
        } else {
            alert("Not Item Added")
        }
    }

    const change = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    }

    const changeOption = (e) => {
        setCate(e.target.value)
    }

    return (
        <>
            {/* Add Item */}
            <div className="modal fade" id="itemModal" tabIndex="-1" aria-labelledby="itemModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="itemModal">Add Items</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleAdd}>
                            <div className="modal-body row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="name" className="form-label">Item Name</label>
                                    <input type="text" className="form-control" id="name" name='name' value={item.name} onChange={change} required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <input type="text" className="form-control" id="price" name='price' value={item.price} onChange={change} required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="desc" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="desc" name='desc' value={item.desc} onChange={change} required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="cate" className="form-label">Category</label>
                                    <select id="cate" className="form-select" value={cate} required onChange={changeOption}>
                                        <option selected>Choose Category</option>
                                        {categories && categories.map((cate) => {
                                            return (
                                                <option value={cate._id}>{cate.name}</option>
                                            )
                                        })}
                                    </select>
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
        </ >
    )
}

export default ItemModal
