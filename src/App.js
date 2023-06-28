import { Routes, Route, Link } from 'react-router-dom';
import CountNum from './CountNum/CountNum';
import TodoList from './TodoList/TodoList';
import Board from './Board/Board';
import BoardDetail from './Board/BoardDetail';
function App() {
  return (
    <>
      <div className='header'>
        <span style={{ marginRight: "20px" }}>여기부분 헤더임</span>
        <Link to="/"> <span style={{ marginRight: "20px" }}>숫자 카운트</span></Link>
        <Link to="/1"> <span style={{ marginRight: "20px" }}>TodoList 만들기</span></Link>
        <Link to="/2"><span style={{ marginRight: "20px" }}> 게시판 만들기</span></Link>
      </div>
      <div className="component">
        <Routes>
          <Route path="/" element={<CountNum />} />
          <Route path="/1" element={<TodoList />} />
          <Route path="/2" element={<Board />} />
          <Route path="/3/:idx" element={<BoardDetail/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
