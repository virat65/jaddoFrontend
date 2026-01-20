import axios from "axios";


const Signup = () => {


  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
      <div className="row w-100">
        <div className="col-12 col-sm-10 col-md-6 col-lg-4 mx-auto">
          <div className="card signupcard p-4 shadow d-flex flex-column">
            <h2 className="text-center mb-1">Signup</h2>
            <form  className="signupform mt-1">
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input

                  type="text"
                  className="form-control"
                  name="name"

                  placeholder="Enter your Name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input

                  type="email"
                  className="form-control"
                  name="email"

                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label me-2">ID Type</label>
                <div>
                  <input

                    type="radio"
                    name="userType"
                    value="user"

                    className="radioOption me-1"
                  />
                  <label className="me-3">User</label>

                  <input

                    type="radio"
                    name="userType"
                    value="Admin"

                    className="radioOption me-1"
                  />
                  <label>Admin</label>
                </div>
              </div>


              <div className="mb-3">
                <label className="form-label">Password</label>
                <input  type="password"
                  className="form-control"
                  name="password"
              
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btnclass w-100">
                Sign Up
              </button>
            </form>
            <p className="text-center mt-3">
              Already have an account? <a href="/login">Login</a>
            </p>{" "}
            <p className="text-center mt-3">
              Back to Home <a href="/">Home</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
