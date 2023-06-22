//three const variables that hold references to the input, button, and .list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

//a click event listener for the Add Chapter button
button.addEventListener('click', function () {
	if (input.value != '') {
		const li = document.createElement('li');
		const deleteButton = document.createElement('button');

		li.textContent = input.value;

		deleteButton.textContent = '❌';

		li.append(deleteButton);

		list.append(li);

		//add an event listener to the delete button that removes the li element when clicked
		deleteButton.addEventListener('click', () => {
			list.removeChild(li);
			input.focus();
		});
		input.value = '';
	} else {
		let message = document.createElement('p');
		message.innerHTML = 'Enter a book!';
		document.querySelector('body').appendChild(message);
		setTimeout(() => {
			document.querySelector('body').removeChild(message);
		}, 1000);
	}
});
