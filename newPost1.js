function User (obj){
  this.id = obj.id || null;
  this.name = obj.name || "";
	this.todos= obj.todo || [];
  this.posts = obj.posts || [];

	this.url =  function(){
		return `https://jsonplaceholder.typicode.com/users/${ this.id }`;
	};
	this.todosUrl = function(){
		return `${ this.url() }/todos`;
	};
  this.postsUrl = function(){
    return `${ this.url() }/posts`;
  };
  this.commentsUrl = function(){
    return `https://jsonplaceholder.typicode.com/posts/${this.id}/comments`;
  }

	this.fetch = function(){
		return fetch(this.url())
		.then(response => response.json())
		.then(data => {
			this.name = data.name;
			return Promise.resolve(this);
		})
		 };
	this.loadTodos = function(){
		return fetch(this.todosUrl())
		.then(response => response.json())
		.then(data => {
			this.todos = data.map(todo => new Todo(this,todo));
			return Promise.resolve(this);
		});
  };
	  this.loadPosts = function(){
 		return fetch(this.postsUrl())
 		.then(response => response.json())
 		.then(data => {
 			this.posts = data.map(post => new Post(this,post));
 			return Promise.resolve(this);
 		});
 };
 this.loadComments = function () {
   return fetch(this.commentsUrl())
   .then(response => response.json())
   .then(data => {
     //this.comments = data.map(comment => new Comment(this,comment));
     return Promise.resolve(this);
   });
 };

};

// post constructor

function Post (user, obj){
	this.user = user;
	this.id = obj.id || null;
	this.title = obj.title || "";
	this.body = obj.body || "";
	/*this.fetch = function(){
		 return fetch(this.Url())
 	.then(response => response.json())
		.then(data => {
			this.name = data.name;
			return Promise.resolve(this);
	 	})
	 	 };*/

}
// comments Constructor
function Comment (user, post){
  this.user = user;
  this.id = post.id || null;
  this.title = post.title || "";
}



let Ibrahim = new User({id : 1});
Ibrahim
.fetch()
.then(() => Ibrahim.loadTodos())
.then(() => Ibrahim.loadPosts())
//.then(() => Promise.all( Ibrahim.posts.map(post => post.loadComments())))
.then(()=>Ibrahim.loadComments())
.then(() => console.log("Ibrahim with todos:", Ibrahim))
 .then(() => console.log("Ibrahimwith todos:", JSON.stringify(Ibrahim.posts[0].comments)))
;

let myClass = new User({id : 2});
myClass
.fetch() // load the data
.then(() => myClass.loadTodos()) // load the todos
.then(() => myClass.loadPosts())
.then(()=>myClass.loadComments())
.then(() => console.log("myClass with todos:", myClass ));

function Todo (user, obj){
	this.user = user;
	this.id = obj.id || null;
	this.title = obj.title || "this was good chapter";
	this.lastHomeWork = obj.lastHomeWork|| false;

	// new method how to get return values
	this.lastHomeWork = function(){
		if(this.lastHomeWork)
			return `Todo id ${this.id} of user ${this.user.id} is lastHomeWork.`;
		else
			return `Todo id ${this.id} of user ${this.user.id} is lastHomeWork.`;
	}
}
