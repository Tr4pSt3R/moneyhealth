import React, {useContext, useState} from "react"
import PropTypes from "prop-types"
import { CssVarsProvider } from '@mui/joy/styles'
import Sheet from '@mui/joy/Sheet'
import {Button, FormControl, FormLabel, Typography} from "@mui/joy";
import {AuthContext} from "./App";


const Authenticate = (props) => {
  const { toggleSignIn } = useContext(AuthContext)

  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [loginResponse, setLoginResponse] = useState({ statusText: '' })

  const handleEmailChange = (event) => {
    event.preventDefault()

    setCredentials({ ...credentials, email: event.target.value })
  }

  const handlePasswordChange = (event) => {
    event.preventDefault()

    setCredentials({ ...credentials, password: event.target.value })
  }

  const options = {
    method: 'POST',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'X-CSRF-Token': props.csrfToken,
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin',
    body: JSON.stringify({ customer: credentials })
  }

  const handleSubmission = (event) => {
    event.preventDefault()

    fetch('/customers/sign_in', options)
      .then(response => {
        setLoginResponse({ statusText: response['statusText'] })
        _.isEqual(response['status'], 401) ? toggleSignIn(false) : toggleSignIn(true)
      })
      .catch(error => console.error(error))
  }

  return (
    <CssVarsProvider>
      <main>
        <Sheet
          md={{
            width: 300,
            mx: 'auto',
            my: 4,
            py: 3,
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
        >
          <div>
            <Typography level="h1" component="h1">
              Money Health Dashboard
            </Typography>
          </div>

          <Typography level="body-sm">Get started by signing in.</Typography>

          <div>
            { loginResponse.statusText && <div data-cy='auth-notification'>{loginResponse.statusText}</div>}
          </div>

          <form>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <input value={credentials.email}
                     name='email'
                     type='email'
                     onChange={ event => handleEmailChange(event) }
                     data-cy='customer-email'
              />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <input value={credentials.password}
                     name='password'
                     type='password'
                     onChange={ event => handlePasswordChange(event) }
                     data-cy='customer-password'
              />
            </FormControl>

            <FormControl>
              <Button sx={{ mt: 1 }}
                      type='submit'
                      value='Submit'
                      onClick={ event => handleSubmission(event) }
                      data-cy='submit-credentials'>
                Log in
              </Button>
            </FormControl>
          </form>
        </Sheet>
      </main>
    </CssVarsProvider>
  )
}

Authenticate.propTypes = {
  onSignIn: PropTypes.func,
  csrfToken: PropTypes.string,
  csrfParam: PropTypes.string
}

export default Authenticate
