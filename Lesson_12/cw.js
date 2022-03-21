//
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста


fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json();
    })
    .then(posts => {
        let wrap = document.createElement('div')
        wrap.classList.add('wrap');
        for (const post of posts) {
            let divPost = document.createElement('div')
            divPost.classList.add('postCard')
            divPost.innerHTML = `
            <h2>ID ${post.id}</h2> 
            <h3>Title ${post.title}</h3> 
            <h4>Body ${post.body}</h4> 
            `
            let button = document.createElement('button');
            button.innerHTML = '<b>click</b>'
            button.classList.add('btn');
            button.onclick = (id) => {
                fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                    .then(response => response.json())
                    .then(comments => {
                        for (const comment of comments) {
                            if(post.id === comment.postId){
                                let divComment= document.createElement('div')
                                divComment.classList.add('postComment')
                                divComment.classList.add('postCard')
                                divComment.innerHTML=`
                                  <h2>ID ${comment.id}</h2>
                                  <h3>Name ${comment.name}</h3>
                                  <h4>Email ${comment.email}</h4> 
                                  <h4>Body ${comment.body}</h4>
                                `
                                divPost.append(divComment);
                            }
                            button.disabled=true;
                                }

                    })
            }
            divPost.append(button)
            wrap.append(divPost)
            document.body.append(wrap);
        }
    })










