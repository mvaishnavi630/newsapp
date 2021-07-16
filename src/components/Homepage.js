import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from "../features/userSlice";
import Button from '@material-ui/core/Button';
import "../styling/home.css";

const Homepage = () => {
  const isSignedIn = useSelector(selectSignedIn);

  const dispatch = useDispatch();
  const login = (response) => {
    // console.log(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };

  return (
    <div className="home__page" style={{ display: isSignedIn ? "none" : "" }}>
      {!isSignedIn && (
        <div className="login__message">
          <h2>News App</h2>
         
          <p>
            Website provides high quality online resource for reading news and articles. Just sign
            up and start reading some quality blogs.
          </p>
          <GoogleLogin
            clientId="617126449684-2ujtp3osf86ledjs8ql6shvtgl9oel0e.apps.googleusercontent.com"
            render={(renderProps) => (

             <Button  onClick={renderProps.onClick}
             style={{margin: '0 auto', display: "flex"}}
                disabled={renderProps.disabled}
                className="login__button" 
                variant="contained" color="primary">
          Login with Google
                  </Button>

              // <button
              //   onClick={renderProps.onClick}
              //   disabled={renderProps.disabled}
              //   className="login__button"
              // >
              //   Login with Google
              // </button>
            )}
            onSuccess={login}
            onFailure={login}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      )}
    </div>
  );
};

export default Homepage;















// import React from "react";
// import GoogleLogin from "react-google-login";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   selectSignedIn,
//   setSignedIn,
//   setUserData,
// } from "../features/userSlice";
// // import {
// //   selectSignedIn,
// //   setSignedIn,
// //   setUserData,
// // } from "../features/userSlice";

// import "../styling/home.css";
// const Homepage = () => {

// const login=(response)=>{ console.log(response); };
// const isSignedIn = useSelector(selectSignedIn);


//     return (
//         <div className="home__page"  style={{ display: isSignedIn ? "none" : "" }}>
//       {!isSignedIn ? (
//         <div className="login__message">
//            <h2>📗</h2>
//           <h1>A Readers favourite place!</h1>
//           <p>
//             We provide high quality online resource for reading blogs. Just sign
//             up and start reading some quality blogs.
//           </p>
//           <GoogleLogin  
//             clientId="617126449684-2ujtp3osf86ledjs8ql6shvtgl9oel0e.apps.googleusercontent.com"
//             render={(renderProps) => (
//               <button
//                 onClick={renderProps.onClick}
//                 disabled={renderProps.disabled}
//                 className="login__button"
//               >
//                 Login with Google
//               </button>
//             )}
//             onSuccess={login}
//             onFailure={login}
//             isSignedIn={true}
//             cookiePolicy={"single_host_origin"}
//           />
//         </div>
//        ) : (
//         ""
//       )} 
//     </div>
//     )
// }

// export default Homepage;


