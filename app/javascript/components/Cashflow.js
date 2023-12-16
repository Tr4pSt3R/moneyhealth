import React, {useState} from "react"
import PropTypes from "prop-types"
import {Button, Card, FormControl, FormLabel, Typography} from "@mui/joy";

const Cashflow = ({ type, handleAddNewCashflow }) => {
  const [cashflowDetails, setCashflow] = useState({ title: '', amount: 0})
  const [responseDetails, setResponseDetails] = useState( { notification: '', errors: []})

  const handleTitleChange = (event) => {
    event.preventDefault()

    setCashflow({...cashflowDetails, title: event.target.value})
  }

  const handleAmountChange = (event) => {
    event.preventDefault()

    setCashflow({...cashflowDetails, amount: event.target.value})
  }

  const details = () => {
    let body_details;

    switch (type) {
      case 'Income':
        body_details = { income: cashflowDetails };
        break;
      case 'Expenditure':
        body_details = { expenditure: cashflowDetails };
        break;
    }
    return body_details
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin',
    body: JSON.stringify(details())
  }

  const requestUrl = () => {
    return _.lowerCase('/' + type)
  }

  const handleCashflowSubmission = (event) => {
    event.preventDefault()

    fetch(requestUrl(), options)
      .then(response => response.json())
      .then(data => {
        setResponseDetails(data)
        handleAddNewCashflow()
        setCashflow({ title: '', amount: 0 })
      })
      .catch(error => console.error(error))
  }

  return (
    <>
      { responseDetails.notification }
      <form>
        <Card variant="outlined"
              sx={{
                maxHeight: 'max-content',
                maxWidth: '60%',
                mx: 'auto',
                overflow: 'auto',
                resize: 'horizontal',
              }}
        >
          <Typography level="title-lg">
            Add {type}
          </Typography>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <input
              name='title'
              placeholder='Salary, Mortgage, etc.'
              value={cashflowDetails.title}
              onChange={event => handleTitleChange(event)}
              data-cy={`${_.lowerCase(type)}-title`}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Amount</FormLabel>
            <input
              name='amount'
              value={cashflowDetails.amount}
              onChange={event => handleAmountChange(event)}
              data-cy={`${_.lowerCase(type)}-amount`}
            />
          </FormControl>
          <FormControl>
            <Button sx={{ mt: 1 }}
                    type="submit"
                    value="Submit"
                    onClick={event => handleCashflowSubmission(event)}
                    data-cy={`submit-${_.lowerCase(type)}`}>
              Submit {type}
            </Button>
          </FormControl>
        </Card>
      </form>
    </>
  )
}

Cashflow.propTypes = {
  type: PropTypes.string,
  handleAddNewCashflow: PropTypes.func
}

export default Cashflow
