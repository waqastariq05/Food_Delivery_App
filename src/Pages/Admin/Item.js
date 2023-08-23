import React, { useContext } from 'react'
import foodContext from '../../Context/foodContex';
import ItemModal from '../../Components/Modal/ItemModal';

const Item = () => {
    const contex = useContext(foodContext);
    const { items, categories } = contex;

    const handleDlt = async (id) => {
        const response = await fetch(`http://localhost:5000/api/item/deleteitem/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();

        window.location.reload();

        // Alert
        if (json.Success) {
            alert("Item Delted SuccessFully",);
        } else {
            alert("Item Not Delted SuccessFully",);
        }
    }

    return (
        <div className='category py-3 px-4'>
            <div className="top text-start">
                <h2 className='mb-3 text-uppercase'>Item</h2>
                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#itemModal">
                    Add Item
                </button>
            </div>
            <div className="adminBody table-responsive">
                <table className="table table-dark table-hover table-bordered text-center align-middle">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Category</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        {items && items.slice(0).reverse().map((item, index) => {
                            let cate;
                            for (let i = 0; i < categories.length; i++) {
                                if (categories[i]._id === item.categories) {
                                    cate = categories[i].name;
                                }
                            }
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.title}</td>
                                    <td>{item.description.slice(0, 15)}...</td>
                                    <td>{cate}</td>
                                    <td>$ {item.price} USD</td>
                                    <td><img src={`http://localhost:5000/items/${item.image}`} alt="item" className='img-fluid' style={{ width: '50px' }} /></td>
                                    <td>
                                        <button className='btn py-1 px-2 rounded-1' onClick={() => handleDlt(item._id)}><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <ItemModal />
        </div>
    )
}

export default Item
