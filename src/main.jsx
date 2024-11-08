import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';  // Импортируем ChakraProvider
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>  {/* Оборачиваем App в ChakraProvider */}
      <App />
    </ChakraProvider>
  </StrictMode>,
);
