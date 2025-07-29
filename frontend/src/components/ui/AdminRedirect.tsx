import React, { useEffect } from 'react';

const AdminRedirect = () => {
  useEffect(() => {
    // Ambil URL backend dari environment variable atau gunakan default
    const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:8000';
    const adminUrl = `${backendUrl}/admin`;
    
    console.log('Redirecting to:', adminUrl); // Debug log
    
    // Redirect ke Laravel Filament admin panel
    window.location.replace(adminUrl);
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        padding: '30px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #3498db',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 20px'
        }}></div>
        <h2 style={{ margin: '0 0 10px', color: '#333' }}>Redirecting to Admin Panel...</h2>
        <p style={{ margin: 0, color: '#666' }}>Please wait while we redirect you to the admin panel.</p>
      </div>
      
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default AdminRedirect;