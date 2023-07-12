window.addEventListener('DOMContentLoaded', () => {
   const searchBox = document.querySelector('.search-box');
  // const button = document.querySelector('button');

  // button.addEventListener('click', () => {
  //   const username = searchBox.value.trim();

  //   if (username !== '') {
  //     fetchUserProfile(username);
  //   }
  // });

  // searchBox.addEventListener('keyup', (event) => {
  //   if (event.key === 'Enter') {
  //     const username = searchBox.value.trim();

  //     if (username !== '') {
  //       fetchUserProfile(username);
  //     }
  //   }
  // });
const form = document.querySelector(".container")
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = searchBox.value.trim();
  if (username) {
    fetchUserProfile(username);
  }
})

});

function fetchUserProfile(username) {
  const accessToken = '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';
  const apiUrl = `https://api.github.com/users/${username}`;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  fetch(apiUrl, { headers })
    .then((response) => response.json())
    .then((data) => {
      displayProfileData(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

function displayProfileData(profileData) {
  const profileContainer = document.querySelector('.profile-container');

  if (profileContainer) {
    // parameter information from github API
    const name = profileData.name;
    const bio = profileData.bio;
    const followers = profileData.followers;
    const following = profileData.following;
    const repositories = profileData.public_repos;
    const email = profileData.email;
    const twitter_username = profileData.twitter_username;
    const location = profileData.location;
    const blog = profileData.blog;
    const company = profileData.company;

    // Display the profile data
    profileContainer.innerHTML = `
      <h2>Name: ${name}</h2>
      <p>Bio: ${bio}</p>
      <p>Followers: ${followers}</p>
      <p>Following: ${following}</p>
      <p>Repositories: ${repositories}</p>
      <p>Email: ${email}</p>
      <p>Twitter Handle: ${twitter_username}</p>
      <p>location: ${location}</p>
      <p>Website: ${blog}</p>
      <p>Organization: ${company}</p>
    `;
  }
}