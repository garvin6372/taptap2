import React, { useState } from 'react';

function Boost() {
    const [activePage, setActivePage] = useState('mining');

    const handlePageChange = (page) => {
        setActivePage(page);
    };

    return (
        <>
            <section className="row p-3 bg-dark" style={{ overflowX: 'auto' }}>
                <div className="col-md-12">
                    <div className="d-flex justify-content-between align-items-center mb-4" style={{ fontSize: '10px' }}>
                        <div className="d-flex align-items-center">
                            <div className="bg-warning text-dark rounded-circle p-2 me-2">
                                <strong>TW</strong>
                            </div>
                            <span>Account</span>
                        </div>
                        <div className='border' style={{ height: '20px' }}></div>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center text-start">
                                <div className="bg-warning rounded-circle p-2 me-3">
                                    <span className="text-white">💵</span>
                                </div>
                                <div>
                                    <span className="d-block text-white">Income / hour</span>
                                    <span> 592</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center ms-3 text-start">
                                <div className="bg-warning rounded-circle p-2 me-2">
                                    <span className="text-success">👆</span>
                                </div>
                                <div>
                                    <span className="d-block text-white">Income / tap</span>
                                    <span> 1</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="btn-group mb-4 w-100">
                        <button className={`btn btn-light text-dark ${activePage == 'mining' ? 'active' : ''}`} onClick={() => handlePageChange('mining')}>Mining</button>
                        <button className={`btn btn-light text-dark ${activePage == 'daily' ? 'active' : ''}`} onClick={() => handlePageChange('daily')}>Daily</button>
                        <button className={`btn btn-light text-dark ${activePage == 'booster' ? 'active' : ''}`} onClick={() => handlePageChange('booster')}>Boosters</button>
                    </div>

                    {/* <div className="row">
                        <div className="col-md-6 mt-4 mb-4">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src="/ui/dollar-coin.png" alt="Hamster" className="img-fluid" style={{ maxHeight: '40px' }} />
                                <h1>602,272,114</h1>
                            </div>
                        </div>
                    </div> */}
                    <div className="row text-dark">
                        {(activePage == 'daily') &&
                            <div className='col-md-6 mb-3'>
                                <h2 className="mt-4 h4 text-info">Daily Boosters</h2>
                                <div className="row mt-2">
                                    <div className="col-6">
                                        <div className="text-white p-3 rounded shadow-sm transition-transform transform hover-scale bg-cards">
                                            <span className="text-warning h2 float-start">🔥</span>
                                            <span className="font-weight-semibold h5">Boost</span><br />
                                            <span className="text-white">3/3</span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="text-white p-3 rounded shadow-sm transition-transform transform hover-scale mt-md-0 bg-cards">
                                            <span className="text-purple h2 float-start">⚡</span>
                                            <span className="font-weight-semibold h5">Full Tank</span><br />
                                            <span className="text-white">3/3</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        <div className='col-md-6 mb-3'>
                            {(activePage == 'booster') &&
                                <div>
                                    <h2 className="mt-4 h4 text-info">Boosters</h2>
                                    <div className="mt-3">
                                        <div className="row gap-2">
                                            <div className="col-12">
                                                <div className="text-white p-3 rounded shadow-sm transition-transform transform hover-scale bg-cards">
                                                    <div className='d-flex justify-content-between align-items-center '>
                                                        <span className="h5">Recharging Speed</span>
                                                        <button className="btn btn-primary btn-sm rounded-circle pull-right">→</button>
                                                    </div>
                                                    <div className='d-flex justify-content-between align-items-center '>
                                                        <span className="font-weight-bold text-success">100,000</span>
                                                        <span className="text-white">3 Level</span>
                                                        <span>&nbsp;</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="text-white p-3 rounded shadow-sm transition-transform transform hover-scale bg-cards">
                                                    <div className='d-flex justify-content-between align-items-center '>
                                                        <span className="h5">Recharging Speed</span>
                                                        <button className="btn btn-primary btn-sm rounded-circle pull-right">→</button>
                                                    </div>
                                                    <div className='d-flex justify-content-between align-items-center '>
                                                        <span className="font-weight-bold text-success">100,000</span>
                                                        <span className="text-white">3 Level</span>
                                                        <span>&nbsp;</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="text-white p-3 rounded shadow-sm transition-transform transform hover-scale bg-cards">
                                                    <div className='d-flex justify-content-between align-items-center '>
                                                        <span className="h5">Recharging Speed</span>
                                                        <button className="btn btn-primary btn-sm rounded-circle pull-right">→</button>
                                                    </div>
                                                    <div className='d-flex justify-content-between align-items-center '>
                                                        <span className="font-weight-bold text-success">100,000</span>
                                                        <span className="text-white">3 Level</span>
                                                        <span>&nbsp;</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="text-white p-3 rounded shadow-sm transition-transform transform hover-scale bg-cards">
                                                    <div className='d-flex justify-content-between align-items-center '>
                                                        <span className="h5">Recharging Speed</span>
                                                        <button className="btn btn-primary btn-sm rounded-circle pull-right">→</button>
                                                    </div>
                                                    <div className='d-flex justify-content-between align-items-center '>
                                                        <span className="font-weight-bold text-success">100,000</span>
                                                        <span className="text-white">3 Level</span>
                                                        <span>&nbsp;</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {(activePage == 'mining') &&
                                <div>
                                    <h2 className="mt-4 h4 text-info">Task</h2>
                                    <div className="mt-3">
                                        <div className="row gap-2">
                                            <div className="col-12">
                                                <div className="text-white p-3 rounded shadow-sm transition-transform transform hover-scale bg-cards" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <div className='d-flex justify-content-between align-items-center'>
                                                        <span className="h5">Recharging Speed</span>
                                                        <button className="btn btn-primary btn-sm rounded-circle pull-right" data-bs-toggle="modal" data-bs-target="#exampleModal">→</button>
                                                    </div>
                                                    <div className='d-flex justify-content-between align-items-center '>
                                                        <span className="font-weight-bold text-success">100,000</span>

                                                        <span>&nbsp;</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="text-white p-3 rounded shadow-sm transition-transform transform hover-scale bg-cards">
                                                    <div className='d-flex justify-content-between align-items-center '>
                                                        <span className="h5">Recharging Speed</span>
                                                        <button className="btn btn-primary btn-sm rounded-circle pull-right">→</button>
                                                    </div>
                                                    <div className='d-flex justify-content-between align-items-center '>
                                                        <span className="font-weight-bold text-success">100,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="text-white p-3 rounded shadow-sm transition-transform transform hover-scale bg-cards">
                                                    <div className='d-flex justify-content-between align-items-center '>
                                                        <span className="h5">Recharging Speed</span>
                                                        <button className="btn btn-primary btn-sm rounded-circle pull-right">→</button>
                                                    </div>
                                                    <div className='d-flex justify-content-between align-items-center '>
                                                        <span className="font-weight-bold text-success">100,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="text-white p-3 rounded shadow-sm transition-transform transform hover-scale bg-cards">
                                                    <div className='d-flex justify-content-between align-items-center '>
                                                        <span className="h5">Recharging Speed</span>
                                                        <button className="btn btn-primary btn-sm rounded-circle pull-right">→</button>
                                                    </div>
                                                    <div className='d-flex justify-content-between align-items-center '>
                                                        <span className="font-weight-bold text-success">100,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section >
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-dark">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button type="button" className="btn btn-primary">Claim</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Boost;