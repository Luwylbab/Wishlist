const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#list-name').value.trim();
  const expiration = document.querySelector('#list-exp').value.trim();
  const item = document.querySelector('#item-name').value.trim();
  const price = document.querySelector('#item-price').value.trim();
  const link = document.querySelector('#item-link').value.trim();

  if (name && item) {
    const response = await fetch(`/api/lists`, {
      method: 'POST',
      body: JSON.stringify({ name, expiration, item, price, link }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json()
      console.log(result);

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

const addItem = () => {
  const additionalItemsDiv = document.getElementById('additional-items');

  const itemRow = document.createElement('div');
  itemRow.classList.add('item-row');
  itemRow.innerHTML = `
    <label for="item-name">Item:</label>
    <input class="form-input" type="text" id="item-name" name="item-name" />
    <label for="item-price">Price:</label>
    <input class="form-input" type="text" id="item-price" name="item-price" />
    <label for="item-link">Link:</label>
    <input class="form-input" type="text" id="item-link" name="item-link" />
  `;

  additionalItemsDiv.appendChild(itemRow);
};

const removeItem = () => {
  const additionalItemsDiv = document.getElementById('additional-items');
  const itemRows = additionalItemsDiv.getElementsByClassName('item-row');
  
  // Check if there is at least one item in the list
  if (itemRows.length > 0) {
    const lastItemRow = itemRows[itemRows.length - 1];
    additionalItemsDiv.removeChild(lastItemRow);
  }
};

document
  .querySelector('.new-list-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.list-array')
  .addEventListener('click', delButtonHandler);
