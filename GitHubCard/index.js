/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const username = "amado4884";
axios
  .get(`https://api.github.com/users/${username}`)
  .then((response) => {
    const cards = document.querySelector(".cards");
    cards.appendChild(createCard(response.data));
  })
  .catch((error) => {
    console.log("Error", error);
  });
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
];

followersArray.forEach((follower) => {
  axios
    .get(`https://api.github.com/users/${follower}`)
    .then((response) => {
      console.log(response.data);
      userInfo = response.data;
      const cards = document.querySelector(".cards");
      cards.appendChild(createCard(response.data));
    })
    .catch((error) => {
      console.log("Error", error);
    });
});

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function createCard(git) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = git.avatar_url;
  card.appendChild(img);

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  card.appendChild(cardInfo);

  const h3 = document.createElement("h3");
  h3.classList.add("name");
  h3.textContent = git.login !== null ? git.login : "";
  cardInfo.appendChild(h3);

  const username = document.createElement("p");
  username.classList.add("username");
  username.textContent = git.login;
  cardInfo.appendChild(username);

  const location = document.createElement("p");
  location.textContent =
    "Location: " + (git.location !== null ? git.location : "");
  cardInfo.appendChild(location);

  const profile = document.createElement("p");
  const url = document.createElement("a");
  url.href = url.textContent = git.html_url;
  profile.textContent = "Profile: ";
  profile.appendChild(url);
  cardInfo.appendChild(profile);

  const followers = document.createElement("p");
  followers.textContent =
    "Followers: " + (git.followers !== null ? git.followers : "");
  cardInfo.appendChild(followers);

  const following = document.createElement("p");
  following.textContent =
    "Following: " + (git.following !== null ? git.following : "");
  cardInfo.appendChild(following);

  const bio = document.createElement("p");
  bio.textContent = "Bio: " + (git.bio !== null ? git.bio : "");
  cardInfo.appendChild(bio);

  return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
