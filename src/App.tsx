import { useEffect } from 'react'
import './App.css'
import { usePostsStore } from './store/storePosts'

function App() {
 const getPosts =  usePostsStore(state=> state.getAllPosts)
 const deletePosts =  usePostsStore(state=> state.deletePost)
 const posts =  usePostsStore(state=> state.posts)
 useEffect(()=>{getPosts()}, [])

 const deleteSelectedPost = (id: number) => {
  deletePosts(id)
 }
  return (
    <div className=''> 
    {
      posts?.map((item)=> (
        <div className='card' key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <button onClick={() => deleteSelectedPost(item.id)}>delete</button>
        </div>
      ))
    }
    <div className="new_post"></div>
    </div>
  )
}

export default App
