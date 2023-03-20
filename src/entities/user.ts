import { Entity } from './Entity'

interface UserProps {
  id?: string
  name: string
  email: string
  password_hash: string
  created_at: string
}

export class User extends Entity<UserProps> {
  get name() {
    return this.props.name
  }

  get email() {
    return this.props.email
  }

  get password_hash() {
    return this.props.password_hash
  }

  get created_at() {
    return this.props.created_at
  }
}
