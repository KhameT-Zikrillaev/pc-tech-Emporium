import React, { useState } from 'react';
import './formsend.css';
import datafiles from '/src/datafiles/comping';
import formbg from '/src/assets/images/form-bg.png';
import icon1 from '/src/assets/images/corpuse-icon.svg';
import icon2 from '/src/assets/images/processor-icon.svg';
import icon3 from '/src/assets/images/memory-icon.svg';
import icon4 from '/src/assets/images/videocard-icon.svg';
import icon5 from '/src/assets/images/nmve-icon.svg';
import icon6 from '/src/assets/images/hdd-icon.svg';
import icon7 from '/src/assets/images/blokbg-icon.svg';
import icon8 from '/src/assets/images/cooler-icon.svg';
import icon9 from '/src/assets/images/cpu-fan.svg';
import sendimages from '/src/assets/images/tick-icon.svg';
export default function Form() {
  const [modalcalculate,activecalculate] = useState(false)
  const [modalorder,activeorder] = useState(false)
  const [modalfinish,activefinish] = useState(false)
  const [selectCPu,selectmodelCpu]= useState('')
  const [selectGPu,selectmodelGpu]= useState('')
  const [selectGPuNumber,selectmodelGpuNumber]= useState(1)
  const [selectOzu,selectmodelOzu]= useState('')
  const [selectOzuNumber,selectmodelOzuNumber] = useState(1)
  const [selectBp,selectmodelBp]= useState('')
  const [selectSsd,selectmodelSsd]= useState('')
  const [selectHdd,selectmodelHdd]= useState('')
  const [selectHddNumber,selectmodelHddNumber] = useState(1)
  const [selectCorpuse  ,selectmodelCorpuse]=useState('')
  const [selectCpufan, selectmodelCpufan]=useState('')
  const [selectFan, selectmodelFan]=useState('')
  const [selectFanNumber,selectmodelFanNumber] = useState(1)
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [textOrder,selecttextOrder]=useState('Запольните Форму')
  const [textActive,selecttextActive]=useState(false)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~total sht~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~``
const [OzuTotal,selectOzuTotal] = useState(Number)
const [GpuTotal,selectGpuTotal] = useState(Number)
const [HddTotal,selectHddTotal] = useState(Number)
const [FanTotal,selectFanTotal] = useState(Number)
const [Massive,selectMassiveTotal] = useState([])

const [Massivelength,selectMassivelength] = useState(Number)

  const [isVisibleText,activeisVisibleText]=useState(false)


  const [totalprice,totalActiveprice] = useState('')
 const handleSelectCpu = (event)=>{
  const selectValue = JSON.parse(event.target.value)
  selectmodelCpu(selectValue)
 }

 const handleSelectGpu = (event)=>{
  const selectValue = JSON.parse(event.target.value)
  selectmodelGpu(selectValue)
 }


 const handleSelectGpuNumber = (event) =>{
  const selectValue = +event.target.value
  selectmodelGpuNumber(selectValue)
 }

 const handleSelectOzu = (event)=>{
  const selectValue = JSON.parse(event.target.value)
  selectmodelOzu(selectValue)
 }
const handleSelectOzuNumber = (event)=>{
  const selectValue = +event.target.value
  selectmodelOzuNumber(selectValue)
}
const handleSelectBp = (event)=>{
  const selectValue = JSON.parse(event.target.value)
  selectmodelBp(selectValue)
}

const handleSelectSsd = (event)=>{
  const selectValue = JSON.parse(event.target.value)
  selectmodelSsd(selectValue)
}

const handleSelectHdd = (event)=>{
  const selectValue = JSON.parse(event.target.value)
  selectmodelHdd(selectValue)
}
const handleSelectHddNumber = (event)=>{
  const selectValue = +event.target.value
  selectmodelHddNumber(selectValue)
}

const handleSelectCorpuse =(event)=>{
  const selectValue= JSON.parse(event.target.value)
  selectmodelCorpuse(selectValue)
}

const handleSelectCpufan =(event)=>{
  const selectValue= JSON.parse(event.target.value)
  selectmodelCpufan(selectValue)
}

const handleSelectFan =(event) =>{
  const selectValue= JSON.parse(event.target.value)
  selectmodelFan(selectValue)
}

const handleSelectFanNumber = (event) => {
 const selectValue =  +event.target.value
 selectmodelFanNumber(selectValue)
}


const isButtonDisabledcalculate = !selectCPu && !selectGPu && !selectOzu && !selectBp && !selectSsd && !selectHdd && !selectCorpuse && !selectCpufan  && !selectFan ;

const handlecalculate = () => {
  event.preventDefault();
  const GpuTotal = selectGPuNumber * selectGPu.price;
  const OzuTotal = selectOzuNumber * selectOzu.price;
  const HddTotal = selectHddNumber * (selectHdd?.price || 0); 
  const FanTotal = selectFanNumber * selectFan.price;
  selectGpuTotal(GpuTotal);
  selectOzuTotal(OzuTotal);
  selectHddTotal(HddTotal);
  selectFanTotal(FanTotal);
  const allTotals = [
    selectCPu.price,
    GpuTotal,
    OzuTotal,
    selectBp.price,
    selectSsd.price,
    HddTotal,
    selectCorpuse.price,
    selectCpufan.price,
    FanTotal
  ].filter(value => value > 0 && !isNaN(value));
  selectMassiveTotal(allTotals);
  selectMassivelength(allTotals.length);
  const sum = allTotals.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  totalActiveprice(sum);
  activecalculate(true);
  console.log(Massive)
};


const handleSubmit = ()=>{
  event.preventDefault();
  handlecalculate()
  activecalculate(false)
  activeorder(true)
  selecttextOrder('Запольните Форму')
  selecttextActive(false)
}

const submitsend = () =>{
  event.preventDefault();

  if (phone.length < 9) {
    selecttextOrder('Номер неправильно!')
    selecttextActive(true)
   return false
  }
  if (phone.length < 9) {
    selecttextOrder('Номер мало!')
    selecttextActive(true)
    return false;
  }

  const validPrefixes = ['71', '72', '88', '90', '91', '93', '94', '95', '97', '98', '99'];
  const prefix = phone.slice(0, 2);

  if (!validPrefixes.includes(prefix)) {
    selecttextOrder('Номер код неправильно!')
    selecttextActive(true)
    return false;
  }





  selecttextOrder('Успешно прошли!')
  selecttextActive(false)
  setTimeout(function() {
    activeorder(false)
    activefinish(true)
    selecttextOrder('Запольните Форму')
    selecttextActive(false)
  },1000);

  setTimeout(function() {
    activefinish(false)
    setName('')
    setEmail('')
    setPhone('')
  },5000);
}
const handleChange = (e) => {
  const value = e.target.value;
  const cleanedValue = value.replace(/[^\d]/g, '').slice(0, 9);
  setPhone(cleanedValue);
}
  return (
    <div className='bg-black'>
      <div className="container relative w-full  h-[1350px] p480:h-[1100px]  p768:h-[550px]  p1200:h-[400px]">
        <h2 className='text-white text-center text-[40px]'>Рассчитать и заказать.</h2>
        <form onSubmit={e => {
  e.preventDefault();
  const clickedButton = e.nativeEvent.submitter.name;
  if (clickedButton === "calculate") {
    handlecalculate();
  } else if (clickedButton === "submit") {
    handleSubmit();
  }
}} className='grid mt-[20px] gap-2 justify-center p768:px-2 p768:grid-cols-2  p480:justify-center   p1200:grid-cols-3 flex-wrap   text-[#ff2c33] relative z-[1]' action="#">

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~cpu~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          <div  className="card  flex flex-col w-[300px] ">
            
            <div>
            <label className='ml-3  text-white text-[18px] uppercase  font-semibold ' htmlFor="processor">Процессор</label>
            <span className=' ml-3 w-[95%] block h-[1px] my-2 bg-red-600'></span>
            </div>
            
            
            <select className='p-3 rounded-md bg-[#444444] text-white'   name="processor" id="processor" onChange={handleSelectCpu}>
            <option  value="">Select memory</option>
             {datafiles.cpu.map((item)=>(
                <option key={item.id} value={JSON.stringify(item)}>{item.name} | {item.price}$</option>
             ))}
            </select>
           
          </div>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~gpu~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          <div className="card flex flex-col w-[300px]">
            <label className='ml-3  text-white text-[18px] uppercase  font-semibold ' htmlFor="videocard">Видеокарта</label>
            <span className=' ml-3 w-[95%] h-[1px] my-2 bg-red-600'></span>
            <div className='flex gap-1'>
            <select className='p-3 rounded-md bg-[#444444] text-white'   name="videocard" id="videocard" onChange={handleSelectGpu}>
            <option value="">Select memory</option>
             {datafiles.gpu.map((item)=>(
                <option key={item.id} value={JSON.stringify(item)}>{item.name} | {item.price}$</option>
             ))}
            </select>
            <select  className='px-1 py-3 rounded-md bg-[#444444] text-white'  name="" id="" onChange={handleSelectGpuNumber}>
              <option value="1">1 x</option>
              <option value="2">2 x</option>
              <option value="3">3 x</option>
              <option value="4">4 x</option>
            </select>
            </div>
         
         
        
          </div>
         {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~O3Y~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          <div className="card flex flex-col w-[300px]">
            <label className='ml-3  text-white text-[18px] uppercase  font-semibold ' htmlFor="videocard">Оперативная память</label>
            <span className=' ml-3 w-[95%] h-[1px] my-2 bg-red-600'></span>
            <div className='flex flex-col p480:flex-row gap-1'>
            <select className='p-3 rounded-md bg-[#444444] text-white'   name="videocard" id="videocard" onChange={handleSelectOzu}>
            <option value="">Select memory</option>
             {datafiles.memory.map((item)=>(
                <option key={item.id} value={JSON.stringify(item)}>{item.name} | {item.price}$</option>
             ))}
            </select>
            <select  className='px-1 py-3 w-[50px] flex ml-auto rounded-md bg-[#444444] text-white'  name="" id="" onChange={handleSelectOzuNumber}>
              <option value="1">1 x</option>
              <option value="2">2 x</option>
              <option value="3">3 x</option>
              <option value="4">4 x</option>
            </select>
            </div>
         
         
        
          </div>
       {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Bp~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          <div className="card flex flex-col w-[300px]">
            <label className='ml-3  text-white text-[18px] uppercase  font-semibold ' htmlFor="videocard">Блок питания</label>
            <span className=' ml-3 w-[95%] h-[1px] my-2 bg-red-600'></span>
            <div className='flex flex-col p480:flex-row gap-1'>
            <select className='p-3 w-full rounded-md bg-[#444444] text-white'   name="videocard" id="videocard" onChange={handleSelectBp}>
            <option value="">Select memory</option>
             {datafiles.bp.map((item)=>(
                <option key={item.id} value={JSON.stringify(item)}>{item.name} | {item.price}$</option>
             ))}
            </select>

            </div>
         
         
        
          </div>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SSD~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

          <div className="card flex flex-col w-[300px]">
            <label className='ml-3  text-white text-[18px] uppercase  font-semibold ' htmlFor="videocard">ДИСК SSD M2.NMVE</label>
            <span className=' ml-3 w-[95%] h-[1px] my-2 bg-red-600'></span>
            <div className='flex flex-col p480:flex-row gap-1'>
            <select className='p-3 w-full rounded-md bg-[#444444] text-white'   name="videocard" id="videocard" onChange={handleSelectSsd}>
            <option value="">Select memory</option>
             {datafiles.ssd.map((item)=>(
                <option key={item.id} value={JSON.stringify(item)}>{item.name} | {item.price}$</option>
             ))}
            </select>

            </div>
         
         
        
          </div>
           {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~HDD~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
           <div className="card flex flex-col w-[300px]">
            <label className='ml-3  text-white text-[18px] uppercase  font-semibold ' htmlFor="videocard">Жесткий диск HDD</label>
            <span className=' ml-3 w-[95%] h-[1px] my-2 bg-red-600'></span>
            <div className='flex flex-col p480:flex-row gap-1'>
            <select className='p-3 w-full rounded-md bg-[#444444] text-white'   name="videocard" id="videocard" onChange={handleSelectHdd}>
            <option value="">Select memory</option>
             {datafiles.hdd.map((item)=>(
                <option key={item.id} value={JSON.stringify(item)}>{item.name} | {item.price}$</option>
             ))}
            </select>
            <select  className='px-1 py-3 w-[50px] flex ml-auto rounded-md bg-[#444444] text-white'  name="" id="" onChange={handleSelectHddNumber}>
              <option value="1">1 x</option>
              <option value="2">2 x</option>
              <option value="3">3 x</option>
              <option value="4">4 x</option>
              <option value="4">5 x</option>
              <option value="4">6 x</option>
            </select>
            </div>
         
         
        
          </div>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~corpuse~~~~~~~~~~~~~~~~~~~~~~ */}
          <div className="card flex flex-col w-[300px]">
            <label className='ml-3  text-white text-[18px] uppercase  font-semibold ' htmlFor="videocard">Корпусы</label>
            <span className=' ml-3 w-[95%] h-[1px] my-2 bg-red-600'></span>
            <div className='flex flex-col p480:flex-row gap-1'>
            <select className='p-3 w-full rounded-md bg-[#444444] text-white'   name="videocard" id="videocard" onChange={handleSelectCorpuse}>
            <option value="">Select memory</option>
             {datafiles.corpuse.map((item)=>(
                <option key={item.id} value={JSON.stringify(item)}>{item.name} | {item.price}$</option>
             ))}
            </select>
            </div>
         
         
        
          </div>
           {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~CPU FAN~~~~~~~~~~~~~~~~~~~~~~ */}
          <div className="card flex flex-col w-[300px]">
            <label className='ml-3  text-white text-[18px] uppercase  font-semibold ' htmlFor="videocard">Куллер для процессор</label>
            <span className=' ml-3 w-[95%] h-[1px] my-2 bg-red-600'></span>
            <div className='flex flex-col p480:flex-row gap-1'>
            <select className='p-3 w-full rounded-md bg-[#444444] text-white'   name="videocard" id="videocard" onChange={handleSelectCpufan}>
            <option value="">Select memory</option>
             {datafiles.cpufan.map((item)=>(
                <option key={item.id} value={JSON.stringify(item)}>{item.name} | {item.price}$</option>
             ))}
            </select>
            </div>
         
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FAN~~~~~~~~~~~~~~~~~~~~~~ */}
        
          </div>
          <div className="card flex flex-col w-[300px]">
            <label className='ml-3  text-white text-[18px] uppercase  font-semibold ' htmlFor="videocard">Жесткий диск HDD</label>
            <span className=' ml-3 w-[95%] h-[1px] my-2 bg-red-600'></span>
            <div className='flex flex-col p480:flex-row gap-1'>
            <select className='p-3 w-full rounded-md bg-[#444444] text-white'   name="videocard" id="videocard" onChange={handleSelectFan}>
            <option value="">Select memory</option>
             {datafiles.fan.map((item)=>(
                <option key={item.id}  value={JSON.stringify(item)}>{item.name} | {item.price}$</option>
             ))}
            </select>
            <select  className='px-1 py-3 w-[50px] flex ml-auto rounded-md bg-[#444444] text-white'  name="" id="" onChange={handleSelectFanNumber}>
              <option value="1">1 x</option>
              <option value="2">2 x</option>
              <option value="3">3 x</option>
              <option value="4">4 x</option>
              <option value="4">5 x</option>
              <option value="4">6 x</option>
            </select>
            </div>
         
         <div>
          
         </div>
        
          </div>

           <div className='card-none__grid hidden p1200:flex'></div>
           <div className='card-none__grid hidden p1200:flex'></div>

         <div className='card w-[300px]'>
         {isVisibleText && (
          <p className='text-white text-center'>Заполните поля</p>
        )}
           
           <div className="btns mt-4 flex justify-between">
           <button 
  className={`w-[45%] py-2 rounded-md text-white ${isButtonDisabledcalculate ? 'bg-gray-500' : 'bg-[#a51e1e]'}`} 
  type="submit" 
  name="calculate" 
  disabled={isButtonDisabledcalculate }
>
  рассчитывать
</button>
<button 
  className={`w-[45%] py-2 rounded-md text-white ${isButtonDisabledcalculate ? 'bg-gray-500' : 'bg-[#a51e1e]'}`} 
  type="submit" 
  name="submit" 
  disabled={isButtonDisabledcalculate }
>
Заказать
</button>
           </div>
       
        
         </div>

        </form>
        <img className='absolute bottom-0 right-0 opacity-25' src={formbg} alt="" />
      </div>

{/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~COLCULATOR~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~``       */}
     <div className={`modal-colculator__container ${ modalcalculate ? 'modal-col_active':''}`} >
     <div className={`modal-colculator relative ${modalcalculate ? 'modal-colculator-active' : ''}`}>
      <button onClick={() => activecalculate(false)} className='btn-colculator__off '>X</button>
       <div>
       <img className="absolute opacity-20 block top-1/2 left-1/2 h-full z-0 transform -translate-x-1/2 -translate-y-1/2" src={selectCorpuse.images} alt="" />
       <h3 className='text-center  text-white'>Товары</h3>
          <ul className='px-2 text-[14px] w-[300px] relative  mx-auto text-white'>
            <span className='w-[300px] mx-auto my-1 h-[2px] bg-red-600 block'></span>
            {selectCPu.name &&
              <li className=' flex justify-between' >{selectCPu.name}<span>{selectCPu.price} $</span></li>
            }
            {selectGPu.name &&
              <li className=' flex justify-between'>{selectGPu.name}<span>{GpuTotal} $</span></li>
            }
            { selectOzu.name &&
              <li className=' flex justify-between'>{selectOzu.name}<span>{OzuTotal} $</span></li>
            }
            {selectBp.name &&
              <li className=' flex justify-between'>{selectBp.name}<span>{selectBp.price} $</span></li>
            }
            {selectSsd.name &&
              <li className=' flex justify-between'>{selectSsd.name}<span>{selectSsd.price} $</span></li>
            }
            { selectHdd.name &&
              <li className=' flex justify-between'>{selectHdd.name}<span>{HddTotal} $</span></li>
            }
            { selectCorpuse.name &&
              <li className=' flex justify-between'>{selectCorpuse.name}<span>{selectCorpuse.price} $</span></li>
            }
            {selectCpufan.name &&
              <li className=' flex justify-between'>{selectCpufan.name}<span>{selectCpufan.price} $</span></li>
            }
           {selectFan.name &&
             <li className=' flex justify-between'>{selectFan.name}<span>{FanTotal} $</span></li>
           }
          </ul>
          <span className='w-[300px] mx-auto my-1 h-[2px] bg-red-600 block'></span>
          <h4 className='text-center relative text-white'>Итого: {Massivelength} товар. <span>{totalprice} $</span></h4>
          <p className=' block text-white  relative text-center'>{totalprice * 12800} сумма</p>
       </div>
       <div  className='flex w-[280px] relative justify-between mx-auto mt-3'>
        <button className='text-white w-[45%] text-[20px] py-2 rounded-md bg-red-600' onClick={() => activecalculate(false)}>Назад</button>
        <button className='text-white w-[45%] text-[20px] px-4 py-2 rounded-md bg-green-700'onClick={() => {activecalculate(false), activeorder(true)}}  >Заказать</button>
       </div>
       
      </div>
  
     </div>
{/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ORDER~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
     <div className={`modal-order__container ${ modalorder ? 'modal-order_active':''}`} >
      <div className={`modal-order  ${modalorder ? 'modal-order-active' : ''}`}>
      <button onClick={() => activeorder(false)} className='btn-order__off '>X</button>
    
  <div className='modal-order_info'>
        
  <span className='w-[300px] mx-auto my-1 h-[2px] bg-red-600 block'></span>
  <div className='flex'>
   {selectCorpuse.images &&
   <img className='w-[150px] h-[200px] ml-[100px]' src={selectCorpuse.images} alt="" />
   }
    
  <ul className='px-2  ml-auto w-[300px] flex flex-col text-[14px] text-white'>
 
  {selectCPu.name && (
 <li className='flex items-center gap-1'>
 <img className='w-[25px]' src={icon2} alt="" />
 {selectCPu.name}
 </li>
 )}
 
 {selectGPu.name && (
 <li className=' flex items-center gap-1'>
 <img className='w-[25px]' src={icon4} alt="" />
 {selectGPu.name}</li>
 )}
 {selectOzu.name && (
 <li className=' flex items-center gap-1'>
 <img className='w-[25px]' src={icon3} alt="" />
 {selectOzu.name}</li>
 )}
 {selectBp.name && (
 <li className=' flex items-center gap-1'>
 <img className='w-[25px]' src={icon7} alt="" />
 {selectBp.name}</li>
 )}
 {selectSsd.name && (
 <li className=' flex items-center gap-1'>
 <img className='w-[25px]' src={icon5} alt="" />
 {selectSsd.name}</li>
 )}
 {selectHdd.name && (
 <li className=' flex items-center gap-1'>
 <img className='w-[25px]' src={icon6} alt="" />
 {selectHdd.name}</li>
 )}
 {selectCorpuse.name && (
 <li className=' flex items-center gap-1'>
 <img className='w-[25px]' src={icon1} alt="" />
 {selectCorpuse.name}</li>
 )}
 {selectCpufan.name && (
 <li className=' flex items-center'>
 <img className='w-[25px]' src={icon9} alt="" />
 {selectCpufan.name}</li>
 )}
 {selectFan.name && (
 <li className=' flex items-center gap-1'>
 <img className='w-[18px] ml-1' src={icon8} alt="" />
 {selectFan.name}</li>
 )}
 
   </ul>
  </div>
    <span className='w-[300px] mx-auto my-1 h-[2px] bg-red-600 block'></span>
    <h4 className='text-center flex flex-col text-white'>
      <span>USD {totalprice} $</span>
      </h4>
       </div>
  
        <form onSubmit={submitsend}  action="">
        <div className='flex   flex-wrap justify-center gap-1 text-white'>
        <div className='w-[250px] p-1   text-center'>
          <label htmlFor="">Ваш имя</label>
          <input 
          value={name}
          onChange={(e) => setName(e.target.value)} 
          required 
          className='p-2 rounded-md w-full outline-none text-black' type="text" placeholder='Хамидулла' />
          </div>
  
          <div className='w-[250px] p-1   text-center'>
          <label htmlFor="">Ваш номер</label>
          <input 
          value={phone}
          onChange={handleChange} 
          required 
          className='p-2 rounded-md w-full outline-none text-black' type="text" placeholder='990000441' />
          </div>

          <div className='w-[250px] p-1   text-center '>
          <label htmlFor="">Ваш эмаил</label>
          <input   
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required 
          className='p-2 rounded-md w-full outline-none text-black' type="email" placeholder='Khamidulla@mail.ru' />
          </div>
        </div>
            <span className={`text-center block ${textActive ? 'text-[#F70100]' : 'text-[#00E631]'}`}>{textOrder}</span>
          <div  className='flex w-[280px] justify-between mx-auto mt-3'>
        <button type='button' className='text-white w-[45%] text-[20px] py-2 rounded-md bg-[#F70100]' onClick={() => activeorder(false)}>Назад</button>
        <button type='submit' className='text-white w-[45%] text-[20px] px-4 py-2 rounded-md bg-green-700' >Заказать</button>
        
       </div>
        </form>re
        
     
      </div>
      </div>


      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~send~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
     <div className={`modal-order__container ${ modalfinish ? 'modal-order_active':''}`} >
      <div className={`modal-order  ${modalfinish ? 'modal-order-active' : ''}`}>
      <button onClick={() => activefinish(false)} className='btn-order__off '>X</button>  
        
       

       <div className='modal-order_info'>
        <img className='finish-images mx-auto w-[150px]' src={sendimages} alt="" />
         <h3 className=' text-center text-[#00E631]'>Ваш заказ успешно принят {name}!</h3>
         <p className='text-white text-center'>Наши сотрудники свяжутся с вами, как только сборка вашего компьютера будет завершена. Спасибо за ваш выбор!</p>
       </div>
  
     
    
     
   
       
    
        
     
      </div>
      </div>

      <div/>


    </div>
  );
}
