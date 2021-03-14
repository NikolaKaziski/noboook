import React from 'react';
import Story from "./Story"
import './StoryReel.css';

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story 
            image="https://digitalsynopsis.com/wp-content/uploads/2017/12/funny-agency-life-creative-designer-copywriter-memes-1.jpg"
            profileSrc="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_thumb-732x549.jpg"
            title="funny"
            />
            <Story 
            image="https://img.delicious.com.au/WqbvXLhs/del/2016/06/more-the-merrier-31380-2.jpg"
            profileSrc="https://i.pinimg.com/originals/de/97/55/de975595890f0ed79238dc4d61532777.jpg"
            title="eat"
            />
            <Story 
            image="https://i.insider.com/5c799c56eb3ce834ad57b632?width=750&format=jpeg&auto=webp"
            profileSrc="https://kottke.org/plus/misc/images/ai-faces-01.jpg"
            title="angry"
            />
         
            
        </div>
    )
}

export default StoryReel
