  import React, { useCallback, useContext } from "react";
  import { withRouter, Redirect } from "react-router";
  import app from "./base.js";
  import { AuthContext } from "./Auth.js";
  import "./styles/login.css";

  const Login = ({ history }) => {
    const handleLogin = useCallback(
      async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
          history.push("/");
        } catch (error) {
          alert(error);
        }
      },
      [history]
      );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
      return <Redirect to="/" />;
    }

    return (
      <div>

        <form onSubmit={handleLogin} >





          <div className="wrapper fadeInDown p-5 m-5">
            <div id="formContent" className="pt-4">


              <div className="">
                <h3 className="">Smart Inventory Management</h3>  
              </div>            

              <input type="text" id="login" className="fadeIn second" name="email" placeholder="email" />
              <input type="password" id="password" className="fadeIn third" name="password" placeholder="password" />
              <input type="submit" className="fadeIn fourth" value="Log In" />


            </div>
          </div>





        </form>
        </div>
        );
  };

  export default withRouter(Login);
