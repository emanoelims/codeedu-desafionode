const $ = document.querySelector.bind(document);

const namesList = $('main ul');
const inputName = $('form input');
const formButton = $('form button');

const addNameInNamesList = (name) => {
  const li = document.createElement('li');
  li.innerText = name;

  $('main ul').appendChild(li);
}

formButton.addEventListener('click', async (event) => {
  event.preventDefault();

  const name = inputName.value;

  try {

    formButton.textContent = 'cadastrando';

    await fetch('/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name}),
    });

    addNameInNamesList(name);
  } catch (err) {
    console.log(err); 
  } finally {
    formButton.textContent = 'Adicionar';
  }
});
