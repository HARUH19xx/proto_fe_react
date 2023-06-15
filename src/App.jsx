import React from 'react';
import { createRoot } from 'react-dom/client';
import { useRecoilState, RecoilRoot } from 'recoil';
import { signedInState, pageState } from './components/state.js';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';

const App = () => {
  const [signedIn] = useRecoilState(signedInState);
  const [page] = useRecoilState(pageState);

  if (!signedIn) {
    return page === 'signin' ? <SignIn /> : <SignUp />;
  } else {
    return (
      <div>
        <h1>ようこそ！</h1>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
} else {
  console.error("No root element found");
}