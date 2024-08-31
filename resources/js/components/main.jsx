import React, { useState, useEffect } from 'react';
import axios from "axios";
// import WebApp from "@twa-dev/sqk"
function Main() {

    const [score, setScore] = useState(24999);
    // const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
    // const [showPlusOne, setShowPlusOne] = useState(false);
    // const [points, setPoints] = useState(22749365);
    const pointsToAdd = 11;
    const profitPerHour = 126420;
    const [clicks, setClicks] = useState([]);
    const [energy, setEnergy] = useState(1000);
    // const [energy_width, setEnergyWidth] = useState(100);

    const EnergyBar = () => {
        // Initial energy level, you can set it to whatever you like
    };

    const handleCoinTap = (e) => {
        if (energy > 0) {
            // setEnergyWidth(energy / 1000 * 100)
            setEnergy(energy - 10);  // Decrease energy by 10 on each click
        }
        setScore(score + 1);
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;
        setTimeout(() => {
            card.style.transform = '';
        }, 100);

        // setPoints(points + pointsToAdd);
        setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);
    };
    const handleAnimationEnd = (id) => {
        setClicks((prevClicks) => prevClicks.filter(click => click.id !== id));
    };

    const levelNames = [
        "Bronze",    // From 0 to 4999 coins
        "Silver",    // From 5000 coins to 24,999 coins
        "Gold",      // From 25,000 coins to 99,999 coins
        "Platinum",  // From 100,000 coins to 999,999 coins
        "Diamond",   // From 1,000,000 coins to 2,000,000 coins
        "Epic",      // From 2,000,000 coins to 10,000,000 coins
        "Legendary", // From 10,000,000 coins to 50,000,000 coins
        "Master",    // From 50,000,000 coins to 100,000,000 coins
        "GrandMaster", // From 100,000,000 coins to 1,000,000,000 coins
        "Lord"       // From 1,000,000,000 coins to ∞
    ];

    const levelMinPoints = [
        0,        // Bronze
        5000,     // Silver
        25000,    // Gold
        100000,   // Platinum
        1000000,  // Diamond
        2000000,  // Epic
        10000000, // Legendary
        50000000, // Master
        100000000,// GrandMaster
        1000000000// Lord
    ];

    const [levelIndex, setLevelIndex] = useState(1);

    const calculateProgress = () => {
        if (levelIndex >= levelNames.length - 1) {
            return 100;
        }
        const currentLevelMin = levelMinPoints[levelIndex];
        const nextLevelMin = levelMinPoints[levelIndex + 1];
        const progress = ((score - currentLevelMin) / (nextLevelMin - currentLevelMin)) * 100;
        return Math.min(progress, 100);
    };

    useEffect(() => {
        const currentLevelMin = levelMinPoints[levelIndex];
        const nextLevelMin = levelMinPoints[levelIndex + 1];
        if (score >= nextLevelMin && levelIndex < levelNames.length - 1) {
            setLevelIndex(levelIndex + 1);
        } else if (score < currentLevelMin && levelIndex > 0) {
            setLevelIndex(levelIndex - 1);
        }
    }, [score, levelIndex, levelMinPoints, levelNames.length]);

    function handleSubmit() {

        const packets = {
            energy: energy,
            score: score
        };

        axios.post('sendrequest', packets)
            .then(
                response => alert(JSON.stringify(response.data))

            )
            .catch(error => {
                console.log("ERROR:: ", error.response.data);

            });
    }
    // const [UserData, setUserData] = useState([]);
    // useEffect(() => {
    //     if (WebApp.iniDataUnsafe.user) {
    //         setUserData(WebApp.iniDataUnsafe.user)
    //     }
    // }, [])
    return (
        <>
            <header className="d-flex justify-content-between align-items-center p-3">
                <div className="d-flex align-items-center gap-2">
                    <img className="rounded-3" src="/ui/hamster-coin.png" alt="" style={{ width: '40px', height: '40px' }} />
                    <h2 className="text-white mb-0">Garvin</h2>
                </div>
                <div>
                    <span>{levelNames[levelIndex]}</span>
                    <span>&nbsp;&nbsp;</span>
                    <span>{levelIndex + 1}/ {levelNames.length}</span>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: `${calculateProgress()}%` }} aria-valuenow="9" aria-valuemin="0" aria-valuemax="10"></div>
                    </div>
                </div>
            </header>
            <div className="d-flex justify-content-center my-1">
                <div className="task-icon mx-3"><img src="/ui/dollar-coin.png" alt="Hamster" className="img-fluid" style={{ maxHeight: '40px' }} /></div>
                <h1>{score}</h1>
            </div>
            <div className='d-flex justify-content-center'>
                <div className="d-flex align-items-center">
                    <span className="text-white">💵</span>
                    <span> 592 </span>
                    <span className="d-block text-white"> Income / hour</span>
                </div>
                <div className="d-flex align-items-center ms-3">
                    <span className="text-success">👆</span>
                    <span className="d-block text-white">Income / tap</span>
                    <span> 1</span>
                </div>
            </div >
            <div className="mb-1" style={{ cursor: energy > 0 ? 'pointer' : 'not-allowed' }}>
                <div className='bg-coin p-2 m-3' onClick={energy > 0 ? handleCoinTap : undefined}>
                    <img src="/ui/main-character.png" alt="Hamster" className="img-fluid" style={{ maxHeight: '400px' }} />
                </div>
            </div>
            {
                clicks.map(function (click) {
                    return (
                        <div
                            key={click.id}
                            className="fade-out-up"
                            style={{
                                top: (click.y - 42) + 'px',
                                left: (click.x - 28) + 'px',
                            }}
                            onAnimationEnd={() => handleAnimationEnd(click.id)}
                        >
                            +{pointsToAdd}
                        </div>
                    );
                })
            }
            <div className="d-flex justify-content-center align-items-center">
                <div className="d-flex flex-column align-items-center">
                    <div className="progress" style={{ width: '300px' }}>
                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: (energy / 1000 * 100) + '%' }} aria-valuenow="500" aria-valuemin="0" aria-valuemax="7500"></div>
                    </div>
                    <p>{energy}</p>
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <button className="button-85" role="button" onClick={handleSubmit}>Clam</button>
            </div>
        </>
    );
}

export default Main;