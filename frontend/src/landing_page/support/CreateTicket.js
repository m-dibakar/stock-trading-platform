import React from 'react';

function CreateTicket() {
    const categories = [
        {
            title: 'Account Opening',
            icon: <i class="fa-solid fa-circle-plus"></i>,
            links: [
                { text: 'Getting started', url: '/category/account-opening/getting-started' },
                { text: 'Online', url: '/category/account-opening/online-account-opening' },
                { text: 'Offline', url: '/category/account-opening/offline-account-opening' },
                { text: 'Charges', url: '/category/account-opening/charges-at-zerodha' },
                { text: 'Company, Partnership and HUF', url: '/category/account-opening/company-partnership-and-huf-account-opening' },
                { text: 'Non Resident Indian (NRI)', url: '/category/account-opening/nri-account-opening' }
            ]
        },
        {
            title: 'Your Zerodha Account',
            icon: <i class="fa-regular fa-circle-user"></i>,
            links: [
                { text: 'Login credentials', url: '/category/your-zerodha-account/login-credentials' },
                { text: 'Your Profile', url: '/category/your-zerodha-account/your-profile' },
                { text: 'Account modification and segment addition', url: '/category/your-zerodha-account/account-modification-and-segment-addition' },
                { text: 'CMR & DP ID', url: '/category/your-zerodha-account/dp-id-and-bank-details' },
                { text: 'Nomination', url: '/category/your-zerodha-account/nomination' },
                { text: 'Transfer and conversion of shares', url: '/category/your-zerodha-account/transfer-of-shares-and-conversion-of-shares' }
            ]
        },
        {
            title: 'Trading and Markets',
            icon: '📈',
            links: [
                { text: 'Trading FAQs', url: '/category/trading-and-markets/trading-faqs' },
                { text: 'Kite', url: '/category/trading-and-markets/kite-web-and-mobile' },
                { text: 'Margins', url: '/category/trading-and-markets/margins' },
                { text: 'Product and order types', url: '/category/trading-and-markets/product-and-order-types' },
                { text: 'Corporate actions', url: '/category/trading-and-markets/corporate-actions' },
                { text: 'Kite features', url: '/category/trading-and-markets/kite-features' }
            ]
        },
        {
            title: 'Funds',
            icon: '💰',
            links: [
                { text: 'Fund withdrawal', url: '/category/funds/fund-withdrawal' },
                { text: 'Adding funds', url: '/category/funds/adding-funds' },
                { text: 'Adding bank accounts', url: '/category/funds/adding-bank-accounts' },
                { text: 'eMandates', url: '/category/funds/mandate' }
            ]
        },
        {
            title: 'Console',
            icon: '🖥️',
            links: [
                { text: 'IPO', url: '/category/console/ipo' },
                { text: 'Portfolio', url: '/category/console/portfolio' },
                { text: 'Funds statement', url: '/category/console/ledger' },
                { text: 'Profile', url: '/category/console/profile' },
                { text: 'Reports', url: '/category/console/reports' },
                { text: 'Referral program', url: '/category/console/referral-program' }
            ]
        },
        {
            title: 'Coin',
            icon: '🪙',
            links: [
                { text: 'Understanding mutual funds and Coin', url: '/category/mutual-funds/understanding-mutual-funds' },
                { text: 'Coin app', url: '/category/mutual-funds/coin-app' },
                { text: 'Coin web', url: '/category/mutual-funds/coin-web' },
                { text: 'Transactions and reports', url: '/category/mutual-funds/transactions-and-reports' },
                { text: 'National Pension Scheme (NPS)', url: '/category/mutual-funds/nps' }
            ]
        }
    ];

    return (
        <div className="container py-5">
            {/* Alert Banner */}
            <div className="alert alert-warning alert-dismissible fade show mb-4" role="alert">
                <strong>Note:</strong> Due to high volume, 
                <a href="https://support.zerodha.com/category/your-zerodha-account/your-profile/kyc-re-activation/articles/re-activate-my-account" className="alert-link"> reactivation</a> requests may take an extra 24-48 business hours to process.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

            {/* Categories Grid */}
            <div className="row g-4 mb-5">
                {categories.map((category, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-3">
                                    <span className="fs-2 me-2">{category.icon}</span>
                                    <h5 className="card-title mb-0">{category.title}</h5>
                                </div>
                                <ul className="list-unstyled">
                                    {category.links.map((link, linkIndex) => (
                                        <li key={linkIndex} className="mb-2">
                                            <a href={link.url} className="text-decoration-none text-primary">
                                                {link.text} →
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Links Section */}
            <div className="card bg-light">
                <div className="card-body">
                    <h5 className="card-title mb-3">Quick links</h5>
                    <div className="row">
                        <div className="col-md-6">
                            <ol className="mb-0">
                                <li className="mb-2">
                                    <a href="https://zrd.sh/signup" className="text-decoration-none">
                                        Track account opening
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://zrd.sh/segment-activation" className="text-decoration-none">
                                        Track segment activation
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://zrd.sh/latest-leverage" className="text-decoration-none">
                                        Intraday margins
                                    </a>
                                </li>
                            </ol>
                        </div>
                        <div className="col-md-6">
                            <ol start="4" className="mb-0">
                                <li className="mb-2">
                                    <a href="https://zrd.sh/kite-manual" className="text-decoration-none">
                                        Kite user manual
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/how-do-i-create-a-ticket-at-zerodha" className="text-decoration-none">
                                        Learn how to create a ticket
                                    </a>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;