export interface LoginData {
  email: string
  password: string
}

export interface SignUpData extends LoginData {
  name: string
}

export interface User {
  id: number
  name: string
  email: string
  img?: string
}
export interface UserLoginReturnData extends User {
  token: string
  refresh_token: string
}
