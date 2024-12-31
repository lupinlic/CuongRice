import React from 'react'
import Banner from '../../../components/shared/Banner/Banner'
import Line from '../../../components/shared/Line/Line'

function Contact() {
    return (
        <div>
            <div className='container-fluid'>
                <div className='container-fluid '>
                    <Banner
                        textTitle='Liên hệ'
                        textContent='Trang chủ/Liên hệ'
                    ></Banner>
                </div>
                <div className='container mt-3 contact'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <Line
                                textTitle='LIÊN HỆ VỚI CHÚNG TÔI'
                            ></Line>
                            <ul>
                                <li>Trụ sở chính: Kim Sơn-Ninh Bình</li>
                                <li>Hotline:0000-0000</li>
                                <li>Email:phanvancuong2205@gmail.com</li>
                                <li>Website:cuongrice.io.vn</li>
                            </ul>
                        </div>
                        <div className='col-md-6'>
                            <div className='d-flex align-items-center justify-content-between flex-column p-3' style={{ height: '400px', border: '1px solid #20bb1a', boxShadow: '0 0 5px rgba(9, 109, 56, 0.5)', borderRadius: '10px' }}>
                                <p style={{ fontSize: '20px' }}>LIÊN HỆ MUA HÀNG</p>
                                <input placeholder='Họ tên của bạn'></input>
                                <input placeholder='Số điện thoại'></input>
                                <textarea placeholder='Nội dung tư vấn' style={{ height: '130px', width: '100%' }}></textarea>
                                <button>Gửi liên hệ</button>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='mt-5'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.952399284493!2d105.7973124!3d20.9829966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452aa32518ef1%3A0x812b4c82b3c1237e!2zTMOqIEzDqiDEkOG7pWMgMjAgVOG6pXQgVGjhu6ljLCBUw6JuIFRyaeG7gW8sIFRoxqEgdGjhu4sgVGjhu4sgxJDhuqFvLCBIw6AgxJDhuqFv!5e0!3m2!1svi!2s!4v1698684726953!5m2!1svi!2s"
                        width="100%"
                        height="500px"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact