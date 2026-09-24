import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Page refresh pe user check karo
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  // Dummy Signup
  const signup = async (email, password, name) => {
    const newUser = {
      uid: Date.now().toString(),
      email: email,
      displayName: name
    }
    localStorage.setItem('user', JSON.stringify(newUser))
    setUser(newUser)
    return newUser
  }

  // Dummy Login
  const login = async (email, password) => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser)
      if (parsedUser.email === email) {
        setUser(parsedUser)
        return parsedUser
      }
    }
    throw new Error('you have not already account click sign up')
  }

  // Logout
  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  const value = {
    user,
    signup,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}