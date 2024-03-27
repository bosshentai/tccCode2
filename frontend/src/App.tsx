import { useEffect, useState } from 'react';
import './App.css';
import { Loader } from './components/loader/loader';
import { ThemeProvider } from './context/theme-context';

function App() {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
  }, []);
  useEffect(() => {
    setLoading(true);
  }, []);

  if (!loading) {
    return <Loader />;
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="nogain-ui">
      NoGain
    </ThemeProvider>
  );
}

export default App;
