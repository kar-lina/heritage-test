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

export type ProductCategory = {
  id: number
  name: string
  subCategories: Array<{
    id: number
    name: string
  }>
}

export type Product = {
  id: number
  name: string
  description?: string
  price: number
  img: string
  subCategory: number
  published: string
  isActive: boolean
  isPromoted: boolean
  views: number
}

export type CompanyHeading = {
  title: string
  logo: string
  address?: string
  phone?: string
}
export type Rating = { docs: boolean; rating?: number; reviews: number }
export type Agent = {
  name: string
  img: string;
  description: string
} & Rating

export type CompanyInfo = {
  description: string
  workingHours: string
  address: string
}