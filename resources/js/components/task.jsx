import React, { useState, useEffect } from 'react';

function Task() {
  const [flying, setFlying] = useState(true);
  const [crashed, setCrashed] = useState(false);
  const [time, setTime] = useState(Math.floor(Math.random() * 10) + 1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        setFlying(false);
        setCrashed(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  const handleReset = () => {
    setFlying(true);
    setCrashed(false);
    setTime(Math.floor(Math.random() * 10) + 1);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center p-3 bg-dark text-white">
        <div className="d-flex align-items-center">
          <img
            src="profile-icon.png"
            alt="Profile"
            className="rounded-circle"
            width="40"
            height="40"
          />
          <div className="ms-2">
            <div>Garvin</div>
            {/* <ProgressBar now={50} className="mt-1" style={{ height: '5px', width: '100px' }} /> */}
          </div>
        </div>
        <div className="d-flex flex-column align-items-end">
          <div className="fs-4 fw-bold text-warning">1win</div>
          <button className="btn btn-outline-light btn-sm">About token</button>
        </div>
      </div>
      <div className="text-center text-white" style={{ backgroundColor: '#003366' }}>
        <div className="py-3">
          <h2>126,832</h2>
          <div className="d-flex justify-content-center">
            <div className="px-3">
              <span className="text-warning">592</span> income/hour
            </div>
            <div className="px-3">
              <span className="text-success">1</span> income/tap
            </div>
          </div>
        </div>
        <img
          src="/ui/main-character.png"
          alt="Character"
          className="img-fluid"
          style={{ maxHeight: '300px' }}
        />
      </div>
      <div className="footer d-flex justify-content-around align-items-center">
        <div className="footer-item active">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bar-chart-line" viewBox="0 0 16 16">
            <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1zm1 12h2V2h-2zm-3 0V7H7v7zm-5 0v-3H2v3z" />
          </svg>
          <div>Main</div>
        </div>
        <div className="footer-item">
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3.02172 1.79241C3.11977 1.33042 3.52766 1 3.99994 1H7.49994C10.8167 1 13.9504 2.15662 16.5142 4.05499L16.8139 3.77241C17.2074 3.40139 17.8246 3.41046 18.207 3.79289L20.207 5.79289C20.5895 6.17532 20.5986 6.79251 20.2275 7.18601L19.945 7.48571C21.8433 10.0496 22.9999 13.1833 22.9999 16.5V20C22.9999 20.4723 22.6695 20.8802 22.2075 20.9782C21.7455 21.0763 21.2779 20.8377 21.0861 20.4061C19.5548 16.9607 17.8884 14.1436 15.9191 11.7594L5.78873 22.5551C4.82264 23.5847 3.19624 23.6105 2.19791 22.6122L1.38775 21.802C0.389428 20.8037 0.415275 19.1773 1.44482 18.2112L12.2405 8.08084C9.85633 6.11151 7.03927 4.44513 3.5938 2.91381C3.16223 2.722 2.92368 2.2544 3.02172 1.79241ZM13.7415 9.41504L2.81338 19.6696C2.60747 19.8629 2.6023 20.1881 2.80197 20.3878L3.61213 21.198C3.81179 21.3976 4.13707 21.3925 4.33029 21.1866L14.5849 10.2585C14.3099 9.97106 14.0289 9.69005 13.7415 9.41504ZM8.31869 3.02736C10.6049 4.30007 12.6125 5.70113 14.4033 7.30303C15.2115 8.026 15.9739 8.78848 16.6969 9.59669C18.2988 11.3875 19.6999 13.3951 20.9726 15.6813C20.7848 12.8712 19.6408 10.2169 17.8574 8.06282C17.2794 7.36462 16.6353 6.72057 15.9371 6.14252C13.783 4.35913 11.1287 3.21514 8.31869 3.02736Z" fill="#ffffff"></path> </g></svg>
          <div>Earn</div>
        </div>
        <div className="footer-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
          </svg>
          <div>Friends</div>
        </div>
        <div className="footer-item">
          <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 401.601 401.6" xmlSpace="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M116.682,229.329c11.286,0,22.195-0.729,32.518-2.086V114.094c-10.322-1.356-21.232-2.085-32.518-2.085 c-64.441,0-116.681,23.693-116.681,52.921v11.477C0.001,205.634,52.241,229.329,116.682,229.329z"></path> <path d="M116.682,288.411c11.286,0,22.195-0.729,32.518-2.084v-33.166c-10.325,1.356-21.229,2.095-32.518,2.095 c-56.25,0-103.199-18.054-114.227-42.082c-1.606,3.5-2.454,7.124-2.454,10.839v11.477 C0.001,264.718,52.241,288.411,116.682,288.411z"></path> <path d="M149.199,314.823v-2.578c-10.325,1.356-21.229,2.095-32.518,2.095c-56.25,0-103.199-18.054-114.227-42.082 C0.848,275.757,0,279.381,0,283.096v11.477c0,29.229,52.24,52.922,116.681,52.922c12.887,0,25.282-0.95,36.873-2.7 c-2.873-5.877-4.355-12.075-4.355-18.496V314.823z"></path> <path d="M284.92,22.379c-64.441,0-116.681,23.693-116.681,52.921v11.477c0,29.228,52.24,52.921,116.681,52.921 c64.44,0,116.681-23.693,116.681-52.921V75.3C401.601,46.072,349.36,22.379,284.92,22.379z"></path> <path d="M284.92,165.626c-56.25,0-103.199-18.053-114.227-42.082c-1.606,3.499-2.454,7.123-2.454,10.839v11.477 c0,29.228,52.24,52.921,116.681,52.921c64.44,0,116.681-23.693,116.681-52.921v-11.477c0-3.716-0.848-7.34-2.454-10.839 C388.119,147.573,341.17,165.626,284.92,165.626z"></path> <path d="M284.92,224.71c-56.25,0-103.199-18.054-114.227-42.082c-1.606,3.499-2.454,7.123-2.454,10.839v11.477 c0,29.229,52.24,52.922,116.681,52.922c64.44,0,116.681-23.693,116.681-52.922v-11.477c0-3.716-0.848-7.34-2.454-10.839 C388.119,206.657,341.17,224.71,284.92,224.71z"></path> <path d="M284.92,286.983c-56.25,0-103.199-18.054-114.227-42.082c-1.606,3.5-2.454,7.123-2.454,10.838v11.478 c0,29.228,52.24,52.921,116.681,52.921c64.44,0,116.681-23.693,116.681-52.921v-11.478c0-3.715-0.848-7.34-2.454-10.838 C388.119,268.928,341.17,286.983,284.92,286.983z"></path> <path d="M284.92,346.066c-56.25,0-103.199-18.053-114.227-42.081c-1.606,3.5-2.454,7.125-2.454,10.838V326.3 c0,29.228,52.24,52.921,116.681,52.921c64.44,0,116.681-23.693,116.681-52.921v-11.478c0-3.715-0.848-7.34-2.454-10.838 C388.119,328.012,341.17,346.066,284.92,346.066z"></path> </g> </g> </g></svg>
          <div>1win games</div>
        </div>
      </div>
    </>
  );
}

export default Task;