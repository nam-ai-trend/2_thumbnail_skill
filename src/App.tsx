import React from 'react';
import { MeCyberTerminalLayout } from './LAYOUT_AND_PATTERNS';
import { BaseWhiteText, MeCyberText } from './DESIGN_GUIDE';

function App() {
  return (
    <MeCyberTerminalLayout
      terminalCommand="python ai_usage.py"
      coreStatement={<BaseWhiteText text="이 표하나면 해결!" fontSize="100px" />}
      statusText={<MeCyberText text="AI, 나한테 어떻게 써?" type="cyan" fontSize="110px" />}
      backgroundImage="/bg_ax_4.png"
    />
  );
}

export default App;
