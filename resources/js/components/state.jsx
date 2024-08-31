import React from 'react';

function Stats() {
    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center mt-5 bg-dark text-white">
                <div className="text-center mb-4">
                    <h5>Total Share Balance:</h5>
                    <div className="d-flex align-items-center justify-content-center">
                        <img src="/ui/dollar-coin.png" alt="Coin" className="me-2" style={{ width: '50px', height: 'auto' }} />
                        <h1>675.413 T</h1>
                    </div>
                </div>
                <div className="w-100 mb-4" style={{ borderTop: '1px solid #555' }}></div>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center bg-dark text-white">
                <div className="text-center mb-4">
                    <h5>Total Touches:</h5>
                    <h3>4 035 120 710 585</h3>
                </div>
                <div className="text-center mb-4">
                    <h5>Total Players:</h5>
                    <h3>67 319 312</h3>
                </div>
                <div className="text-center mb-4">
                    <h5>Daily Users:</h5>
                    <h3>9 042 416</h3>
                </div>
                <div className="text-center mb-4">
                    <h5>Online Players:</h5>
                    <h3>202 298</h3>
                </div>
                <div className="text-center">
                    <a href="#" className="text-white">Privacy Policy</a>
                </div>
            </div>
        </>
    );
}

export default Stats;