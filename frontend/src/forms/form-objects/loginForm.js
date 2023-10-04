import { createFormFieldConfig } from '../form-utils/createFormFieldConfig'
import { email, password } from '../fields/authFields'
import {
  requiredRule,
  validEmailRule,
  validPasswordRule
} from '../form-utils/inputValidationRules'

export const loginForm = {
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
  }
}
