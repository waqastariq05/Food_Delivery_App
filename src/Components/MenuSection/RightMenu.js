import React from 'react'
import ProductCard from '../ProductCard/ProductCard';

const RightMenu = (props) => {
    const { price, currentPageData, searchData, items, togglePop } = props
    return (
        <div className='row'>
            {price > 0 ? (
                items.length === 0 ? (<p>Not Found..</p>) : items.filter(e => { return e.price >= parseFloat(price, 5) }).reverse().map((item) => {
                    return (
                        <div className="col-md-4" key={item._id} onClick={() => togglePop(item)}>
                            <ProductCard
                                img={item.image}
                                title={item.title}
                                desc={item.description}
                                price={item.price}
                            />
                        </div>
                    );
                })
            ) : (searchData !== "" ? (
                items.length === 0 ? (<p>Not Found..</p>) : items.filter(e => { return e.title.toLowerCase().includes(searchData.toLowerCase()) }).reverse().map((item) => {
                    return (
                        <div className="col-md-4" key={item._id} onClick={() => togglePop(item)}>
                            <ProductCard
                                img={item.image}
                                title={item.title}
                                desc={item.description}
                                price={item.price}
                            />
                        </div>
                    );
                })
            ) : (
                items.length === 0 ? (<p>Not found..</p>) : currentPageData === null ? (<p>Loading...</p>) : currentPageData.map((item) => {
                    return (
                        <div className="col-md-4" key={item._id} onClick={() => togglePop(item)}>
                            <ProductCard
                                img={item.image}
                                title={item.title}
                                desc={item.description}
                                price={item.price}
                            />
                        </div>
                    );
                })
            ))}
        </div>
    )
}

export default RightMenu
