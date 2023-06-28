import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Board = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setData([
            { title: "첫번째 게시판 제목", idx: "1" },
            { title: "두번째 게시판 제목", idx: "2" },
            { title: "세번째 게시판 제목", idx: "3" },
            { title: "네번째 게시판 제목", idx: "4" },
            { title: "다섯번째 게시판 제목", idx: "5" },
            { title: "여섯번째 게시판 제목", idx: "6" },
            { title: "일곱번째 게시판 제목", idx: "7" },
            { title: "여덟번째 게시판 제목", idx: "8" },
            { title: "아홉번째 게시판 제목", idx: "9" },
            { title: "열번째 게시판 제목", idx: "10" }
        ])
    }, [])

    const [data, setData] = useState([]);

    return (
        <>
            <div>게시판</div>
            <table>
                {data.map((data) => {
                    return (
                        <>
                            {/* <tr>
                                <Link to={`/3/${data.idx}`}>
                                    <td>{data.idx}</td>
                                    <td>{data.title}</td>
                                </Link>
                            </tr> */}
                            <tr onClick={()=>{navigate(`/3/${data.idx}`)}}>
                                <Link to={`/3/${data.idx}`}>
                                    <td>{data.idx}</td>
                                    <td>{data.title}</td>
                                </Link>
                            </tr>
                        </>
                    )
                })}
            </table>
        </>
    )

}
export default Board;