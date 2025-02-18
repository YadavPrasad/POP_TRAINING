// async function asAw(){
//     console.log("Hello");
// }

// async function asAw(){
//     var a = 15
//     setTimeout(function(){
//         console.log("hello");
//     }, 5000)
//     console.log(await a);
// }
// console.log(asAw());
// asAw().then((res) =>{
//     console.log(res);
// }).catch((res) => {
//     console.log("res");
// })

//console.log(await asAw());

//Instagram console Demo for post, like, comment, share


async function postCode(){
    var post = new Promise((createPost) => {
        createPost("Post created successfully")
    })
    console.log(await post);
    console.log(await likeCode);
}

postCode()

likeCode = () => {
    return new Promise((likePost) => {
        setTimeout(() => {
            likePost("Post liked successfully");
        })
    })
}
