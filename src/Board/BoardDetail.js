import { useEffect,useSate } from "react";
import { useParams } from 'react-router-dom';

const BoardDetail = () => {
    /**  
    const [content,setContent] = useSate('')
    useEffect(() => {
        axios.get(`http://loalhost:port/api/url/${idx}`)
        .then(r = > {
            setContent(r.content)
        })
        .catch(e => console.log(e))
     }, [])
     */
    const { idx } = useParams();
    return (
        <>
            <div>{idx}</div>
            <div>{idx}번째 게시물 내용 입니다</div>
        </>
    )
}
export default BoardDetail;