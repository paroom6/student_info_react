import { useEffect, useRef, useState } from 'react';
import InputInfo from './components/InputInfo';
import StudentInfo from './components/StudentInfo';
import InfoButtons from './components/InfoButtons';
import StudentPage from './pages/StudentPage';
import StudentArrayPage from './pages/StudentArrayPage';
import StudentArraypage2 from './pages/StudentArraypage2';
import StudentArraypage3 from './pages/StudentArraypage3';
import { Route, Routes } from 'react-router-dom';
import Memoization from './pages/Memoization';
import { Link } from 'react-router-dom';
import Params from './pages/Params';
import SearchPage from './pages/SearchPage';
import ProductPage from './pages/ProductPage';
import SubRoute from './pages/SubRoute';
function App() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  // .filter(book => book.categoryId === categories
  //   .filter(category => category.id === category))[0]?.id);
  return (
    <>
    <input type="text" onChange={(e) => setValue(e.target.value)}/>
    <input type="text" onChange={(e) => setValue2(e.target.value)}/>
    <ul>
      <Link to={"/memoization"}><li>메모제이션</li></Link>
      <Link to={"/st"}><li>학생정보</li></Link>
      <Link to="/sta1"><li>학생들정보1</li></Link>
      <Link to="/sta3"><li>학생들정보3</li></Link>
      <Link to={`/p?data=${value}`}><li>params</li></Link>
      <Link to={`/books?bookName=${value}&categoryName=${value2}`}><li>도서검색</li></Link>
      <Link to={`/product`}><li>제품</li></Link>
      <Link to={`/sub`}><li>서브</li></Link>
      {/*html에서는 `${}`로 변수 지정, 띄어쓰기 유의*/}
    </ul>
    <Routes>
      <Route path='/memoization' element={ <Memoization />} />
      <Route path='/st' element={ <StudentPage />} />
      <Route path='/sta1' element={ <StudentArrayPage />} />
      <Route path='/sta3' element={ <StudentArraypage3 />} />
      <Route path='/p' element={ <Params />} />
      <Route path='/books' element={ <SearchPage />} />
      <Route path='/product/:productId' element={ <ProductPage />} />
      <Route path='/sub/*' element={ <SubRoute />} />

      {/* /:key를 통해  */}
    </Routes>
    </>

  );
}

export default App;