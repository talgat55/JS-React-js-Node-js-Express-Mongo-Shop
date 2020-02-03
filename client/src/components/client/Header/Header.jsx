import React from 'react';
import styled from 'styled-components';

const Header = () => {
    const linkList = [
        {
            key: '1',
            name: 'Home',
            link: '/'
        },
        {
            key: '2',
            name: 'About Us',
            link: '/about'
        },
        {
            key: '3',
            name: 'Services',
            link: '/service'
        },
        {
            key: '4',
            name: 'Blogs',
            link: '/blog'
        },


    ];
    return (
        <HeaderComponent className="header">
            <div className="container">
                <div className="row">
                    <div className="header-main_wrap  w-100 justify-content-between  align-items-center  d-flex">
                        <div className="header-main_wrap-logo">
                            <a href="/" className="header-main_wrap-logo-link">
                                <svg width="43" height="32" viewBox="0 0 43 32" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.8428 11.2344C11.8545 11.4102 11.8193 11.5801 11.7373 11.7441C11.667 11.9082 11.6025 12.0547 11.5439 12.1836L10.9814 12.7812L10.6475 13.7832C10.5186 13.877 10.3779 13.9707 10.2256 14.0645C10.085 14.1465 9.95605 14.2344 9.83887 14.3281C9.70996 14.4336 9.59277 14.5508 9.4873 14.6797C9.39355 14.8086 9.28809 14.9199 9.1709 15.0137C9.05371 15.1074 8.91309 15.1895 8.74902 15.2598C8.59668 15.3184 8.45605 15.3887 8.32715 15.4707C8.09277 15.6113 7.87012 15.7578 7.65918 15.9102C7.45996 16.0625 7.24902 16.209 7.02637 16.3496C6.96777 16.373 6.9209 16.4023 6.88574 16.4375C6.8623 16.4609 6.82129 16.4844 6.7627 16.5078C6.72754 16.5312 6.5752 16.5781 6.30566 16.6484C6.03613 16.7188 5.7373 16.8008 5.40918 16.8945C5.09277 16.9766 4.79395 17.0527 4.5127 17.123C4.23145 17.1934 4.07324 17.2285 4.03809 17.2285C3.82715 17.252 3.61035 17.2637 3.3877 17.2637C3.16504 17.2637 2.94238 17.2695 2.71973 17.2812L2.45605 17.4395C2.32715 17.3457 2.18652 17.2578 2.03418 17.1758C1.88184 17.0938 1.75293 17.0059 1.64746 16.9121C1.53027 16.8066 1.41309 16.6895 1.2959 16.5605C1.17871 16.4199 1.07324 16.291 0.979492 16.1738C0.920898 16.0098 0.862305 15.8516 0.803711 15.6992C0.745117 15.5352 0.698242 15.377 0.663086 15.2246L0.575195 14.5566C0.551758 14.334 0.52832 14.1172 0.504883 13.9062C0.493164 13.6953 0.475586 13.4785 0.452148 13.2559C0.651367 12.7051 0.827148 12.1543 0.979492 11.6035C1.14355 11.041 1.34277 10.4902 1.57715 9.95117C1.63574 9.82227 1.68848 9.69336 1.73535 9.56445C1.79395 9.42383 1.85254 9.28906 1.91113 9.16016C1.98145 9.01953 2.05762 8.89062 2.13965 8.77344C2.22168 8.64453 2.29199 8.51562 2.35059 8.38672C2.40918 8.24609 2.45605 8.10547 2.49121 7.96484C2.52637 7.8125 2.57324 7.67188 2.63184 7.54297C2.66699 7.47266 2.72559 7.37305 2.80762 7.24414C2.88965 7.10352 2.97754 6.96289 3.07129 6.82227C3.16504 6.66992 3.25293 6.52344 3.33496 6.38281C3.42871 6.24219 3.50488 6.13086 3.56348 6.04883C3.65723 5.93164 3.75098 5.82031 3.84473 5.71484C3.93848 5.60938 4.01465 5.49219 4.07324 5.36328C4.19043 5.16406 4.30176 4.91211 4.40723 4.60742C4.5127 4.30273 4.62988 4.0332 4.75879 3.79883C4.89941 3.54102 5.06348 3.30078 5.25098 3.07812C5.4502 2.84375 5.63184 2.60352 5.7959 2.35742C5.97168 2.11133 6.1416 1.8418 6.30566 1.54883L7.0791 0.986328L7.43066 1.33789L8.27441 1.19727L8.80176 1.98828C8.77832 2.16406 8.74902 2.36328 8.71387 2.58594C8.69043 2.80859 8.66699 3.03711 8.64355 3.27148C8.63184 3.49414 8.62012 3.7168 8.6084 3.93945C8.6084 4.15039 8.62012 4.33789 8.64355 4.50195C8.58496 4.71289 8.49707 4.93555 8.37988 5.16992C8.27441 5.39258 8.15137 5.58594 8.01074 5.75L7.94043 6.69922L7.2373 7.33203L7.14941 8.22852L6.55176 8.93164C6.5166 9.0957 6.48145 9.26562 6.44629 9.44141C6.41113 9.60547 6.36426 9.76367 6.30566 9.91602C6.24707 10.0566 6.17676 10.2031 6.09473 10.3555C6.0127 10.4961 5.93066 10.6426 5.84863 10.7949C5.61426 10.9941 5.37402 11.2168 5.12793 11.4629C4.88184 11.709 4.65918 11.9551 4.45996 12.2012C4.35449 12.3301 4.25488 12.4707 4.16113 12.623C4.0791 12.7637 3.99121 12.8984 3.89746 13.0273C3.59277 13.4141 3.26465 13.7773 2.91309 14.1172C2.56152 14.457 2.21582 14.8086 1.87598 15.1719L2.2627 15.8574C2.50879 15.9395 2.76074 16.0156 3.01855 16.0859C3.27637 16.1562 3.53418 16.2207 3.79199 16.2793C3.90918 16.2559 4.04395 16.2324 4.19629 16.209C4.34863 16.1738 4.50684 16.1387 4.6709 16.1035C4.83496 16.0566 4.99316 16.0098 5.14551 15.9629C5.30957 15.916 5.44434 15.8691 5.5498 15.8223C5.78418 15.7285 6.05371 15.5938 6.3584 15.418C6.66309 15.2305 6.9209 15.0664 7.13184 14.9258C7.50684 14.6914 7.8877 14.4512 8.27441 14.2051C8.66113 13.959 9.03027 13.7012 9.38184 13.4316C9.61621 13.2559 9.8623 13.0332 10.1201 12.7637C10.3779 12.4941 10.6182 12.2422 10.8408 12.0078C11.0752 11.7617 11.2803 11.5625 11.4561 11.4102C11.6436 11.2578 11.7725 11.1992 11.8428 11.2344ZM7.06152 2.91992C6.81543 3.33008 6.55176 3.72852 6.27051 4.11523C6.00098 4.49023 5.74902 4.88281 5.51465 5.29297C5.43262 5.43359 5.3623 5.58008 5.30371 5.73242C5.24512 5.87305 5.16895 6.01367 5.0752 6.1543C4.99316 6.2832 4.90527 6.41211 4.81152 6.54102C4.71777 6.66992 4.63574 6.81055 4.56543 6.96289C4.4248 7.23242 4.2959 7.51953 4.17871 7.82422C4.07324 8.11719 3.95605 8.4043 3.82715 8.68555C3.68652 8.9668 3.52246 9.23047 3.33496 9.47656C3.14746 9.72266 2.97754 9.98633 2.8252 10.2676L2.54395 10.8301C2.52051 10.8887 2.49707 10.9355 2.47363 10.9707C2.4502 10.9941 2.42676 11.0352 2.40332 11.0938C2.35645 11.2227 2.33301 11.3633 2.33301 11.5156C2.33301 11.668 2.31543 11.8086 2.28027 11.9375C2.24512 12.0781 2.19238 12.2129 2.12207 12.3418C2.05176 12.4707 1.9873 12.5996 1.92871 12.7285C1.87012 12.8574 1.82324 12.9922 1.78809 13.1328C1.75293 13.2617 1.71191 13.3906 1.66504 13.5195C1.75879 13.4258 1.8584 13.3438 1.96387 13.2734C2.08105 13.1914 2.19238 13.1035 2.29785 13.0098C2.40332 12.9043 2.50293 12.793 2.59668 12.6758C2.69043 12.5586 2.7959 12.4531 2.91309 12.3594C3.01855 12.2656 3.12988 12.1836 3.24707 12.1133C3.37598 12.0312 3.49902 11.9492 3.61621 11.8672C3.80371 11.6094 3.96777 11.3457 4.1084 11.0762C4.17871 10.9473 4.2373 10.8008 4.28418 10.6367C4.34277 10.4727 4.41309 10.3262 4.49512 10.1973C4.56543 10.0684 4.65332 9.94531 4.75879 9.82812C4.87598 9.71094 4.97559 9.58789 5.05762 9.45898C5.15137 9.33008 5.22754 9.19531 5.28613 9.05469C5.35645 8.91406 5.43262 8.7793 5.51465 8.65039C5.67871 8.39258 5.86035 8.14648 6.05957 7.91211L6.14746 6.80469L6.78027 6.06641L6.86816 5.39844L7.30762 4.7832L7.36035 3.79883L7.06152 2.91992ZM21.5283 11.4805C21.5752 11.6562 21.5576 11.8086 21.4756 11.9375C21.3936 12.0547 21.2822 12.1602 21.1416 12.2539C21.0127 12.3477 20.8662 12.4355 20.7021 12.5176C20.5498 12.5879 20.4209 12.6699 20.3154 12.7637C19.7881 12.8809 19.3076 12.9688 18.874 13.0273C18.4521 13.0742 17.9834 13.1387 17.4678 13.2207C17.3154 13.2441 17.1689 13.2441 17.0283 13.2207C16.8994 13.1855 16.7646 13.1738 16.624 13.1855C16.542 13.1855 16.4658 13.1855 16.3955 13.1855C16.3252 13.1738 16.2549 13.1738 16.1846 13.1855C15.915 13.209 15.7393 13.3027 15.6572 13.4668C15.5752 13.6191 15.5049 13.8008 15.4463 14.0117C15.3994 14.2109 15.335 14.4043 15.2529 14.5918C15.1826 14.7676 15.0244 14.8906 14.7783 14.9609C14.7549 15.0195 14.7607 15.0723 14.7959 15.1191C14.8428 15.166 14.8779 15.207 14.9014 15.2422C14.7021 15.3008 14.5674 15.4062 14.4971 15.5586C14.4385 15.7109 14.3857 15.8633 14.3389 16.0156C14.292 16.168 14.2217 16.2969 14.1279 16.4023C14.0459 16.5078 13.8818 16.543 13.6357 16.5078C13.2725 16.8945 12.8447 17.2051 12.3525 17.4395C11.8604 17.6855 11.3506 17.8438 10.8232 17.9141C10.7295 17.8672 10.6357 17.8086 10.542 17.7383C10.46 17.668 10.3721 17.6035 10.2783 17.5449C10.1963 17.4863 10.1025 17.4395 9.99707 17.4043C9.90332 17.3809 9.79199 17.3809 9.66309 17.4043C9.65137 17.1582 9.60449 16.9297 9.52246 16.7188C9.42871 16.5078 9.31152 16.3086 9.1709 16.1211C9.14746 15.9102 9.17676 15.7168 9.25879 15.541C9.3291 15.3535 9.40527 15.1719 9.4873 14.9961C9.56934 14.8203 9.63965 14.6445 9.69824 14.4688C9.74512 14.2812 9.7334 14.0703 9.66309 13.8359C9.78027 13.7656 9.85645 13.6836 9.8916 13.5898C9.93848 13.4961 9.96777 13.4023 9.97949 13.3086C10.0029 13.2031 10.0322 13.1094 10.0674 13.0273C10.1025 12.9336 10.1846 12.8574 10.3135 12.7988C10.2197 12.5176 10.2314 12.3125 10.3486 12.1836C10.4775 12.043 10.6299 11.9199 10.8057 11.8145C10.9814 11.709 11.1455 11.5918 11.2979 11.4629C11.4502 11.334 11.5088 11.1406 11.4736 10.8828C11.5439 10.8125 11.626 10.7539 11.7197 10.707C11.8135 10.6602 11.9014 10.6191 11.9834 10.584C12.0771 10.5371 12.165 10.4902 12.2471 10.4434C12.3291 10.3965 12.4053 10.332 12.4756 10.25C12.3936 10.1914 12.3525 10.1328 12.3525 10.0742C12.3643 10.0156 12.3818 9.95703 12.4053 9.89844C12.4287 9.82812 12.4521 9.75781 12.4756 9.6875C12.5107 9.61719 12.5107 9.54688 12.4756 9.47656C12.792 9.52344 13.0674 9.48242 13.3018 9.35352C13.5479 9.21289 13.7764 9.07227 13.9873 8.93164C14.21 8.79102 14.4326 8.69141 14.6553 8.63281C14.8779 8.57422 15.1357 8.64453 15.4287 8.84375C15.4521 8.92578 15.4873 9.04883 15.5342 9.21289C15.5928 9.36523 15.6455 9.52344 15.6924 9.6875C15.751 9.85156 15.8037 10.0098 15.8506 10.1621C15.8975 10.3145 15.9268 10.4258 15.9385 10.4961C15.9385 10.5547 15.9385 10.6484 15.9385 10.7773C15.9385 10.9062 15.9385 11.0469 15.9385 11.1992C15.9385 11.3398 15.9385 11.4746 15.9385 11.6035C15.9385 11.7324 15.9385 11.832 15.9385 11.9023C16.2783 12.1016 16.6182 12.2246 16.958 12.2715C17.2979 12.3066 17.6377 12.2246 17.9775 12.0254C18.1064 12.1426 18.2295 12.1777 18.3467 12.1309C18.4639 12.0723 18.5752 12.0078 18.6807 11.9375C18.7979 11.8672 18.915 11.832 19.0322 11.832C19.1494 11.8203 19.2666 11.9141 19.3838 12.1133C19.5479 11.9609 19.7178 11.8672 19.8936 11.832C20.0693 11.7852 20.251 11.7617 20.4385 11.7617C20.626 11.75 20.8076 11.7324 20.9834 11.709C21.1709 11.6855 21.3525 11.6094 21.5283 11.4805ZM14.7783 11.7793C14.7783 11.6035 14.8076 11.416 14.8662 11.2168C14.9248 11.0176 14.9717 10.8242 15.0068 10.6367C15.042 10.4375 15.0361 10.25 14.9893 10.0742C14.9541 9.89844 14.8428 9.74023 14.6553 9.59961C14.5264 9.66992 14.4209 9.76953 14.3389 9.89844C14.2568 10.0156 14.1748 10.1387 14.0928 10.2676C14.0107 10.3848 13.9111 10.4844 13.7939 10.5664C13.6885 10.6484 13.5479 10.6719 13.3721 10.6367C13.3135 10.7773 13.3135 10.8945 13.3721 10.9883C13.4307 11.0703 13.501 11.1523 13.583 11.2344C13.665 11.3047 13.7412 11.3809 13.8115 11.4629C13.8936 11.5449 13.9229 11.6504 13.8994 11.7793C13.9463 11.8145 14.0107 11.8496 14.0928 11.8848C14.1748 11.9082 14.2568 11.9258 14.3389 11.9375C14.4326 11.9375 14.5205 11.9258 14.6025 11.9023C14.6846 11.8789 14.7432 11.8379 14.7783 11.7793ZM14.6553 13.1855C14.4209 13.1855 14.2158 13.1328 14.04 13.0273C13.876 12.9102 13.7061 12.7812 13.5303 12.6406C13.3662 12.5 13.1904 12.3711 13.0029 12.2539C12.8271 12.125 12.6104 12.0488 12.3525 12.0254C12.2471 12.166 12.124 12.3008 11.9834 12.4297C11.8428 12.5469 11.7197 12.6758 11.6143 12.8164C11.5088 12.957 11.4326 13.1094 11.3857 13.2734C11.3506 13.4375 11.3799 13.625 11.4736 13.8359C11.2041 13.9648 11.0225 14.1523 10.9287 14.3984C10.835 14.6328 10.7705 14.8906 10.7354 15.1719C10.7119 15.4531 10.6885 15.7344 10.665 16.0156C10.6416 16.2969 10.5654 16.5488 10.4365 16.7715L10.8232 16.5078C10.8701 16.5312 10.9053 16.5664 10.9287 16.6133C10.9639 16.6602 10.9697 16.7129 10.9463 16.7715C11.04 16.6777 11.1455 16.6074 11.2627 16.5605C11.3799 16.502 11.4971 16.4609 11.6143 16.4375C11.7432 16.4023 11.8662 16.373 11.9834 16.3496C12.1123 16.3262 12.2354 16.291 12.3525 16.2441C12.6455 16.4082 12.8564 16.4434 12.9854 16.3496C13.1143 16.2559 13.2197 16.1152 13.3018 15.9277C13.3838 15.7402 13.4717 15.5469 13.5654 15.3477C13.6592 15.1367 13.8115 15.0078 14.0225 14.9609L13.8994 14.8379C14.0986 14.5918 14.2744 14.3398 14.4268 14.082C14.5908 13.8125 14.667 13.5137 14.6553 13.1855ZM31.917 11.9727C31.7881 12.1367 31.6885 12.3184 31.6182 12.5176C31.5479 12.7168 31.46 12.9043 31.3545 13.0801C31.2607 13.2559 31.1377 13.4023 30.9854 13.5195C30.8447 13.6367 30.6455 13.6895 30.3877 13.6777C30.2002 13.748 30.0596 13.877 29.9658 14.0645C29.8838 14.2402 29.8018 14.4219 29.7197 14.6094C29.6377 14.7852 29.5322 14.9316 29.4033 15.0488C29.2744 15.1543 29.0811 15.166 28.8232 15.084C28.4951 15.2246 28.1963 15.4121 27.9268 15.6465C27.6689 15.8691 27.4229 16.1035 27.1885 16.3496C27.1064 16.4316 27.0127 16.5371 26.9072 16.666C26.8018 16.7832 26.7021 16.8711 26.6084 16.9297C26.5264 16.9766 26.4443 16.9824 26.3623 16.9473C26.2803 16.9121 26.2041 16.877 26.1338 16.8418C26.0635 16.7949 25.9932 16.7715 25.9229 16.7715C25.8643 16.7715 25.8115 16.8242 25.7646 16.9297C25.8467 17.0938 25.8643 17.2051 25.8174 17.2637C25.7705 17.334 25.6943 17.3867 25.5889 17.4219C25.4834 17.457 25.3721 17.4863 25.2549 17.5098C25.1377 17.5332 25.0439 17.5742 24.9736 17.6328C24.833 17.7617 24.7334 17.9199 24.6748 18.1074C24.6162 18.2949 24.5635 18.4824 24.5166 18.6699C24.4697 18.8574 24.3994 19.0332 24.3057 19.1973C24.2236 19.373 24.083 19.5078 23.8838 19.6016C24.001 19.6836 24.0479 19.7656 24.0244 19.8477C24.0127 19.9297 23.9834 20.0117 23.9365 20.0938C23.8896 20.1875 23.8545 20.2754 23.8311 20.3574C23.8193 20.4395 23.8662 20.5215 23.9717 20.6035C23.7959 20.8262 23.6377 21.0664 23.4971 21.3242C23.3682 21.582 23.2393 21.8398 23.1104 22.0977C22.9814 22.3672 22.8408 22.625 22.6885 22.8711C22.5479 23.1289 22.3662 23.3574 22.1436 23.5566L22.1963 23.9785C22.0205 23.9316 21.9092 23.9375 21.8623 23.9961C21.8271 24.0547 21.8096 24.1367 21.8096 24.2422C21.8096 24.3477 21.8096 24.4531 21.8096 24.5586C21.8213 24.6758 21.7861 24.7637 21.7041 24.8223C21.6689 24.8691 21.6279 24.9043 21.5811 24.9277C21.5459 24.9512 21.5107 24.9805 21.4756 25.0156C21.1006 25.2969 20.8428 25.6543 20.7021 26.0879C20.6787 26.1582 20.6611 26.2285 20.6494 26.2988C20.6377 26.3691 20.6201 26.4453 20.5967 26.5273C20.5381 26.6914 20.4443 26.8613 20.3154 27.0371C20.1865 27.2129 20.0459 27.3945 19.8936 27.582C19.7412 27.7695 19.5947 27.9629 19.4541 28.1621C19.3135 28.373 19.2021 28.584 19.1201 28.7949C18.9326 28.7715 18.7861 28.7891 18.6807 28.8477C18.5635 28.918 18.4697 29.0059 18.3994 29.1113C18.3291 29.2285 18.2705 29.3516 18.2236 29.4805C18.1768 29.6094 18.1182 29.7207 18.0479 29.8145C17.9658 29.9199 17.8662 29.9961 17.749 30.043C17.6201 30.1016 17.4561 30.1016 17.2568 30.043L16.4658 30.7637C16.3252 30.6816 16.1904 30.6641 16.0615 30.7109C15.9209 30.7578 15.7861 30.8223 15.6572 30.9043C15.5166 30.9863 15.3818 31.0508 15.2529 31.0977C15.1123 31.1445 14.9658 31.127 14.8135 31.0449C14.7314 31.1387 14.6611 31.1855 14.6025 31.1855C14.5439 31.1973 14.4736 31.1504 14.3916 31.0449L14.1279 31.3262C13.9873 31.209 13.8174 31.0977 13.6182 30.9922C13.4072 30.8984 13.2139 30.7871 13.0381 30.6582C12.8623 30.541 12.7217 30.4004 12.6162 30.2363C12.5107 30.084 12.4932 29.8848 12.5635 29.6387C12.54 29.5684 12.5049 29.4922 12.458 29.4102C12.3994 29.3281 12.3525 29.2402 12.3174 29.1465C12.2822 29.0645 12.2588 28.9766 12.2471 28.8828C12.2354 28.8008 12.2588 28.7246 12.3174 28.6543C12.2119 28.4551 12.1768 28.25 12.2119 28.0391C12.2354 27.8398 12.2764 27.6406 12.335 27.4414C12.3936 27.2422 12.4404 27.043 12.4756 26.8438C12.5107 26.6445 12.4756 26.4453 12.3701 26.2461C12.5107 26.1406 12.6162 26.0059 12.6865 25.8418C12.7451 25.6777 12.8037 25.5078 12.8623 25.332C12.9092 25.1562 12.9619 24.9863 13.0205 24.8223C13.0791 24.6582 13.1787 24.5234 13.3193 24.418L13.3018 24.1367C13.8525 23.5508 14.4385 23.0117 15.0596 22.5195C15.6689 22.0391 16.3604 21.6816 17.1338 21.4473C17.2861 21.1777 17.4854 20.9785 17.7314 20.8496C17.9775 20.7324 18.2295 20.6211 18.4873 20.5156C18.7334 20.4219 18.9619 20.2988 19.1729 20.1465C19.3838 20.0059 19.542 19.7773 19.6475 19.4609C19.7061 19.5898 19.7646 19.6426 19.8232 19.6191C19.8818 19.6074 19.9404 19.5781 19.999 19.5312C20.0693 19.4961 20.1338 19.4668 20.1924 19.4434C20.251 19.4316 20.3096 19.4844 20.3682 19.6016C20.4854 19.25 20.6729 18.9688 20.9307 18.7578C21.2002 18.5469 21.4932 18.3594 21.8096 18.1953C22.1377 18.043 22.4658 17.8906 22.7939 17.7383C23.1221 17.5977 23.4092 17.4219 23.6553 17.2109C23.9131 17 24.1064 16.7422 24.2354 16.4375C24.3643 16.1211 24.3936 15.7168 24.3232 15.2246C24.4287 15.1543 24.499 15.0664 24.5342 14.9609C24.5693 14.8438 24.5928 14.7266 24.6045 14.6094C24.6279 14.4922 24.6572 14.3867 24.6924 14.293C24.7275 14.1992 24.8037 14.1348 24.9209 14.0996C24.8389 13.9707 24.7393 13.9121 24.6221 13.9238C24.5049 13.9355 24.3818 13.9707 24.2529 14.0293C24.1357 14.0879 24.0244 14.1465 23.9189 14.2051C23.8135 14.2637 23.7256 14.2754 23.6553 14.2402C23.6201 14.4043 23.5439 14.5215 23.4268 14.5918C23.3213 14.6621 23.2041 14.7266 23.0752 14.7852C22.9463 14.832 22.8115 14.8848 22.6709 14.9434C22.5303 15.002 22.4189 15.0957 22.3369 15.2246C22.2314 15.1777 22.1318 15.2012 22.0381 15.2949C21.9561 15.377 21.8682 15.4707 21.7744 15.5762C21.6924 15.6699 21.5986 15.7402 21.4932 15.7871C21.3877 15.834 21.2646 15.7871 21.124 15.6465C21.0537 15.834 20.9365 15.957 20.7725 16.0156C20.6201 16.0742 20.4502 16.1035 20.2627 16.1035C20.0752 16.1035 19.8818 16.0918 19.6826 16.0684C19.4951 16.0449 19.3252 16.0508 19.1729 16.0859L18.874 15.7871C18.8506 15.8457 18.8154 15.8926 18.7686 15.9277C18.71 15.9629 18.6514 15.9688 18.5928 15.9453C18.499 15.7461 18.4111 15.5352 18.3291 15.3125C18.2354 15.0781 18.1768 14.8496 18.1533 14.627C18.1182 14.3926 18.1357 14.1699 18.2061 13.959C18.2764 13.7363 18.417 13.543 18.6279 13.3789C18.9561 12.7812 19.3838 12.3125 19.9111 11.9727C19.9697 12.0195 20.0342 12.0371 20.1045 12.0254C20.1748 12.002 20.2451 11.9727 20.3154 11.9375C20.3975 11.8906 20.4736 11.8438 20.5439 11.7969C20.6143 11.7383 20.6787 11.7031 20.7373 11.6914C20.7725 11.5625 20.8369 11.4395 20.9307 11.3223C21.0361 11.2051 21.1475 11.0996 21.2646 11.0059C21.3936 10.9121 21.5225 10.8301 21.6514 10.7598C21.792 10.6777 21.9209 10.6074 22.0381 10.5488C22.2607 10.4434 22.4658 10.3145 22.6533 10.1621C22.8525 9.99805 23.0518 9.8457 23.251 9.70508C23.4502 9.55273 23.6553 9.42383 23.8662 9.31836C24.0771 9.21289 24.3174 9.16016 24.5869 9.16016L24.9033 9.44141C24.7041 9.55859 24.5283 9.70508 24.376 9.88086C24.2354 10.0449 24.0889 10.2148 23.9365 10.3906C23.7842 10.5547 23.6201 10.707 23.4443 10.8477C23.2686 10.9883 23.0518 11.082 22.7939 11.1289C22.583 11.5391 22.2959 11.8906 21.9326 12.1836C21.5811 12.4648 21.2178 12.7285 20.8428 12.9746C20.8428 13.1504 20.79 13.291 20.6846 13.3965C20.5791 13.502 20.4561 13.5957 20.3154 13.6777C20.1748 13.7598 20.0342 13.8359 19.8936 13.9062C19.7529 13.9648 19.6357 14.0469 19.542 14.1523C19.46 14.2461 19.4189 14.3691 19.4189 14.5215C19.4189 14.6621 19.4951 14.8496 19.6475 15.084C19.7881 15.0137 19.958 14.9668 20.1572 14.9434C20.3564 14.9199 20.5498 14.8906 20.7373 14.8555C20.9248 14.8086 21.0889 14.7441 21.2295 14.6621C21.3818 14.5684 21.4873 14.4277 21.5459 14.2402C21.71 14.0996 21.8857 14.0117 22.0732 13.9766C22.2607 13.9414 22.4541 13.9355 22.6533 13.959C23.04 13.5371 23.4268 13.1504 23.8135 12.7988C24.2119 12.4355 24.5869 12.0664 24.9385 11.6914C25.29 11.3164 25.6123 10.918 25.9053 10.4961C26.21 10.0625 26.4736 9.56445 26.6963 9.00195C26.9307 8.93164 27.1416 8.96094 27.3291 9.08984C27.5166 9.21875 27.6514 9.38281 27.7334 9.58203C27.71 9.72266 27.6689 9.85742 27.6104 9.98633C27.5635 10.1035 27.5166 10.2207 27.4697 10.3379C27.4346 10.4434 27.4053 10.5605 27.3818 10.6895C27.3701 10.8184 27.3936 10.9648 27.4521 11.1289C27.3584 11.1055 27.2822 11.1348 27.2236 11.2168C27.1768 11.2988 27.124 11.3691 27.0654 11.4277C27.1006 11.5801 27.0947 11.7207 27.0479 11.8496C27.001 11.9668 26.9424 12.084 26.8721 12.2012C26.8018 12.3066 26.7373 12.4238 26.6787 12.5527C26.6318 12.6816 26.6201 12.8223 26.6436 12.9746C26.4795 13.2793 26.3564 13.6016 26.2744 13.9414C26.2041 14.2695 26.1572 14.6035 26.1338 14.9434L26.4502 15.2246C26.6025 15.002 26.79 14.8438 27.0127 14.75C27.2471 14.6562 27.4814 14.5801 27.7158 14.5215C27.9502 14.4512 28.1787 14.375 28.4014 14.293C28.624 14.1992 28.8174 14.041 28.9814 13.8184C29.0518 13.4785 29.1982 13.2383 29.4209 13.0977C29.6436 12.9453 29.8779 12.8164 30.124 12.7109C30.3701 12.6055 30.6045 12.4883 30.8271 12.3594C31.0615 12.2188 31.2256 11.9961 31.3193 11.6914H31.7588C31.7354 11.75 31.7471 11.8027 31.7939 11.8496C31.8408 11.8965 31.8818 11.9375 31.917 11.9727ZM22.1963 19.7598C22.0791 19.8301 21.9502 19.8945 21.8096 19.9531C21.6689 20.0117 21.5283 20.0762 21.3877 20.1465C21.2471 20.2168 21.1182 20.2988 21.001 20.3926C20.8838 20.4863 20.7959 20.6035 20.7373 20.7441C20.6084 20.6738 20.4854 20.668 20.3682 20.7266C20.2627 20.7969 20.1572 20.873 20.0518 20.9551C19.9463 21.0488 19.835 21.125 19.7178 21.1836C19.6123 21.2422 19.4951 21.2363 19.3662 21.166C19.1436 21.3066 18.9326 21.459 18.7334 21.623C18.5225 21.7871 18.3115 21.9453 18.1006 22.0977C17.8896 22.2617 17.6729 22.4082 17.4502 22.5371C17.2158 22.6777 16.9697 22.7832 16.7119 22.8535C16.583 23.0645 16.4131 23.2285 16.2021 23.3457C15.9912 23.4746 15.7803 23.5977 15.5693 23.7148C15.3467 23.832 15.1475 23.9727 14.9717 24.1367C14.7959 24.3008 14.6846 24.5293 14.6377 24.8223C14.2744 25.0566 14.0283 25.3555 13.8994 25.7188C13.7588 26.0938 13.6826 26.4863 13.6709 26.8965C13.6592 27.3184 13.6768 27.7402 13.7236 28.1621C13.7705 28.5957 13.7939 28.9883 13.7939 29.3398C13.9463 29.5156 14.0986 29.6387 14.251 29.709C14.4033 29.7793 14.5615 29.8145 14.7256 29.8145C14.8896 29.8145 15.0596 29.791 15.2354 29.7441C15.3994 29.709 15.5811 29.6738 15.7803 29.6387C15.8271 29.4629 15.915 29.3457 16.0439 29.2871C16.1611 29.2402 16.29 29.2051 16.4307 29.1816C16.5596 29.1582 16.6826 29.123 16.7998 29.0762C16.9053 29.041 16.9639 28.9473 16.9756 28.7949L17.1338 28.9355C17.1455 28.748 17.1982 28.5898 17.292 28.4609C17.3857 28.3438 17.4971 28.2324 17.626 28.127C17.7549 28.0215 17.8955 27.9219 18.0479 27.8281C18.1885 27.7344 18.3115 27.6289 18.417 27.5117C18.3936 27.2891 18.4346 27.1016 18.54 26.9492C18.6455 26.7969 18.7627 26.6562 18.8916 26.5273C19.0205 26.3984 19.1377 26.2578 19.2432 26.1055C19.3369 25.9531 19.3721 25.7598 19.3486 25.5254C19.4658 25.4785 19.5479 25.4023 19.5947 25.2969C19.6416 25.1914 19.6885 25.0918 19.7354 24.998C19.7822 24.9043 19.8408 24.834 19.9111 24.7871C19.9932 24.7402 20.1162 24.752 20.2803 24.8223C20.1162 24.6934 20.0459 24.5938 20.0693 24.5234C20.1045 24.4531 20.1631 24.3887 20.2451 24.3301C20.3271 24.2832 20.4033 24.2246 20.4736 24.1543C20.5439 24.084 20.5439 23.9785 20.4736 23.8379C20.7549 23.7207 20.9365 23.5508 21.0186 23.3281C21.1006 23.1055 21.1592 22.8652 21.1943 22.6074C21.2412 22.3613 21.3057 22.1152 21.3877 21.8691C21.4697 21.6348 21.6514 21.4473 21.9326 21.3066C21.9092 21.0957 21.9443 20.9082 22.0381 20.7441C22.1436 20.5918 22.2432 20.4453 22.3369 20.3047C22.4424 20.1641 22.5127 20.0176 22.5479 19.8652C22.5947 19.7129 22.5537 19.5312 22.4248 19.3203L22.1963 19.7598ZM42.8506 11.4805C42.8975 11.6562 42.8799 11.8086 42.7979 11.9375C42.7158 12.0547 42.6045 12.1602 42.4639 12.2539C42.335 12.3477 42.1885 12.4355 42.0244 12.5176C41.8721 12.5879 41.7432 12.6699 41.6377 12.7637C41.1104 12.8809 40.6299 12.9688 40.1963 13.0273C39.7744 13.0742 39.3057 13.1387 38.79 13.2207C38.6377 13.2441 38.4912 13.2441 38.3506 13.2207C38.2217 13.1855 38.0869 13.1738 37.9463 13.1855C37.8643 13.1855 37.7881 13.1855 37.7178 13.1855C37.6475 13.1738 37.5771 13.1738 37.5068 13.1855C37.2373 13.209 37.0615 13.3027 36.9795 13.4668C36.8975 13.6191 36.8271 13.8008 36.7686 14.0117C36.7217 14.2109 36.6572 14.4043 36.5752 14.5918C36.5049 14.7676 36.3467 14.8906 36.1006 14.9609C36.0771 15.0195 36.083 15.0723 36.1182 15.1191C36.165 15.166 36.2002 15.207 36.2236 15.2422C36.0244 15.3008 35.8896 15.4062 35.8193 15.5586C35.7607 15.7109 35.708 15.8633 35.6611 16.0156C35.6143 16.168 35.5439 16.2969 35.4502 16.4023C35.3682 16.5078 35.2041 16.543 34.958 16.5078C34.5947 16.8945 34.167 17.2051 33.6748 17.4395C33.1826 17.6855 32.6729 17.8438 32.1455 17.9141C32.0518 17.8672 31.958 17.8086 31.8643 17.7383C31.7822 17.668 31.6943 17.6035 31.6006 17.5449C31.5186 17.4863 31.4248 17.4395 31.3193 17.4043C31.2256 17.3809 31.1143 17.3809 30.9854 17.4043C30.9736 17.1582 30.9268 16.9297 30.8447 16.7188C30.751 16.5078 30.6338 16.3086 30.4932 16.1211C30.4697 15.9102 30.499 15.7168 30.5811 15.541C30.6514 15.3535 30.7275 15.1719 30.8096 14.9961C30.8916 14.8203 30.9619 14.6445 31.0205 14.4688C31.0674 14.2812 31.0557 14.0703 30.9854 13.8359C31.1025 13.7656 31.1787 13.6836 31.2139 13.5898C31.2607 13.4961 31.29 13.4023 31.3018 13.3086C31.3252 13.2031 31.3545 13.1094 31.3896 13.0273C31.4248 12.9336 31.5068 12.8574 31.6357 12.7988C31.542 12.5176 31.5537 12.3125 31.6709 12.1836C31.7998 12.043 31.9521 11.9199 32.1279 11.8145C32.3037 11.709 32.4678 11.5918 32.6201 11.4629C32.7725 11.334 32.8311 11.1406 32.7959 10.8828C32.8662 10.8125 32.9482 10.7539 33.042 10.707C33.1357 10.6602 33.2236 10.6191 33.3057 10.584C33.3994 10.5371 33.4873 10.4902 33.5693 10.4434C33.6514 10.3965 33.7275 10.332 33.7979 10.25C33.7158 10.1914 33.6748 10.1328 33.6748 10.0742C33.6865 10.0156 33.7041 9.95703 33.7275 9.89844C33.751 9.82812 33.7744 9.75781 33.7979 9.6875C33.833 9.61719 33.833 9.54688 33.7979 9.47656C34.1143 9.52344 34.3896 9.48242 34.624 9.35352C34.8701 9.21289 35.0986 9.07227 35.3096 8.93164C35.5322 8.79102 35.7549 8.69141 35.9775 8.63281C36.2002 8.57422 36.458 8.64453 36.751 8.84375C36.7744 8.92578 36.8096 9.04883 36.8564 9.21289C36.915 9.36523 36.9678 9.52344 37.0146 9.6875C37.0732 9.85156 37.126 10.0098 37.1729 10.1621C37.2197 10.3145 37.249 10.4258 37.2607 10.4961C37.2607 10.5547 37.2607 10.6484 37.2607 10.7773C37.2607 10.9062 37.2607 11.0469 37.2607 11.1992C37.2607 11.3398 37.2607 11.4746 37.2607 11.6035C37.2607 11.7324 37.2607 11.832 37.2607 11.9023C37.6006 12.1016 37.9404 12.2246 38.2803 12.2715C38.6201 12.3066 38.96 12.2246 39.2998 12.0254C39.4287 12.1426 39.5518 12.1777 39.6689 12.1309C39.7861 12.0723 39.8975 12.0078 40.0029 11.9375C40.1201 11.8672 40.2373 11.832 40.3545 11.832C40.4717 11.8203 40.5889 11.9141 40.7061 12.1133C40.8701 11.9609 41.04 11.8672 41.2158 11.832C41.3916 11.7852 41.5732 11.7617 41.7607 11.7617C41.9482 11.75 42.1299 11.7324 42.3057 11.709C42.4932 11.6855 42.6748 11.6094 42.8506 11.4805ZM36.1006 11.7793C36.1006 11.6035 36.1299 11.416 36.1885 11.2168C36.2471 11.0176 36.2939 10.8242 36.3291 10.6367C36.3643 10.4375 36.3584 10.25 36.3115 10.0742C36.2764 9.89844 36.165 9.74023 35.9775 9.59961C35.8486 9.66992 35.7432 9.76953 35.6611 9.89844C35.5791 10.0156 35.4971 10.1387 35.415 10.2676C35.333 10.3848 35.2334 10.4844 35.1162 10.5664C35.0107 10.6484 34.8701 10.6719 34.6943 10.6367C34.6357 10.7773 34.6357 10.8945 34.6943 10.9883C34.7529 11.0703 34.8232 11.1523 34.9053 11.2344C34.9873 11.3047 35.0635 11.3809 35.1338 11.4629C35.2158 11.5449 35.2451 11.6504 35.2217 11.7793C35.2686 11.8145 35.333 11.8496 35.415 11.8848C35.4971 11.9082 35.5791 11.9258 35.6611 11.9375C35.7549 11.9375 35.8428 11.9258 35.9248 11.9023C36.0068 11.8789 36.0654 11.8379 36.1006 11.7793ZM35.9775 13.1855C35.7432 13.1855 35.5381 13.1328 35.3623 13.0273C35.1982 12.9102 35.0283 12.7812 34.8525 12.6406C34.6885 12.5 34.5127 12.3711 34.3252 12.2539C34.1494 12.125 33.9326 12.0488 33.6748 12.0254C33.5693 12.166 33.4463 12.3008 33.3057 12.4297C33.165 12.5469 33.042 12.6758 32.9365 12.8164C32.8311 12.957 32.7549 13.1094 32.708 13.2734C32.6729 13.4375 32.7021 13.625 32.7959 13.8359C32.5264 13.9648 32.3447 14.1523 32.251 14.3984C32.1572 14.6328 32.0928 14.8906 32.0576 15.1719C32.0342 15.4531 32.0107 15.7344 31.9873 16.0156C31.9639 16.2969 31.8877 16.5488 31.7588 16.7715L32.1455 16.5078C32.1924 16.5312 32.2275 16.5664 32.251 16.6133C32.2861 16.6602 32.292 16.7129 32.2686 16.7715C32.3623 16.6777 32.4678 16.6074 32.585 16.5605C32.7021 16.502 32.8193 16.4609 32.9365 16.4375C33.0654 16.4023 33.1885 16.373 33.3057 16.3496C33.4346 16.3262 33.5576 16.291 33.6748 16.2441C33.9678 16.4082 34.1787 16.4434 34.3076 16.3496C34.4365 16.2559 34.542 16.1152 34.624 15.9277C34.7061 15.7402 34.7939 15.5469 34.8877 15.3477C34.9814 15.1367 35.1338 15.0078 35.3447 14.9609L35.2217 14.8379C35.4209 14.5918 35.5967 14.3398 35.749 14.082C35.9131 13.8125 35.9893 13.5137 35.9775 13.1855Z"
                                        fill="#231F20"/>
                                </svg>
                            </a>
                        </div>
                        <div className="header-main_wrap-navigation">
                            <nav>
                                <ul className="header-main_wrap-navigation-list d-flex ">
                                    {linkList.map(item => (
                                        <li key={item.key} className="header-main_wrap-navigation-list-item">
                                            <a href={item.link} className="header-main_wrap-navigation-list-item-link">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="header-main_wrap-right">
                            <a href="#" className="link">
                                Callback
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </HeaderComponent>
    );
};
const HeaderComponent = styled.header`
  padding: 39px 0;
  box-shadow: 1px 1px #eee;
  .header{ 
    &-main_wrap{
      position: relative;
      
    }
    &-main_wrap-navigation{
       &-list{
        margin: 0;
        padding: 0;
        &-item{
          list-style: none;
          
          &-link{
            font-size: 18px;
            line-height: 22px;
            text-decoration: none;
            color: #000;
            transition: all .3s;
            padding: 0 15px;
            &:hover{
              text-decoration: none;
              color: #F7941E;
            }
          }
        }
       } 
    } 
  }


`;
export default Header;