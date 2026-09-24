import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your Dream Job in <span className="text-blue-600">Pakistan</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Connect with top companies and discover opportunities that match your skills.
          </p>
          <Link to="/jobs" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700">
            Browse Jobs →
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="text-5xl mb-4"></div>
            <h3 className="font-bold text-xl mb-3">Quick Apply</h3>
            <p className="text-gray-600">Apply to multiple jobs with one click.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="text-5xl mb-4"></div>
            <h3 className="font-bold text-xl mb-3">500+ Active Jobs</h3>
            <p className="text-gray-600">Fresh opportunities added daily.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="text-5xl mb-4"></div>
            <h3 className="font-bold text-xl mb-3">Verified Employers</h3>
            <p className="text-gray-600">All companies are manually verified.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home