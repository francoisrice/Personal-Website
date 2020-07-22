const showdown = require('showdown');
const fs = require('fs');

// return first arg that's not path or node, as the filename
filename = process.argv.slice(2);

let converter = new showdown.Converter();

fs.readFile(
	'/home/francois/Seagate/home/code/personal-website/selfmade-website/dist/pages/' +
		filename +
		'.md',
	(err, data) => {
		if (err) throw err;

		let postData = data.toString();

		let postHtml = converter.makeHtml(postData);

		fs.writeFile(
			'/home/francois/Seagate/home/code/personal-website/selfmade-website/dist/posts/' +
				filename +
				'.html',
			postHtml,
			(err) => {
				if (err) throw err;
			}
		);
	}
);

// let text = ''; // import text from blog post

// Update 'home.html' and 'posts.html'
