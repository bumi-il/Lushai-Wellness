import './BookOnline.css';

const BookOnline = () => {
    return (
        <div className='book-online'>
            <iframe
                src='https://miosalon.com'
                width={'100%'}
                height={'100%'}
                loading='lazy'
                style={{ border: 'none' }}
            ></iframe>
        </div>
    );
};

export default BookOnline;
