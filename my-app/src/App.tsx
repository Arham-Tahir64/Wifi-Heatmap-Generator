// src/App.tsx
import React from 'react'

export default function App() {
  return (
    <div style={{ padding: 40 }}>
      <h1> Wi-Fi Heatmap</h1>
      <button onClick={() => window.electron.ipcRenderer.send('scan')}>
        Scan Wi-Fi Signal
      </button>
    </div>
  )
}
