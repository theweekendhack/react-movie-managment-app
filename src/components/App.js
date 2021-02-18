import React from 'react' 

import Modal from "./Modal";
import Header from "./Header";
import SearchBox from "./SearchBox";
import AddMovieForm from "./AddMovieForm";
import MovieList from "./MovieList";
import Footer from "./Footer";

import "../css/App.css";


import {useState,useEffect} from "react";


const App = () => {

    const [movies,setMovies] = useState([]);
    const [modal, setModal] = useState({
        msg :'',
        visible: false
    });


    const [addFormState , setAddFormState] = useState(false);


    const filterMovies = (input)=>{

        let newMovies = movies.filter((movie)=>{

            return movie.title.includes(input)
        })

        //if the user deletes all characters from the text box
        if(input === "" )
        {
            newMovies = JSON.parse(localStorage.getItem("movies"));
        }


        setMovies(newMovies);
    }

    const toogleAddForm= ()=>{


        setAddFormState(!addFormState);
    }


    const hideModal = ()=>{

        setModal({
            msg:"",
            visible:false
        })
    }

    const addMovie = (newMovie)=>
    {

       

        localStorage.setItem("movies",JSON.stringify([...movies,newMovie]));

        setMovies([...movies,newMovie]);

        setModal({
            msg:`${newMovie.title} was added successfully!`,
            visible:true
        })

    }


    const deleteMovie = (id)=>{

            
      const newMovies =   movies.filter((movie)=>{

        return movie.id !== id
      })

    
       localStorage.setItem("movies",JSON.stringify(newMovies));

       setMovies(newMovies);

       setModal({
        msg:`The movie with the id ${id} was sucessfully deleted`,
        visible:true
    })

    }


    //Useeffect will fire off when the componenthas finish loading
    useEffect(()=>{

            if(localStorage.getItem("movies"))
            {
                const newMovies = JSON.parse(localStorage.getItem("movies"));

                setMovies(newMovies);
            }

    },[])



    return (
        <div  className="container">
            <Modal onHide={hideModal}   modalState={modal}/>
            <Header  onToogleAddForm= {toogleAddForm}/>
            <SearchBox  onFilter={filterMovies}/>
            <main>
                <AddMovieForm addFormState={addFormState} onAddMovie={addMovie}/>
                <MovieList  movies={movies} onDeleteMovie = {deleteMovie}/>
            </main>
            <Footer/>
        </div>
    )
}

export default App
