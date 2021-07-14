import React, { useEffect, useState } from 'react';
import ServicesData from '../../Data/ServicesData'
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        setServices(ServicesData)
    }, [])
    // console.log(services);
    return (
        <div className="container" id="service">
            <h1>Our Services</h1>
            <div className="row row-cols-1 row-cols-sm-3 g-4">
                {
                    services.map(service => 
                        <div key={service.id} className="col card text-center border shadow p-5" style={{style:"18rem"}}>
                            <img src={service.image} className="card-img-top"style={{ hight: "300px", width: "300px" }} alt="" />
                            <h3 className="card-title m-2">{service.name}</h3>
                            <p className="card-text">{service.description}</p>
                        </div>
                        )
                }
            </div>

        </div>
    );
};

export default Services;