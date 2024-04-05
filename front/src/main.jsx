import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ChannelService from "./channel-service.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {ChannelService.loadScript()}
    <App />
  </React.StrictMode>,
)
