import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container-fluid bg-black text-white p-3">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center">
          <div className="bg-warning text-dark rounded-circle p-2 me-2">
            <strong>TW</strong>
          </div>
          <span>Account</span>
        </div>
        <div className="d-flex">
          <div className="me-4 text-end">
            <span className="d-block text-muted">Income / hour</span>
            <span className="text-warning">$</span>
            <span> 592</span>
          </div>
          <div className="text-end">
            <span className="d-block text-muted">Income / tap</span>
            <span className="text-success">👆</span>
            <span> 1</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="btn-group mb-4 w-100">
        <button type="button" className="btn btn-light text-dark">Mining</button>
        <button type="button" className="btn btn-dark text-muted">Daily</button>
        <button type="button" className="btn btn-dark text-muted">Boosters</button>
      </div>

      {/* Items with Mission Levels and Coins */}
      <div className="list-group">
        {data.map((item) => (
          <div
            className="list-group-item bg-dark text-white d-flex justify-content-between align-items-center mb-3 rounded"
            key={item.name}
            style={{ borderColor: "#2C2C2C" }}
          >
            <div className="d-flex align-items-center">
              <div className="fs-3 me-3">{item.icon}</div>
              <div>
                <div>{item.name}</div>
                <small className="text-muted">Level {item.level}</small>
              </div>
            </div>
            <div className="text-end">
              <button className="btn btn-primary mb-2" style={styles.priceButton}>
                {item.price}
              </button>
              <div className="text-muted">
                {item.mission} <br /> Coins: {item.coins}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const data = [
  { name: "Taxi", level: 4, price: "500 TW", icon: "🚖", mission: "Complete 5 rides", coins: 25 },
  { name: "Food shop", level: 4, price: "950 TW", icon: "🍔", mission: "Sell 20 items", coins: 65 },
  { name: "Streaming", level: 4, price: "1.5k TW", icon: "🎙️", mission: "Stream 10 hours", coins: 90 },
  { name: "Mining Farm", level: 4, price: "1.79k TW", icon: "💻", mission: "Mine 1 BTC", coins: 190 },
  { name: "Barbershop", level: 0, price: "+110 $", icon: "✂️", mission: "Cut 5 hairs", coins: 110 },
];

const styles = {
  priceButton: {
    backgroundColor: "#1E90FF",
    borderColor: "#1E90FF",
    color: "#FFFFFF",
    fontWeight: "bold",
    borderRadius: "10px",
  },
};

export default App;


{/* <section className="d-flex justify-content-around">
                <div className="card bg-dark border text-light bg-gradient">
                    <div className="card-body">
                        <div className="task-icon"><img src="/ui/daily-reward.png" alt="Hamster" className="img-fluid" style={{ maxHeight: '40px' }} /></div>
                        <p>Daily reward</p>
                        <h6>09:58:21</h6>
                    </div>
                </div>
                <div className="card bg-dark border text-light bg-gradient">
                    <div className="card-body">
                        <div className="task-icon"><img src="/ui/daily-cipher.png" alt="Hamster" className="img-fluid" style={{ maxHeight: '40px' }} /></div>
                        <p>Daily cipher</p>
                        <h6>04:58:20</h6>
                    </div>
                </div>
                <div className="card bg-dark border text-light bg-gradient">
                    <div className="card-body">
                        <div className="task-icon"><img src="/ui/daily-combo.png" alt="Hamster" className="img-fluid" style={{ maxHeight: '40px' }} /></div>
                        <p>Daily combo</p>
                        <h6>21:58:20</h6>
                    </div>
                </div>

            </section> */}