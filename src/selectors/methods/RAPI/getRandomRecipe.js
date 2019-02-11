export function getUserById( id ) {
  return get(`user/${id}`);
}

export function saveUser(user) {
  return post(`user/${user.id}`, { user: user });
}
