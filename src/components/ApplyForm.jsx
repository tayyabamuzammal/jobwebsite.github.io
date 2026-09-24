import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

function ApplyForm({ job, onClose, onSubmit }) {
  const { user } = useAuth()
  const [formData, setFormData] = useState({
    fullName: user?.displayName || '',
    email: user?.email || '',
    phone: '',
    experience: '',
    currentCompany: '',
    expectedSalary: '',
    coverLetter: '',
    cvFile: null
  })
  const [cvPreview, setCvPreview] = useState(null)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData({...formData, cvFile: file})

      // Agar image hai to preview dikhao
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onloadend = () => {
          setCvPreview(reader.result)
        }
        reader.readAsDataURL(file)
      } else {
        setCvPreview(null)
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.cvFile) {
      alert('CV upload karna zaroori hai')
      return
    }

    // Dummy submit - LocalStorage me save kar do
    const application = {
     ...formData,
      jobId: job.id,
      jobTitle: job.title,
      company: job.company,
      appliedAt: new Date().toISOString(),
      cvFileName: formData.cvFile.name
    }

    const applications = JSON.parse(localStorage.getItem('applications') || '[]')
    applications.push(application)
    localStorage.setItem('applications', JSON.stringify(applications))
    localStorage.setItem(`applied_${job.id}`, 'true')

    alert('Application Successfully Submitted!')
    onSubmit()
    onClose()
  }

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center',
      justifyContent: 'center', zIndex: 1000, padding: '20px'
    }}>
      <div style={{
        background: 'white', borderRadius: '12px', padding: '24px',
        maxWidth: '600px', width: '100%', maxHeight: '90vh', overflowY: 'auto'
      }}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
          <h2 style={{fontSize: '24px', fontWeight: 'bold'}}>Apply for {job.title}</h2>
          <button onClick={onClose} style={{background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer'}}>×</button>
        </div>

        <p style={{color: '#6b7280', marginBottom: '20px'}}>{job.company} • {job.location}</p>

        <form onSubmit={handleSubmit}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px'}}>
            <div>
              <label style={{display: 'block', marginBottom: '6px', fontWeight: '500'}}>Full Name *</label>
              <input
                type="text" name="fullName" value={formData.fullName} onChange={handleChange}
                required style={{width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px'}}
              />
            </div>
            <div>
              <label style={{display: 'block', marginBottom: '6px', fontWeight: '500'}}>Email *</label>
              <input
                type="email" name="email" value={formData.email} onChange={handleChange}
                required style={{width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px'}}
              />
            </div>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px'}}>
            <div>
              <label style={{display: 'block', marginBottom: '6px', fontWeight: '500'}}>Phone *</label>
              <input
                type="tel" name="phone" value={formData.phone} onChange={handleChange}
                placeholder="03XX-XXXXXXX" required
                style={{width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px'}}
              />
            </div>
            <div>
              <label style={{display: 'block', marginBottom: '6px', fontWeight: '500'}}>Experience *</label>
              <select
                name="experience" value={formData.experience} onChange={handleChange}
                required style={{width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px'}}
              >
                <option value="">Select</option>
                <option value="0-1 years">0-1 years</option>
                <option value="1-3 years">1-3 years</option>
                <option value="3-5 years">3-5 years</option>
                <option value="5+ years">5+ years</option>
              </select>
            </div>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px'}}>
            <div>
              <label style={{display: 'block', marginBottom: '6px', fontWeight: '500'}}>Current Company</label>
              <input
                type="text" name="currentCompany" value={formData.currentCompany} onChange={handleChange}
                placeholder="Optional"
                style={{width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px'}}
              />
            </div>
            <div>
              <label style={{display: 'block', marginBottom: '6px', fontWeight: '500'}}>Expected Salary</label>
              <input
                type="text" name="expectedSalary" value={formData.expectedSalary} onChange={handleChange}
                placeholder="e.g. 150k"
                style={{width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px'}}
              />
            </div>
          </div>

          <div style={{marginBottom: '16px'}}>
            <label style={{display: 'block', marginBottom: '6px', fontWeight: '500'}}>Cover Letter *</label>
            <textarea
              name="coverLetter" value={formData.coverLetter} onChange={handleChange}
              rows="4" placeholder="Why are you a good fit for this role?" required
              style={{width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', resize: 'vertical'}}
            />
          </div>

          <div style={{marginBottom: '20px'}}>
            <label style={{display: 'block', marginBottom: '6px', fontWeight: '500'}}>Upload CV/Resume *</label>
            <input
              type="file" accept=".pdf,.doc,.docx,image/*" onChange={handleFileChange}
              required style={{width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px'}}
            />
            <p style={{fontSize: '12px', color: '#6b7280', marginTop: '4px'}}>
              PDF, DOC, DOCX or Image files. Max 5MB
            </p>

            {cvPreview && (
              <div style={{marginTop: '12px'}}>
                <p style={{fontSize: '14px', fontWeight: '500', marginBottom: '8px'}}>Preview:</p>
                <img src={cvPreview} alt="CV Preview" style={{maxWidth: '200px', maxHeight: '200px', border: '1px solid #e5e7eb', borderRadius: '6px'}} />
              </div>
            )}

            {formData.cvFile &&!cvPreview && (
              <p style={{marginTop: '8px', color: '#16a34a', fontSize: '14px'}}>
                ✓ {formData.cvFile.name} selected
              </p>
            )}
          </div>

          <div style={{display: 'flex', gap: '12px'}}>
            <button
              type="button" onClick={onClose}
              style={{flex: 1, padding: '12px', border: '1px solid #d1d5db', borderRadius: '6px', background: 'white', cursor: 'pointer'}}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{flex: 1, padding: '12px', border: 'none', borderRadius: '6px', background: '#2563eb', color: 'white', fontWeight: '600', cursor: 'pointer'}}
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ApplyForm