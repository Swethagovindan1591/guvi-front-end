const blogList = document.getElementById("blog-list");
const blogForm = document.getElementById("blog-form");
const totalForm = document.getElementById("totalform")
function autoExpand(textarea) {

    textarea.rows = 1;
    const rows = Math.ceil((textarea.scrollHeight - textarea.clientHeight) / 20);
    textarea.rows = rows > 1 ? rows : 1;
}

function createBlog() {
    const title = document.getElementById("blogTitle").value;
    const content = document.getElementById("blogContent").value;

    if (!title || !content) {
        alert('Title and content are required');
        return;
    }
    
    const image = document.getElementById("blogImage").value;
    const File = document.getElementById("blogfile");
    let fileimage = URL.createObjectURL(File.files[0]);
    let likes=0;

    totalForm.style.display="none";
    const blogElement = document.createElement("div");
        blogElement.className = "blog";
        blogElement.innerHTML = `
            <div id="postcontent">
                <h2>${title}</h2>
                <p>${content}</p>
                ${image ? `<img src="${image}" alt="Blog Image">` : ''}
                ${fileimage ? `<img src="${fileimage}" alt="Blog file Image">` : ''}
                <br>
                <p>Likes: <span id="likeCount">${likes}</span></p>
                <button onclick="deleteBlog()">Delete</button>
                <button onclick="reportBlog(this)">Report</button>
                <button onclick="likeBlog(this)">Like</button>
                <button onclick="commentBlog(this)">Comment</button>
            </div>
        `;
        blogList.appendChild(blogElement);
        blogList.style.display="block";
}

function deleteBlog() {
    window.location.href = 'delete.html';
}

function reportBlog(button) {
    const blogElement = button.parentNode;
    alert(`Blog "${blogElement.querySelector('h2').textContent}" reported`);
}

function likeBlog(button) {
    const blogElement = button.parentNode;
    const likeCountElement = blogElement.querySelector('#likeCount');
    
    // Update likes
    let likes = parseInt(likeCountElement.textContent);
    likes++;
    
    // Display updated likes
    likeCountElement.textContent = likes;

    alert(`Liked blog: "${blogPost.querySelector('h2').textContent}"`);
}

function commentBlog(button) {
    const blogElement = button.parentNode;
    const comment = prompt('Enter your comment:');
    if (comment) {
        const commentElement = document.createElement('p');
        commentElement.textContent = `Comment: ${comment}`;
        blogElement.appendChild(commentElement);
    }
}