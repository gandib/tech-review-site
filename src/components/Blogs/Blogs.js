import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <h2 className='blog-header'>Question and Answer</h2>
            <div className='container'>
                <h4 className='blog-question'>What is the purpose of Context API?</h4>
                <p className='blog-text'>Answer: React context is an essential tool for every React developer to know. React context allows us to pass down and use data in whatever component we need in our React app without using props. In other words, React context allows us to share data across our components more easily. React context is great when you are passing data that can be used in any component in your application. Data should be placed on React context that does not need to be updated often.</p>

                <h4 className='blog-question'>What is Symantic Tag?</h4>
                <p className='blog-text'>Answer: Semantic tags clearly define the purpose of the HTML element. It also describes the type of content that the element should contain. For example, header, footer, article are considered semantic elements as they clearly describe their purpose and the type of content they should enclose.
                    New HTML5 semantic tags to structure the document in a meaningful way are: header, nav, article, section, aside, footer. Semantic tags also help search engines to parse the webpage correctly and find accurate information. Thus, helping search engines to correctly index the page. </p>
            </div>
        </div>
    );
};

export default Blogs;