import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      try {
        setUser(JSON.parse(storedUser)); 
        setIsAuthenticated(true); 
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  const isAuthor = (tripAuthorId) => {
    return user?._id?.toString() === tripAuthorId?.toString();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser, isAuthor }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
