import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import FormContainer from '../../components/FormContainer'
import { formTestForm } from '../../forms/form-objects/formTestForm'
import useForm from '../../forms/form-hooks/useForm'

const FormTestScreen = () => {
  const testForm = useForm(formTestForm)
  const {
    renderFormInputs,
    isFormValid,
    getFormValues,
    setInitialState
    //changesMade
  } = testForm

  console.log(testForm)

  useEffect(() => {
    setInitialState({
      name: 'Sara',
      email: 'sara@gmail.com',
      age: 25,
      role: true,
      inlineRole: true,
      inlineSexy: true,
      party: 'Republican',
      inlineParty: 'Independent',
      gender: 'Female',
      inlineGender: 'Nonbinary',
      lights: true,
      color: '#ffffff'
    })
  }, [setInitialState])

  /*   useEffect(() => {
    if (user) {
      setInitialState({
        name: user.name,
        email: user.email,
        role: user.isAdmin
      })
    }
  }, [setInitialState, user]) */

  const submitHandler = async (e) => {
    e.preventDefault()
    console.log(getFormValues())
  }

  return (
    <>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Form Test</h1>

        <Form onSubmit={submitHandler}>
          {renderFormInputs()}
          <Button
            type='submit'
            variant='primary'
            disabled={
              !isFormValid
              /* !changesMade(
                  {
                    name: user.name,
                    email: user.email,
                    role: user.isAdmin
                  },
                  getFormValues()
                ) */
            }
          >
            Update
          </Button>
        </Form>
      </FormContainer>
    </>
  )
}
export default FormTestScreen
