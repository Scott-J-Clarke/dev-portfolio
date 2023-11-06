import profileImage from '../assets/profile/scott-photo.jpg';

export default function AboutPage() {
    return (
        // <div className="container mx-auto px-4"> Comment out styling. 
        <div>
            <h1>About Me</h1>
            <img src={profileImage} style={{ width: '15%' }} />
            <p>
                I am a listener, learner, reader, and writer. 
            </p>
        </div>
    );
}
