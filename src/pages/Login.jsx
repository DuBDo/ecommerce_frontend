import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
    <div className='flex justify-center items-center w-[544px] h-[474px] bg-white shadow-lg'>
        <div className='w-[433px] h-[374px] m-[50px]'>
            <div className='flex flex-col items-center'>
                <p className='mt-0 align-top text-[32px] font-[700]'>LogIn</p>
                <p className='text-[#9096B2] font-lato text-[17px] font-[400]'>Please login using account detail bellow.</p>
            </div>
            <div className='mt-[37px]'>
              <input type="text" placeholder='Email Address' className='text-[#9096B2] border-[#C2C5E1] border-[1px] w-[432px] rounded-[2px] h-[52px] font-[400] text-[16px]'/>
              <input type="password" placeholder='Password' className='mt-[23px] text-[#9096B2] border-[#C2C5E1] border-[1px] w-[432px] rounded-[2px] h-[52px] font-[400] text-[16px]'/>
              <p className='mt-[13px] font-Lato font-[400] text-[#9096B2] text-[17px]'>Forgot your password?</p>
              <button className='mt-[23px] w-[432px] h-[47px] text-white rounded-[3px] bg-[#FB2E86]'>Sign In</button>
            </div>
            <div className='mt-[26px] flex justify-center'>
              <p className='text-[#9096B2] font-[400] text-[17px] font-lato'>Don't have an Account?<a href="#" className='text-[#e04789]'>Create account</a></p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login