import React, {useState} from 'react'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import './SideNavigationHouse.css'

function SideNavigationLand() {
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
                            <li className='mb-2 ml-1'>Property for Sale</li>
                        </ul>
                        <ul className='ml-2'>
                            <li className='mb-3 boldMob '>Land & Plots (24890)</li>
                            <li className='mb-3 '>Houses (15976)</li>
                            <li className='mb-3'>Apartments & Flats (5367)</li>
                            <li className='mb-3'>Shops - Offices - Commercial Space (3748)</li>
                            <li className='mb-3'>Portions & Floors (712)</li>
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
                        <strong>TYPES</strong>
                        <span className='pr-3' style={{cursor:'pointer'}} onClick={arrowDown} onDoubleClick={normalArrow}>{arrow}</span> 
                    </div>
                    <div className="inputCondition mt-3">
                        <div className="checkbox-container">
                            <input type="checkbox"/>
                        </div>
                        <div className="label-container ml-2 mt-1">
                            <label htmlFor="">Other Tablets <span>(2597)</span></label>
                        </div>
                    </div>
                    <div className="inputCondition">
                        <div className="checkbox-container">
                            <input type="checkbox"/>
                        </div>
                        <div className="label-container ml-2 mt-1">
                            <label htmlFor="">Apple <span>(2117)</span></label>
                        </div>
                    </div>
                    <div className="inputCondition">
                        <div className="checkbox-container">
                            <input type="checkbox"/>
                        </div>
                        <div className="label-container ml-2 mt-1">
                            <label htmlFor="">Samsung <span>(1358)</span></label>
                        </div>
                    </div>
                    <div className="inputCondition">
                        <div className="checkbox-container">
                            <input type="checkbox"/>
                        </div>
                        <div className="label-container ml-2 mt-1">
                            <label htmlFor="">Q Tab <span>(149)</span></label>
                        </div>
                    </div>
                    <div className="inputCondition">
                        <div className="checkbox-container">
                            <input type="checkbox"/>
                        </div>
                        <div className="label-container ml-2 mt-1">
                            <label htmlFor="">Danny Tabs <span>(82)</span></label>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="condition_popular">
                <div className='condition_Heading'>
                        <strong>AREA UNIT</strong>
                        <span className='pr-3' style={{cursor:'pointer'}} onClick={arrowDown} onDoubleClick={normalArrow}>{arrow}</span> 
                    </div>
                    <div className="inputCondition mt-3">
                        <div className="checkbox-container">
                            <input type="radio"/>
                        </div>
                        <div className="label-container ml-2 mt-1">
                            <label htmlFor="">Kanal</label>
                        </div>
                    </div>
                    <div className="inputCondition">
                        <div className="checkbox-container">
                            <input type="radio"/>
                        </div>
                        <div className="label-container ml-2 mt-1">
                            <label htmlFor="">Marla</label>
                        </div>
                    </div>
                    <div className="inputCondition">
                        <div className="checkbox-container">
                            <input type="radio"/>
                        </div>
                        <div className="label-container ml-2 mt-1">
                            <label htmlFor="">Square Feet</label>
                        </div>
                    </div>
                    <div className="inputCondition">
                        <div className="checkbox-container">
                            <input type="radio"/>
                        </div>
                        <div className="label-container ml-2 mt-1">
                            <label htmlFor="">Square Meter</label>
                        </div>
                    </div>
                    <div className="inputCondition">
                        <div className="checkbox-container">
                            <input type="radio"/>
                        </div>
                        <div className="label-container ml-2 mt-1">
                            <label htmlFor="">Square Yards</label>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="price_popular">
                <div className='price_Heading'>
                        <strong>AREA</strong>
                        <span className='pr-3' style={{cursor:'pointer'}} onClick={arrowDown} onDoubleClick={normalArrow}>{arrow}</span> 
                    </div>
                <div className="inputPrice">
                    <input type="text" placeholder='Min'/>
                    <input type="text" placeholder='Max'/>
                    <span><ChevronRightIcon/></span>
                </div>
                </div>
                 </div>
        </>
    )
}

export default SideNavigationLand
