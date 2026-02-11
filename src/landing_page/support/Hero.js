import React, { useState } from 'react';

function Hero() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // Handle search functionality
        console.log('Searching for:', searchQuery);
    };

    return (
        <div className="bg-secondary text-white">
            <div className="container p-5">
                <div className='p-2' id='supportWrapper'>
                    <h1>Support Portal</h1>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button class="btn btn-primary me-md-2 fw-bold" type="button">My Tickets</button>
                    </div>
                </div>
                <div className='row p-2'>
                    <form onSubmit={handleSearch} className="mb-4">
                            <div className="input-group input-group-lg">
                                <button className="btn btn-light" type="submit">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </button>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Eg: how to activate F&O, why is my order getting rejected..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </form>
                </div>
            </div>
        </div>
    );
}

export default Hero;