import { createFormFieldConfig } from '../form-utils/createFormFieldConfig'
import { name, email, password, confirmPassword } from '../fields/authFields'
import {
  requiredRule,
  minLengthRule,
  validEmailRule,
  validPasswordRule,
  passwordMatchRule
} from '../form-utils/inputValidationRules'

export const updateProfileForm = {
  name: {
    ...createFormFieldConfig(name),
    validationRules: [
      requiredRule('Name', 'Please provide your name.'),
      minLengthRule('Name', 2, 'Name should be at least 2 characters long')
    ]
  },
  email: {
    ...createFormFieldConfig(email),
    validationRules: [
      requiredRule('Email'),
      validEmailRule('Email', 'Please enter a valid email address.')
    ]
  },
  password: {
    ...createFormFieldConfig(password),
    validationRules: [requiredRule('Password'), validPasswordRule('Password')]
  },
  confirmPassword: {
    ...createFormFieldConfig(confirmPassword),
    validationRules: [
      requiredRule('Confirm Password'),
      passwordMatchRule('Confirm Password')
    ]
  }
}
