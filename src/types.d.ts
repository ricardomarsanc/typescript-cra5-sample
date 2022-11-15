interface Sub {
  nick: string,
  avatar: string,
  subMonths: number,
  description?: string
}

interface User {
  name: string
  nick: string
  id: number
  email: string
}

interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: {
    lat: string,
    lng: string
  }
}

type UsersAPI = Array<{
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}>


export type { Sub, User, UsersAPI}