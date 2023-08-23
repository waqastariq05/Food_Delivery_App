import React, { useContext, useEffect } from 'react'
import foodContext from '../../Context/foodContex';
import DealModal from '../../Components/Modal/DealModal';

const Deal = () => {
    const contex = useContext(foodContext);
    const { deals, getDeals } = contex;

    useEffect(() => {
        getDeals();
    }, [])

    const handleDlt = async (id) => {
        const response = await fetch(`http://localhost:5000/api/deal/deleteDeal/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();

        window.location.reload();

        // Alert
        if (json.Success) {
            alert("Deal Delted SuccessFully",);
        } else {
            alert("Deal Not Delted SuccessFully",);
        }
    }

    return (
        <div className='category py-3 px-4'>
            <div className="top text-start">
                <h2 className='mb-3 text-uppercase'>Deals</h2>
                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#dealModal">
                    Add Deal
                </button>
            </div>
            <div className="adminBody table-responsive">
                <table className="table table-dark table-hover table-bordered text-center align-middle">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        {deals && deals.slice(0).reverse().map((deal, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{deal.title}</td>
                                    <td>{deal.description.slice(0, 15)}...</td>
                                    <td>$ {deal.price}</td>
                                    <td><img src={`http://localhost:5000/items/${deal.image}`} alt="item" className='img-fluid' style={{ width: '70px' }} /></td>
                                    <td>
                                        <button className='btn py-1 px-2 rounded-1' onClick={() => handleDlt(deal._id)}><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <DealModal />
        </div>
    )
}

export default Deal
