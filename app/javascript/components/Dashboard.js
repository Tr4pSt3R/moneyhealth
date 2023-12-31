import React, {createContext, useContext, useEffect, useState} from "react"
import PropTypes from "prop-types"
import Statement from "./Statement";
import {CssVarsProvider, Sheet, Grid, styled, Typography, Box, Button, Divider} from '@mui/joy'
import Cashflow from "./Cashflow";
import {AuthContext} from "./App";

const Dashboard = (props) => {
  const { toggleSignIn } = useContext(AuthContext)
  const [statement, setStatement] = useState({ incomes: [], expenditures: []})

  const handleSignOut = () => { signOut() }
  const handleAddNewCashflow = () => { getStatements() }

  useEffect(() => { getStatements() }, [])

  const getStatements = () => {
    fetch('/statement')
      .then((response) => response.json())
      .then((data) => {
        setStatement(data)
      })
  }

  const signOut = () => {
    fetch('/customers/sign_out', options)
      .then(_=> toggleSignIn(false))
      .catch(error => console.error(error))
  }

  const options = {
    method: 'DELETE',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'X-CSRF-Token': props.csrfToken,
    },
    credentials: 'same-origin',
  }

  return (
    <CssVarsProvider>
      <main>
        <Sheet
          sx={{
            width: '80%',
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
          <Typography level='h2' component='h2'>
            Welcome
          </Typography>
          <Button sx={{ mt: 1 }}
                  variant='plain'
                  onClick={(event) => handleSignOut(event)}
                  data-cy='auth-sign--out'
          >
            Sign out
          </Button>
          <Grid container spacing={2} columns={16} sx={{ flexGrow: 1 }}>
            <Grid xs={8}>
              <Cashflow type='Income' handleAddNewCashflow={handleAddNewCashflow} />
            </Grid>
            <Grid xs={8}>
              <Cashflow type='Expenditure' handleAddNewCashflow={handleAddNewCashflow} />
            </Grid>
          </Grid>
          <Divider/>
          <Statement statement={statement} />
        </Sheet>
      </main>
    </CssVarsProvider>
  )
}

Dashboard.propTypes = {
  csrfToken: PropTypes.string.isRequired
}

export default Dashboard
