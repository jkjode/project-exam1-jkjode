const basicURL =
  "https://examone.joakimkjode.com/blog//wp-json/wp/v2/posts?_embed";

const viewPost = document.getElementById("viewSpecificPost");
const blogPostId = new URLSearchParams(window.location.search).get("id");
const blogSection = document.getElementById("postSection");

fetch(basicURL)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      console.log(post.id);
    });
  });

const fetchPost = async () => {
  try {
    const response = await fetch(basicURL);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error");
    error.innerHTML = `An error occured`;
  }
};

function getShorterDate(newString) {
  return newString.substring(0, 9);
}

fetch(basicURL)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      console.log(JSON.stringify(post.featured_media));
      console.log(JSON.stringify(post.title.rendered));
      console.log(JSON.stringify(post.content.rendered));
      console.log(post.featured_media.source_url);
    });
    return data;
  });

function displayPosts(posts) {
  posts.forEach((post) => {
    console.log(post.id);
    blogSection.innerHTML += `
      <div class="post">
      <a href=./specific.html?id=${post.id}>
      <h2 class="postTitle">${post.title.rendered}</h2>
      <img class="postImage" src="${
        post._embedded["wp:featuredmedia"][0].source_url
      }" alt="${post.featured_media.slug}"/>
      <div class="postText">${
        post.excerpt.rendered
      }<p class="postDate">Posted: ${getShorterDate(post.date)}</p></div>
      </a>
      <div>`;
  });
}

fetchPost().then((data) => {
  console.log(data);
  if (viewPost) {
    const blogPostId = new URLSearchParams(window.location.search).get("id");
    const post = data.find((post) => post.id == blogPostId);
    const blogText = post.content.rendered;
    // console.log(blogPostId);
    // console.log(blogText);
    viewPost.innerHTML = `
    <div class="chosenPost">
    <h2 class="postSpecific">${post.title.rendered}</h2>
    <img class="postImage" src="${
      post._embedded["wp:featuredmedia"][0].source_url
    }">
    <p class="postText">${blogText}</p>
    <div class="postDate">Written ${getShorterDate(post.date)}</div>
    </div>
    `;
  } else {
    displayPosts(data);
  }
});
