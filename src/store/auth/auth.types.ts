import { Status } from '../../interfaces/status.enum'

export interface IAuthPersistentState {
  jwt: string | undefined
}

export interface IAuthState {
  jwt: string | undefined
  data?: IProfile | undefined
  status: Status
  loginErrorMessage?: string
  registerErrorMessage?: string
}

export interface IRegister {
  username: string
  email: string
  password: string
  firstname: string
  surname: string
}

export interface ILogin {
  email: string
  password: string
}

export interface IProfile {
  _id: string
  username: string
  email: string
  firstname: string
  surname: string
  fullname: string
  createdAt: string
  updatedAt: string
  __v: number
  token?: string
}
