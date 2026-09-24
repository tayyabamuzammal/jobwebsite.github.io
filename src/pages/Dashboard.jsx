import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [applications, setApplications] = useState([])
  const [filter, setFilter] = useState('all') // all, pending, verified

  useEffect(() => {
    if (!user) {
      navigate('/login')
      return
    }
    loadApplications()
  }, [user, navigate])

  const loadApplications = () => {
    const apps = JSON.parse(localStorage.getItem('applications') || '[]')
    // Status add karo agar nahi hai
    const appsWithStatus = apps.map(app => ({
     ...app,
      status: app.status || 'pending'
    }))
    setApplications(appsWithStatus)
  }

  const handleVerify = (index) => {
    const updatedApps = [...applications]
    updatedApps[index].status = 'verified'
    setApplications(updatedApps)
    localStorage.setItem('applications', JSON.stringify(updatedApps))
    alert('Application Verified!')
  }

  const handleReject = (index) => {
    const updatedApps = [...applications]
    updatedApps[index].status = 'rejected'
    setApplications(updatedApps)
    localStorage.setItem('applications', JSON.stringify(updatedApps))
    alert('Application Rejected!')
  }

  const filteredApps = applications.filter(app => {
    if (filter === 'all') return true
    return app.status === filter
  })

  const getStatusColor = (status) => {
    if (status === 'verified') return { bg: '#dcfce7', text: '#166534' }
    if (status === 'rejected') return { bg: '#fee2e2', text: '#dc2626' }
    return { bg: '#fef3c7', text: '#92400e' }
  }

  if (!user) return null

  return (
    <div style={{padding: '20px', maxWidth: '1200px', margin: '0 auto'}}>
      <div style={{marginBottom: '24px'}}>
        <h1 style={{fontSize: '32px', fontWeight: 'bold', marginBottom: '8px'}}>Applications Dashboard</h1>
        <p style={{color: '#6b7280'}}>Total Applications: {applications.length}</p>
      </div>

      <div style={{display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap'}}>
        <button
          onClick={() => setFilter('all')}
          style={{
            padding: '8px 16px',
            border: 'none',
            borderRadius: '6px',
            background: filter === 'all'? '#2563eb' : '#e5e7eb',
            color: filter === 'all'? 'white' : '#374151',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          All ({applications.length})
        </button>
        <button
          onClick={() => setFilter('pending')}
          style={{
            padding: '8px 16px',
            border: 'none',
            borderRadius: '6px',
            background: filter === 'pending'? '#f59e0b' : '#e5e7eb',
            color: filter === 'pending'? 'white' : '#374151',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          Pending ({applications.filter(a => a.status === 'pending').length})
        </button>
        <button
          onClick={() => setFilter('verified')}
          style={{
            padding: '8px 16px',
            border: 'none',
            borderRadius: '6px',
            background: filter === 'verified'? '#16a34a' : '#e5e7eb',
            color: filter === 'verified'? 'white' : '#374151',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          Verified ({applications.filter(a => a.status === 'verified').length})
        </button>
      </div>

      {filteredApps.length === 0? (
        <div style={{background: 'white', padding: '40px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
          <p style={{color: '#6b7280', fontSize: '18px'}}>Koi application nahi mili</p>
        </div>
      ) : (
        <div style={{background: 'white', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden'}}>
          <div style={{overflowX: 'auto'}}>
            <table style={{width: '100%', borderCollapse: 'collapse'}}>
              <thead>
                <tr style={{background: '#f9fafb', borderBottom: '2px solid #e5e7eb'}}>
                  <th style={{padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: '#374151'}}>#</th>
                  <th style={{padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: '#374151'}}>Name</th>
                  <th style={{padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: '#374151'}}>Email</th>
                  <th style={{padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: '#374151'}}>Phone No</th>
                  <th style={{padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: '#374151'}}>Job</th>
                  <th style={{padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: '#374151'}}>Experience</th>
                  <th style={{padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: '#374151'}}>CV</th>
                  <th style={{padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: '#374151'}}>Status</th>
                  <th style={{padding: '12px 16px', textAlign: 'center', fontWeight: '600', color: '#374151'}}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredApps.map((app, index) => {
                  const statusColor = getStatusColor(app.status)
                  return (
                    <tr key={index} style={{borderBottom: '1px solid #e5e7eb'}}>
                      <td style={{padding: '12px 16px', color: '#6b7280'}}>{index + 1}</td>
                      <td style={{padding: '12px 16px', fontWeight: '500'}}>{app.fullName}</td>
                      <td style={{padding: '12px 16px', color: '#6b7280'}}>{app.email}</td>
                      <td style={{padding: '12px 16px', color: '#6b7280'}}>{app.phone}</td>
                      <td style={{padding: '12px 16px'}}>
                        <div>
                          <div style={{fontWeight: '500'}}>{app.jobTitle}</div>
                          <div style={{fontSize: '12px', color: '#6b7280'}}>{app.company}</div>
                        </div>
                      </td>
                      <td style={{padding: '12px 16px', color: '#6b7280'}}>{app.experience}</td>
                      <td style={{padding: '12px 16px'}}>
                        <span style={{fontSize: '12px', color: '#2563eb'}}>{app.cvFileName}</span>
                      </td>
                      <td style={{padding: '12px 16px'}}>
                        <span style={{
                          background: statusColor.bg,
                          color: statusColor.text,
                          padding: '4px 12px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: '600',
                          textTransform: 'capitalize'
                        }}>
                          {app.status}
                        </span>
                      </td>
                      <td style={{padding: '12px 16px', textAlign: 'center'}}>
                        {app.status === 'pending'? (
                          <div style={{display: 'flex', gap: '8px', justifyContent: 'center'}}>
                            <button
                              onClick={() => handleVerify(index)}
                              style={{
                                padding: '6px 12px',
                                background: '#16a34a',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '12px',
                                fontWeight: '600'
                              }}
                            >
                              ✓ Verify
                            </button>
                            <button
                              onClick={() => handleReject(index)}
                              style={{
                                padding: '6px 12px',
                                background: '#dc2626',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '12px',
                                fontWeight: '600'
                              }}
                            >
                              ✗ Reject
                            </button>
                          </div>
                        ) : (
                          <span style={{color: '#6b7280', fontSize: '12px'}}>Done</span>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard