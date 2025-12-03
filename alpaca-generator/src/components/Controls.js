import React from 'react';

const Controls = ({ categories, activeCategory, setActiveCategory }) => {
    return (
        <div className="controls">
            <h3>Accessorize the Alpaca's</h3>
            <div className="category-list">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Controls;
