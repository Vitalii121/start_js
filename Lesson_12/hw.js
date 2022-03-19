// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб
// отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(post => post.json())
    .then(posts=>{
        let wrap= document.createElement('div')
        wrap.classList.add('wrap')
        for (const post of posts) {
            let createDiv= document.createElement('div')
            createDiv.classList.add('cardPost')
            createDiv.innerHTML=`
                        <h2>ID: ${post.id}</h2>
                        <h4>Title: ${post.title}</h4>
                        <h5>Body: ${post.body}</h5>
            `
            wrap.append(createDiv);
            document.body.append(wrap)
        }
    });


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі
// на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments



fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        let wrap = document.createElement('div');
        wrap.classList.add('wrap');
        wrap.classList.add('wrap2');
        for (const comment of comments) {
            let divCard = document.createElement('div');
            divCard.classList.add('comment');
            divCard.classList.add('cardPost');
            divCard.innerHTML = `
                        <h2>ID: ${comment.id}</h2>
                        <h3>Name: ${comment.name}</h3>
                        <h4>Email: ${comment.email}</h4>
                        <h5>Body: ${comment.body}</h5>
                        `;
            wrap.append(divCard);
            document.body.append(wrap);
        }
    })