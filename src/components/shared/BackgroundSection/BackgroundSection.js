import React, { useState } from 'react';

const BackgroundSection = ({ imageUrl, buttonText, textContent }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [buttonHovered, setButtonHovered] = useState(false);

    const sectionStyle = {
        width: '100%',
        height: '420px',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#668f3d',
    };

    const imageStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
        transition: 'transform 1s ease',  // Hiệu ứng chuyển động mượt mà khi phóng to
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',  // Phóng to hình ảnh khi hover
        position: 'absolute',  // Đặt hình nền lên trên
        top: 0,
        left: 0,
    };

    const contentStyle = {
        position: 'relative',  // Đảm bảo nội dung luôn nằm trên cùng
        zIndex: 1,  // Đặt phần tử này lên trên hình nền
    };

    const textStyle = {
        fontSize: '24px',
        fontWeight: '500',
        marginBottom: '20px',  // Khoảng cách giữa chữ và nút
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: buttonHovered ? '#fff' : '#668f3d',
        color: buttonHovered ? '#668f3d' : 'white',
        border: buttonHovered ? '1px solid #668f3d' : 'none',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s ease',
    };

    return (
        <div
            style={sectionStyle}
            onMouseEnter={() => setIsHovered(true)}  // Khi hover vào, thay đổi trạng thái
            onMouseLeave={() => setIsHovered(false)}  // Khi rời khỏi, khôi phục lại
        >
            <div style={imageStyle}></div>  {/* Hình nền */}
            <div style={contentStyle}>  {/* Nội dung chữ và nút */}
                <div style={textStyle}>{textContent || 'Đoạn chữ mặc định'}</div>
                <button style={buttonStyle}
                    onMouseEnter={() => setButtonHovered(true)}  // Khi hover vào nút, thay đổi trạng thái
                    onMouseLeave={() => setButtonHovered(false)} >
                    {buttonText || 'Click Me'}
                </button>
            </div>
        </div>
    );
};

export default BackgroundSection;
