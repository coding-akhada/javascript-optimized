import fetchApi from "./helpers/fetchApi.js";
import { search } from "./helpers/search.js";
import { displayPosts } from "./helpers/displayPosts.js";
import debounce from "./debounce.js";

// API
const URL = "https://jsonplaceholder.typicode.com/posts";

// DOM elements
const searchNode = document.getElementById("search");

// Global variable
let posts_list;
// render initial list
(async function renderList() {
  posts_list = await fetchApi(URL);
  displayPosts(posts_list);
})();

// Event listener - update search term on 'input' event -----> [debounced search]
searchNode.addEventListener("input", debounce(search, 2000));

export { posts_list };
