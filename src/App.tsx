import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Chats, Login } from '@pages';
import '@styles/index.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/*<Route path="chat" element={<Login />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
