const showdown = require('showdown');
const fs = require('fs');
const mustache = require('mustache');

// return first arg that's not path or node, as the filename
filename = process.argv.slice(2);

let converter = new showdown.Converter();

// $ showdown -i pages/<post-url>.md -o dist/posts/<post-url>.html
let postData = fs
	.readFileSync(
		'/home/francois/Seagate/home/code/personal-website/selfmade-website/pages/' +
			filename +
			'.md'
	)
	.toString();
let postHtml = converter.makeHtml(postData);

const { title, titleEnd } = extract_title(postHtml);
const hookParagraph = extract_hook_paragraph(postHtml, titleEnd);

// fs.writeFileSync(
// 	'/home/francois/Seagate/home/code/personal-website/selfmade-website/dist/posts/' +
// 		filename +
// 		'.html',
// 	postHtml
// );

const data = fs
	.readFileSync(
		'/home/francois/Seagate/home/code/personal-website/selfmade-website/data/' +
			'postsData.json'
	)
	.toString();
const jsonData = JSON.parse(data);

jsonData.posts.unshift({
	title: title,
	hook_paragraph: hookParagraph,
	page_link: 'posts/' + filename + '.html',
});

fs.writeFileSync(
	'/home/francois/Seagate/home/code/personal-website/selfmade-website/data/' +
		'postsData.json',
	JSON.stringify(jsonData)
);

const template = fs
	.readFileSync(
		'/home/francois/Seagate/home/code/personal-website/selfmade-website/template/' +
			'post.mustache'
	)
	.toString();

const post = mustache.render(template, { post: postHtml });

fs.writeFileSync(
	'/home/francois/Seagate/home/code/personal-website/selfmade-website/dist/posts/' +
		filename +
		'.html',
	post
);

function extract_title(postHtml) {
	const titleEnd = postHtml.search('</h');
	const title = postHtml.substring(0, titleEnd + 5);
	return { title, titleEnd };
}

function extract_hook_paragraph(postHtml, titleEnd) {
	const paragraphEnd = postHtml.search('</p');
	const hookParagraph = postHtml.substring(titleEnd + 5, paragraphEnd + 4);
	return hookParagraph;
}

// Update html with new post list
// $ mustache data/postsData.json template/home.mustache > dist/home.html &&
//   mustache data/postsData.json template/posts.mustache > dist/posts.html
