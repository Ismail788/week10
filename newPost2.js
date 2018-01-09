class User {
  constructor(id) {
  this.id = id;
  //this.name = name;
  //this.posts =posts;
  //this.comments;
  //this.posts =posts;
  //this.commentes = commentes;

}
url(){
  return `https://jsonplaceholder.typicode.com/users/${this.id}`;
}
fetch(){
  return fetch(this.url())
  .then(response => response.json())
  .then(data =>{
    this.name = data.name;
    return promise.resolve(this);
  });
}
  todosUrl(){
    return `${ this.url() }/todos`;
  }
  loadTodos(){
    return fetch(this.todosUrl())
  .then(response => response.json())
  .then(data => {
    this.todos = data;
    return Promise.resolve(this);
  });
  }
  //}
postsUrl(){
  return `${ this.url() }/posts`;
}
loadPosts(){
  return fetch(this.postsUrl())
  .then(response => response.json())
  .then(data => {
    this.posts = data;
    return promise.resolve(this);
  });
}

commentsUrl(){
  return //`${ this.url() }/posts`;
}
loadComments(){
  return fetch(this.commentsUrl())
  .then(response => response.json())
  .then(data => {
    this.comments = '';
    return promise.resolve(this);
  });
}
}
let Ibrahim = new User (1);
console.log(Ibrahim);
