import React from 'react';

function Friends() {
    return (
        <div className="container text-center text-white" style={{overflowX:'auto'}}>
            <div className="bg-cards text-white py-2 pt-3 rounded">
                <h2>67,457</h2>
                <p>Your Balance</p>
            </div>
            <div className="my-3">
                <p>Bring friends, earn more!</p>
                <button className="btn btn-outline-light btn-block mx-2">How Friends Works?</button>
                <button className="btn btn-outline-light btn-block">Want to Collab?</button>
            </div>
            <div className="my-3 bg-cards p-3 rounded">
                <h5>Level 1</h5>
                <p>Invite 4/10 friends</p>
                <button className="btn btn-outline-light btn-block mx-2">Claim +100,000</button>
                <button className="btn btn-primary btn-block">Invite a Friend</button>
            </div>
            <div className="my-3">
                <ul className="table table-fixed list-group" style={{ height: '200px', overflowY: 'auto', width: '100%' }}>
                    <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white">
                        <span>Enes</span>
                        <span>0</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white">
                        <span>Navas Tirur</span>
                        <span>0</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white">
                        <span>Akilan</span>
                        <span>0</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white">
                        <span>Akilan</span>
                        <span>0</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white">
                        <span>Akilan</span>
                        <span>0</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white">
                        <span>Akilan</span>
                        <span>0</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white">
                        <span>Akilan</span>
                        <span>0</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white">
                        <span>Akilan</span>
                        <span>0</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white">
                        <span>Akilan</span>
                        <span>0</span>
                    </li>
                </ul>
            </div>
            <div className="my-3 bg-cards p-3 rounded">
                <p>My Friends / 4</p>
                <p>Total: 7,500</p>
                <button className="btn btn-success btn-block">Claim</button>
            </div>
        </div>
    );
}

export default Friends;