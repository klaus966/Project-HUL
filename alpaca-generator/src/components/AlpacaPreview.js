import React from 'react';
import { toPng } from 'html-to-image';

const AlpacaPreview = ({ currentConfig, alpacaConfig, previewRef }) => {
    return (
        <div className="alpaca-preview" ref={previewRef} style={{ position: 'relative', width: '500px', height: '500px', margin: '0 auto' }}>
            {/* Background */}
            <img
                src={alpacaConfig.backgrounds.find(b => b.id === currentConfig.backgrounds).src}
                alt="background"
                style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
            />

            {/* Neck */}
            <img
                src={alpacaConfig.neck.find(n => n.id === currentConfig.neck).src}
                alt="neck"
                style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
            />

            {/* Nose/Mouth (Assuming nose is part of the base or handled with mouth/ears, but based on assets, we have mouth. 
          Usually there's a base nose/head shape. Checking assets again... 
          Wait, I generated 'neck', 'ears', 'hair', 'eyes', 'mouth', 'leg', 'accessories', 'backgrounds'.
          I might be missing a 'nose' or 'head' base if it's not in the config.
          Let's check the config again.
          The config has: backgrounds, neck, ears, hair, eyes, mouth, leg, accessories.
          Usually 'neck' includes the head shape in these alpaca generators, or there is a separate 'nose' component.
          Let's look at the 'neck' SVG I generated. 
          'neck/default.svg': M150 250 L350 250 L350 450 L150 450 Z - this looks like just a neck/body block.
          'ears' are separate.
          'mouth', 'eyes', 'hair' are separate.
          Is there a 'nose'? 
          The user request didn't explicitly list every single part, but the standard alpaca generator usually has a nose.
          However, I'll stick to what I have in the config for now. If it looks weird, I'll add a nose.
          Actually, looking at standard alpaca generators, 'nose' is often a separate category.
          But I didn't create it. I'll proceed with what I have. The 'neck' might be serving as the body/head base?
          Wait, the 'neck' SVG path `M150 250 ...` draws a rectangle-ish shape.
          Let's just layer them.
      */}

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
    );
};

export default AlpacaPreview;
