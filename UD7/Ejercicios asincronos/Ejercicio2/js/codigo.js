window.onload=function(){
    delay(3000).then(() => alert('runs after 3 seconds'));
}

function delay(ms) {
    return new Promise((resolve,reject)=>{
        setTimeout(
            function(){resolve();},ms
        )
    });
}
