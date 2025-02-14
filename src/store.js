import { useState } from 'react';

const apps = [
  {
    id: 'react-app',
    name: 'React App',
    icon: '🖥️',
    url: 'https://react-uvalue.nimbus.sugarprojects.com/'
  },
  {
    id: 'notification-app',
    name: 'Notification App',
    icon: '🔔',
    url: 'https://notification.nimbus2.sugarprojects.com/'
  }
];

function App() {
  const [activeApp, setActiveApp] = useState(null);

  const openApp = (url) => setActiveApp(url);
  const closeApp = () => setActiveApp(null);

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #cce5ff, #d1c4e9)', padding: '24px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '24px' }}>Dashboard</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
        {apps.map((app) => (
          <div
            key={app.id}
            style={{
              padding: '16px',
              textAlign: 'center',
              cursor: 'pointer',
              backgroundColor: '#f0f4f7',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
            onClick={() => openApp(app.url)}
          >
            <div style={{ fontSize: '2rem' }}>{app.icon}</div>
            <p style={{ marginTop: '8px', fontSize: '1.2rem', fontWeight: 'bold' }}>{app.name}</p>
          </div>
        ))}
      </div>

      {activeApp && (
        <div style={{ position: 'relative', width: '100%', height: '80vh', border: '2px solid #ccc', borderRadius: '12px' }}>
          <button
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              padding: '8px 12px',
              backgroundColor: '#e74c3c',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
            onClick={closeApp}
          >
            Close
          </button>
          <iframe src={activeApp} style={{ width: '100%', height: '100%', border: 'none', borderRadius: '12px' }} />
        </div>
      )}
    </div>
  );
}

export default App;
