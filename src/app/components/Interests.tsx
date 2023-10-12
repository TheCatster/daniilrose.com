import React from "react";

const Interests = () => {
  return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2 justify-items-center">
            <div className="items-center justify-center">
                <h4 className="text-md lg:text-lg font-bold interests-title">
                    Programming
                </h4>
                <ul>
                    <li>Rust</li>
                    <li>C</li>
                    <li>Python</li>
                    <li>Clojure</li>
                </ul>
            </div>
            <div>
                <h4 className="text-md lg:text-lg font-bold interests-title">
                    Languages
                </h4>
                <ul>
                    <li>Russian: Native</li>
                    <li>English: Native</li>
                    <li>German: A2</li>
                    <li>Simplified Chinese: A1</li>
                </ul>
            </div>
            <div>
                <h4 className="text-md lg:text-lg font-bold interests-title">
                    Instruments
                </h4>
                <ul>
                    <li>Vibraphone</li>
                    <li>Marimba</li>
                    <li>Piano</li>
                    <li>Bass</li>
                </ul>
            </div>

        </div>
    );
};

export default Interests;
