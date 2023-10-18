import InputField from '../form-components/InputField'

export const createFormFieldConfig = (field) => {
  const { label, placeholder, defaultValue = '' } = field

  return {
    renderInput: (handleChange, value, isValid, error, key) => {
      return (
        <InputField
          {...field}
          key={key}
          //name={name}
          //type={type}
          //label={label}
          placeholder={placeholder}
          isValid={isValid}
          value={value}
          handleChange={handleChange}
          errorMessage={error}
        />
      )
    },
    label,
    value: defaultValue,
    valid: false,
    errorMessage: '',
    touched: false
  }
}
