const posts = [];

function savePost(){
    const title = document.getElementById('title').value;
    const resume = document.getElementById('resume').value;
    const publisher = document.getElementById('publisher').value;
    const date = document.getElementById('date').value;

    if(title && resume && publisher && date){
        storePost(title, resume, publisher, date);
     

}

}
function storePost(title, resume, publisher, date){
    const post = {
        title,
        resume,
        publisher,
        date
    };

    posts.push(post); 
    showPosts();
    console.log(post);
    console.log(posts);

}
function showPosts(){
    let showContent = '';

    posts.forEach((post, index) => {
        showContent += `
            <div class="post"><h2>${post.title}</h2>
            <p><strong>Resumo</strong>${post.resume}</p>
            <p><strong>Publicado por</strong>${post.publisher}</p>
            <p><strong>Data de publicação</strong>${post.date}</p>

            <button onclick="editPost(${index})">Editar</button>
            <button onclick="removePost(${index})">Remover</button>

          
            </div>

        `;

})
document.getElementById('list').innerHTML = showContent;
}

