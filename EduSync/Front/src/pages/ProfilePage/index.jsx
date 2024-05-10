import './style.css'
import profileImg from '../../assets/blank-profile.webp'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import jsImg from '../../assets/js.png';
import pyImg from '../../assets/python.png';
import { useEffect, useState } from 'react'
import { CourseIcon } from '../../components/CourseIcon';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export function ProfilePage() {

    const {userId} = useParams()
    const [createdCourses, setCreatedCourses] = useState([]);

    const [subscribedCourses, setSubscribedCourses] = useState([
        {
            img: jsImg,
            name: "Curso Javascript para backend",
            author: "John Javascript",
            rate:3
        },
        {
            img: pyImg,
            name: "Curso Python para Ciência de Dados",
            author: "John Python",
            rate: 4
        },
    ])

    const [name,setName] = useState("");
    const [description, setDescription] = useState(`
        Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has 
        survived not only five centuries, but also the leap into   
    `)

    async function getProfileData() {
        const response = await axios.get(`http://localhost:3001/course/author/${userId}`)

        setCreatedCourses(response.data.courses);
        setName(response.data.author[0].username);
        console.log(response.data)
    };

    useEffect(() => {
        getProfileData();
    },[])

    return(
        <>
            <Navbar></Navbar>
            <div className="profile-wrapper">
                    <div className='profile'>
                        <img className='profile-img' src={profileImg} alt=""/>
                        <div className='profile-data'>
                            <h4>{name}</h4>
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className="courses-wrapper">
                        <h2>Cursos criados</h2>
                        <div className='courses'>
                            {createdCourses.map( (c,i) => <CourseIcon key={i} img ={jsImg} name={c.title} rate={5}/>)}
                        </div>
                        <h2>Cursos inscritos</h2>
                        <div className='courses'>
                            {subscribedCourses.map( c => <CourseIcon img ={c.img} name={c.name} author={c.author} rate={c.rate}/>)}
                        </div>
                    </div>

            </div>
            <Footer></Footer>
        </>
    )
}