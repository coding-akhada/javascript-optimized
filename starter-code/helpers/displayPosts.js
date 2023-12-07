const contentNode = document.getElementById("content");

// display posts-list as html
export function displayPosts(posts_list) {
  const posts = posts_list
    .map((post) => {
      return `
      <div class="post">
      <h2 class="post-title">${post.title}</h2>
      <p class="post-body">${post.body}</p>
      </div>
      `;
    })
    .join("");

  contentNode.innerHTML = posts;
}
