let page = 1; 

const URL =
  "https://examone.joakimkjode.com/blog//wp-json/wp/v2/posts?_embed&page=1";

const viewPost = document.getElementById("viewSpecificPost");
const blogPostId = new URLSearchParams(window.location.search).get("id");
const blogSection = document.getElementById("postSection");
const blogPreview = document.getElementById("blogPreview");
const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");
const pageNumberUp = document.querySelector("#more"); 

const posts = [];

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
    });
  });

const fetchPost = async () => {
  try {
    const URL = `https://examone.joakimkjode.com/blog//wp-json/wp/v2/posts?page=${page}&_embed`; /*test line remove later */
    const response = await fetch(URL);
    // console.log(response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error");
    error.innerHTML = `An error occured`;
  }
};

function getShorterDate(newString) {
  return newString.substring(0, 9);
}

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
      }<p class="postData">Posted: ${getShorterDate(post.date)}</p>
      <p class=postData>Author: ${post._embedded.author[0].name}</p></div>
      </a>
      <div>`;
  });
}


function displayPreview(posts) {
  blogPreview.innerHTML = "";
  posts.slice(0, 4).forEach((post) => {
    console.log(post.id);
    blogPreview.innerHTML += `
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
      <div>
      `;
  });
}

function displayPreviewNew(posts, changeDirection = "none") {
  blogPreview.innerHTML = "";
  if (changeDirection === "none") {
    posts.slice(0, 4).forEach((post) => {
      console.log(post.id);
      blogPreview.innerHTML += `
    <div class="post">
      <a href=./specific.html?id=${post.id}>
      <h2 class="postTitle">${post.title.rendered}</h2>
      <img class="postImage" src="${
        post._embedded["wp:featuredmedia"][0].source_url
      }" alt="${post.featured_media.slug}"/>
      <div class="postTxt">
      <p class="postText">${post.excerpt.rendered}</p>
      <p class="postDate">Posted: ${getShorterDate(post.date)}</p></div>
      </a>
      <div>
      `;
    });
  } else if (changeDirection === "next") {
    posts.slice(4, 8).forEach((post) => {
      console.log(post.id);
      blogPreview.innerHTML += `
    <div class="post">
      <a href=./specific.html?id=${post.id}>
      <h2 class="postTitle">${post.title.rendered}</h2>
      <img class="postImage" src="${
        post._embedded["wp:featuredmedia"][0].source_url
      }" alt="${post.featured_media.slug}"/>
      <div class="postTxt">
      <p class="postText">${post.excerpt.rendered}</p>
      <p class="postDate">Posted: ${getShorterDate(post.date)}</p></div>
      </a>
      <div>
      `;
    });
  } else if (changeDirection === "previous") {
    posts.slice(0, 4).forEach((post) => {
      console.log(post.id);
      blogPreview.innerHTML += `
    <div class="post">
      <a href=./specific.html?id=${post.id}>
      <h2 class="postTitle">${post.title.rendered}</h2>
      <img class="postImage" src="${
        post._embedded["wp:featuredmedia"][0].source_url
      }" alt="${post.featured_media.slug}"/>
      <div class="postTxt"><p class="postText">${post.excerpt.rendered}</p>
      <p class="postDate">Posted: ${getShorterDate(post.date)}</p></div>
      </a>
      <div>
      `;
    });
  }
}

if (pageNumberUp) {
  pageNumberUp.onclick = function () {
    page++;
    fetchPost().then((data) => {
      displayPosts(data);
    });
  };
}

fetchPost().then((data) => {
  // console.log(data);
  if (viewPost) {
    const blogPostId = new URLSearchParams(window.location.search).get("id");
    const blogPostNumber = parseInt(blogPostId);
    const post = data.find((post) => post.id === blogPostNumber);
    const blogText = post.content.rendered;
    // console.log(blogPostId);
    // console.log(blogText);
    viewPost.innerHTML = `
    <div class="chosenPost">
    <div class="titleOfPost"><h2 class="postSpecific">${post.title.rendered}</h2></div>
    <img class="postImage" src="${
      post._embedded["wp:featuredmedia"][0].source_url
    }">
    <div id="modal" style="display:none">
    <div class="modal-content">
      <img id="mImg" src="${
        post._embedded["wp:featuredmedia"][0].source_url
      }" />
    </div>
  </div>
    <p class="postText">${post.content.rendered}</p>
    <div class="postData">
    <p>Written ${getShorterDate(post.date)}</p>
    <p>by ${post._embedded.author[0].name}</p>
    </div>
    </div>
    `;
  } else if (blogPreview) {
    displayPreview(data);
  } else {
    displayPosts(data);
  }
});

/* Next/Prev button */

if (nextButton) {
  nextButton.onclick = async function () {
    await fetchPost().then((posts) => displayPreviewNew(posts, "next"));
  };
}

if (prevButton) {
  prevButton.onclick = async function () {
    await fetchPost().then((posts) => displayPreviewNew(posts, "previous"));
  };
}

/* Modal */

if (viewSpecificPost) {
  const imageFromSpecificPost = document.querySelector(".mImg");
  imageFromSpecificPost.onclick = function () {
    mImg.src = imageFromSpecificPost.src;
    modal.style.display = "block";
  };
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}
