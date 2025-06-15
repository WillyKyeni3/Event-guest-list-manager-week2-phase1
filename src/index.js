
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('guest-form');
  const guestInput = document.getElementById('guest-name');
  const guestList = document.getElementById('guest-list');

  form.addEventListener('submit', function (e) {
    e.preventDefault();  // prevents page from refreshing
    const name = guestInput.value.trim();

    if (!name) return;

    //limits to 10 guests
    if (guestList.children.length >= 10) {
      alert('Guest list is full!');
      return;
    }
// create <li> for the list
    const li = document.createElement('li');

    const nameSpan = document.createElement('span');
    nameSpan.textContent = name;

// adding/creating rsvp button
    const rsvpBtn = document.createElement('button');
    rsvpBtn.textContent = 'Not Attending';
    rsvpBtn.classList.add('rsvp-btn', 'not-attending');

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');

    // Remove guest
    removeBtn.addEventListener('click', function () {
      li.remove();
    });

    // Toggle RSVP status
    rsvpBtn.addEventListener('click', function () {
      if (this.textContent === 'Not Attending') {
        this.textContent = 'Attending';
        this.classList.remove('not-attending');
        this.classList.add('attending');
      } else {
        this.textContent = 'Not Attending';
        this.classList.remove('attending');
        this.classList.add('not-attending');
      }
    });

    // Appending elements to the DOM
    li.appendChild(nameSpan);
    li.appendChild(rsvpBtn);
    li.appendChild(removeBtn);
    guestList.appendChild(li);

    guestInput.value = '';
  });
});