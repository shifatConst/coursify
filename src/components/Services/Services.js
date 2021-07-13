import React, { useEffect, useState } from 'react';
import ServicesData from '../../Data/ServicesData'
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        setServices(ServicesData)
    }, [])
    // console.log(services);
    return (
        <div>
            <h1>What We Provides</h1>
            <div className="row">
                {
                    services.map(service => 
                        <div className="col-sm-4 text-center">
                            <img src={service.image} style={{ hight: "300px", width: "300px" }} alt="" />
                            <h1>{service.name}</h1>
                            <p>{service.description}</p>
                        </div>)
                }
            </div>

        </div>
    );
};

export default Services;