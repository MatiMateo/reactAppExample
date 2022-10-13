import { useNavigate } from "react-router-dom/dist";

const ArrowBack = ({className}) => {
    const navigate = useNavigate()
    return (
        <button className={className} onClick={() => navigate(-1)}>
            <svg className="w-10 h-10 p-2 rounded-full bg-soft-pink-500" fill="white" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        </button>
    )
}

export default ArrowBack;