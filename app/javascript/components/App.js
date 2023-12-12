import React, {createContext, useState} from "react"
import Authenticate from "./Authenticate";
import PropTypes from "prop-types";
import Dashboard from "./Dashboard";

const AuthContext = createContext({customerSignedIn: false })

const App = (props) => {
  const [customerSignedIn, setCustomerSignedIn] = useState(false)
  return (
    <AuthContext.Provider value={customerSignedIn}>
      {
        props.customer_signed_in ?
          <Dashboard current_customer={props.current_customer}/> :
          <Authenticate csrfToken={props.csrfToken}/>
      }
    </AuthContext.Provider>
  )
}

App.propTypes = {
  customer_signed_in: PropTypes.bool,
  current_customer: PropTypes.object
}

export default App
