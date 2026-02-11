import React from 'react';

function Hero() {
    return (
        <div className="container p-5">
            {/* Page Title */}
            <div className="text-center p-5">
                <h1 className=" fs-2 mb-3">Charges</h1>
                <h2 className="fs-4 text-secondary mb-5">List of all charges and taxes</h2>
            </div>

            {/* Pricing Highlights Grid */}
            <div className="row p-5">
                {/* Free Equity Delivery */}
                <div className="col p-5 text-center">
                    <img
                        src="/media/images/pricing-eq.svg"
                        alt="Free equity delivery"
                    />
                    <h2 className='fs-3 p-2'>Free equity delivery</h2>
                    <p className="text-muted">
                        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>

                {/* Intraday and F&O */}
                <div className="col p-5 text-center">
                    <img
                        src="/media/images/other-trades.svg"
                        alt="Intraday and F&O trades"
                    />
                    <h2 className='fs-3 p-2'>Intraday and F&O trades</h2>
                    <p className="text-muted">
                        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>

                {/* Free Direct MF */}
                <div className="col p-5 text-center">
                    <img
                        src="/media/images/pricing-eq.svg"
                        alt="Free direct MF"
                    />
                    <h2 className='fs-3 p-2'>Free direct MF</h2>
                    <p className="text-muted">
                        All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;