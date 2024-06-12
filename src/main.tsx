import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './styles/index.scss';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Get the root element by ID
const rootElement = document.getElementById('root');

// Check if the root element exists before creating the root
if (rootElement) {
  // Create a root element for your application
  const root = createRoot(rootElement);

  // Render the App component wrapped with Router and I18nextProvider into the root element
  root.render(
    <I18nextProvider i18n={i18n}>
      <Router>
        <App />
      </Router>
    </I18nextProvider>
  );
} else {
  console.error('Root element not found.');
}

// Register the service worker
serviceWorkerRegistration.register();
