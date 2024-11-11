import React from 'react';

export default function PricingOptions() {
    return (
        <>
        
            <div id="pricing" className="cards-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Multiple Pricing Options</h2>
                            <p className="p-heading p-large">
                                We've prepared pricing plans for all budgets so you can get started right away. They're great for small companies and large organizations
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title">STARTER</div>
                                    <div className="card-subtitle">Just to see what can be achieved</div>
                                    <hr className="cell-divide-hr" />
                                    <div className="price">
                                        <span className="currency">$</span><span className="value">199</span>
                                        <div className="frequency">monthly</div>
                                    </div>
                                    <hr className="cell-divide-hr" />
                                    <ul className="list-unstyled li-space-lg">
                                        <li className="media">
                                            <i className="fas fa-check"></i><div className="media-body">Improve Your Email Marketing</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-check"></i><div className="media-body">User And Admin Rights Control</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-times"></i><div className="media-body">List Building And Cleaning</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-times"></i><div className="media-body">Collected Data Management</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-times"></i><div className="media-body">More Planning And Evaluation</div>
                                        </li>
                                    </ul>
                                    <div className="button-wrapper">
                                        <a className="btn-solid-reg page-scroll" href="#request">REQUEST</a>
                                    </div>
                                </div>
                            </div>

                            {/* MEDIUM Plan */}
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title">MEDIUM</div>
                                    <div className="card-subtitle">Very appropriate for the short term</div>
                                    <hr className="cell-divide-hr" />
                                    <div className="price">
                                        <span className="currency">$</span><span className="value">299</span>
                                        <div className="frequency">monthly</div>
                                    </div>
                                    <hr className="cell-divide-hr" />
                                    <ul className="list-unstyled li-space-lg">
                                        <li className="media">
                                            <i className="fas fa-check"></i><div className="media-body">Improve Your Email Marketing</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-check"></i><div className="media-body">User And Admin Rights Control</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-check"></i><div className="media-body">List Building And Cleaning</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-check"></i><div className="media-body">Collected Data Management</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-times"></i><div className="media-body">More Planning And Evaluation</div>
                                        </li>
                                    </ul>
                                    <div className="button-wrapper">
                                        <a className="btn-solid-reg page-scroll" href="#request">REQUEST</a>
                                    </div>
                                </div>
                            </div>

                            {/* COMPLETE Plan */}
                            <div className="card">
                                <div className="label">
                                    <p className="best-value">Best Value</p>
                                </div>
                                <div className="card-body">
                                    <div className="card-title">COMPLETE</div>
                                    <div className="card-subtitle">Must have for large companies</div>
                                    <hr className="cell-divide-hr" />
                                    <div className="price">
                                        <span className="currency">$</span><span className="value">399</span>
                                        <div className="frequency">monthly</div>
                                    </div>
                                    <hr className="cell-divide-hr" />
                                    <ul className="list-unstyled li-space-lg">
                                        <li className="media">
                                            <i className="fas fa-check"></i><div className="media-body">Improve Your Email Marketing</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-check"></i><div className="media-body">User And Admin Rights Control</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-check"></i><div className="media-body">List Building And Cleaning</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-check"></i><div className="media-body">Collected Data Management</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-check"></i><div className="media-body">More Planning And Evaluation</div>
                                        </li>
                                    </ul>
                                    <div className="button-wrapper">
                                        <a className="btn-solid-reg page-scroll" href="#request">REQUEST</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
