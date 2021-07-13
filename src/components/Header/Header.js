import React from 'react';
import hiring1 from '../../images/hiring1.jpg'
import hiring2 from "../../images/hiring2.jpg";
const Header = () => {
    return (
        <div className="container">
            <div className="row text-center">
                <div className="col-sm-6 p-5">
                    <h3>Spending too much time on HR, not your business?
                        We can fix that.</h3>
                    <p> Streamline onboarding, benefits, payroll, PTO, and more with our simple, intuitive platform. </p>
                    <button className="btn btn-primary">Know More</button>
                </div>
                <div className="col-sm-6">
                    <img src={hiring1} alt="" />
                </div>
            </div>

            <div className="row text-center">
                <div className="col-sm-6">
                    <img src={hiring2} alt="" />
                </div>
                <div className="col-sm-6 p-5">
                    <p>Zenefits has all the HR tools that make managing your people easy, from streamlined onboarding and easy PTO tracking to org charts, performance reviews, and so much more. Zenefits simplifies the process of curating, and providing great benefits to your people from comprehensive healthcare plans to perks like commuter benefits. Zenefits makes paying your people fast and easy. With a few clicks, you’re done. But don’t worry, we didn’t stop there. Our payroll is packed with advanced features your company needs as it grows larger and more complex. Zenefits streamlines your workflow by automatically connecting HR, Benefits, Payroll and Scheduling, together in one platform. This means less time spent on low-priority tasks so your team can focus on more important things.</p>
                </div>
            </div>
        </div>
    );
};

export default Header;