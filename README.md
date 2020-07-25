# Personal Website & Blog

## To upload posts

---

### Currently

- Write post and save as `pages/<post-url>.md`
- Run `$ node create_post.js <post-url>` to convert the post to HTML and update the list of posts
- Run `$ npm run build` to update the Home and Posts pages with the new post

### On server

Use Git to commit to a Github/GitLab repo. Then have a CD pipeline pull from the repo & deploy changes to the production website.

The site & repo should be configured in such a way that adding a post in a "Posts" Folder:

- Adds an card snippet to the list of posts on the homepage
- Creates a path/url to the post
- Provide a full page html page for the post

---

## To update a post

Coming Soon
