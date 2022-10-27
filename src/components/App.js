import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import firebase from "fbase";
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  console.log(authService.currentUser);
  setInterval(() => {
    console.log(authService.currentUser);
  }, 2000);
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing"}
      <footer>&copy; Fintech UTD {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
