import * as React from 'react';
import HelpArea from '../HelpArea/HelpArea';

function MainContent() {
  const [helpVisible, setHelpVisible] = React.useState(false);

  function toggleHelp() {
    setHelpVisible((isVisible) => !isVisible);
  }

  return (
    <main>
      <button onClick={toggleHelp}>{helpVisible ? 'Hide' : 'Show'} Help</button>
      {helpVisible && <HelpArea />}
    </main>
  );
}

export default MainContent;
