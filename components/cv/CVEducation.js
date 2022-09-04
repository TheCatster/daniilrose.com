import React from "react";

const CVEducation = () => {
    return (
        <div>
            <h2 className="cv-section-title">education</h2>
            <div className="container p-2">
                <h3 className="cv-section-item">
                    The Pennsylvania State University, <em>June 2022 - Current</em>
                </h3>
                <p className="cv-text">
                    <ul className="cv-list list-disc list-inside text-left">
                        <li className="cv-list-item">B.Sc in Computer Engineering.</li>
                        <li className="cv-list-item">B.Sc in German.</li>
                    </ul>
                </p>
            </div>
            <div className="container p-2">
                <h3 className="cv-section-item">
                    Garden Spot High School, <em>August 2018 - June 2022</em>
                </h3>
                <p className="cv-text">
                    <ul className="cv-list list-disc list-inside text-left">
                        <li className="cv-list-item">AP credits in mathematics, science, and history.</li>
                        <li className="cv-list-item">Honors in all classes.</li>
                    </ul>
                </p>
            </div>
            <div className="container p-2">
                <h3 className="cv-section-item">
                    MIT High School Summer Program, <em>July 2020 - August 2020</em>
                </h3>
                <p className="cv-text">
                    <ul className="cv-list list-disc list-inside text-left">
                        <li className="cv-list-item">Statistical Thermodynamics.</li>
                        <li className="cv-list-item">Neuroscience and Artificial Intelligence.</li>
                        <li className="cv-list-item">Data Science with the Julia Language.</li>
                        <li className="cv-list-item">European Politics.</li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default CVEducation;
