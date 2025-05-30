import React from 'react';
import ReactDOM from 'react-dom/client';
import { styles } from './src/styles';
import Carousel from './src/carousel';

// Example components - replace these with your actual components
const Component1: React.FC = () => <div>Slide 1</div>;
const Component2: React.FC = () => <div>Slide 2</div>;
const Component3: React.FC = () => <div>Slide 3</div>;

// Example usage of the Carousel component
const App: React.FC = () => {
  return (
    <Carousel
      componentList={[Component1, Component2, Component3]} />
  );
};

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
