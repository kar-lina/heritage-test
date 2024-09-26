import type { LoginData, SignUpData, UserLoginReturnData } from "~/types"
import { api } from "./constants"

/**
 * Logs a user in by sending a POST request to the server with the user's email and password
 * @param loginData The user's login data in the format of {email: string, password: string}
 * @returns A promise that resolves to an object containing the user's data in the format of {id: number, name: string, img: string, token: string, refresh_token: string}
 */
export const loginUser = async (loginData: LoginData): Promise<UserLoginReturnData> => {
  return await useNuxtApp().$api(api.LOGIN, {
    method: 'POST',
    body: loginData
  })
}

/**
 * Requests the user's data from the server
 * This function is called on every page load, and it sets the user's data in the store
 * @returns The user's data in the format of {id: number, name: string, img: string}
 */
export const getAuth = async (): Promise<UserLoginReturnData> => {
  return await useNuxtApp().$api(api.GET_USER)
}

/**
 * Creates a new user on the server
 * @param signUpData The data of the new user in the format of {name: string, email: string, password: string}
 * @returns A promise that resolves to an object with a single property 'message' which is a success message
 */
export const signUpUser = async (signUpData: SignUpData): Promise<{message: string}> => {
  return await useNuxtApp().$api(api.SIGN_UP, {
    method: 'POST',
    body: signUpData
  })
}
