const basicURL =
  "https://examone.joakimkjode.com/blog//wp-json/wp/v2/posts?_embed";

const viewSpecificPost = document.getElementById("view");
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

fetch(basicURL)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      let postHTML = `
      <div class="post">
      <h2 class="postTitle">${post.title.rendered}</h2>
      <a class="postImage" src="${post.featured_media.source_url}" alt="${post.featured_media.slug}"/>
      <div class="postText">${post.content.rendered}</div>
      <div>`;
      blogSection.innerHTML += postHTML;
    });
  });

fetchPost().then((data) => {
  console.log(data);
  if (viewSpecificPost) {
    const blogPostId = new URLSearchParams(window.location.search).get("id");
    const blogTitle = data.find((post) => post.title.rendered == blogTitle);
    const post = data.find((post) => post.id == post);
    const postImage = post.link.src;
    console.log(blogPostId);
  }
});
