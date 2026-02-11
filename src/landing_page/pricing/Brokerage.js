import React, { useState } from 'react';

function Brokerage() {
    const [activeTab, setActiveTab] = useState('equity');

    return (
        <div className="container py-5">
            {/* Tabs Navigation */}
            <ul className="nav nav-tabs justify-content-center mb-5">
                <li className="nav-item">
                    <button
                        onClick={() => setActiveTab('equity')}
                        className={`nav-link ${activeTab === 'equity' ? 'active' : ''}`}
                    >
                        Equity
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        onClick={() => setActiveTab('fno')}
                        className={`nav-link ${activeTab === 'fno' ? 'active' : ''}`}
                    >
                        F&O
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        onClick={() => setActiveTab('currency')}
                        className={`nav-link ${activeTab === 'currency' ? 'active' : ''}`}
                    >
                        Currency
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        onClick={() => setActiveTab('commodity')}
                        className={`nav-link ${activeTab === 'commodity' ? 'active' : ''}`}
                    >
                        Commodity
                    </button>
                </li>
            </ul>

            {/* Equity Tab */}
            {activeTab === 'equity' && (
                <div className="mb-5">
                    <div className="table-responsive mb-5">
                        <table className="table table-striped table-hover">
                            <thead className="table-primary">
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Equity delivery</th>
                                    <th scope="col">Equity intraday</th>
                                    <th scope="col">F&O - Futures</th>
                                    <th scope="col">F&O - Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Brokerage</th>
                                    <td>Zero Brokerage</td>
                                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                    <td>Flat Rs. 20 per executed order</td>
                                </tr>
                                <tr>
                                    <th scope="row">STT/CTT</th>
                                    <td>0.1% on buy & sell</td>
                                    <td>0.025% on the sell side</td>
                                    <td>0.02% on the sell side</td>
                                    <td>
                                        <ul className="mb-0">
                                            <li>0.125% of the intrinsic value on options that are bought and exercised</li>
                                            <li>0.1% on sell side (on premium)</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Transaction charges</th>
                                    <td>NSE: 0.00297%<br />BSE: 0.00375%</td>
                                    <td>NSE: 0.00297%<br />BSE: 0.00375%</td>
                                    <td>NSE: 0.00173%<br />BSE: 0</td>
                                    <td>NSE: 0.03503% (on premium)<br />BSE: 0.0325% (on premium)</td>
                                </tr>
                                <tr>
                                    <th scope="row">GST</th>
                                    <td colSpan="4">18% on (brokerage + SEBI charges + transaction charges)</td>
                                </tr>
                                <tr>
                                    <th scope="row">SEBI charges</th>
                                    <td colSpan="4">₹10 / crore</td>
                                </tr>
                                <tr>
                                    <th scope="row">Stamp charges</th>
                                    <td>0.015% or ₹1500 / crore on buy side</td>
                                    <td>0.003% or ₹300 / crore on buy side</td>
                                    <td>0.002% or ₹200 / crore on buy side</td>
                                    <td>0.003% or ₹300 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* F&O Tab */}
            {activeTab === 'fno' && (
                <div className="mb-5">
                    <div className="table-responsive mb-5">
                        <table className="table table-striped table-hover">
                            <thead className="table-primary">
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">F&O - Futures</th>
                                    <th scope="col">F&O - Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Brokerage</th>
                                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                    <td>Flat Rs. 20 per executed order</td>
                                </tr>
                                <tr>
                                    <th scope="row">STT/CTT</th>
                                    <td>0.02% on the sell side</td>
                                    <td>
                                        <ul className="mb-0">
                                            <li>0.125% of the intrinsic value on options that are bought and exercised</li>
                                            <li>0.1% on sell side (on premium)</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Transaction charges</th>
                                    <td>NSE: 0.00173%<br />BSE: 0</td>
                                    <td>NSE: 0.03503% (on premium)<br />BSE: 0.0325% (on premium)</td>
                                </tr>
                                <tr>
                                    <th scope="row">GST</th>
                                    <td colSpan="2">18% on (brokerage + SEBI charges + transaction charges)</td>
                                </tr>
                                <tr>
                                    <th scope="row">SEBI charges</th>
                                    <td colSpan="2">₹10 / crore</td>
                                </tr>
                                <tr>
                                    <th scope="row">Stamp charges</th>
                                    <td>0.002% or ₹200 / crore on buy side</td>
                                    <td>0.003% or ₹300 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Currency Tab */}
            {activeTab === 'currency' && (
                <div className="mb-5">
                    <div className="table-responsive mb-5">
                        <table className="table table-striped table-hover">
                            <thead className="table-primary">
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Currency futures</th>
                                    <th scope="col">Currency options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Brokerage</th>
                                    <td>0.03% or ₹ 20/executed order whichever is lower</td>
                                    <td>₹ 20/executed order</td>
                                </tr>
                                <tr>
                                    <th scope="row">STT/CTT</th>
                                    <td colSpan="2">No STT</td>
                                </tr>
                                <tr>
                                    <th scope="row">Transaction charges</th>
                                    <td>NSE: 0.00035%<br />BSE: 0.00045%</td>
                                    <td>NSE: 0.0311%<br />BSE: 0.001%</td>
                                </tr>
                                <tr>
                                    <th scope="row">GST</th>
                                    <td colSpan="2">18% on (brokerage + SEBI charges + transaction charges)</td>
                                </tr>
                                <tr>
                                    <th scope="row">SEBI charges</th>
                                    <td colSpan="2">₹10 / crore</td>
                                </tr>
                                <tr>
                                    <th scope="row">Stamp charges</th>
                                    <td colSpan="2">0.0001% or ₹10 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Commodity Tab */}
            {activeTab === 'commodity' && (
                <div className="mb-5">
                    <div className="table-responsive mb-5">
                        <table className="table table-striped table-hover">
                            <thead className="table-primary">
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Commodity futures</th>
                                    <th scope="col">Commodity options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Brokerage</th>
                                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                    <td>₹ 20/executed order</td>
                                </tr>
                                <tr>
                                    <th scope="row">STT/CTT</th>
                                    <td>0.01% on sell side (Non-Agri)</td>
                                    <td>0.05% on sell side</td>
                                </tr>
                                <tr>
                                    <th scope="row">Transaction charges</th>
                                    <td>MCX: 0.0021%<br />NSE: 0.0001%</td>
                                    <td>MCX: 0.0418%<br />NSE: 0.001%</td>
                                </tr>
                                <tr>
                                    <th scope="row">GST</th>
                                    <td colSpan="2">18% on (brokerage + SEBI charges + transaction charges)</td>
                                </tr>
                                <tr>
                                    <th scope="row">SEBI charges</th>
                                    <td><strong>Agri:</strong> ₹1 / crore<br /><strong>Non-agri:</strong> ₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                </tr>
                                <tr>
                                    <th scope="row">Stamp charges</th>
                                    <td>0.002% or ₹200 / crore on buy side</td>
                                    <td>0.003% or ₹300 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Brokerage Calculator CTA */}
            <div className="text-center mb-5">
                <p style={{fontSize:'20px'}}>
                <a href="/brokerage-calculator" style={{textDecoration:'none'}}> Calculate your costs upfront</a> using our brokerage calculator
                </p>
            </div>

            {/* Account Opening Charges */}
            <div className="mb-5">
                <h2 className="fs-3 mb-4">Charges for account opening</h2>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">Type of account</th>
                                <th scope="col">Charges</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Online account</td>
                                <td class="badge bg-success text-white mt-1 mx-2">free</td>
                            </tr>
                            <tr>
                                <td>Offline account</td>
                                <td class="badge bg-success text-white mt-1 mx-2">free</td>
                            </tr>
                            <tr>
                                <td>NRI account (offline only)</td>
                                <td>₹ 500</td>
                            </tr>
                            <tr>
                                <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                                <td>₹ 500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Demat AMC */}
            <div className="mb-5">
                <h2 className="display-6 fw-light mb-4">Demat AMC (Annual Maintenance Charge)</h2>
                <div className="table-responsive">
                    <table className="table table-bordered mb-3">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">Value of holdings</th>
                                <th scope="col">AMC</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Up to ₹4 lakh</td>
                                <td class="badge bg-success text-white mt-1 mx-2">free*</td>
                            </tr>
                            <tr>
                                <td>₹4 lakh - ₹10 lakh</td>
                                <td>₹ 100 per year, charged quarterly*</td>
                            </tr>
                            <tr>
                                <td>Above ₹10 lakh</td>
                                <td>₹ 300 per year, charged quarterly</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-muted small">
                    * Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). 
                    BSDA account holders cannot hold more than one demat account. To learn more about BSDA, 
                    <a href="https://support.zerodha.com/category/account-opening/offline-account-opening/bsda/articles/how-to-open-a-basic-service-demat-account-at-zerodha" className="text-primary" style={{textDecoration:'none'}}> click here</a>.
                </p>
            </div>

            {/* Value Added Services */}
            <div className="mb-5">
                <h2 className="display-6 fw-light mb-4">Charges for optional value added services</h2>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">Service</th>
                                <th scope="col">Billing Frequency</th>
                                <th scope="col">Charges</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tickertape</td>
                                <td>Monthly / Annual</td>
                                <td>Free: 0 | Pro: 249/2399</td>
                            </tr>
                            <tr>
                                <td>Smallcase</td>
                                <td>Per transaction</td>
                                <td>Buy & Invest More: 100 | SIP: 10</td>
                            </tr>
                            <tr>
                                <td>Kite Connect</td>
                                <td>Monthly</td>
                                <td>Connect: 500 | Personal: Free</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Charges Explained Section */}
            <div className="mb-5">
                <h2 className="display-6 fw-light mb-4">Charges explained</h2>
                
                <div className="row g-3">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Securities/Commodities transaction tax</h5>
                                <p className="card-text">
                                    Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. 
                                    Charged only on selling side when trading intraday or on F&O.
                                </p>
                                <p className="card-text text-muted small">
                                    When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Transaction/Turnover Charges</h5>
                                <p className="card-text mb-2">
                                    Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.
                                </p>
                                <ul className="small text-muted mb-0">
                                    <li>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016.</li>
                                    <li>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</li>
                                    <li>BSE has revised transaction charges for group A, B and other non exclusive scrips at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</li>
                                    <li>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Call & trade</h5>
                                <p className="card-text mb-0">
                                    Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Stamp charges</h5>
                                <p className="card-text mb-0">
                                    Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">NRI brokerage charges</h5>
                                <ul className="card-text mb-0">
                                    <li>For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).</li>
                                    <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                                    <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">GST</h5>
                                <p className="card-text mb-0">
                                    Tax levied by the government on the services rendered. 18% of (brokerage + SEBI charges + transaction charges)
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">SEBI Charges</h5>
                                <p className="card-text mb-0">
                                    Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">DP (Depository participant) charges</h5>
                                <p className="card-text mb-2">
                                    ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.
                                </p>
                                <p className="small text-muted mb-1">
                                    Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.
                                </p>
                                <p className="small text-muted mb-0">
                                    Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Pledging charges</h5>
                                <p className="card-text mb-0">
                                    ₹30 + GST per pledge request per ISIN.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">AMC (Account maintenance charges)</h5>
                                <p className="card-text mb-2">
                                    For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000.
                                </p>
                                <p className="card-text mb-0">
                                    For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days).
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Additional Charges</h5>
                                <ul className="card-text mb-0">
                                    <li><strong>Corporate action order charges:</strong> ₹20 plus GST for OFS / buyback / takeover / delisting orders</li>
                                    <li><strong>Off-market transfer charges:</strong> ₹25 per transaction</li>
                                    <li><strong>Physical CMR request:</strong> First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests</li>
                                    <li><strong>Payment gateway charges:</strong> ₹9 + GST (Not levied on transfers done via UPI)</li>
                                    <li><strong>Delayed Payment Charges:</strong> Interest at 18% a year or 0.05% per day on debit balance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Disclaimer */}
            <div className="alert alert-warning border-start border-warning border-4" role="alert">
                <h5 className="alert-heading">Disclaimer</h5>
                <ul className="small mb-0">
                    <li>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note.</li>
                    <li>Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges.</li>
                    <li>Brokerage will not exceed the rates specified by SEBI and the exchanges.</li>
                    <li>All statutory and regulatory charges will be levied at actuals.</li>
                    <li>Brokerage is also charged on expired, exercised, and assigned options contracts.</li>
                    <li>Free investments are available only for our retail individual clients.</li>
                </ul>
            </div>
        </div>
    );
}

export default Brokerage;