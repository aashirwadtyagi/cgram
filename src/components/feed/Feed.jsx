import './Feed.css'
import Share from '../share/Share.jsx'
import Post from '../posts/Post.jsx'
import {Posts} from '../../dummyData.js'

function feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {Posts.map(p=>(
          <Post key={p.id} post={p}/>
        ))}
        
        
      </div>
    </div>
  )
}

export default feed
