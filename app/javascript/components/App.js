import React, {createContext, useState} from "react"
import Authenticate from "./Authenticate";
import PropTypes from "prop-types";
import Dashboard from "./Dashboard";

export const AuthContext = createContext({ signedIn: false, toggleSignIn: () => {}})

const App = (props) => {
  const [signedIn, setSignedIn] = useState(props.customer_signed_in)

  const toggleSignIn = (value) => {
    setSignedIn(value)
  }

  return (
    <AuthContext.Provider value={{ signedIn, toggleSignIn }}>
      {
        signedIn ?
          <Dashboard current_customer={props.current_customer} csrfToken={props.csrfToken}/> :
          <Authenticate csrfToken={props.csrfToken} />
      }
    </AuthContext.Provider>
  )
}

App.propTypes = {
  customer_signed_in: PropTypes.bool,
  current_customer: PropTypes.object
}

export default App
