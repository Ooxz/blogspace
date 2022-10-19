let htmlPosts = document.getElementById("posts")
let btn = document.getElementById("btn")
let postArray = []
const titleInput = document.getElementById("title-input")
const bodyInput = document.getElementById("body-input")
const form = document.getElementById("form")

function renderPosts() {
	let html = ""
	for(let post of postArray) {
		 html += `
		<h3>${post.title}</h3>
		<p>${post.body}</p>
		<hr />
		`
	}
	htmlPosts.innerHTML = html
}

fetch("https://apis.scrimba.com/jsonplaceholder//posts")
.then(response => response.json())
.then(data => {
	postArray = data.slice(0, 5)
	renderPosts()
})


btn.addEventListener("click", (event) => {
	event.preventDefault()
	const postTitle = titleInput.value
	const postBody = bodyInput.value
	const data = {
		title: postTitle,
		body: postBody
	}
	
	// if(postTitle === ""){
	// 	console.log("Please enter a title and some text")
	
	// } else if(postBody === "") {
	// 	console.log("Please enter a title and some text")
	
	// }else {
	// 	console.log(data.title)
	// 	console.log(data.body)
	// }
	fetch("https://apis.scrimba.com/jsonplaceholder/posts", { 
		method: "POST",
		body: JSON.stringify({
			title: data.title,
			body: data.body
		}),
		headers: {
			"Content-Type": "application/json"
		}
	})
	.then(res => res.json())
.then(post => {
	postArray.unshift(post)
	renderPosts()
	form.reset()
})

})




