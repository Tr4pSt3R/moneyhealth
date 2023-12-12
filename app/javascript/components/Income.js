import React, {useState} from "react"
import {Button, Card, FormControl, FormLabel, Typography} from "@mui/joy";
import {InfoOutlined} from "@mui/icons-material";
import cashflow from "./Cashflow";

const Income = () => {
  const [incomeDetails, setIncome] = useState({ title: '', amount: 0})
  const [responseDetails, setResponseDetails] = useState( { notification: '', errors: []})

  const handleTitleChange = (event) => {
    event.preventDefault()

    setIncome({...incomeDetails, title: event.target.value})
  }

  const handleAmountChange = (event) => {
    event.preventDefault()

    setIncome({...incomeDetails, amount: event.target.value})
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin',
    body: JSON.stringify({ income: incomeDetails })
  }

  const handleIncomeSubmission = (event) => {
    event.preventDefault()

    fetch('/income', options)
      .then(response => response.json())
      .then(data => setResponseDetails(data))
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
            Add income
          </Typography>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <input
              name='title'
              placeholder='Salary'
              value={incomeDetails.title}
              onChange={event => handleTitleChange(event)}
              data-cy='income-title'
            />
          </FormControl>
          <FormControl>
            <FormLabel>Amount</FormLabel>
            <input
              name='amount'
              value={incomeDetails.amount}
              onChange={event => handleAmountChange(event)}
              data-cy='income-amount'
            />
          </FormControl>
          <FormControl>
            <Button sx={{ mt: 1 }}
                    type="submit"
                    value="Submit"
                    onClick={event => handleIncomeSubmission(event)}
                    data-cy='submit-income'>
              Submit income
            </Button>
          </FormControl>
        </Card>
      </form>
    </>
  )
}

export default Income
