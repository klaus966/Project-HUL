import React from 'react';

const StyleSelector = ({ options, selectedOption, onSelect }) => {
    return (
        <div className="style-selector">
            <h3>Style</h3>
            <div className="style-list">
                {options.map(option => (
                    <button
                        key={option.id}
                        className={`style-btn ${selectedOption === option.id ? 'active' : ''}`}
                        onClick={() => onSelect(option.id)}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default StyleSelector;
