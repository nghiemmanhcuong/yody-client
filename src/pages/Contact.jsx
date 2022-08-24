import {Link} from 'react-router-dom';
import {MdPlace} from 'react-icons/md';
import {BsQuestion, BsFillTelephoneFill} from 'react-icons/bs';
import {IoCloseCircleSharp} from 'react-icons/io5';
import {useState} from 'react';
import {useSelector} from 'react-redux';

import Helmet from '../components/Helmet';
import Grid from '../components/Grid';

import contactApi from '../api/contactApi.js';

const Contact = () => {
    const {user} = useSelector((state) => state.authReducer);

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [data, setData] = useState({
        name: '',
        email: '',
        content: '',
        userEmail: null,
    });

    // handle change input value
    const handleChangInput = (e) => {
        setData({...data, [e.target.name]: e.target.value});
        setError(null);
    };

    const handleAddContact = async (e) => {
        e.preventDefault();
        if (!data.name) {
            setError({name: true});
            return;
        }

        if (!data.email) {
            setError({email: true});
            return;
        }

        if (!data.content) {
            setError({content: true});
            return;
        }

        try {
            if (user) {
                data.userEmail = user.email;
            }
            const response = await contactApi.addContact(data);
            if (response.success) {
                setData({
                    name: '',
                    email: '',
                    content: '',
                    userEmail: null,
                });
                setSuccess(true);
            }
        } catch (error) {
            console.log('Có lỗi', error);
        }
    };

    return (
        <Helmet title='Liên hệ'>
            <div className='contact'>
                <div className='container container-big'>
                    <div className='contact_header'>
                        <div className='contact_header_breadcrumb'>
                            <Link to='/'>Trang chủ</Link>
                            <span>/</span>
                            <p>Liên hệ</p>
                        </div>
                        <h5>LIÊN HỆ</h5>
                    </div>
                    <div className='contact_main'>
                        <div className='contact_shop-info'>
                            <Grid col={3} gap={20}>
                                <div className='contact_shop-info_item'>
                                    <div className='contact_shop-info_item_icon'>
                                        <MdPlace />
                                    </div>
                                    <div className='contact_shop-info_item_text'>
                                        <h5>Địa chỉ:</h5>
                                        <p>Công ty cổ phần Thời trang YODY</p>
                                    </div>
                                </div>
                                <div className='contact_shop-info_item'>
                                    <div className='contact_shop-info_item_icon'>
                                        <BsQuestion />
                                    </div>
                                    <div className='contact_shop-info_item_text'>
                                        <h5>Gửi thắc mắc:</h5>
                                        <p>
                                            <a href='mailto:chamsockhachhang@yody.vn'>
                                                chamsockhachhang@yody.vn
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className='contact_shop-info_item'>
                                    <div className='contact_shop-info_item_icon'>
                                        <BsFillTelephoneFill />
                                    </div>
                                    <div className='contact_shop-info_item_text'>
                                        <h5>Gửi thắc mắc:</h5>
                                        <p>
                                            <a href='tel:02473056665'>02473056665</a>
                                        </p>
                                    </div>
                                </div>
                            </Grid>
                        </div>
                        <div className='contact_wrapper'>
                            <div className='contact_map'>
                                <iframe
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.9160408136345!2d105.80291241520119!3d20.996002394271063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad304e32ca01%3A0xc1a72074e8065053!2zQ8O0bmcgdHkgY-G7lSBwaOG6p24gdGjhu51pIHRyYW5nIFlPRFkgLSBjaGkgbmjDoW5oIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1661110245661!5m2!1svi!2s'
                                    width='450'
                                    height='450'
                                    style={{border: '0'}}
                                    allowFullScreen=''
                                    loading='lazy'
                                    referrerPolicy='no-referrer-when-downgrade'
                                ></iframe>
                            </div>
                            <form className='contact_form' onSubmit={handleAddContact}>
                                {success && (
                                    <div
                                        className={`alert alert-success ${
                                            !success ? 'hidden' : ''
                                        }`}
                                    >
                                        Gửi liên hệ thành công chúng tối sẽ phản hồi liên hệ của bạn
                                        qua email.
                                        <IoCloseCircleSharp size={22} onClick={() => setSuccess(null)}/>
                                    </div>
                                )}
                                <Grid col={2} gap={20}>
                                    <div className='contact_form_group'>
                                        <label htmlFor='name'>
                                            Họ và tên<span>*</span>
                                        </label>
                                        <input
                                            style={{
                                                borderLeft: error?.name
                                                    ? '2px solid red'
                                                    : '2px solid #FDAF18',
                                            }}
                                            type='text'
                                            id='name'
                                            name='name'
                                            value={data.name}
                                            onChange={(e) => handleChangInput(e)}
                                        />
                                    </div>
                                    <div className='contact_form_group'>
                                        <label htmlFor='email'>
                                            Email<span>*</span>
                                        </label>
                                        <input
                                            style={{
                                                borderLeft: error?.email
                                                    ? '2px solid red'
                                                    : '2px solid #FDAF18',
                                            }}
                                            type='text'
                                            id='email'
                                            name='email'
                                            value={data.email}
                                            onChange={(e) => handleChangInput(e)}
                                        />
                                    </div>
                                </Grid>
                                <div className='contact_form_group'>
                                    <label htmlFor='content'>
                                        Nội dung<span>*</span>
                                    </label>
                                    <textarea
                                        style={{
                                            borderLeft: error?.content
                                                ? '2px solid red'
                                                : '2px solid #FDAF18',
                                        }}
                                        name='content'
                                        id='content'
                                        cols='30'
                                        rows='12'
                                        onChange={(e) => handleChangInput(e)}
                                        defaultValue={data.content}
                                    ></textarea>
                                </div>
                                <button>Gửi liên hệ</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Contact;
