import React from 'react'

function PopularTop(props) {
    const hamburger = <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M896 682.667l42.667 42.667-42.667 42.667h-768l-42.667-42.667 42.667-42.667h768zM896 469.333l42.667 42.667-42.667 42.667h-768l-42.667-42.667 42.667-42.667h768zM896 256l42.667 42.667-42.667 42.667h-768l-42.667-42.667 42.667-42.667h768z"></path></svg>
  const grid = <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-2BsmJ" d="M426.662 554.667l42.667 42.667v298.667l-42.667 42.667h-298.667l-42.667-42.667v-298.667l42.667-42.667h298.667zM746.667 554.667c105.856 0 192 86.123 192 192s-86.144 192-192 192c-105.856 0-192-86.123-192-192s86.144-192 192-192zM384.017 640h-213.355v213.355h213.355v-213.355zM746.667 640c-58.816 0-106.667 47.851-106.667 106.667s47.851 106.667 106.667 106.667c58.816 0 106.667-47.851 106.667-106.667s-47.851-106.667-106.667-106.667zM426.662 85.342l42.667 42.667v298.645l-42.667 42.688h-298.667l-42.667-42.688v-298.645l42.667-42.667h298.667zM895.985 85.342l42.667 42.667v298.645l-42.667 42.688h-298.645l-42.688-42.688v-298.645l42.688-42.667h298.645zM384.017 170.675h-213.355v213.333h213.355v-213.333zM853.34 170.675h-213.333v213.333h213.333v-213.333z"></path></svg> 
  const desktop = <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M149.333 85.333h725.333l42.667 42.667v426.667l-42.667 42.667h-725.333l-42.667-42.667v-426.667l42.667-42.667zM192 512h640v-341.333h-640v341.333zM149.333 682.667h725.333l42.667 42.667v170.667l-42.667 42.667h-725.333l-42.667-42.667v-170.667l42.667-42.667zM192 853.333h640v-85.333h-640v85.333z"></path></svg>
  const downArrow = <svg width="14px" height="14px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg>
    return (
        <>
            <div className="top_add">
                    <div><p className='mt-2'>{props.adds} ads in &nbsp;<b>Mirpur</b></p></div>
                    <div className="view spaceView">
                      <div className="mt-1"><h6 className='mt-2' >VIEW</h6></div>
                      <div className='mt-2'>
                      <button className='menu_type '><span >{hamburger}</span></button>
                      <button className='menu_type ml-1 activeMenu'><span className=' '>{grid}</span></button>
                      <button className='menu_type ml-1'><span className=' '>{desktop}</span></button>
                      </div>
                      <div className="sort">
                        <div className='verticle__line2 mt-2'></div>
                       <div> <h6 className='sortPara mt-3'>SORT BY: </h6></div>
                       <div className='newly'>
                         <p className='new_listed'> Newly listed</p>
                         <div className='mt-2 ml-4 p-1 downArrow'>{downArrow}</div>
                       
                       </div>
                      </div>
                    </div>
                  </div> 
        </>
    )
}

export default PopularTop
