import React from 'react';

function Hero() {
    return ( 
        <div className='container text-center p-5 border-bottom mb-5'>
            <h1 className='fs-2 mt-5 '>Zerodha Products</h1>
            <h2 className='fs-4 mt-4 mb-4 text-muted'>Sleek, modern, and intuitive trading platforms</h2>
            <p className='mb-5'>Check out our <a className='fw-medium' href='/' style={{textDecoration:"none"}}>investment offerings<i class="fa-solid fa-arrow-right"></i></a></p>
            

        </div>
     );
}

export default Hero;
