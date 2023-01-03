import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "./app/actions";
import Modal from "./components/Modal";

function App() {
  const {loading, photos} = useSelector(state => state)
  const dispatch = useDispatch()

  const [keyword, setKeyword] = useState('')
  const [page, setPage] = useState(1)
  const [currentId, setCurrentId] = useState(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    dispatch(getPhotos(keyword, page));
  }, []);

  window.onscroll = () => {
    if (Math.ceil(window.innerHeight + document.documentElement.scrollTop) === document.documentElement.offsetHeight) {
      setPage(page+1)
      dispatch(getPhotos(keyword, page+1));
    }
  }

  const handleSearch = e => {
    setKeyword(e.target.value)
    dispatch(getPhotos(e.target.value, page, true));
  }

  const handleClick = id => {
    setCurrentId(id)
    setShow(true)
  }

  return (
    <>
    <div className="fixed top-0 left-0 w-full bg-white p-5">
      <input type="text" name="keyword" id="keyword" placeholder="keyword" required className="px-3 py-2 w-full border rounded-lg" onChange={handleSearch} />
    </div>
    <div className="grid grid-cols-2 gap-3 mt-24">
      {photos.map(photo => (
        <img key={photo.id} src={photo.urls.small} alt={photo.alt_description} className="w-full h-full object-cover" onClick={() => handleClick(photo.id)} />
      ))}
    </div>
    {loading && (<p className="text-sm text-center my-2">Sedang memuat...</p>)}
    <Modal show={show} onClose={() => setShow(false)} id={currentId} />
    </>
  );
}

export default App;
