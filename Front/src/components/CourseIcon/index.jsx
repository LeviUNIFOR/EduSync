import './style.css';
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


export function CourseIcon(props) {
    const navigate = useNavigate();

    // const handleCourseIconClick = async (courseId) => {
    //     e.preventDefault();
    //     try {
    //       setIsLoading(true); // set loading to true
      
    //       await login(inputs);
      
    //       // Allow state update to process, then redirect
    //       setTimeout(navigate, 0, "/", { replace: true });
    //     } catch (err) {
    //       setErr(err.response.data);
    //     }
    //   };
    
    function handleCourseIconClick(courseId) {
        // setTimeout(navigate, 0, "/"+`course/${courseId}`, { replace: true });
        //navigate(`/course/${courseId}`);
        navigate(`/subscription-page/${courseId}`);
    }

    return (
        <div onClick={() => handleCourseIconClick(props.courseId)} className='course-block'>
            <img className='course-img' src={props.img} alt=""/>
            <p className='text course-name'>{props.name}</p>
            <p className='text course-author'>{props.author}</p>
            <div className='course-rating'>
                <p className='course-rating-number'>{props.rate}</p>
                <div className='course-rating-stars'>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaRegStar></FaRegStar>
                    <FaRegStar></FaRegStar>
                </div>    
            </div>
        </div>
    )
}