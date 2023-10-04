export const requiredRule = (inputName, message) => {
  return {
    name: 'required',
    message: message || `${inputName} required`,
    validate: (inputValue, formObj) => inputValue.length !== 0
  }
}

export const minLengthRule = (inputName, minCharacters, message) => {
  return {
    name: 'minLength',
    message:
      message ||
      `${inputName} should contain at least ${minCharacters} characters`,
    validate: (inputValue, formObj) => inputValue.length >= minCharacters
  }
}

export const validEmailRule = (inputName, message) => {
  return {
    name: 'validEmail',
    message: message || `${inputName} must be a valid email address`,
    validate: (inputValue, formObj) => {
      const regex =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

      return regex.test(inputValue)
    }
  }
}

export const validPasswordRule = (inputName, message) => {
  return {
    name: 'validPassword',
    message:
      message ||
      `${inputName} must contain at least eight characters, one uppercase letter, one lowercase letter and one number. Special characters are allowed.`,
    validate: (inputValue, formObj) => {
      const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
      return regex.test(inputValue)
    }
  }
}

export const passwordMatchRule = (inputName, message) => {
  return {
    name: 'passwordMatch',
    message: message || `${inputName} must match password.`,
    validate: (inputValue, formObj) => {
      return inputValue === formObj.password.value
    }
  }
}
