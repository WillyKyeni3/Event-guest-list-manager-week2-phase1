# 🎉 Event Guest List Manager
A simple web-based tool to manage event guest lists with real-time updates, RSVP tracking, and guest removal. Built with HTML , CSS , and JavaScript .

## 🌟 Features
- **Add Guests**: Type a name and click "Add Guest" to dynamically update the list.
- **RSVP Toggle**: Mark guests as "Attending" or "Not Attending" with a button click.
- **Remove Guests**: Delete guests individually using a "Remove" button.
- **Guest Limi**: Enforces a maximum of 10 guests (alerts the user if exceeded).
- **Responsive Design**: Clean, minimal UI that works on all screen sizes.

## Installation
**1. Clone or download the repository:**
```
git clone https://github.com/your-username/event-guest-list.git
```
**2. Open ```index.html``` in your browser:**
```
cd event-guest-list
open index.html
```

## 🧩 How to Use
**1. Add a Guest**
- Type a guest’s name into the input field.
- Click "Add Guest" (or press Enter).
- The guest appears in the list with an "RSVP" button and a "Remove" button.

**2. Toggle RSVP Status**
- Click the "RSVP: Not" button to mark a guest as "Attending".
- Click again to switch back to "Not Attending".

**3. Remove a Guest**
-  Click the "Remove" button next to any guest to delete them from the list.

**4. Guest Limit Alert**
- If you try to add more than 10 guests, an alert will pop up:
```Guest list is full!```

## 🔧 Functionality Breakdown

### ✅ Form Handling
- Prevents default form submission (```e.preventDefault()```).
- Validates empty inputs and enforces guest limit.
  
### 🧾 Dynamic List Updates
- Guest names are added to the DOM without refreshing the page.
Each guest includes:
- A name display (```<span>```)
- An RSVP toggle button
- A remove button
  
### 🎯 RSVP Toggle
- Dynamically updates button text and styling:
- ```"RSVP: Not" → "RSVP: Attending"```
- Green background for ```"Attending", red for "Not"```.

### 🗑️ Remove Guest
- Removes the corresponding ```<li>``` element from the DOM.
  
### ⚠️ Security
- Uses `textContent` instead of `innerHTML` to prevent XSS attacks from user input.
  
### 🎨 Design Choices
- **Minimalist UI:** Focuses on functionality over flashy design.
- **Responsive Layout :** Works on mobile and desktop.
- **Accessible Buttons :** Clear labels and visual feedback for RSVP status.
- **Styling :** Buttons styled with color-coded classes (```attending/not-attending```) for quick visual cues.

## Credits
Built by Willy Musyoka as a practice project to master DOM manipulation, form handling, and event listeners in JavaScript.
