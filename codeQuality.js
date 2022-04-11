// level {1/2/3}
// #Level 1

async function GET_daTA() {
    let r = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let DATA = await r.json();
    return DATA;
}

const GET_daTA = async () =>{
    let r = await fetch("https://jsonplaceholder.typicode.com/todos/1");
}

GET_daTA().then(data => console.log(DATA));


// #Level 2
async function getUsers() {
    let doc = await Promise.all(getUser(), getProfile(), getPosts());
  
    let user = doc[0];
    let Profile = doc[1];
    let p = doc[2];
  
    const userProfile = {
      user,
      Profile,
      posts: p
    };
  
    return userProfile;
  }