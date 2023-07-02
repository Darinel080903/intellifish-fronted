import Input from "../components/Input/Input";
import Button from "../components/Button/Button"

function Register(params) {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">             

            <div className="w-full h-full bg-cyan-500"/>

            <div className='flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg'>
                    <h2 className='text-4xl font-bold text-center'>Register</h2>

                    <div className='flex flex-col py-2'>
                        <label>Name</label>
                        <Input/>
                    </div>

                    <div className='flex flex-col py-2'>
                        <label>Last Name</label>
                        <Input/>
                    </div>

                    <div className='flex flex-col py-2'>
                        <label>Email</label>
                        <Input/>
                    </div>


                    <div className='flex flex-col py-2'>
                        <label>Password</label>
                        <Input  type="password" />
                    </div>

                    <div className='flex flex-col py-2'>
                        <label>Key of Product</label>
                        <Input  type="password" />
                    </div>

                    <div className='flex flex-col py-2'>
                        <Button>Create Account</Button>
                    </div>            
                </form>
            </div>
        </div>
    );
}

export default Register;