let Calculator = (
    {input1, 
    input2, 
    handleChangeInput1,
    handleChangeInput2, 
    total}) => {
    return (
        <>
            <input placeholder={input1} type="number" onChange={handleChangeInput1}></input>
            <span> + </span>
            <input placeholder={input2} type="number" onChange={handleChangeInput2}></input>
            <span> = </span>
            <div>
                <p>Ttoal : {total}</p>
            </div>
        </>
    )
}

export default Calculator;