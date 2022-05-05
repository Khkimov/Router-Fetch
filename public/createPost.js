const createPost = document.querySelector('#createPost');

createPost.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.location.href.split('name=')[1].split('&')[0];
  const response = await fetch(`/posts/?name=${name}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: createPost.title.value,
      body: createPost.body.value,
    })
  });
  if (response.ok) {
    addPost({
      title: createPost.title.value,
      body: createPost.body.value,
      name
    });
    showError('')
  } else {
    showError('Ошибка ....')
  }
});

function showError (text) {
  document.querySelector('#errorMessage').innerText = text
}

function addPost (post) {
  const wrapper = document.querySelector('.wrapper');
  wrapper.innerHTML += `
  <div class="item">
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    <i>${post.name}</i>
  </div>
  `
}
