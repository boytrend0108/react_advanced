import React from 'react';
import { createRoot } from 'react-dom/client';
import { Counter } from './components/Counter/Counter';

const root = createRoot(document.getElementById('app'));

root.render(<Counter />);
