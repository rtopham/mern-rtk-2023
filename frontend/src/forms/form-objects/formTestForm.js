import { createFormFieldConfig } from '../form-utils/createFormFieldConfig'
import {
  name,
  email,
  password,
  confirmPassword,
  age,
  role,
  inlineRole,
  inlineSexy,
  party,
  inlineParty,
  gender,
  inlineGender,
  lights,
  color,
  file,
  height
} from '../fields/formTestFields'

import {
  requiredRule,
  minLengthRule,
  validEmailRule,
  validPasswordRule,
  passwordMatchRule
} from '../form-utils/inputValidationRules'

export const formTestForm = {
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
  },
  age: {
    ...createFormFieldConfig(age),
    validationRules: []
  },

  role: {
    ...createFormFieldConfig(role),
    validationRules: []
  },
  inlineRole: {
    ...createFormFieldConfig(inlineRole),
    validationRules: []
  },
  inlineSexy: {
    ...createFormFieldConfig(inlineSexy),
    validationRules: []
  },
  party: {
    ...createFormFieldConfig(party),
    validationRules: []
  },
  inlineParty: {
    ...createFormFieldConfig(inlineParty),
    validationRules: []
  },
  gender: {
    ...createFormFieldConfig(gender),
    validationRules: []
  },
  inlineGender: {
    ...createFormFieldConfig(inlineGender),
    validationRules: []
  },
  lights: {
    ...createFormFieldConfig(lights),
    validationRules: []
  },
  color: {
    ...createFormFieldConfig(color),
    validationRules: []
  },
  file: {
    ...createFormFieldConfig(file),
    validationRules: []
  },
  height: {
    ...createFormFieldConfig(height),
    validationRules: []
  }
}
