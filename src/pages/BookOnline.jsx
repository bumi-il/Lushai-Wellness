import Hero from '../components/Hero';
import './BookOnline.css';

const bookingPolicies = [
    {
        id: 1,
        title: 'Payment Options',
        description:
            'We accept various payment methods, including credit cards, debit cards, and cash. You can make your payment during the booking process.',
    },
    {
        id: 2,
        title: 'Cancellation Policy',
        description:
            'We offer a 24-hour cancellation policy. If you need to cancel your reservation, please contact our customer service team.',
    },
    {
        id: 3,
        title: 'Refund Policy',
        description:
            'We offer a 24-hour cancellation policy. If you need to cancel your reservation, please contact our customer service team.',
    },
    {
        id: 4,
        title: 'Reschedule Policy',
        description:
            'We offer a 24-hour reschedule policy. If you need to reschedule your reservation, please contact our customer service team.',
    },
]

const HowToBook = () => {
    return (
        <div className='how-to-book'>
            <div className='how-to-book-text'>
                <h1>How To Book</h1>
                <p>
                    We've made booking your spa experience simple and seamless.
                    You can make reservations through our online booking system,
                    which allows you to select your preferred treatments, dates,
                    and times.
                </p>
                <div>
                    <h2>1. Choose Your Treatments</h2>
                    <p>
                        Start by selecting the treatments you want to include in
                        your spa experience.
                    </p>
                </div>
                <div>
                    <h2>2. Select Your Date and Time</h2>
                    <p>
                        Choose a date and time that works for you and your
                        schedule.
                    </p>
                </div>
                <div>
                    <h2>3. Make Your Payment</h2>
                    <p>
                        Once you've selected your treatments, date, and time,
                        you can proceed to make your payment.
                    </p>
                </div>
                <div>
                    <h2>4. Confirm Your Reservation</h2>
                    <p>
                        Once you've made your payment, your reservation will be
                        confirmed, and you'll receive a confirmation email.
                    </p>
                </div>
            </div>
            <div className='how-to-book-img'>
                <img
                    src='https://images.unsplash.com/photo-1583417267826-aebc4d1542e1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt='image'
                />
            </div>
        </div>
    );
};

const BookPolicy = () => {
    return (
        <div className='book-policy'>
            <h1>Booking Policies</h1>
            <p>
                By booking with us, you agree to our booking policy. We reserve
                the right to cancel or modify your reservation at any time.
            </p>
            <div className='book-policy-list'>
                {bookingPolicies.map((policy) => (
                    <div key={policy.id}>
                        <h2>{policy.title}</h2>
                        <p>{policy.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const BookOnline = () => {
    return (
        <div className='book-online'>
            <Hero>this is book online</Hero>
            <div className='book-online-content'>
                <HowToBook />
                <BookPolicy />
            </div>
        </div>
    );
};

export default BookOnline;
