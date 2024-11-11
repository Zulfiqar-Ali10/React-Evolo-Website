import React from 'react';

export default function RequestForm() {
    return (
        <>
            <div id='navbar-main' className="form-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h2>Fill The Following Form To Request A Meeting</h2>
                                <p>Evolo is one of the easiest and feature-packed marketing automation apps in the market. Discover what it can do for your business organization right away.</p>
                                <ul className="list-unstyled li-space-lg">
                                    <li className="media">
                                        <i className="fas fa-check"></i>
                                        <div className="media-body"><strong className="blue">Automate your marketing</strong> activities and get results today</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-check"></i>
                                        <div className="media-body"><strong className="blue">Interact with all your</strong> targeted customers at a personal level</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-check"></i>
                                        <div className="media-body"><strong className="blue">Convince them to buy</strong> your company's awesome products</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-check"></i>
                                        <div className="media-body"><strong className="blue">Save precious time</strong> and invest it where you need it the most</div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-container">
                                <form id="requestForm" data-toggle="validator" data-focus="false">
                                    <div className="form-group">
                                        <input type="text" className="form-control-input" id="rname" name="rname" required />
                                        <label className="label-control" htmlFor="rname">Full name</label>
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group">
                                        <input type="email" className="form-control-input" id="remail" name="remail" required />
                                        <label className="label-control" htmlFor="remail">Email</label>
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group">
                                        <input type="text" className="form-control-input" id="rphone" name="rphone" required />
                                        <label className="label-control" htmlFor="rphone">Phone</label>
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="rselect">Interested in...</label>
                                        <select className="form-control-select" id="rselect" required>
                                            <option className="select-option" value="" disabled selected>Choose an option</option>
                                            <option className="select-option" value="Starter">Starter</option>
                                            <option className="select-option" value="Medium">Medium</option>
                                            <option className="select-option" value="Complete">Complete</option>
                                        </select>
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group checkbox">
                                        <input type="checkbox" id="rterms" value="Agreed-to-Terms" name="rterms" required />
                                        <label htmlFor="rterms">
                                            I agree with Evolo's stated <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms & Conditions</a>
                                        </label>
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="form-control-submit-button">REQUEST</button>
                                    </div>

                                    <div className="form-message">
                                        <div id="rmsgSubmit" className="h3 text-center hidden"></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
