import React from 'react';
import './Developer.css'

const Developer = (props) => {
    const { name, country, age, skills, serviceCharge } = props.dev;
    // console.log(props);

    return (
        <div className="m-3">
            <div className="card m-3 card-back" style={{ "maxWidth": "640px !important", height: "45vh", borderRadius: "70px", borderRight: '2px solid green' }}>
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={props.dev.img} className="img-fluid " style={{ maxHeight: "45vh", minHeight: "45vh" }} alt="..." />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h3 className="card-title ">{name}</h3>
                            <h6 className="card-text my-4">Country: {country}</h6>
                            <h6 className="card-text">Age: {age}</h6>
                            <h6 className="card-text my-4 ">Skills: {skills}</h6>
                            <h6 className="card-text my-4 ">Service Charges: ${serviceCharge}</h6>
                            <div
                                onClick={() => props.handleCount(props.dev)}
                                className="text-start"> <button className="btn btn-info px-3" style={{ borderRadius: "20px" }}><i className="far fa-hand-point-right me-5"></i>Hire me</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Developer;