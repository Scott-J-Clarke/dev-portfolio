import profileImage from '../public/scott-photo.jpg';

function About() {
    return (
        <div className='p-5'>
            <h1>About Me</h1>
            <img src={profileImage} style={{ width: '15%' }} alt='profile photo' />
            <p>
                <span className="italic">I'm a listener, learner, reader, and writer. What does that mean?</span><br /><br />

                    As a teacher for 15 years, I did a lot of listening. I listened to students, colleagues, and
                    parents. I learned to listen closely, to give each person my full attention, and to paraphrase
                    back what I thought they had just said, asking the person to correct me. If you listen well, you can help
                    someone sort out what they think.<br /><br />

                    If you listen, you will learn. In the past year, I've learned how to build basic web applications using
                    technologies like MongoDB, Express, React, Node.js, and JavaScript. I've learned how to write documentation
                    and deploy these creations to GitHub and Heroku.<br /><br />

                    I enjoy reading. I did my undergraduate degree in English and history, which meant I was reading for
                    hours and hours each day. As a teacher, I read to prepare better lessons, and as a programmer I
                    read to improve my code.<br /><br />

                    Writing is thinking. It's last on this list because when I write I gather in what I've heard,
                    learned, and read, and try to create something with it. Writing is simple but not easy.
            </p>
        </div>
    );
}

export default About;                        