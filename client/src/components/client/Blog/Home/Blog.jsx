import React from 'react';
import styled from 'styled-components';
const Blog = () => {
    const BlogList = [
        {
            id: '1',
            title: "Database to find the gifts for your girlfriend",
            anons: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
            slug: 'blog-item-one'

        },
        {
            id: '2',
            title: "How Artificial Intelligence read your mind to find the best gift",
            anons: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
            slug: 'blog-item-two'

        },

    ];
    return (
        <BlogComponent className="blog-related">
            <div className="container">
                <div className="row">
                    <h2 >
                        Our Best Blogs Ever
                    </h2>
                </div>
                <div className="row">
                    <ul className="blog-related__list  row">
                        { BlogList.map( item =>(
                            <li key={item.id} className="col-lg-6 col-12">
                                <div className="blog-related__item_wrapper">
                                 <h3>
                                     {item.title}
                                 </h3>
                                <div className="blog-related__content">
                                    <div className="blog-related__anons">
                                        {item.anons}
                                    </div>
                                    <a href={`/blog/${item.slug}`} className="blog-related__link">
                                        Read More
                                    </a>
                                </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </BlogComponent>
    )
};
const BlogComponent = styled.section`
  padding: 50px 0 0;
  h2{
    text-align: center;
    width: 100%;
  }
  .blog-related__list{
    margin: 0;
    padding: 0;
    li{
      list-style: none;
      margin-bottom: 50px;
      
      .blog-related__item_wrapper{
        padding: 30px;
        background: #FFFFFF;
        box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.05);
        border-radius: 5px;
      }
      .blog-related__link{
        color: var(--theme-color);
        text-decoration: none;
        transition: all .3s;
        padding-top: 20px;
        &:hover{
          opacity: .5;
        }
      }
    }
  }
  

`;
export default Blog;