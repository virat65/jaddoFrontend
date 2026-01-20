import React from "react";

const Login = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100   mt-4">
      <div className="col-12 col-sm-10 col-md-6 col-lg-4">
        <div className="login-card p-4 shadow rounded">
          <h2 className="text-center mt-4">Login</h2>

          <form o className="login-form w-100">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email or Phone Number
              </label>
              <input
                type="text"
                name="email"
                className="form-control d-block"
                placeholder="Enter email or phone number"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control  d-block"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 login-button"
            >
              Login
            </button>
          </form>

          <p className="text-center mt-3">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
          <p className="text-center mt-3">
            Back to Home <a href="/">Home</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
