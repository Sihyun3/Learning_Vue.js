const DecNum = ({ setCount, count }) => {

    const handlerButton = () => {
        console.log("감소");
        setCount(count - 1);
    }
    
    return (
        <>
            <button onClick={handlerButton}>숫자 감소</button>
        </>
    )
}
export default DecNum;