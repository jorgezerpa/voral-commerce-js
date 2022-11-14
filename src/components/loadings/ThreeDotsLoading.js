import React from 'react'

export const ThreeDotsLoading = ({ width, dotsColor, radius }) => {
    console.log(width, dotsColor, radius)
  return (
    <div className={`w-full flex justify-center items-center gap-3`}>
        <div className={ `rounded-[50%] bg-[#fff] w-[8px] h-[8px] animate-[scaling_.5s_ease-in-out_infinite_.1s]` } ></div>
        <div className={ `rounded-[50%] bg-[#fff] w-[8px] h-[8px] animate-[scaling_.5s_ease-in-out_infinite_.15s]` } ></div>
        <div className={ `rounded-[50%] bg-[#fff] w-[8px] h-[8px] animate-[scaling_.5s_ease-in-out_infinite_.2s]` } ></div>
    </div>
  )
}
