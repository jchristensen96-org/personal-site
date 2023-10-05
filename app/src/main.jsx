import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Preloader from "./components/Preloader/Preloader.jsx";

const preloadedImages = [
  'https://pa45hr9jsw59xva4txbdm2at88c55idp.s3.amazonaws.com/personal-site/9Aettr7ENFg8fEVjtJ.jpg',
  'https://pa45hr9jsw59xva4txbdm2at88c55idp.s3.amazonaws.com/personal-site/3RLxJvekC463yogYTb.png',
  'https://pa45hr9jsw59xva4txbdm2at88c55idp.s3.amazonaws.com/personal-site/U8wQcYEnnEm3rEw6ZG.png'
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Preloader images={preloadedImages} />
    <App />
  </React.StrictMode>
);
