import React,{FC, useState} from "react";

export enum CardVariant {
    outliner='outliner',
    primary='primary'
} 
interface CardProps {
    width?:string;
    height?:string
    children?:React.ReactNode
    variant:CardVariant;
    onClick:(num:number)=>void;
    
}
const Card: FC<CardProps>=
 ({
    width,
    height,
    variant,
    children,
    onClick
}) => {
    const [state,setState]=useState(0)
    return (  
        <div style={{width,height,border:variant === CardVariant.outliner?'1px solid gray':'none',
        background:variant === CardVariant.primary?'1px solid blue':'none'}}
        onClick={()=>onClick(state)}>
            {children}
        </div>
    );
}
 
export default Card;