import logo from '../../assets/logo.png'

const Footer = () => {

    const year=new Date().getFullYear()

  return (
    <section className=''>
        <div className="flex items-center justify-center">
            <hr className="h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none" />
        </div>
        <div className="flex items-center justify-around pt-4">
                <div className="">
                    <img src={logo} alt="logo" className="h-20" />
                </div>
                <div className="text-black text-sm no-underline font-sans normal-case">
                            CopyRight &copy; {year } page by hamid samiee
                </div>
        </div>
    </section>
  )
}

export default Footer