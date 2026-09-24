import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <nav style={{background: '#2563eb', padding: '16px'}}>
      <div style={{
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '12px'
      }}>
        
        {/* Logo */}
        <Link 
          to="/" 
          style={{
            background: '#1e40af',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '20px'
          }}
        >
          Talented
        </Link>

        {/* Menu Buttons */}
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
          
          <Link 
            to="/" 
            style={{
              background: '#1e40af',
              color: 'white',
              padding: '10px 16px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            Home
          </Link>

          <Link 
            to="/jobs" 
            style={{
              background: '#1e40af',
              color: 'white',
              padding: '10px 16px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            Jobs
          </Link>

          {user? (
            <>
              <Link 
                to="/dashboard" 
                style={{
                  background: '#1e40af',
                  color: 'white',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}
              >
                Dashboard
              </Link>

              <span style={{
                background: '#1e3a8a',
                color: 'white',
                padding: '10px 16px',
                borderRadius: '8px',
                fontSize: '14px'
              }}>
                {user.displayName || user.email}
              </span>

              <button
                onClick={() => {logout(); navigate('/')}}
                style={{
                  background: '#dc2626',
                  color: 'white',
                  padding: '10px 16px',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link 
                to="/login" 
                style={{
                  background: '#1e40af',
                  color: 'white',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}
              >
                Login
              </Link>

              <Link 
                to="/signup" 
                style={{
                  background: 'white',
                  color: '#2563eb',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar