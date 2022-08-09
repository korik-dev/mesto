function enableValidation(options){
    const showErrorMessage = (errorField, input) => {
        errorField.textContent = input.validationMessage
        errorField.classList.add(options.errorClass)
        input.classList.add(options.inputErrorClass)
    }
    
    const hideErrorMessage = (errorField, input) => {
        errorField.textContent = ''
        errorField.classList.remove(options.errorClass)
        input.classList.remove(options.inputErrorClass)
    }

    const enableButton = (btn) => {
        btn.classList.remove(options.inactiveButtonClass)
        btn.removeAttribute('disabled')
    }
    
    const disableButton = (btn) => {
        btn.classList.add(options.inactiveButtonClass)
        btn.setAttribute('disabled', true)
    }

    function checkInputValidity (input){
        if(input.closest(options.formSelector).checkValidity() || input.validity.valid){
            return true
        }
    }

    function handleInput(input){
        const errorField = document.querySelector(`#${input.id}_error`)
        const saveBtn = input.closest(options.formSelector).querySelector(options.submitButtonSelector)

        if(checkInputValidity(input)){
            enableButton(saveBtn)
            hideErrorMessage(errorField, input)

            return
        }

        disableButton(saveBtn)
        showErrorMessage(errorField, input)
    }

    function setEventListeners(form){
        Array.from(form.querySelectorAll(options.inputSelector))
            .forEach((input) => input.addEventListener('input', () => handleInput(input)))
    }

    Array.from(document.querySelectorAll(options.formSelector))
        .forEach(setEventListeners)
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});