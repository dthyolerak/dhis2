import React from "react";
import "./Welcome.css";

export const Welcome = () => {
    return (
        <div className="desktop">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="text-wrapper">Patient reminder</div>
                    <div className="overlap-group">
                        <div className="rectangle" />
                        <div className="rectangle" />
                        <div className="div">Reminder System</div>
                        <img className="user-line" alt="User line" src="user-3-line-1.svg" />
                        <div className="rectangle-2" />
                        <div className="text-wrapper-2">HPV</div>
                        <div className="text-wrapper-3">Chlamydia</div>
                        <div className="text-wrapper-4">Gornorrhea</div>
                        <div className="text-wrapper-5">Syphilis</div>
                        <div className="text-wrapper-6">HIV/AIDS</div>
                        <div className="text-wrapper-7">Malaria</div>
                        <div className="frame">
                            <div className="text-wrapper-8">Programs</div>
                        </div>
                        <div className="text-wrapper-9">Reminder</div>
                        <div className="text-wrapper-10">Patient</div>
                        <div className="div-wrapper">
                            <div className="text-wrapper-11">Main Menu</div>
                        </div>
                        <div className="text-wrapper-12">Appointments</div>
                        <div className="text-wrapper-13">Reminder System</div>
                    </div>
                    <div className="text-wrapper-14">Welcome to DHIS2</div>
                </div>
            </div>
        </div>
    );
};
