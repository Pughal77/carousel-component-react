import React from 'react';
import ReactDOM from 'react-dom/client';
import { styles } from './styles';
import Carousel from './carousel';
  
  // Example components - replace these with your actual components
  const Component1 = () => <div style={styles.slideContent}>Slide 1</div>;
  const Component2 = () => <div style={styles.slideContent}>Slide 2</div>;
  const Component3 = () => <div style={styles.slideContent}>Slide 3</div>;
  
  const App = () => {
    return (
      <Carousel
        componentList={[Component1, Component2, Component3]} />
    );
  };
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
