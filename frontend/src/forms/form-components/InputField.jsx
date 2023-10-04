import { Form } from 'react-bootstrap'

const InputField = (props) => {
  const {
    label,
    type,
    name,
    placeholder,
    handleChange,
    errorMessage,
    isValid,
    value
  } = props
  if (type === 'checkbox')
    return (
      <Form.Group controlId={name} className='my-3'>
        <Form.Check
          inline
          label={label}
          name={name}
          type={type}
          value={value}
          checked={value === true}
          onChange={handleChange}
        />
      </Form.Group>
    )
  return (
    <Form.Group controlId={name} className='my-3'>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      ></Form.Control>
      {errorMessage && !isValid && (
        <Form.Text className='text-danger'>{errorMessage}</Form.Text>
      )}
    </Form.Group>
  )
}
export default InputField
