import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='answers'>
            <h1 className='text-center'>Question & Answers</h1>
            <h4>1)Difference between authorization and authentication</h4>
            <p>=There are some major differences between authorization and authentication, although these two might seem similar. We we verify who is the user, or the process of verifying a user is known as authentication. On the other hand to check the access level of the user in different section of our system we use authorisation. With authorisation we can check if a certain user has the right to view or edit a certain system or section or data.</p>
            <h4>2)Why are you using firebase? What other options do you have to implement authentication?</h4>
            <p>=Firebase is one of the most popular and well known service to use for authentication. Firebase is backed by Google which makes it more reliable to use in our daily to daily project. And it has beautiful documentation which make it very easy to use and implement in our system. Few popular alternatives of firebase authentication are Passport, Okta, Auth0 etc.</p>
            <h4>3)What other services does firebase provide other than authentication?</h4>
            <p>=Firebase has a wide range of usages other than the firebase authentication. It provides good hosting and cloud storage services. It also has a powerful sub service Google Analytics, which helps the developer to track website performance, user activities across the website and many more.</p>

        </div>
    );
};

export default Blogs;