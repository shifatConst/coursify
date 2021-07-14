import React, { useEffect, useState } from 'react';
import ServicesData from '../../Data/ServicesData'
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        setServices(ServicesData)
    }, [])
    // console.log(services);
    return (
        <div className="container">
            <h1>Our Services</h1>
            <div className="row gy-3 ">
                {
                    services.map(service => 
                        <div key={service.id} className="col-sm-4 card text-center border shadow p-5" style={{style:"18rem"}}>
                            <img src={service.image} className="card-img-top"style={{ hight: "300px", width: "300px" }} alt="" />
                            <h1>{service.name}</h1>
                            <p className="card-text">{service.description}</p>
                        </div>)
                }
            </div>

        </div>
    );
};

export default Services;