export const getUsers = async (setUsers) => {
  const response = await fetch('/api/users', {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const getUsers = await response.json();
  return setUsers(getUsers)
}

export const getProducts = async (setProducts) => {
  const response = await fetch('/api/products', {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const getProducts = await response.json();
  return setProducts(getProducts)
}

export const addProduct = async (product) => {
  const response = await fetch('/api/products', {
    method: 'POST',
    body: JSON.stringify(product)
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}