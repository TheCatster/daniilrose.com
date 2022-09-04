import React from "react";

const CVEducation = () => {
    return (
        <div>
            <h2 className="cv-section-title">work experience</h2>
            <div className="container p-2">
                <h3 className="cv-section-item">
                    DevOps Engineer, quub,{" "}
                    <em>June 2022 - Current</em>
                </h3>
                <p className="cv-text">
                    <ul className="cv-list list-disc list-inside text-left">
                        <li className="cv-list-item">Responsible for automating testing systems using Jenkins.</li>
                        <li className="cv-list-item">Designed internal tools to ease developer experience.</li>
                    </ul>
                </p>
            </div>
            <div className="container p-2">
                <h3 className="cv-section-item">
                    Apprentice Satellite Engineer, quub,{" "}
                    <em>October 2020 - June 2022</em>
                </h3>
                <p className="cv-text">
                    <ul className="cv-list list-disc list-inside text-left">
                        <li className="cv-list-item">Responsible for PCB design.</li>
                        <li className="cv-list-item">Designed software for signal processing and drivers.</li>
                        <li className="cv-list-item">Programmed systems using C, Rust, and Python.</li>
                    </ul>
                </p>
            </div>
            <div className="container p-2">
                <h3 className="cv-section-item">
                    Summer IT Assistant, Garden Spot High School,{" "}
                    <em>June 2021 - August 2021</em>
                </h3>
                <p className="cv-text">
                    <ul className="cv-list list-disc list-inside text-left">
                        <li className="cv-list-item">Responsible for imaging and maintaining computers.</li>
                        <li className="cv-list-item">Performed basic troubleshooting.</li>
                    </ul>
                </p>
            </div>
            <div className="container p-2">
                <h3 className="cv-section-item">
                    Freelance Software Engineer - Python, White Hat Cat{" "}
                    <em>February 2020 - December 2020</em>
                </h3>
                <p className="cv-text">
                    <ul className="cv-list list-disc list-inside text-left">
                        <li className="cv-list-item">Designed Discord bots using innovative concepts.</li>
                        <li className="cv-list-item">Used TensorFlow, Pandas, and PostgreSQL databases.</li>
                    </ul>
                </p>
            </div>
            <div className="container p-2">
                <h3 className="cv-section-item">
                    Software Engineer - PHP, Ruben Engineering,{" "}
                    <em>March 2020 - March 2021</em>
                </h3>
                <p className="cv-text">
                    <ul className="cv-list list-disc list-inside text-left">
                        <li className="cv-list-item">Designed database interface.</li>
                        <li className="cv-list-item">Used PHP and Laravel.</li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default CVEducation;
