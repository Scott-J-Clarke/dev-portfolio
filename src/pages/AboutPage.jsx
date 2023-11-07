import profileImage from '../assets/profile/scott-photo.jpg';

export default function AboutPage() {
    return (
        // <div className="container mx-auto px-4"> Comment out styling. 
        <div>
            <h1>About Me</h1>
            <img src={profileImage} style={{ width: '15%' }} alt='profile' />
            <p>
                I am a listener, learner, reader, and writer. <br/> <br/>
                Before becoming a web developer, I was a teacher for 15 years. Most of my career was spent teaching  elementary and middle school students at two private schools in Taiwan. <br/> <br/>
                As a teacher, I had to listen closely to my students to understand what they were trying to say because many of them were shy and almost all of them spoke English as their second language. <br/> <br/>
                Teaching made me into a better learner. I taught English, science, social studies, and drama, and there were always new concepts to understand and transmit to my students. <br/> <br/>
                Reading has been a part of my life for as long as I can remember. There was tons of reading to do as a teacher, and I continue to read as a web developer, but now I'm reading code and about coding! <br/> <br/>
                Finally, after listening, learning, and reading, I write. In the past, I wrote reading passages and made handouts for my students, and these days I'm writing code for my personal projects.
            </p>
        </div>
    );
}
