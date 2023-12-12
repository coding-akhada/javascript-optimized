import { posts_list } from "../script.js";
import { displayPosts } from "./displayPosts.js";

// search function
export function search(event) {
  console.log("Function called");

  let searchKey = event.target.value;
  let updated_posts = filterPosts(searchKey, posts_list);
  displayPosts(updated_posts);
}

// returns filtered 'posts_list' after comparison to 'searchKey'
function filterPosts(searchKey, posts_list) {
  return posts_list.filter((post) =>
    post.title.toLowerCase().includes(searchKey.toLowerCase().trim())
  );
}
