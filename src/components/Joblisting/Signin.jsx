import img1 from "../../assets/Images/google.png"


export default function signin(){
    return(
        <>
        <div className="flex justify-center items-center h-screen ">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-serif text-center mb-4">Hi, Welcome Back!</h2>
        <p className="text-center text-gray-500 mb-6">
          Still do not have an account? <a href="#" className="text-green-600">Sign up</a>
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-thin mb-2" htmlFor="email">
              Email*
            </label>
            <input
              type="email"
              id="email"
              placeholder="james@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-thin mb-2" htmlFor="password">
              Password*
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <span className="absolute inset-y-0 right-3 flex items-center">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-green-600" />
              <span className="ml-2 text-sm text-gray-700">Keep me logged in</span>
            </label>
            <a href="#" className="text-sm text-green-600">Forget Password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            LOGIN
          </button>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="flex justify-center space-x-4">
            <button
              type="button"
              className="w-full py-2 px-4 border border-gray-300 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-100"
            >
              <img src={img1} alt="Google" className="w-5 h-5" />
              <span>Login with Google</span>
            </button>
            <button
              type="button"
              className="w-full py-2 px-4 border border-gray-300 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-100"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-5 h-5" />
              <span>Login with Facebook</span>
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 mt-6">
          Do not have an account? <a href="#" className="text-green-600">Sign up</a>
        </p>
      </div>
    </div>
        </>
    )
}