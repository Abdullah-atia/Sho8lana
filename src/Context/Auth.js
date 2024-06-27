import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("autoToken");
    if (savedToken) {
      setToken(savedToken);
    }
  }, [setToken]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

// Export AuthProvider as the default export
export default AuthProvider;

// Also export AuthContext for direct usage
export { AuthContext };
