import React, { useState, useRef } from 'react';
import { toPng } from 'html-to-image';
import './App.css';
import AlpacaPreview from './components/AlpacaPreview';
import Controls from './components/Controls';
import StyleSelector from './components/StyleSelector';
import Actions from './components/Actions';
import { alpacaConfig } from './data/alpacaConfig';

function App() {
  const [activeCategory, setActiveCategory] = useState('hair');
  const [currentConfig, setCurrentConfig] = useState({
    backgrounds: 'green50',
    neck: 'default',
    ears: 'default',
    hair: 'curls',
    eyes: 'default',
    mouth: 'laugh',
    leg: 'default',
    accessories: 'flower',
  });

  const previewRef = useRef(null);

  const handleOptionSelect = (optionId) => {
    setCurrentConfig(prev => ({
      ...prev,
      [activeCategory]: optionId
    }));
  };

  const randomize = () => {
    const newConfig = {};
    Object.keys(alpacaConfig).forEach(category => {
      const options = alpacaConfig[category];
      const randomOption = options[Math.floor(Math.random() * options.length)];
      newConfig[category] = randomOption.id;
    });
    setCurrentConfig(newConfig);
  };

  const download = () => {
    if (previewRef.current === null) {
      return;
    }
    toPng(previewRef.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'my-alpaca.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div className="navbar">
        <h1>ALPACA GENERATOR</h1>
      </div>
      <div className="container">
        <div className="left-panel">
          <AlpacaPreview
            currentConfig={currentConfig}
            alpacaConfig={alpacaConfig}
            previewRef={previewRef}
          />
          <Actions onRandomize={randomize} onDownload={download} />
        </div>
        <div className="right-panel">
          <Controls
            categories={Object.keys(alpacaConfig)}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          <StyleSelector
            options={alpacaConfig[activeCategory]}
            selectedOption={currentConfig[activeCategory]}
            onSelect={handleOptionSelect}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
