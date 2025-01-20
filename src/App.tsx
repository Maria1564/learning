import { useEffect, useRef } from "react";
import "./App.css";
import { usePostsStore } from "./store/storePosts";

function App() {
  const inpTitle = useRef<HTMLInputElement | null>(null);
  const inpDescription = useRef<HTMLTextAreaElement | null>(null);

  const getPosts = usePostsStore(state => state.getAllPosts);
  const deletePosts = usePostsStore(state => state.deletePost);
  const createNewPost = usePostsStore(state => state.createNewPost);

  const posts = usePostsStore(state => state.posts);

  useEffect(() => {
    getPosts();
    const unsubscribeState  =usePostsStore.subscribe(({posts}, prevState)=> {
      console.log("state >> ", posts),
      console.log("prevState >> ", prevState.posts)
    })

    return () => unsubscribeState()
  }, []);

  const deleteSelectedPost = (id: number) => {
    deletePosts(id);
    
  };

  const handlerClick = () => {
    if (inpTitle.current && inpDescription.current) {
      createNewPost({
        id: posts[posts.length - 1].id + 1,
        title: inpTitle.current.value,
        description: inpDescription.current.value,
      });
    }
  };
  return (
    <div className="">
      <div className="new_post">
        <h2>New post</h2>
        <input ref={inpTitle} type="text" placeholder="title" />
        <textarea ref={inpDescription} placeholder="description" />
        <button onClick={handlerClick}>create</button>
      </div>
      {posts?.map(item => (
        <div className="card" key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <button onClick={() => deleteSelectedPost(item.id)}>delete</button>
        </div>
      ))}
      <div className="new_post"></div>
    </div>
  );
}

export default App;
