import React from 'react'

type ColorBoxProps = {
  color: string;
};

export const ColorBox:React.FC<ColorBoxProps> = ({color}) => {
  return (
    <div style={{textAlign:'center',margin:"10px"}}>
        <div style={{          
          width: "150px",
          height: "150px",
          backgroundColor: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",}}>
            Box
        </div>
        <p>
            <button>{color}</button>
        </p>
    </div>
  )
}


