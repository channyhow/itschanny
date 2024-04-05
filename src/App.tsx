import './App.scss'
import Header from './components/Header';
import HomePage from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <HomePage />
        {/* Other components like <AboutPage />, <ContactForm />, etc. can go here */}
      </main>
      <Footer />
    </>
  );
}


export default App
