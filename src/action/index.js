export const addInCart=(item)=>{
    return (
        {
            type:'cart',
            payload:{
                item:item
            }
        }
    );
}
export const billing=(item)=>{
    return (
        {
            type:'bill',
            payload:{
                billobj:item
            }
        }
    );
}