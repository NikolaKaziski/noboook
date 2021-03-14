import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            <Post 
            profilePic="https://mymodernmet.com/wp/wp-content/uploads/2021/01/morphy-me-celebrity-face-mashups-15.jpg"
            message="it works"
            timestamp="21.00"
            username="random person"
            image="https://cdn-images.welcometothejungle.com/5DDbrp9_kdlw05Z0hzc7kYEpaaruHhUUWJqs-nW1o8k/rs:auto:980::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9jYXRlZ29yeS9jb3Zlci8yNjYwLzE1NDg4My9jb2xsZWN0aW9uX2NhdGVnb3J5X2JlaGluZF90aGVfY29kZS5qcGc"
            />
            <Post 
            profilePic="https://c0.anyrgb.com/images/861/570/people-portrait-woman-human-person-face-girl-female-fashion-reference.jpg"
            message="it works"
            timestamp="21.00"
            username="random girl"
            image="https://code.org/shared/images/social-media/codeorg2020_social.png"
            />
            
        </div>
    )
}

export default Feed
