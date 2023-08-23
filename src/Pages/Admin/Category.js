import React, { useContext } from 'react'
import foodContext from '../../Context/foodContex';
import CategoryModal from '../../Components/Modal/CategoryModal';

const Category = () => {
    const contex = useContext(foodContext);
    const { categories } = contex;

    const handleDlt = async (id) => {
        const response = await fetch(`http://localhost:5000/api/category/deletecategory/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();

        window.location.reload();

        // Alert
        if (json.Success) {
            alert("Category Delted SuccessFully",);
        } else {
            alert("Category Not Delted SuccessFully",);
        }
    }

    return (
        <div className='category py-3 px-4'>
            <div className="top text-start">
                <h2 className='mb-3 text-uppercase'>Category</h2>
                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#cateModal">
                    Add Category
                </button>
            </div>
            <div className="adminBody table-responsive">
                <table className="table table-dark table-hover table-bordered text-center align-middle">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        {categories && categories.slice(0).reverse().map((cate, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{cate.name}</td>
                                    <td>
                                        <button className='btn py-1 px-3 rounded-1' onClick={() => handleDlt(cate._id)}><i className="fa-solid fa-trash"></i></button>
                                    </td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <CategoryModal />
        </div>
    )
}

export default Category
