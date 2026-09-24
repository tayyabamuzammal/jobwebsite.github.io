import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import ApplyForm from '../components/ApplyForm'

function JobDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const { user } = useAuth()
  const [applied, setApplied] = useState(false)
  const [showApplyForm, setShowApplyForm] = useState(false)

  const jobs = [
    { id: 1, title: 'Senior React Developer', company: 'Google', location: 'Lahore', type: 'Full-time', salary: '200k-300k', description: 'We are looking for an experienced React Developer to join our team. You will build scalable web applications using React, Redux, and modern JavaScript.', requirements: ['5+ years React experience', 'Expert in Redux/Context API', 'Strong CSS/Tailwind skills', 'Git & Agile knowledge'], posted: '2 days ago' },
    { id: 2, title: 'UI/UX Designer', company: 'Meta', location: 'Karachi', type: 'Full-time', salary: '150k-250k', description: 'Design beautiful and intuitive user interfaces for our mobile and web apps. Work closely with product and engineering teams.', requirements: ['Figma/Adobe XD expert', 'Portfolio required', '3+ years experience', 'User research skills'], posted: '1 day ago' },
    { id: 3, title: 'Backend Node.js Developer', company: 'Amazon', location: 'Islamabad', type: 'Full-time', salary: '180k-280k', description: 'Build and maintain high-performance backend APIs using Node.js, Express, and MongoDB. Experience with AWS is a plus.', requirements: ['Node.js & Express', 'MongoDB/PostgreSQL', 'REST API design', 'Docker knowledge'], posted: '3 days ago' },
    { id: 4, title: 'Flutter Mobile Developer', company: 'Careem', location: 'Lahore', type: 'Remote', salary: '120k-200k', description: 'Develop cross-platform mobile apps using Flutter. Ship features fast and maintain code quality.', requirements: ['2+ years Flutter', 'Dart language', 'Firebase integration', 'Play Store deployment'], posted: '5 days ago' },
    { id: 5, title: 'DevOps Engineer', company: 'Microsoft', location: 'Karachi', type: 'Full-time', salary: '250k-400k', description: 'Manage CI/CD pipelines, cloud infrastructure on Azure/AWS, and automate deployments.', requirements: ['AWS/Azure/GCP', 'Kubernetes & Docker', 'Terraform', 'Linux admin'], posted: '1 week ago' },
    { id: 6, title: 'Python Django Developer', company: 'Daraz', location: 'Lahore', type: 'Full-time', salary: '100k-180k', description: 'Build e-commerce backend features using Django REST Framework and PostgreSQL.', requirements: ['Django REST', 'PostgreSQL', 'Celery & Redis', '3+ years experience'], posted: '4 days ago' },
    { id: 7, title: 'Frontend Vue.js Developer', company: 'Foodpanda', location: 'Islamabad', type: 'Hybrid', salary: '130k-220k', description: 'Create responsive web apps using Vue 3, Pinia, and Tailwind CSS.', requirements: ['Vue 3 Composition API', 'Pinia/Vuex', 'TypeScript', 'Unit testing'], posted: '2 days ago' },
    { id: 8, title: 'Data Scientist', company: 'Telenor', location: 'Karachi', type: 'Full-time', salary: '300k-500k', description: 'Analyze large datasets, build ML models, and provide business insights using Python and SQL.', requirements: ['Python & Pandas', 'Machine Learning', 'SQL expert', 'Statistics background'], posted: '6 days ago' },
    { id: 9, title: 'QA Automation Engineer', company: 'Systems Ltd', location: 'Lahore', type: 'Full-time', salary: '90k-150k', description: 'Write automated tests using Selenium/Cypress. Ensure product quality across releases.', requirements: ['Selenium/Cypress', 'JavaScript/Java', 'API testing', 'JIRA'], posted: '1 day ago' },
    { id: 10, title: 'WordPress Developer', company: '10Pearls', location: 'Remote', type: 'Contract', salary: '80k-120k', description: 'Build custom WordPress themes and plugins. Optimize site speed and security.', requirements: ['PHP & WordPress', 'Custom themes', 'WooCommerce', 'Elementor'], posted: '3 days ago' },
    { id: 11, title: 'Java Spring Boot Developer', company: 'NetSol', location: 'Lahore', type: 'Full-time', salary: '160k-260k', description: 'Develop enterprise applications using Java Spring Boot, Microservices, and MySQL.', requirements: ['Java 17+', 'Spring Boot', 'Microservices', 'Hibernate/JPA'], posted: '5 days ago' },
    { id: 12, title: 'Graphic Designer', company: 'Upwork Agency', location: 'Karachi', type: 'Part-time', salary: '60k-100k', description: 'Create social media posts, logos, and branding materials for international clients.', requirements: ['Photoshop/Illustrator', 'Canva', 'Creative portfolio', 'Branding sense'], posted: '2 days ago' },
    { id: 13, title: 'Project Manager', company: 'IBM', location: 'Islamabad', type: 'Full-time', salary: '350k-600k', description: 'Lead software development teams, manage timelines, and coordinate with stakeholders.', requirements: ['PMP/Scrum certified', '5+ years PM experience', 'Agile methodology', 'Communication skills'], posted: '1 week ago' },
    { id: 14, title: 'Angular Developer', company: 'Arbisoft', location: 'Lahore', type: 'Remote', salary: '140k-240k', description: 'Build complex SPA applications using Angular, RxJS, and NgRx.', requirements: ['Angular 15+', 'RxJS & NgRx', 'TypeScript', 'Unit testing'], posted: '4 days ago' },
    { id: 15, title: 'Digital Marketing Expert', company: 'Jazz', location: 'Karachi', type: 'Full-time', salary: '70k-130k', description: 'Manage Google Ads, Facebook campaigns, and SEO for telecom products.', requirements: ['Google Ads certified', 'SEO/SEM', 'Analytics', 'Content strategy'], posted: '3 days ago' }
  ]

  const job = jobs.find(j => j.id === parseInt(id))

  useEffect(() => {
    const hasApplied = localStorage.getItem(`applied_${id}`)
    if (hasApplied) setApplied(true)

    // Login ke baad wapis aaye to form khol do
    const shouldOpenForm = localStorage.getItem('openApplyForm')
    if (user && shouldOpenForm === id) {
      setShowApplyForm(true)
      localStorage.removeItem('openApplyForm')
    }
  }, [user, id])

  const handleApplyClick = () => {
    if (!user) {
      // Login se pehle job ID save kar lo
      localStorage.setItem('openApplyForm', id)
      alert('Apply karne ke liye pehle Login ya Signup karo')
      navigate('/login')
      return
    }
    setShowApplyForm(true)
  }

  if (!job) {
    return (
      <div style={{padding: '40px', textAlign: 'center'}}>
        <h1>Job Not Found</h1>
        <button onClick={() => navigate('/jobs')} style={{background: '#2563eb', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '6px', marginTop: '16px'}}>
          Back to Jobs
        </button>
      </div>
    )
  }

  return (
    <div style={{padding: '20px', maxWidth: '900px', margin: '0 auto'}}>
      <Link to="/jobs" style={{color: '#2563eb', textDecoration: 'none', marginBottom: '20px', display: 'inline-block'}}>
        ← Back to All Jobs
      </Link>

      <div style={{background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
        <div style={{borderBottom: '1px solid #e5e7eb', paddingBottom: '20px', marginBottom: '24px'}}>
          <h1 style={{fontSize: '32px', fontWeight: 'bold', marginBottom: '12px'}}>{job.title}</h1>
          <p style={{fontSize: '18px', color: '#374151', marginBottom: '16px'}}>
            <strong>{job.company}</strong> • {job.location}
          </p>
          
          <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
            <span style={{background: '#dbeafe', color: '#1e40af', padding: '6px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: '500'}}>
              {job.type}
            </span>
            <span style={{background: '#dcfce7', color: '#166534', padding: '6px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: '500'}}>
              PKR {job.salary}
            </span>
            <span style={{background: '#fef3c7', color: '#92400e', padding: '6px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: '500'}}>
              Posted {job.posted}
            </span>
          </div>
        </div>

        <div style={{marginBottom: '32px'}}>
          <h2 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '12px'}}>Job Description</h2>
          <p style={{color: '#4b5563', lineHeight: '1.7'}}>{job.description}</p>
        </div>

        <div style={{marginBottom: '32px'}}>
          <h2 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '12px'}}>Requirements</h2>
          <ul style={{paddingLeft: '20px'}}>
            {job.requirements.map((req, index) => (
              <li key={index} style={{color: '#4b5563', marginBottom: '8px', lineHeight: '1.6'}}>
                {req}
              </li>
            ))}
          </ul>
        </div>

        <button 
          onClick={handleApplyClick}
          disabled={applied}
          style={{
            background: applied ? '#16a34a' : '#2563eb', 
            color: 'white', 
            padding: '14px 32px', 
            border: 'none', 
            borderRadius: '8px', 
            fontSize: '16px',
            fontWeight: '600',
            cursor: applied ? 'not-allowed' : 'pointer',
            width: '100%'
          }}
        >
          {applied ? '✓ Applied Successfully' : user ? 'Apply for this Job' : 'Login to Apply'}
        </button>

        {!user && (
          <p style={{textAlign: 'center', marginTop: '12px', color: '#6b7280', fontSize: '14px'}}>
            Apply karne ke liye <Link to="/login" style={{color: '#2563eb'}}>Login</Link> ya <Link to="/signup" style={{color: '#2563eb'}}>Signup</Link> karo
          </p>
        )}
      </div>

      {showApplyForm && (
        <ApplyForm 
          job={job} 
          onClose={() => setShowApplyForm(false)}
          onSubmit={() => setApplied(true)}
        />
      )}
    </div>
  )
}

export default JobDetail