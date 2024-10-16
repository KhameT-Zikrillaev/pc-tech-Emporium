import './loading.css';
import logo from '/src/assets/images/logotip.png'
export default function Loading() {
  
  return (
    <div className='loading-container'>
      <div className='loading'>
        <div className='logo flex'>
          <img className='rounded-md' src={logo} alt="" />
          <div className='text-white ml-2 flex flex-col'>
            <span className='font-semibold text-[15px]'>TECH</span>
             <span className='w-full h-[3px] rounded-r-xl bg-red-600'></span>
            <span className='lg text-[16px] font-semibold'>Emporium</span>   
        </div>
        </div>
        <div className='line'></div>
      </div>
    </div>
  );
}
