import React, {useState} from 'react'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import './SideNavigationCar.css'


    
    

function SideNavigationCar() {
    const upArrow = <svg width="18px" height="18px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M85.392 746.667h60.331l366.336-366.336 366.336 366.336h60.331v-60.331l-408.981-409.003h-35.307l-409.045 409.003z"></path></svg>
    const downArrow = <svg width="18px" height="18px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg>
    const [arrow,setArrow] = useState(downArrow)
    const a = document.getElementsByClassName('subCategories')
    
    const arrowDown = () =>{
        setArrow(upArrow)
    }

    const normalArrow = () =>{
        setArrow(downArrow)
    }
    return (
        <div>
            <div className="container-fluid">
                <div>
                <strong className="filter">Filters</strong> <br/> 
                <hr/>
                </div>
                
                <div className="categories__popular">
                    <div className='categories_Heading'>
                        <strong>CATEGORIES</strong>
                        <span className='pr-3' style={{cursor:'pointer'}} onClick={arrowDown} onDoubleClick={normalArrow}>{arrow}</span>
                    </div> 
                    <div className="subCategories mt-3">
                        <ul className='firstList'>
                            <li className='mb-2'>All Categories</li>
                            <li className='mb-2'>Vehicles</li>
                        </ul>
                        <ul className='ml-2'>
                            <li className='mb-3 boldMob'>Cars (59371)</li>
                            <li className='mb-3'>Cars on Installments (10381)</li>
                            <li className='mb-3'>Cars Accessories (11565)</li>
                            <li className='mb-3'>Spare Parts (9176)</li>
                            <li className='mb-3'>Buses, Vans & Trucks (5530)</li>
                            <li className='mb-3'>Rickshaw & Chingchi (2049)</li>
                            <li className='mb-3'>Other Vehicles (8518)</li>
                            <li className='mb-3'>Boats (312)</li>
                            <li className='mb-3'>Tractors & Trailers (1540)</li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className="location_popular">
                <div className="location_Heading">
                <strong>LOCATIONS</strong>
                <span className='pr-3' style={{cursor:'pointer'}} onClick={arrowDown} onDoubleClick={normalArrow}>{arrow}</span>
                </div>
                <div className="subLocations mt-3">
                    <ul>
                        <li>Pakistan</li>
                    </ul>
                    <ul className='ml-2'>
                        <li>Azad Kashmir</li>
                        <li className='boldMob mt-3 ml-3'>Mirpur</li>
                    </ul>
                </div>
                </div>
                <hr/>
                <div className="make_popular">
                <div className='make_Heading'>
                        <strong>MAKE AND MODEL</strong>
                        <span className='pr-3' style={{cursor:'pointer'}} onClick={arrowDown} onDoubleClick={normalArrow}>{arrow}</span> 
                    </div>
                    <div className="subMake mt-3">
                         <ul className='firstList'>
                            <li className='mb-1'>Suzuki (26283)</li>
                            <li className='mb-1'>Toyota (14448)</li>
                            <li className='mb-1'>Honda (8570)</li>
                            <li className='mb-1'>Daihatsu (3824)</li>
                            <li className='mb-1'>Nissan (1468)</li>
                            <li className='mb-1' className='boldMob pt-2'>View all</li>
                        </ul>
                </div>
                </div>
                <hr/>
                <div className="price_popular">
                <div className='price_Heading'>
                        <strong>PRICE</strong>
                        <span className='pr-3' style={{cursor:'pointer'}} onClick={arrowDown} onDoubleClick={normalArrow}>{arrow}</span> 
                    </div>
                <div className="inputPrice">
                    <input type="text" placeholder='Min'/>
                    <input type="text" placeholder='Max'/>
                    <span><ChevronRightIcon/></span>
                </div>
                </div>
                <hr/>
                <div className="price_popular">
                <div className='price_Heading'>
                        <strong>YEAR</strong>
                        <span className='pr-3' style={{cursor:'pointer'}} onClick={arrowDown} onDoubleClick={normalArrow}>{arrow}</span> 
                    </div>
                <div className="inputPrice">
                    <input type="text" placeholder='Min'/>
                    <input type="text" placeholder='Max'/>
                    <span><ChevronRightIcon/></span>
                </div>
                </div>
                <hr/>
                <div className="condition_popular">
                <div className='condition_Heading'>
                        <strong>REGISTERED IN</strong>
                        <span className='pr-3' style={{cursor:'pointer'}} onClick={arrowDown} onDoubleClick={normalArrow}>{arrow}</span> 
                    </div>
                    <div className="inputCondition mt-3">
                        <div className="checkbox-container">
                            <input type="checkbox"/>
                        </div>
                        <div className="label-container ml-2 mt-1">
                            <label htmlFor="">Lahore <span>(21283)</span></label>
                        </div>
                    </div>
                    <div className="inputCondition">
                        <div className="checkbox-container">
                            <input type="checkbox"/>
                        </div>
                        <div className="label-container ml-2 mt-1">
                            <label htmlFor="">Karachi <span>(19352)</span></label>
                        </div>
                    </div>
                    <div className="inputCondition">
                        <div className="checkbox-container">
                            <input type="checkbox"/>
                        </div>
                        <div className="label-container ml-2 mt-1">
                            <label htmlFor="">Islamabad <span>(8230)</span></label>
                        </div>
                    </div>
                    <div className="inputCondition">
                        <div className="checkbox-container">
                            <input type="checkbox"/>
                        </div>
                        <div className="label-container ml-2 mt-1">
                            <label htmlFor="">Unregistered <span>(1672)</span></label>
                        </div>
                    </div>
                    <div className="inputCondition">
                        <div className="checkbox-container">
                            <input type="checkbox"/>
                        </div>
                        <div className="label-container ml-2 mt-1">
                            <label htmlFor="">Multan <span>(1465)</span></label>
                        </div>
                    </div>
                    <div className='mt-1'><span>View all</span></div>
                </div>
               <hr/>

               <div className="condition_popular">
                <div className='condition_Heading'>
                        <strong>FUEL</strong>
                        <span className='pr-3' style={{cursor:'pointer'}} onClick={arrowDown} onDoubleClick={normalArrow}>{arrow}</span> 
                    </div>
                    <div className="inputCondition mt-3">
                        <div className="checkbox-container">
                            <input type="checkbox"/>
                        </div>
                        <div className="label-container ml-2 mt-1">
                            <label htmlFor="">Petrol <span>(46617)</span></label>
                        </div>
                    </div>
                    <div className="inputCondition">
                        <div className="checkbox-container">
                            <input type="checkbox"/>
                        </div>
                        <div className="label-container ml-2 mt-1">
                            <label htmlFor="">CNG <span>(8780)</span></label>
                        </div>
                    </div>
                    <div className="inputCondition">
                        <div className="checkbox-container">
                            <input type="checkbox"/>
                        </div>
                        <div className="label-container ml-2 mt-1">
                            <label htmlFor="">Hybrid <span>(2398)</span></label>
                        </div>
                    </div>
                    <div className="inputCondition">
                        <div className="checkbox-container">
                            <input type="checkbox"/>
                        </div>
                        <div className="label-container ml-2 mt-1">
                            <label htmlFor="">Diesel <span>(1533)</span></label>
                        </div>
                    </div>
                    <div className="inputCondition">
                        <div className="checkbox-container">
                            <input type="checkbox"/>
                        </div>
                        <div className="label-container ml-2 mt-1">
                            <label htmlFor="">LPG <span>(40)</span></label>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="price_popular">
                <div className='price_Heading'>
                        <strong>KMS DRIVEN</strong>
                        <span className='pr-3' style={{cursor:'pointer'}} onClick={arrowDown} onDoubleClick={normalArrow}>{arrow}</span> 
                    </div>
                <div className="inputPrice">
                    <input type="text" placeholder='Min'/>
                    <input type="text" placeholder='Max'/>
                    <span><ChevronRightIcon/></span>
                </div>
                </div>
                <hr/>
                <div className="condition_popular">
                <div className='condition_Heading'>
                        <strong>CONDITION</strong>
                        <span className='pr-3' style={{cursor:'pointer'}} onClick={arrowDown} onDoubleClick={normalArrow}>{arrow}</span> 
                    </div>
                    <div className="inputCondition mt-3">
                        <div className="checkbox-container">
                            <input type="checkbox"/>
                        </div>
                        <div className="label-container ml-2 mt-1">
                            <label htmlFor="">Used <span>(51689)</span></label>
                        </div>
                    </div>
                    <div className="inputCondition">
                        <div className="checkbox-container">
                            <input type="checkbox"/>
                        </div>
                        <div className="label-container ml-2 mt-1">
                            <label htmlFor="">New <span>(7682)</span></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNavigationCar
