var blogData = [
    { title: "Exploring the Wonders of Nature", content: `In a fast-paced world filled with technology and urban landscapes, it's essential to reconnect with the beauty of nature. Join us on a virtual journey through lush forests, majestic mountains, and serene lakes. From the vibrant colors of a sunset to the soothing sounds of a flowing river, explore the wonders that nature has to offer. Learn about the importance of conservation and sustainable living as we strive to preserve these breathtaking landscapes for future generations.`, category: "Technology", image: "http://127.0.0.1:5501/images/blog.jpg" },
    { title: "Unleashing Creativity: The Art of Mindful Expression", content: `Creativity is not just reserved for artists; it's a powerful tool for everyone. This blog post delves into the world of mindful expression and how engaging in creative activities can positively impact your mental well-being. Whether it's painting, writing, or even cooking, discover the joy of expressing yourself and tapping into your innate creativity. We'll share tips on incorporating creative practices into your daily life, fostering a more balanced and fulfilled existence.`, category: "Travel", image: "http://127.0.0.1:5501/images/blog.jpg" },
    // Add more blog data as needed
];

document.addEventListener("DOMContentLoaded", function () {
    loadBlogPosts(blogData);
});

function loadBlogPosts(data) {
    var container = document.getElementById("blogContainer");

    container.innerHTML = "";

    data.forEach(post => {
        var blogPost = document.createElement("div");
        blogPost.className = "blog-post";
        
        blogPost.innerHTML = `
            <img src="${post.image}" alt="Blog Image">
            <h2>${post.title}</h2>
            <p>${post.content.substring(0, 100)}...</p>
            <p>Category: ${post.category}</p>
            <a href="#" onclick="showFullPost('${post.title}', '${post.content}', '${post.image}')">Read More</a>
        `;

        container.appendChild(blogPost);
    });
}

function showFullPost(title, content, image) {
    var modal = document.getElementById("myModal");
    var modalTitle = document.getElementById("modalTitle");
    var modalImage = document.getElementById("modalImage");
    var modalContent = document.getElementById("modalContent");

    modalTitle.textContent = title;
    modalImage.src = image;

    // Replace line breaks with spaces in the content
    content = content.replace(/\n/g, ' ');

    // Use innerHTML instead of textContent to support HTML tags
    modalContent.innerHTML = content;

    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function addNewBlogPost() {
    var title = document.getElementById("blogTitle").value;
    var content = document.getElementById("blogContent").value;
    var image = document.getElementById("blogImage").value;

    if (title && content && image) {
        blogData.push({ title: title, content: content, category: "General", image: image });
        loadBlogPosts(blogData);
        document.getElementById("blogTitle").value = "";
        document.getElementById("blogContent").value = "";
        document.getElementById("blogImage").value = "";
        closeModal();
    } else {
        alert("Please enter title, content, and image URL.");
    }
}

function filterByCategory() {
    var selectedCategory = document.getElementById("categoryFilter").value;

    if (selectedCategory === "all") {
        loadBlogPosts(blogData);
    } else {
        var filteredData = blogData.filter(post => post.category === selectedCategory);
        loadBlogPosts(filteredData);
    }
}