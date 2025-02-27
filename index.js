const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const contentsEl = document.getElementById("contents-el");

for (let i = 0; i < posts.length; i++) {
  console.log(posts[i]);
  contentsEl.innerHTML += `
          <div class='post'> 
            <div class="user-info">
              <img
                class="user-img"
                src=${posts[i].avatar}
                alt=${posts[i].name}
              />
              <div>
                <h2 class="user-name bold-text">${posts[i].name}</h2>
                <p class="user-location">${posts[i].location}</p>
              </div>
            </div>

            <!-- post image-->
            <img
              class="post-img"
              src=${posts[i].post}
              alt=${posts[i].name}
            />

            <!-- post body -->
            <div class="post-body">
              <!-- icons -->
              <div class="icons">
                <img
                  class="icon-heart"
                  src="./images/icon-heart.png"
                  alt="heart"
                />
                <img
                  class="icon-comment"
                  src="./images/icon-comment.png"
                  alt="a cloud bubble"
                />
                <img class="icon-dm" src="./images/icon-dm.png" alt="share" />
              </div>
              <!-- like count -->
              <span class="likes bold-text">${posts[i].likes} likes</span>
              <!-- username caption -->
              <p class="comment">
                <span class="bold-text">${posts[i].username}</span>${posts[i].comment}</p>
            </div>
          </div>
`;
}
