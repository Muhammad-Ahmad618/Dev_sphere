import React from 'react'

export default function Button({label, varient, varient2}) {

    const base_Style = 'text-white p-2 rounded-[30px] min-w-[8rem] text-xs sm:text-sm hover:bg-blue-600 md:text-sm' ;
    const varient_style = varient === 'transparent'? 'border border-blue-600 bg-transparent text-blue-600':'bg-blue-500'
    const varient_style2 = varient2 === 'hide'? 'hidden' : 'block'

  return (
    <div>
        <button className={`${base_Style} ${varient_style} ${varient_style2}`}>{label}</button>
    </div>
  )
}
