const editFormHandler = async (event) => {
    event.preventDefault();
  
    const id = event.target.getAttribute('data-id');
    const name = document.querySelector('#list-name').value.trim();
    const expiration = document.querySelector('#list-exp').value.trim();
    const item = document.querySelector('#item-name').value.trim();
    const price = document.querySelector('#item-price').value.trim();
    const link = document.querySelector('#item-link').value.trim();
  
    if (name && description && id) {
      const response = await fetch(`/api/projects/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ name, expiration, item, price, link }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const result = await response.json()
      console.log(result)

      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
      } else {
        alert('Failed to update item');
      };
    }
  };
  
  document
  .querySelector('.new-list-form')
  .addEventListener('submit', editFormHandler);

document
  .querySelector('#add-item')
  .addEventListener('click', addItem);
