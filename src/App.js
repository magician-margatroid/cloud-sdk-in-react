import { toDestinationNameUrl } from '@sap-cloud-sdk/connectivity';
import './App.css';

function App() {
  const url = toDestinationNameUrl({ destinationName: 'foobar' });
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {url}
        </p>
      </header>
    </div>
  );
}

export default App;
