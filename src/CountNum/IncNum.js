const IncNum = ({ setCount, count }) => {

    const handlerButton = () => {
        console.log("증가");
        setCount(count + 1);
    }
    
    return (
        <>
            <button onClick={handlerButton}>숫자 증가</button>
        </>
    )
}
export default IncNum;