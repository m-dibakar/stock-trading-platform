import React from 'react';

function Footer() {
    return (
        <div className='bg-light border-top mt-5'>
            <div className='container'>
                <div className='row p-5'>
                    <div className='col'>
                        <img className='mb-3' src='/media/images/logo.svg' alt='logo' style={{ width: '65%' }} />
                        <p className='text-muted small'><i class="fa-regular fa-copyright"></i> 2010-2026, Zerodha Broking Ltd. <br /> All rights reserved.</p>
                        <p className='fs-4 text-muted'><i class="fa-brands fa-x-twitter"></i> <i class="fa-brands fa-square-facebook"></i> <i class="fa-brands fa-instagram"></i> <i class="fa-brands fa-linkedin-in"></i></p>
                        <hr />
                        <p className='fs-4 text-muted'><i class="fa-brands fa-youtube"></i> <i class="fa-brands fa-whatsapp"></i> <i class="fa-brands fa-telegram"></i></p>
                    </div>
                    <div className='col'>
                        <h1 className='fs-5 mb-4'>Account</h1>
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>Open demat account</a><br /><br />
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>Minor demat account</a><br /><br />
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>NRI demat account</a><br /><br />
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>Commodity</a><br /><br />
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>Dematerialisation</a><br /><br />
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>Fund transfer</a><br /><br />
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>MTF</a><br /><br />
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>Referral program</a>
                    </div>
                    <div className='col'>
                        <h1 className='fs-5 mb-4'>Support</h1>
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>Contact us</a><br /><br />
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>Support portal</a><br /><br />
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>How to file a complaint?</a><br /><br />
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>Status of your complaints</a><br /><br />
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>Bulletin</a><br /><br />
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>Circular</a><br /><br />
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>Z-Connect blog</a><br /><br />
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>Downloads</a>
                    </div>
                    <div className='col '>
                        <h1 className='fs-5 mb-4'>Company</h1>
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>About</a><br /><br />
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>Philosophy</a><br /><br />
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>Press & media</a><br /><br />
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>Careers</a><br /><br />
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>Zerodha Cares (CSR)</a><br /><br />
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>Zerodha.tech</a><br /><br />
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>Open Source</a><br /><br />
                    </div>
                    <div className='col'>
                        <h1 className='fs-5 mb-4'>Quick Links</h1>
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>Upcoming IPOs</a><br /><br />
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>Brockerage charges</a><br /><br />
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>Market holidays</a><br /><br />
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>Economic calender</a><br /><br />
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>Calculators</a><br /><br />
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>Markets</a><br /><br />
                        <a href='/' style={{ textDecoration: "none", color: "gray" }}>Sectors</a><br /><br />
                    </div>
                </div>
                <div className='mt-5'>
                    <p className='text-muted small'>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href='/'>complaints@zerodha.com</a>, for DP related to <a href='/'>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                    <p className='text-muted small'>Procedure to file a complaint on <a href='/' style={{ textDecoration: "none" }}>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                    <p className='small'><a className='fw-medium' href='/' style={{ textDecoration: "none" }}>Smart Online Dispute Resolution </a>|<a className='fw-medium' href='/' style={{ textDecoration: "none" }}> Grievances Redressal Mechanism</a></p>
                    <p className='text-muted small'>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                    <p className='text-muted small'>Attention investors: 1. Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2. Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3. Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                    <p className='text-muted small'>India's largest broker based on networth as per NSE. <a href='/' style={{ textDecoration: 'none' }}>NSE broker factsheet</a></p>
                    <p className='text-muted small'>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href='/' style={{ textDecoration: "none" }}>create a ticket here</a>.</p>
                    <p className='text-muted small'>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
                    </p>
                </div>
                <div className='text-center mt-4 mb-3'>
                    <a className='mx-3 small' href='/' style={{ textDecoration: "none", color: "gray" }}>NSE</a>
                    <a className='mx-3 small' href='/' style={{ textDecoration: "none", color: "gray" }}>BSE</a>
                    <a className='mx-3 small' href='/' style={{ textDecoration: "none", color: "gray" }}>MCX</a>
                    <a className='mx-3 small' href='/' style={{ textDecoration: "none", color: "gray" }}>Terms & conditions</a>
                    <a className='mx-3 small' href='/' style={{ textDecoration: "none", color: "gray" }}>Policies & procedures</a>
                    <a className='mx-3 small' href='/' style={{ textDecoration: "none", color: "gray" }}>Privacy policy</a>
                    <a className='mx-3 small' href='/' style={{ textDecoration: "none", color: "gray" }}>Disclosure</a>
                    <a className='mx-3 small' href='/' style={{ textDecoration: "none", color: "gray" }}>For Investor's attention</a>
                    <a className='mx-3 small' href='/' style={{ textDecoration: "none", color: "gray" }}>Investor charter</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;