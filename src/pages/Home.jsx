import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-100">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Side */}
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Pakistan's Growing Job Platform
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Find Your
                <span className="text-blue-600"> Dream Job</span>
                <br />
                in Pakistan
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                Discover thousands of job opportunities from trusted companies
                and take the next step toward your career.
              </p>

              {/* Search Box */}
              <div className="bg-white p-3 rounded-2xl shadow-lg flex flex-col md:flex-row gap-3 mb-6">

                <div className="flex-1 border border-gray-200 rounded-xl px-4 py-3">
                  <p className="text-xs text-gray-500 mb-1">
                    What are you looking for?
                  </p>
                  <p className="font-medium text-gray-700">
                    Job title, skills or keyword
                  </p>
                </div>

                <div className="flex-1 border border-gray-200 rounded-xl px-4 py-3">
                  <p className="text-xs text-gray-500 mb-1">
                    Location
                  </p>
                  <p className="font-medium text-gray-700">
                    City or Province
                  </p>
                </div>

                <Link
                  to="/jobs"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-xl font-semibold flex items-center justify-center"
                >
                  Search Jobs
                </Link>

              </div>

              <p className="text-sm text-gray-500">
                Popular searches: Software Engineer • Teacher • Accountant •
                Designer
              </p>
            </div>

            {/* Right Side */}
            <div className="hidden md:block">
              <div className="bg-white rounded-3xl shadow-xl p-8">

                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-gray-500 text-sm">
                      Available Opportunities
                    </p>
                    <h2 className="text-4xl font-bold text-blue-600">
                      500+
                    </h2>
                  </div>

                  <div className="bg-blue-100 text-blue-600 px-4 py-3 rounded-xl font-bold">
                    Jobs
                  </div>
                </div>

                <div className="space-y-4">

                  <div className="border border-gray-100 rounded-xl p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-bold">Frontend Developer</h3>
                      <p className="text-sm text-gray-500">
                        Technology Company
                      </p>
                    </div>
                    <span className="text-blue-600 font-semibold">
                      Apply
                    </span>
                  </div>

                  <div className="border border-gray-100 rounded-xl p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-bold">UI/UX Designer</h3>
                      <p className="text-sm text-gray-500">
                        Creative Studio
                      </p>
                    </div>
                    <span className="text-blue-600 font-semibold">
                      Apply
                    </span>
                  </div>

                  <div className="border border-gray-100 rounded-xl p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-bold">Marketing Manager</h3>
                      <p className="text-sm text-gray-500">
                        Business Company
                      </p>
                    </div>
                    <span className="text-blue-600 font-semibold">
                      Apply
                    </span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h2 className="text-3xl font-bold text-blue-600">500+</h2>
              <p className="text-gray-500 mt-2">Active Jobs</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">200+</h2>
              <p className="text-gray-500 mt-2">Companies</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">10K+</h2>
              <p className="text-gray-500 mt-2">Job Seekers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">50+</h2>
              <p className="text-gray-500 mt-2">Cities</p>
            </div>

          </div>

        </div>
      </section>


      {/* Job Categories */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-2">
            EXPLORE OPPORTUNITIES
          </p>

          <h2 className="text-4xl font-bold mb-4">
            Popular Job Categories
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore jobs from different industries and find an opportunity
            that matches your skills.
          </p>
        </div>


        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          <Link
            to="/jobs"
            className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 transition"
          >
            <div className="text-4xl mb-4"></div>
            <h3 className="text-xl font-bold mb-2">
              Technology
            </h3>
            <p className="text-gray-500">
              Software, Web Development, IT and more
            </p>
            <p className="text-blue-600 font-semibold mt-4">
              Explore Jobs →
            </p>
          </Link>


          <Link
            to="/jobs"
            className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 transition"
          >
            <div className="text-4xl mb-4"></div>
            <h3 className="text-xl font-bold mb-2">
              Design
            </h3>
            <p className="text-gray-500">
              UI/UX, Graphic Design and Creative jobs
            </p>
            <p className="text-blue-600 font-semibold mt-4">
              Explore Jobs →
            </p>
          </Link>


          <Link
            to="/jobs"
            className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 transition"
          >
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-2">
              Business
            </h3>
            <p className="text-gray-500">
              Management, Sales and Marketing
            </p>
            <p className="text-blue-600 font-semibold mt-4">
              Explore Jobs →
            </p>
          </Link>


          <Link
            to="/jobs"
            className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 transition"
          >
            <div className="text-4xl mb-4"></div>
            <h3 className="text-xl font-bold mb-2">
              Healthcare
            </h3>
            <p className="text-gray-500">
              Medical, Nursing and Healthcare jobs
            </p>
            <p className="text-blue-600 font-semibold mt-4">
              Explore Jobs →
            </p>
          </Link>


          <Link
            to="/jobs"
            className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 transition"
          >
            <div className="text-4xl mb-4"></div>
            <h3 className="text-xl font-bold mb-2">
              Education
            </h3>
            <p className="text-gray-500">
              Teaching, Training and Academic jobs
            </p>
            <p className="text-blue-600 font-semibold mt-4">
              Explore Jobs →
            </p>
          </Link>


          <Link
            to="/jobs"
            className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 transition"
          >
            <div className="text-4xl mb-4"></div>
            <h3 className="text-xl font-bold mb-2">
              Finance
            </h3>
            <p className="text-gray-500">
              Banking, Accounting and Finance
            </p>
            <p className="text-blue-600 font-semibold mt-4">
              Explore Jobs →
            </p>
          </Link>

        </div>

      </section>


      {/* Why Choose Us */}
      <section className="bg-blue-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <p className="text-blue-600 font-semibold mb-2">
              WHY CHOOSE US
            </p>

            <h2 className="text-4xl font-bold mb-4">
              Everything You Need to Find a Job
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              We make job searching simple, fast and convenient for
              everyone.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-5">
                
              </div>

              <h3 className="text-xl font-bold mb-3">
                Verified Employers
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Discover opportunities from companies and employers
                that are carefully reviewed.
              </p>
            </div>


            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-5">
                
              </div>

              <h3 className="text-xl font-bold mb-3">
                Quick Applications
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Find suitable jobs quickly and apply without wasting
                unnecessary time.
              </p>
            </div>


            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-5">
                
              </div>

              <h3 className="text-xl font-bold mb-3">
                Easy Job Search
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Search jobs by category, skills, location and other
                requirements.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* Companies Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-12">

          <p className="text-blue-600 font-semibold mb-2">
            TOP EMPLOYERS
          </p>

          <h2 className="text-4xl font-bold mb-4">
            Companies Hiring Now
          </h2>

          <p className="text-gray-600">
            Explore opportunities from different industries.
          </p>

        </div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-3">
              TECH
            </div>
            <p className="text-gray-500">Technology</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm">
            <div className="text-3xl font-bold text-indigo-600 mb-3">
              PRO
            </div>
            <p className="text-gray-500">Professional Services</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-3">
              CARE
            </div>
            <p className="text-gray-500">Healthcare</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm">
            <div className="text-3xl font-bold text-indigo-600 mb-3">
              EDU
            </div>
            <p className="text-gray-500">Education</p>
          </div>

        </div>

      </section>


      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl px-8 py-16 text-center text-white">

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Ready to Find Your Next Opportunity?
          </h2>

          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Browse available jobs and discover the career opportunity
            that is right for you.
          </p>

          <Link
            to="/jobs"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
          >
            Browse All Jobs →
          </Link>

        </div>

      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white">

        <div className="max-w-7xl mx-auto px-6 py-12">

          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Job<span className="text-blue-400">Portal</span>
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Helping job seekers discover opportunities and connect
                with companies across Pakistan.
              </p>
            </div>


            <div>
              <h3 className="font-bold text-lg mb-4">
                Quick Links
              </h3>

              <div className="space-y-3 text-gray-400">
                <Link to="/" className="block hover:text-white">
                  Home
                </Link>

                <Link to="/jobs" className="block hover:text-white">
                  Browse Jobs
                </Link>

                <Link to="/about" className="block hover:text-white">
                  About Us
                </Link>
              </div>
            </div>


            <div>
              <h3 className="font-bold text-lg mb-4">
                For Job Seekers
              </h3>

              <p className="text-gray-400 mb-3">
                Find jobs that match your skills and career goals.
              </p>

              <Link
                to="/jobs"
                className="text-blue-400 font-semibold hover:text-blue-300"
              >
                Start Searching →
              </Link>
            </div>

          </div>


          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
            2026 JobPortal. All rights reserved.
          </div>

        </div>

      </footer>

    </div>
  )
}

export default Home
