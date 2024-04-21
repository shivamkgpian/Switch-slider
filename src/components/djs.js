import React, { useState } from 'react';
import './Styles.css';

function Switchcase() {
    const [switch1, setSwitch1] = useState(0);
    const [switch2, setSwitch2] = useState(0);
    const [sliderValue, setSliderValue] = useState(50);

    const handleSwitch1Toggle = () => {
        setSwitch1(!switch1);
    };

    const handleSwitch2Toggle = () => {
        setSwitch2(!switch2);
    };

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    };

    return (
        <div className="container">
            <div>
                <div className="round">
                    <input type="checkbox" id="onoff" name="onoff" />
                    <div className="back">
                        <label className="but" htmlFor="onoff">
                            <span className="on">I</span><span className="off">0</span>
                        </label>
                    </div>
                </div>
                <div className="round2">
                    <input type="checkbox" id="onoff2" name="onoff2" />
                    <div className="back2">
                        <label className="but2" htmlFor="onoff2">
                            <span className="on2">I</span><span className="off2">0</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="slider-container">
                <div className="blue-light" style={{ opacity: sliderValue / 100 }}></div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={handleSliderChange}
                    className="slider"
                    style={{ orientation: "vertical" }}
                />

            </div>

        </div>
    );
}

export default Switchcase;