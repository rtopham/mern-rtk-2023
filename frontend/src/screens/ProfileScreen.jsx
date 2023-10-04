import { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Loader from '../components/Loader'
import { useProfileMutation } from '../slices/usersApiSlice'
import { setCredentials } from '../slices/authSlice'
import { updateProfileForm } from '../forms/form-objects/updateProfileForm'
import useForm from '../forms/form-hooks/useForm'
import FormContainer from '../components/FormContainer'

const ProfileScreen = () => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.auth)

  const {
    renderFormInputs,
    isFormValid,
    getFormValues,
    setInitialState,
    changesMade
  } = useForm(updateProfileForm)

  useEffect(() => {
    setInitialState({
      name: userInfo.name,
      email: userInfo.email,
      password: '',
      confirmPassword: ''
    })
  }, [setInitialState, userInfo])

  const [updateProfile, { isLoading: loadingUpdateProfile }] =
    useProfileMutation()

  const submitHandler = async (e) => {
    e.preventDefault()
    const { name, email, password, confirmPassword } = getFormValues()
    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password
        }).unwrap()
        dispatch(setCredentials({ ...res }))
        toast.success('Profile updated successfully')
      } catch (err) {
        toast.error(err?.data?.message || err?.error)
      }
    }
  }

  return (
    <FormContainer>
      <h2>User Profile</h2>

      <Form onSubmit={submitHandler}>
        {renderFormInputs()}

        <Button
          type='submit'
          disabled={
            loadingUpdateProfile ||
            !isFormValid ||
            !changesMade(
              {
                name: userInfo.name,
                email: userInfo.email,
                password: '',
                confirmPassword: ''
              },
              getFormValues()
            )
          }
          variant='primary'
        >
          Update
        </Button>
        {loadingUpdateProfile && <Loader />}
      </Form>
    </FormContainer>
  )
}
export default ProfileScreen
