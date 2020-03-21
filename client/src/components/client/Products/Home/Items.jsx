import React from 'react';
import styled from 'styled-components';
const Items = () => {
    const ProductList = [
        {
            id: '1',
            title: "Gift pack one ",
            price: '900',
            img: '/images/1.jpg',
            slug: 'gift-one'

        },
        {
            id: '2',
            title: "Gift pack two",
            price: '1200',
            img: '/images/2.jpg',
            slug: 'gift-two'

        },
        {
            id: '3',
            title: "Gift pack tree ",
            price: '900',
            img: '/images/3.jpg',
            slug: 'gift-tree'

        },

    ];
    return (
        <ItemsComponent className="products">
            <div className="container">
                <div className="row">
                    <h2 className="how-we-work__first-title">
                        Our products
                    </h2>
                </div>
                <div className="row">
                    <ul className="products__product-list">
                        { ProductList.map( item =>(
                            <li key={item.id}>
                                <img src={item.img} alt="Item" />
                                <div className="products__content">
                                    <h3>{item.title}</h3>
                                    <a
                                        href="/"
                                        data-id={item.id}
                                        data-priec={item.price}
                                    >
                                        Buy
                                    </a>
                                </div>


                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </ItemsComponent>
    )
};
const ItemsComponent = styled.section`
  padding-top: 60px;
  .how-we-work__first-title{
      text-align: center;
      width: 100%;
  }
   
    
    
  .products__product-list{
      margin: 0 -5px;
      padding: 0;
      display: flex;
      li{
        list-style: none;
        padding: 5px;
        h3{
            margin-bottom: 0;
        }
        .products__content{
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          a{
            text-decoration: none;
            color: var(--theme-color);
            transition: all .3s;
            &:hover{
              opacity: .5;
            }
          }
          
        }
      }
    }
  }

`;
export  default Items;