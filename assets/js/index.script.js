const posts = [];
let postIndex = -1;

function savePost(){
    const title = document.getElementById('title').value;
    const resume = document.getElementById('resume').value;
    const publisher = document.getElementById('publisher').value;
    const date = document.getElementById('date').value;

    if(postIndex == -1){


    
    if(title && resume && publisher && date){
        storePost(title, resume, publisher, date);
        cleanFields();
     

}
    }else{
        if(title && resume && publisher && date){
            posts[postIndex] = {
                title,
                resume,
                publisher,
                date
            }
            showPosts();
            postIndex = -1;
            cleanFields();
        }

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
   document.getElementById("list").classList.remove("hidden");
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
function cleanFields(){
    document.getElementById('title').value = '';
    document.getElementById('resume').value = '';
    document.getElementById('publisher').value = '';
    document.getElementById('date').value = '';
}
function editPost (index){
    postIndex = index;

    const post = posts[index];

    document.getElementById('title').value = post.title;
    document.getElementById('resume').value = post.resume;
    document.getElementById('publisher').value = post.publisher;
    document.getElementById('date').value = post.date;


}
function removePost(index){
    posts.splice(index, 1);
    showPosts();
    if(posts.length == 0){  
        document.getElementById("list").classList.add("hidden");

    }
  
}
