export interface UserResponseWrapper {
  message: string,
  data: UserResponse
}

interface UserResponse {
  username: string,
  roles: string[],
  token: string
}
