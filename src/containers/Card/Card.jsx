import Button from "../../components/Button/Button";

function Card() {
    return (
        <div className='flex flex-col w-1/6 shadow-md'>
            <div className='bg-gray-200 w-fit'>
                <img src={"https://m.media-amazon.com/images/I/91YWJ31n0TL._AC_SL1500_.jpg"} className='w-55 h-120 object-cover' />
            </div>
            <div className='flex flex-col w-full h-full bg-white px-6 py-5 gap-100'>
                <p className='font-normal text-lg'>Title</p>
                <p className='font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia.</p>
                <Button>Go</Button>
            </div>
        </div>
    );
}
export default Card;