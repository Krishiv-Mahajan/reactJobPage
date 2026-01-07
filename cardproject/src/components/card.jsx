import React from 'react'
import { Bookmark } from 'lucide-react'
import BookmarkButton from './bookmarkc'

const Card = (props) => {
  return (
    <div>
        <div className='big'>
        <div className='top'>
          <div className='ico'>
            <img src={props.companyLogo} alt={`${props.company} logo`}></img>
            <Bookmark />
          </div>
          <div className='innt'>
            <div className='detail'>
              <h4> {props.company} <span>{props.postedSince}</span></h4>
              <h3>{props.position}</h3>
            </div>
            <div className='mid'>
              <button><b>{props.employmentType}</b></button>
              <button><b>{props.level}</b></button>
            </div>
          </div>
          
        </div>
        
        <div className='bottom'>
          <hr></hr>
          <div className='inn'>
            <div className='lp'>
            <h4>{props.salary}</h4>
            <h5>{props.location}</h5>
            </div>
            <button id='apply'>Apply Now</button>
        </div>
          </div>
          
      </div>
    </div>
  )
}

export default Card