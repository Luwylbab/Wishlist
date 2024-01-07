const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#list-name').value.trim();
  const item = document.querySelector('#item-name').value.trim();
  const price = document.querySelector('#item-price').value.trim();
  const link = document.querySelector('#item-link').value.trim();

  if (name && item) {
    const response = await fetch(`/api/lists`, {
      method: 'POST',
      body: JSON.stringify({ name, item, price, link }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create GiftPot');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/lists/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete GiftPot');
    }
  }
};

document
  .querySelector('.new-list-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.list-array')
  .addEventListener('click', delButtonHandler);
