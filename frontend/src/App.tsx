import { useState } from 'react';
import './App.css';
import { Loader } from './components/loader/loader';

function App() {
  const [loading, setLoading] = useState<boolean>(false);

  if (!loading) {
    return <Loader />;
  }

  return <>NoGain</>;
}

export default App;
