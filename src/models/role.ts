export interface RoleType {
  id: string
  name: string
  permissions: PermissionsType[]
}

export interface PermissionsType {
  id: string
  name: string
}
