import React from 'react';
import './Total.css'

const Total = (props) => {
    const { total } = props || {};
    console.log(total);

    // reduceloop in cart as cart is array of object
    const totalReducer = (prevValue, currentValue) => prevValue + currentValue.serviceCharge;
    const newTotal = total.reduce(totalReducer, 0)

    // For not adding the same developer on the list 
    const selectedDev = total.filter(item => item.name !== { total });


    // console.log(cart)
    return (
        <div className="text-center total">

            <h5 className="pt-3">Total Developers: {total.length}</h5>
            <strong>Total hiring cost: ${newTotal}</strong>
            <hr />
            {
                selectedDev.map((total, i) => <React.Fragment key={i}  > <div className="row my-3 bg-dark mx-3 align-items-center" style={{ borderRadius: "20px", boxShadow: "5px 5px 10px  grey" }}>
                    <div className="col-md-2">
                        <img src={total.img} alt="" style={{ height: '10vh', borderRadius: "50%" }} />
                    </div>
                    <div className="col-md-10 text-end mt-3">
                        <h6 className="text-success">{total.name}</h6>
                        <h5 className="text-info fs-6 fw-lighter"> <small>Service Charge:</small>  ${total.serviceCharge}</h5>
                    </div>
                </div>

                </React.Fragment>)
            }

        </div >
    );
};

export default Total;