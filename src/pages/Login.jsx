import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await login(email, password)
      // Check karo wapis job pe jana hai ya dashboard pe
      const jobId = localStorage.getItem('openApplyForm')
      if (jobId) {
        navigate(`/jobs/${jobId}`) // Wapis job detail pe, form khul jayega
      } else {
        navigate('/jobs') // Normal login to jobs page pe
      }
    } catch (err) {
      setError('Login failed: ' + err.message)
    }
    setLoading(false)
  }

  return (
    <div style={{padding: '40px 20px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9fafb'}}>
      <div style={{background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px'}}>
        <h1 style={{fontSize: '28px', fontWeight: 'bold', marginBottom: '8px', textAlign: 'center'}}>Welcome Back</h1>
        <p style={{color: '#6b7280', marginBottom: '24px', textAlign: 'center'}}>Login to apply for jobs</p>
        
        {error && (
          <div style={{background: '#fee2e2', color: '#dc2626', padding: '12px', borderRadius: '6px', marginBottom: '16px', fontSize: '14px'}}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{marginBottom: '16px'}}>
            <label style={{display: 'block', marginBottom: '6px', fontWeight: '500'}}>Email</label>
            <input 
              type="email" 
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '16px'}}
            />
          </div>

          <div style={{marginBottom: '20px'}}>
            <label style={{display: 'block', marginBottom: '6px', fontWeight: '500'}}>Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '16px'}}
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            style={{
              width: '100%', 
              background: loading ? '#93c5fd' : '#2563eb', 
              color: 'white', 
              padding: '12px', 
              border: 'none',
              borderRadius: '6px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p style={{textAlign: 'center', marginTop: '20px', color: '#6b7280'}}>
          Account nahi hai? <Link to="/signup" style={{color: '#2563eb', fontWeight: '600'}}>Signup karo</Link>
        </p>
      </div>
    </div>
  )
}

export default Login