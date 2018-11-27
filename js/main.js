const alertContainer = document.querySelector('.alert-container');
const alert = document.querySelector('.btn-alert-x');
const dot = document.querySelector('.dot');
const bell = document.querySelector('.header-icon');
const messageFieldsHeight = document.querySelector('.message-fields').clientHeight;
const userFields = document.querySelector('.user-fields');
const dashboardSearch = document.querySelector('.dashboard-search');
const magBG = document.querySelector('.mag-bg');


// Removes the alert when "X" is clicked
alert.addEventListener('click', () => {
  alertContainer.innerHTML = "";
  dot.style.display = "none";
});

// Displays pop-up windows
bell.addEventListener('click', () => {
  window.alert('Please read the alert in the banner below.');
  window.alert('When you\'re done, click the X to close the alert.');
});

// Creates box shadow on dashboard-search:focus
dashboardSearch.addEventListener('focus', () => {
  magBG.style.boxShadow = '4px 0 4px 2px rgba(140, 140, 140, 0.2)';
});

// Removes box shadow after dashboard-search:blur
dashboardSearch.addEventListener('blur', () => {
  magBG.style.boxShadow = '';
});

// Sets height of user-fields div equal to height of message-fields div
userFields.style.height = messageFieldsHeight + 'px';
