import React from 'react';

const Actions = ({ onRandomize, onDownload }) => {
    return (
        <div className="actions">
            <button className="action-btn" onClick={onRandomize}>
                🔀 Random
            </button>
            <button className="action-btn" onClick={onDownload}>
                🖼️ Download
            </button>
        </div>
    );
};

export default Actions;
