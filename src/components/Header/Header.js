import React from 'react';
import './Header.css'
import hiring1 from '../../images/hiring1.jpg'
import hiring2 from "../../images/hiring2.jpg";
const Header = () => {
    return (
        <div className="container">
            <div className="row header-full text-center align-items-center">
                <div className="col-sm-6 p-5">
                    <h1>Spending too much time on HR, not your business? <br />
                        We can fix that.</h1>
                    <h5 className="m-2"> Streamline onboarding, benefits, payroll, PTO, and more with our simple, intuitive platform. </h5>
                    <button className="btn btn-primary">Know More</button>
                </div>
                <div className="col-sm-6">
                    <img src={hiring1} className="shadow rounded" alt="" />
                </div>
            </div>

            <div className="row header-full text-center align-items-center ">
                <div className="col-sm-6">
                    <img src={hiring2} className="shadow rounded" alt="" />
                </div>
                <div className="col-sm-6 p-5 ">
                    <h1 className="d-flex justify-content-start mb-3">What We Are Providing</h1>
                    <ul className="mb-5">
                        <li>
                            <h6>Zenefits has all the HR tools that make managing your people easy, from streamlined onboarding and easy PTO tracking to org charts, performance reviews, and so much more.</h6>
                        </li>
                        <li>
                            <h6>Zenefits simplifies the process of curating, and providing great benefits to your people from comprehensive healthcare plans to perks like commuter benefits.</h6>
                        </li>
                        <li>
                            <h6>Zenefits makes paying your people fast and easy. With a few clicks, you’re done. But don’t worry, we didn’t stop there.</h6>
                        </li>
                        <li>
                            <h6>Our payroll is packed with advanced features your company needs as it grows larger and more complex. Zenefits streamlines your workflow by automatically connecting HR, Benefits, Payroll and Scheduling, together in one platform. This means less time spent on low-priority tasks so your team can focus on more important things</h6>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;