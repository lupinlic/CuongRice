import React from 'react'
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import BackgroundSection from '../../../components/shared/BackgroundSection/BackgroundSection';
import Circle from '../../../components/shared/Circle/Circle';
import News from '../../../components/shared/News/News';
function Home() {
    const [selectedCategory, setSelectedCategory] = useState('gao');

    const showCategory = (category) => {
        setSelectedCategory(category);
    };
    useEffect(() => {
        const fadeElements = document.querySelectorAll(".fade-in");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        });

        fadeElements.forEach((el) => observer.observe(el));

        return () => {
            fadeElements.forEach((el) => observer.unobserve(el));
        };
    }, []);
    // background
    const imageUrl1 = "https://theme.hstatic.net/200000781541/1001126077/14/block_home_category1.jpg?v=106";
    const imageUrl2 = "https://theme.hstatic.net/200000781541/1001126077/14/block_home_category2.jpg?v=106";
    const imageUrl3 = "https://theme.hstatic.net/200000781541/1001126077/14/block_home_category3.jpg?v=106";


    return (


        <div className='container-fluid main p-0' style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", overflow: 'hidden' }}>
            <div className='image-container fade-in'>

            </div>
            <div className='pt-md-3 pt-1 container fade-in'>
                {/* about us */}
                <div className='row align-items-center justify-content-center'>
                    <div className='col-md-6 col-12' style={{ position: 'relative' }}>
                        <div>
                            <div style={{ borderTop: '5px solid #f15f2a', width: '30px', position: 'absolute', top: '13px' }}></div>
                            <h3 style={{ color: "green", fontFamily: 'Arial, sans-serif', marginLeft: '35px' }}>About uS</h3>
                        </div>

                        <p id="text" style={{ textAlign: 'justify', lineHeight: '2.5', fontFamily: 'Arial, sans-serif' }}>
                            Gạo Cường Rice là thương hiệu độc quyền thuộc sở hữu của Doanh Nghiệp Tư Nhân Phan Văn Cường.
                            Gạo Cường Rice tượng trưng cho các dòng gạo ST, cụ thể là ST24, ST25... được nghiên cứu và phát triển bới Kỹ Sư,
                            Anh Hùng Lao Động Hồ Quang Cua, TS. Trần Tấn Phương và ThS. Nguyễn Thị Thu Hương.
                            Các dòng gạo này đã đạt rất nhiều giải thưởng quốc tế và trong nước, góp phần tăng thu nhập cho nông dân,
                            tăng sản lượng và giá trị xuất khẩu gạo thơm Việt Nam cũng như nâng tầm thương hiệu gạo thơm Việt Nam
                            trên thương trường thế giới.
                        </p>
                    </div>
                    <div className='col-md-6 col-12'>
                        <img className='w-100' src='https://free.vector6.com/wp-content/uploads/2021/05/PNG-0000002202-png-bong-lua.png' />
                    </div>

                </div>
                {/*  */}
                <div className='d-md-flex d-none justify-content-center position-relative fade-in'>
                    <div>
                        <img src='https://ingenioushubs.com/petuk/demo/images/05.png' style={{ width: '200px', position: 'absolute', left: '43%', top: '-20%' }} />
                        <div className='row d-flex align-items-center justify-content-center' style={{ width: '1000px', height: '330px', background: 'rgba(240, 84, 86, .2)', borderRadius: '150px' }}>
                            <div className='col-md-4 d-flex flex-column align-items-center justify-content-center text-center'>
                                <div className='d-flex align-items-center justify-content-center hc' style={{ borderRadius: '50%', background: '#fff', width: '70px', height: '70px', boxShadow: '0.5px -0.5px 10px #a1a0a0' }}>
                                    <img src='https://e7.pngegg.com/pngimages/796/943/png-clipart-round-gold-colored-medal-with-red-and-gold-ribbons-with-1-gold-medal-olympic-medal-trophy-award-medal-icon-ribbon-medal-thumbnail.png' style={{ width: '30px' }} />
                                </div>
                                <h5 className='mt-2'>Title</h5>
                                <p className='pt-1'>Recognized as the number 1 rice supplier</p>
                            </div>
                            <div className='col-md-4 d-flex flex-column align-items-center justify-content-center text-center'>
                                <div className='d-flex align-items-center justify-content-center hc' style={{ borderRadius: '50%', background: '#fff', width: '70px', height: '70px', boxShadow: '0.5px -0.5px 10px #a1a0a0' }}>
                                    <img src='https://img.pikbest.com/png-images/natural-food-logo-design--organic-food-logo-sign-symbol_5675304.png!bw700' style={{ width: '50px' }} />
                                </div>
                                <h5 className='mt-2'>Rechargeable rice, high quality</h5>
                                <p className='pt-1'>Specializes in providing clean, quality food</p>

                            </div>
                            <div className='col-md-4 d-flex flex-column align-items-center justify-content-center text-center'>
                                <div className='d-flex align-items-center justify-content-center hc' style={{ borderRadius: '50%', background: '#fff', width: '70px', height: '70px', boxShadow: '0.5px -0.5px 10px #a1a0a0' }}>
                                    <img src='https://png.pngtree.com/png-vector/20220226/ourmid/pngtree-100-natural-product-label-design-vector-and-png-png-image_4463862.png' style={{ width: '40px' }} />
                                </div>
                                <h5 className='mt-2'>Diversity</h5>
                                <p className='pt-1'>Offering more than 20 types of food</p>
                            </div>

                        </div>
                    </div>

                </div>
                {/* menu */}
                <div className='mt-5 fade-in'>
                    <h4 style={{ fontStyle: 'italic', textAlign: 'center', color: "green" }}>Our Menu</h4>
                    <div className='position-relative text-center'>
                        <div className='d-none d-md-block' style={{ borderTop: '5px solid #f15f2a', width: '35px', position: 'absolute', left: '37%', bottom: '48%' }}></div>
                        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '30px' }}>Choose food items</p>
                    </div>
                    <div>
                        <div className='d-flex justify-content-center category'>
                            <div className='position-relative '>
                                <p style={{ fontSize: '20px', marginRight: '20px' }}
                                    className={selectedCategory === 'gao' ? 'active' : ''}
                                    onClick={() => showCategory('gao')}>
                                    Gạo
                                </p>
                                <div style={{ borderBottom: '2px solid #8f8f8f', position: 'absolute', bottom: '60%', right: '-20%', width: '30px', height: '3px' }}></div>
                            </div>
                            <div className='position-relative '>
                                <p style={{ fontSize: '20px', margin: '0 20px' }}
                                    onClick={() => showCategory('raucu')}
                                    className={selectedCategory === 'raucu' ? 'active' : ''}>
                                    Rau củ, quả
                                </p>
                                <div style={{ borderBottom: '2px solid #8f8f8f', position: 'absolute', bottom: '60%', right: '-10%', width: '30px', height: '3px' }}></div>
                            </div>
                            <div >
                                <p style={{ fontSize: '20px', marginLeft: '20px' }}
                                    onClick={() => showCategory('combo')}
                                    className={selectedCategory === 'combo' ? 'active' : ''}>
                                    Combo
                                </p>

                            </div>

                        </div>
                        <div id="gao" className='row product-container mt-3'
                            style={{
                                display: selectedCategory === 'gao' ? 'flex' : 'none',
                                // opacity: selectedCategory === 'gao' ? 1 : 0,
                                // transition: 'opacity 1s ease-in-out',
                            }}>
                            <div className='col-md-5'>
                                <img style={{ width: '400px', height: '400px' }} src='https://gaodacsansoctrang.com/public/files/category/picture/home-about-625ba5bee2eab.png' />
                            </div>
                            <div className='col-md-7'>
                                <div >
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <h5>Gạo Thơm Jasmine</h5>

                                        </div>
                                        <div className='col-md-3'>
                                            <p>
                                                ............................................
                                            </p>

                                        </div>
                                        <div className='col-md-3'>
                                            <p style={{ color: 'red' }}>25.000 vnđ/kg</p>
                                        </div>

                                    </div>
                                    <p>Thường dùng trong bữa ăn hàng ngày, cơm chiên, cơm tấm.</p>

                                </div>
                                <div >
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <h5>Gạo ST25</h5>

                                        </div>
                                        <div className='col-md-3'>
                                            <p>
                                                ............................................
                                            </p>

                                        </div>
                                        <div className='col-md-3'>
                                            <p style={{ color: 'red' }}>45.000 vnđ/kg</p>
                                        </div>

                                    </div>
                                    <p>Thích hợp cho các bữa tiệc, biếu tặng, hoặc những gia đình yêu thích gạo cao cấp.</p>

                                </div>
                            </div>

                        </div>
                        <div id='raucu' className='row product-container' style={{ display: selectedCategory === 'raucu' ? 'flex' : 'none' }}>
                            <div className='col-md-5'>
                                <img style={{}} src='https://salt.tikicdn.com/ts/category/4f/44/33/78bc1f2813121603fd8705dd477c223a.png' />
                            </div>
                            <div className='col-md-7'>
                                <div >
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <h5>Rau Cải Xoong</h5>

                                        </div>
                                        <div className='col-md-3'>
                                            <p>
                                                ............................................
                                            </p>

                                        </div>
                                        <div className='col-md-3'>
                                            <p style={{ color: 'red' }}>15.000 vnđ</p>
                                        </div>

                                    </div>
                                    <p>Làm món canh, xào, hoặc ăn sống trong các món salad.</p>

                                </div>
                                <div >
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <h5>Khoai Lang</h5>

                                        </div>
                                        <div className='col-md-3'>
                                            <p>
                                                ............................................
                                            </p>

                                        </div>
                                        <div className='col-md-3'>
                                            <p style={{ color: 'red' }}>25.000 vnđ/kg</p>
                                        </div>

                                    </div>
                                    <p>Làm món khoai lang chiên, nướng, nấu canh hoặc làm bánh.</p>

                                </div>
                            </div>


                        </div>
                        <div id='combo' className='row product-container' style={{ display: selectedCategory === 'combo' ? 'flex' : 'none' }}>
                            <div className='col-md-5'>
                                <img style={{ width: '400px' }} src='https://files.oaiusercontent.com/file-N3RBdFp5HmRtToNMDNSc1g?se=2024-12-20T08%3A36%3A16Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D3e0d4dc4-ec7d-4c55-a21c-b25b488b8e8b.webp&sig=2cB2XM6mVbA4wAIvAepd6%2B9XWRmf7SSlShY3CDEwiWo%3D' />
                            </div>
                            <div className='col-md-7'>
                                <div >
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <h5>Combo "Bữa Cơm Gia Đình"</h5>

                                        </div>
                                        <div className='col-md-3'>
                                            <p>
                                                ............................................
                                            </p>

                                        </div>
                                        <div className='col-md-3'>
                                            <p style={{ color: 'red' }}>200.000 vnđ</p>
                                        </div>

                                    </div>
                                    <p>Phù hợp cho bữa cơm gia đình ấm cúng với các nguyên liệu cơ bản.</p>

                                </div>
                                <div >
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <h5>Combo "Cơm Văn Phòng Healthy"</h5>

                                        </div>
                                        <div className='col-md-3'>
                                            <p>
                                                ............................................
                                            </p>

                                        </div>
                                        <div className='col-md-3'>
                                            <p style={{ color: 'red' }}>180.000 vnđ</p>
                                        </div>

                                    </div>
                                    <p>Combo này thích hợp cho người bận rộn, ưu tiên sức khỏe .</p>

                                </div>
                            </div>


                        </div>

                    </div>
                </div>
                {/*  */}

            </div>

            {/*  */}
            <div className='fade-in container-fluid mt-4 '>
                <div className='row'>
                    <div className='col-md-4 mt-2'>
                        <BackgroundSection
                            imageUrl={imageUrl1}
                            buttonText="Mua ngay"
                            textContent="Đề xuất dùng thử"
                        />

                    </div>
                    <div className='col-md-4 mt-2'>
                        <BackgroundSection
                            imageUrl={imageUrl2}
                            buttonText="Xem thêm"
                            textContent="Bữa ăn healthy" />

                    </div>
                    <div className='col-md-4 mt-2'>
                        <BackgroundSection
                            imageUrl={imageUrl3}
                            buttonText="Xem thêm"
                            textContent="Rau sạch tại nhà" />

                    </div>
                </div>

            </div>
            {/*  */}
            <div className='fade-in row pt-5 align-items-center justify-content-center' style={{ background: '#fff' }}>
                <div className='col-md-4 row d-flex flex-column align-items-end justify-content-center'>
                    <div className='col-md-6'>
                        <Circle
                            imgUrl='https://at10.mediawz.com/wp-content/uploads/2019/06/hab_left_icon_1.png'
                            textTitle='100% tự nhiên'
                            textContent='We care about what you eat. We want to produce food which nourishes your body and tastes delicious.'
                        ></Circle>
                    </div>
                    <div className='col-md-6'>
                        <Circle
                            imgUrl='https://at10.mediawz.com/wp-content/uploads/2019/06/hab_left_icon_2.png'
                            textTitle='Luôn tươi mới'
                            textContent='We care about what you eat. We want to produce food which nourishes your body and tastes delicious.'
                        ></Circle>
                    </div>

                </div>
                <div className='col-md-4'>
                    <img className='w-100' src='https://at10.mediawz.com/wp-content/uploads/2019/06/hab_center_img.jpg' />
                </div>
                <div className='col-md-4 d-flex flex-column align-items-start justify-content-center'>
                    <div className='col-md-6'>
                        <Circle
                            imgUrl='https://at10.mediawz.com/wp-content/uploads/2019/06/hab_right_icon_1.png'
                            textTitle='Sản phẩm tự nhiên'
                            textContent='We care about what you eat. We want to produce food which nourishes your body and tastes delicious.'
                        ></Circle>
                    </div>
                    <div className='col-md-6'>
                        <Circle
                            imgUrl='https://at10.mediawz.com/wp-content/uploads/2019/06/hab_right_icon_2.png'
                            textTitle='Chất lượng tốt nhất'
                            textContent='We care about what you eat. We want to produce food which nourishes your body and tastes delicious.'
                        ></Circle>
                    </div>
                </div>


            </div>
            {/* tin tức */}
            <div className='container fade-in mt-3'>
                <div className='' style={{ position: 'relative' }}>
                    <div>
                        <div style={{ borderTop: '5px solid #f15f2a', width: '30px', position: 'absolute', top: '13px' }}></div>
                        <h3 style={{ color: "green", fontFamily: 'Arial, sans-serif', marginLeft: '35px' }}>News</h3>
                    </div>
                </div>
                <div className='row mt-3 pb-5'>
                    <div className='col-md-1'></div>
                    <div className='col-md-5 p-0 bg-white new-child' style={{ height: '750px' }}>
                        <img src='https://at10.mediawz.com/wp-content/uploads/2019/06/ms_banner_img2-555x555.jpg' style={{ width: '100%' }} />
                        <div className='p-3'>
                            <h5>Làm thế nào để chọn thực phẩm sạch</h5>
                            <p>Người xưa có câu “nhất dáng nhì da” cho thấy làn da rất quan trọng trong việc thu hút người đối diện.
                                Đối với người có cơ địa dễ lên mụn thì cần phải có một chế độ sinh hoạt cũng như ăn uống điều độ hợp lý. Ăn uống[...]</p>
                            <Link>Xem thêm</Link>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div>
                            <News
                                imgUrl='https://at10.mediawz.com/wp-content/uploads/2019/06/ms_banner_img3-164x184.jpg'
                                textTitle='Lợi ích tuyệt vời của thực phẩm hữu cơ'
                                textContent='Người xưa có câu “nhất dáng nhì da” cho thấy làn da rất quan trọng trong việc thu hút người đối diện.
                     Đối với người có cơ địa dễ lên mụn thì cần phải có một chế độ sinh hoạt cũng như ăn uống điều độ hợp lý. Ăn uống[...]'
                            ></News>
                        </div>

                        <div className='mt-3'>
                            <News
                                imgUrl='https://at10.mediawz.com/wp-content/uploads/2019/06/ms_banner_img1-164x184.jpg'
                                textTitle='Làm thế nào để chọn thực phẩm sạch'
                                textContent='Người xưa có câu “nhất dáng nhì da” cho thấy làn da rất quan trọng trong việc thu hút người đối diện.
                     Đối với người có cơ địa dễ lên mụn thì cần phải có một chế độ sinh hoạt cũng như ăn uống điều độ hợp lý. Ăn uống[...]'
                            ></News>
                        </div>
                        <div className='mt-3'>
                            <News
                                imgUrl='https://at10.mediawz.com/wp-content/uploads/2019/06/ms_banner_img2-164x184.jpg'
                                textTitle='Cách chế biến thực phẩm tốt nhất'
                                textContent='Người xưa có câu “nhất dáng nhì da” cho thấy làn da rất quan trọng trong việc thu hút người đối diện.
                     Đối với người có cơ địa dễ lên mụn thì cần phải có một chế độ sinh hoạt cũng như ăn uống điều độ hợp lý. Ăn uống[...]'
                            ></News>
                        </div>
                    </div>
                    <div className='col-md-1'></div>

                </div>
            </div>




        </div>
    )
}

export default Home