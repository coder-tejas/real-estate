
import "../../styles/LoginPage.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="logo">RENTIFUL</h1>
        <p className="welcome-text">Welcome! Please sign in to continue</p>
        
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              className="form-input"
            />
          </div>
          
          <button type="submit" className="signin-button">Sign in</button>
        </form>
        
        <p className="signup-text">
          Don't have account    <br />
          <a href="/auth/signup" className="signup-link">Sign up here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;