import { Link } from 'react-router-dom'
import { useState } from 'react'

function Jobs() {
  const [search, setSearch] = useState('')

  const jobs = [
    { id: 1, title: 'Senior React Developer', company: 'Google', location: 'Lahore', type: 'Full-time', salary: '200k-300k' },
    { id: 2, title: 'UI/UX Designer', company: 'Meta', location: 'Karachi', type: 'Full-time', salary: '150k-250k' },
    { id: 3, title: 'Backend Node.js Developer', company: 'Amazon', location: 'Islamabad', type: 'Full-time', salary: '180k-280k' },
    { id: 4, title: 'Flutter Mobile Developer', company: 'Careem', location: 'Lahore', type: 'Remote', salary: '120k-200k' },
    { id: 5, title: 'DevOps Engineer', company: 'Microsoft', location: 'Karachi', type: 'Full-time', salary: '250k-400k' },
    { id: 6, title: 'Python Django Developer', company: 'Daraz', location: 'Lahore', type: 'Full-time', salary: '100k-180k' },
    { id: 7, title: 'Frontend Vue.js Developer', company: 'Foodpanda', location: 'Islamabad', type: 'Hybrid', salary: '130k-220k' },
    { id: 8, title: 'Data Scientist', company: 'Telenor', location: 'Karachi', type: 'Full-time', salary: '300k-500k' },
    { id: 9, title: 'QA Automation Engineer', company: 'Systems Ltd', location: 'Lahore', type: 'Full-time', salary: '90k-150k' },
    { id: 10, title: 'WordPress Developer', company: '10Pearls', location: 'Remote', type: 'Contract', salary: '80k-120k' },
    { id: 11, title: 'Java Spring Boot Developer', company: 'NetSol', location: 'Lahore', type: 'Full-time', salary: '160k-260k' },
    { id: 12, title: 'Graphic Designer', company: 'Upwork Agency', location: 'Karachi', type: 'Part-time', salary: '60k-100k' },
    { id: 13, title: 'Project Manager', company: 'IBM', location: 'Islamabad', type: 'Full-time', salary: '350k-600k' },
    { id: 14, title: 'Angular Developer', company: 'Arbisoft', location: 'Lahore', type: 'Remote', salary: '140k-240k' },
    { id: 15, title: 'Digital Marketing Expert', company: 'Jazz', location: 'Karachi', type: 'Full-time', salary: '70k-130k' }
  ]

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.company.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{padding: '20px', maxWidth: '1200px', margin: '0 auto'}}>
      <h1 style={{fontSize: '28px', fontWeight: 'bold', marginBottom: '20px'}}>
        Available Jobs ({filteredJobs.length})
      </h1>
      
      <input 
        type="text"
        placeholder="Search by title or company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: '100%', 
          padding: '12px', 
          marginBottom: '24px', 
          border: '1px solid #ddd', 
          borderRadius: '8px',
          fontSize: '16px'
        }}
      />

      <div style={{display: 'grid', gap: '16px'}}>
        {filteredJobs.map(job => (
          <div key={job.id} style={{
            border: '1px solid #e5e7eb', 
            padding: '20px', 
            borderRadius: '12px',
            background: 'white',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start'}}>
              <div>
                <h2 style={{fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px'}}>
                  {job.title}
                </h2>
                <p style={{color: '#6b7280', marginBottom: '4px'}}>
                  <strong>{job.company}</strong> • {job.location}
                </p>
                <div style={{display: 'flex', gap: '12px', marginTop: '12px'}}>
                  <span style={{background: '#dbeafe', color: '#1e40af', padding: '4px 12px', borderRadius: '16px', fontSize: '14px'}}>
                    {job.type}
                  </span>
                  <span style={{background: '#dcfce7', color: '#166534', padding: '4px 12px', borderRadius: '16px', fontSize: '14px'}}>
                    PKR {job.salary}
                  </span>
                </div>
              </div>
              <Link 
                to={`/jobs/${job.id}`} 
                style={{
                  background: '#2563eb', 
                  color: 'white', 
                  padding: '8px 16px', 
                  borderRadius: '6px', 
                  textDecoration: 'none',
                  fontSize: '14px'
                }}
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Jobs