import React from "react";

const CVTechnicalSkills = () => {
    return (
        <div>
            <h2 className="cv-section-title">technical skills</h2>
            <div className="container p-1">
                <h3 className="cv-section-item">Workflow</h3>
                <ul className="cv-list list-disc list-inside text-left">
                    <li className="cv-list-item">UNIX-based OSes (such as GNU/Linux, macOS, FreeBSD)</li>
                    <li className="cv-list-item">
                        Emacs and Vim
                    </li>
                    <li className="cv-list-item">SSH, Docker, Proxmox, and Kubernetes</li>
                    <li className="cv-list-item">
                        Jupyter Lab with Python and Julia
                    </li>
                </ul>
            </div>
            <div className="container p-1">
                <h3 className="cv-section-item">Languages</h3>
                <div className="flex">
                    <div className="p-2">
                        <h4 className="cv-section-subtitle">Programming</h4>
                        <ul className="cv-list list-disc list-inside text-left">
                            <li className="cv-list-item">Rust</li>
                            <li className="cv-list-item">C</li>
                            <li className="cv-list-item">Python</li>
                            <li className="cv-list-item">Julia</li>
                            <li className="cv-list-item">Clojure</li>
                            <li className="cv-list-item">Kotlin</li>
                        </ul>
                    </div>
                    <div className="p-2">
                        <h4 className="cv-section-subtitle">Markup</h4>
                        <ul className="cv-list list-disc list-inside text-left">
                            <li className="cv-list-item">Org</li>
                            <li className="cv-list-item">LaTeX</li>
                            <li className="cv-list-item">Markdown</li>
                            <li className="cv-list-item">HTML</li>
                            <li className="cv-list-item">CSS</li>
                        </ul>
                    </div>
                    <div className="p-2">
                        <h4 className="cv-section-subtitle">Human</h4>
                        <ul className="cv-list list-disc list-inside text-left">
                            <li className="cv-list-item">English: Native</li>
                            <li className="cv-list-item">Russian: Native</li>
                            <li className="cv-list-item">German: A2</li>
                            <li className="cv-list-item">Simplified Chinese: A1</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container p-1">
                <h3 className="cv-section-item">Media</h3>
                <h4 className="cv-section-subtitle">Gimp, Inkscape, and Affinity</h4>
                <p className="cv-text">
                    Used to make high quality placeholders, mockups, and logos for
                    projects.
                </p>
                <h4 className="cv-section-subtitle">Logic Pro, Ableton, and Ardour</h4>
                <p className="cv-text">
                    Used to arrange and compose music, as well as edit existing audio or
                    voice tracks.
                </p>
            </div>
        </div>
    );
};

export default CVTechnicalSkills;
