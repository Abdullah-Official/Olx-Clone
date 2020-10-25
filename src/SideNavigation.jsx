import React, { useState } from 'react'
import './SideNavigation.css'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function SideNavigation() {
    
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
        <>
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
                            <li className='mb-2'>Mobiles</li>
                        </ul>
                        <ul className='ml-2'>
                            <li className='mb-2'>Tablets (6370)</li>
                            <li className='mb-2'>Accessories (28868)</li>
                            <li className='boldMob'>Mobile Phones (181314)</li>
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
                        <strong>MAKE</strong>
                        <span className='pr-3' style={{cursor:'pointer'}} onClick={arrowDown} onDoubleClick={normalArrow}>{arrow}</span> 
                    </div>
                    <div className="subMake mt-3">
                         <ul className='firstList'>
                            <li>Samsung (43563)</li>
                            <li>Apple (39354)</li>
                            <li>Huawei (19147)</li>
                            <li>OPPO (17730)</li>
                            <li>Vivo (10259)</li>
                            <li className='boldMob pt-2'>View all</li>
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
                            <label htmlFor="">Used <span>(141706)</span></label>
                        </div>
                    </div>
                    <div className="inputCondition">
                        <div className="checkbox-container">
                            <input type="checkbox"/>
                        </div>
                        <div className="label-container ml-2 mt-1">
                            <label htmlFor="">New <span>(39608)</span></label>
                        </div>
                    </div>
                </div>
               
            </div>
        </>
    )
}

export default SideNavigation
