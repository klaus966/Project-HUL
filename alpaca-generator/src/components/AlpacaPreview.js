import React from 'react';

const AlpacaPreview = ({ currentConfig, alpacaConfig, previewRef }) => {
    return (
        <div className="alpaca-preview" ref={previewRef} style={{ position: 'relative', width: '500px', height: '500px', margin: '0 auto' }}>
            {/* Background */}
            <img
                src={alpacaConfig.backgrounds.find(b => b.id === currentConfig.backgrounds).src}
                alt="background"
                style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
            />

            <div className="alpaca-character" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
                {/* Neck */}
                <img
                    src={alpacaConfig.neck.find(n => n.id === currentConfig.neck).src}
                    alt="neck"
                    style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
                />

                {/* Ears */}
                <img
                    src={alpacaConfig.ears.find(e => e.id === currentConfig.ears).src}
                    alt="ears"
                    style={{ position: 'absolute', top: 0, left: 0, zIndex: 2 }} // Ears usually behind hair but on head
                />

                {/* Hair */}
                <img
                    src={alpacaConfig.hair.find(h => h.id === currentConfig.hair).src}
                    alt="hair"
                    style={{ position: 'absolute', top: 0, left: 0, zIndex: 6 }} // Hair usually on top
                />

                {/* Eyes */}
                <img
                    src={alpacaConfig.eyes.find(e => e.id === currentConfig.eyes).src}
                    alt="eyes"
                    style={{ position: 'absolute', top: 0, left: 0, zIndex: 4 }}
                />

                {/* Mouth */}
                <img
                    src={alpacaConfig.mouth.find(m => m.id === currentConfig.mouth).src}
                    alt="mouth"
                    style={{ position: 'absolute', top: 0, left: 0, zIndex: 4 }}
                />

                {/* Leg */}
                <img
                    src={alpacaConfig.leg.find(l => l.id === currentConfig.leg).src}
                    alt="leg"
                    style={{ position: 'absolute', top: 0, left: 0, zIndex: 3 }} // Legs might be in front of neck? Or behind?
                />

                {/* Accessories */}
                <img
                    src={alpacaConfig.accessories.find(a => a.id === currentConfig.accessories).src}
                    alt="accessories"
                    style={{ position: 'absolute', top: 0, left: 0, zIndex: 7 }} // Accessories usually on top
                />
            </div>
        </div>
    );
};

export default AlpacaPreview;
