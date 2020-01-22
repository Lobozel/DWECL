const posts = [
    {title: "Post1", body: "This is post one"},
    {title: "Post2", body: "This is post two"}
];

function getPosts(){
    setTimeout(()=> 
    {
        let output =``;
        posts.forEach( (post, index) => {
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }
    , 1000);
}

function createPost (newPost, resolve) {
    setTimeout( () => { 
        posts.push(newPost);
        resolve();
     } , 2000);
}

let promesa = new Promise(function(resolve, reject){
    createPost(
        {title: "Post3",
        body: "This is post three"},
        resolve);
});
promesa.then(getPosts);