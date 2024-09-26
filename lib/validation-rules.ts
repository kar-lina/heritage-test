export const validationRules = {
  required: (value: string) => !!value || 'Обязательное поле.',
  email: (value: string) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || 'Неккорректный email.'
  },
  password: (value: string) => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return (
      pattern.test(value) ||
      'Некорректный пароль. Пароль должен содержать не менее 8 символов, включая строчные и заглавные буквы, цифры и специальные символы.'
    )
  }
}
