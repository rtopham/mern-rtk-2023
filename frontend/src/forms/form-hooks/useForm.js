import { useState, useCallback } from 'react'

function useForm(formObj, initialState) {
  //let formObj = { ...formObject }

  /*   if (initialState) {
    for (const key in initialState) {
      const inputObj = { ...formObj[key] }
      inputObj.value = initialState[key]
      formObj = { ...formObj, [key]: inputObj }
    }
  } */

  const [form, setForm] = useState(formObj)

  const setInitialState = useCallback(
    (initialState) => {
      let updatedForm = { ...formObj }
      for (const key in initialState) {
        const inputObj = { ...updatedForm[key] }

        inputObj.value = initialState[key]

        updatedForm = { ...updatedForm, [key]: inputObj }
      }
      setForm(updatedForm)
    },
    [formObj]
  )

  function renderFormInputs() {
    return Object.values(form).map((inputObj) => {
      const { value, label, errorMessage, valid, renderInput } = inputObj
      return renderInput(onInputChange, value, valid, errorMessage, label)
    })
  }

  const isInputFieldValid = useCallback(
    (inputField) => {
      for (const rule of inputField.validationRules) {
        if (!rule.validate(inputField.value, form)) {
          inputField.errorMessage = rule.message
          return false
        }
      }

      return true
    },
    [form]
  )

  const onInputChange = useCallback(
    (event) => {
      const { name, value, type, checked } = event.target
      // copy input object whose value was changed
      const inputObj = { ...form[name] }
      // update value
      if (type === 'checkbox') {
        inputObj.value = checked
      } else inputObj.value = value

      // update input field's validity
      const isValidInput = isInputFieldValid(inputObj)
      // if input is valid and it was previously set to invalid
      // set its valid status to true
      if (isValidInput && !inputObj.valid) {
        inputObj.valid = true
      } else if (!isValidInput && inputObj.valid) {
        // if input is not valid and it was previously valid
        // set its valid status to false
        inputObj.valid = false
      }

      // mark input field as touched
      inputObj.touched = true
      setForm({ ...form, [name]: inputObj })
    },
    [form, isInputFieldValid]
  )

  /**
   * returns boolean value indicating whether overall form is valid
   *
   * @param {object} formObj - object representation of a form
   */
  const isFormValid = useCallback(() => {
    let isValid = true
    const arr = Object.values(form)

    for (let i = 0; i < arr.length; i++) {
      if (!arr[i].valid) {
        isValid = false
        break
      }
    }

    return isValid
  }, [form])

  //returns a boolean value indicating whether overall form has changed

  const changesMade = (oldValues, newValues) => {
    return JSON.stringify(oldValues) !== JSON.stringify(newValues)
  }

  //return a simple object with input values for ease of use

  const getFormValues = useCallback(() => {
    const values = Object.fromEntries(
      Object.entries(form).map((entry) => {
        return [entry[0], entry[1].value]
      })
    )
    return values
  }, [form])

  return {
    renderFormInputs,
    isFormValid,
    getFormValues,
    setInitialState,
    changesMade
  }
}

export default useForm
