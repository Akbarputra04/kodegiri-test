import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDetail } from "../app/actions"

const Modal = ({id, show, onClose}) => {
    const loading = useSelector(state => state.loading)
    const detail = useSelector(state => state.current)
    const dispatch = useDispatch()
    
    useEffect(() => {
        if (id) {
            dispatch(getDetail(id))
        }
    }, [id])

    return (
        <div className={`fixed top-0 left-0 h-screen w-screen bg-black/50 ${show ? 'block' : 'hidden'}`} onClick={onClose}>
            <div className="h-full w-full flex justify-center items-center">
                <div className="w-[75%] p-5 bg-white rounded-lg">
                    {loading && <p className="text-sm text-center my-2">Sedang memuat...</p>}
                    {!loading && detail.id && (
                        <>
                            <img src={detail.urls.regular} alt={detail.alt_description} className="w-full mb-3" />
                            <h1 className="font-bold">{detail.description || 'no description'}</h1>
                            <h6>Location: <b>{detail.location.name || '-'}</b></h6>
                            <h6>Likes: <b>{detail.likes}</b></h6>
                            <div className="flex flex-wrap gap-1">
                                {detail.tags_preview.map(tag => (
                                    <div key={tag.title} className="px-2 py-1 bg-slate-100 rounded-lg">{tag.title}</div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Modal