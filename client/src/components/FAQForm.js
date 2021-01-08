import React, { useState } from 'react'

const FAQForm = (props) => {

  const [questionRecord, setQuestionRecord] = useState({question: "", answer: ""})

  const handleChange = event => {
    setQuestionRecord({
      ...questionRecord,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.addQuestion(questionRecord)
    setQuestionRecord({question: "", answer: ""})
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="question">Question:</label>
        <input
          id="question"
          name="question"
          value={questionRecord.question}
          onChange={handleChange}>
        </input>

        <label htmlFor="answer">Answer:</label>
        <input
          id="answer"
          name="answer"
          value={questionRecord.answer}
          onChange={handleChange}>
        </input>

        <input type="submit" value="Submit"></input>
    </form>
  )
}

export default FAQForm
