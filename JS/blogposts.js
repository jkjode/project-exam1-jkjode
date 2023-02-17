const basicURL = "https://examone.joakimkjode.com/blog//wp-json/wp/v2/posts";

const viewSpecificPost = document.getElementById("view");
const blogPostId = new URLSearchParams(window.location.search).get("id");
const blogSection = document.getElementById("postSection");

// fetch(basicURL)
//   .then((resp) => resp.json())
//   .then((data) => console.log(data));

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

function displayPosts(posts) {
  posts.forEach((post) => {
    console.log(post.title);
    blogSection.innerHTML += `
    <div class="post">
    <h2 class="postTitle">${post.title}</h2>
    <a href="./specific.html?id=${post.id}><img class="postImage">${post.image}</img></a>
    <p class="postTxt">${post.content}</p>
    <div>`;
  });
}

fetchPost().then((data) => {
  console.log(data);
});
