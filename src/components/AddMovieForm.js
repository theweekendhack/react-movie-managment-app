import MovieContext from "../context/MovieContext";
import ModalContext from "../context/ModalContext";
import {useState,useContext} from "react";




const AddMovieForm = () => {


    const {addMovie}  = useContext(MovieContext);
    const {addFormState} = useContext(ModalContext);

    const [title, setTitle]  = useState("");
    const [description, setDescription]  = useState("");
    const [errorTitle, setErrorTitle]  = useState("");
    const [errorDescription, setErrorDescription]  = useState("");


    const validateForm = ()=>{

        let isValidated = true;

           if(title === "")
            {
                setErrorTitle("You must enter a title");
                isValidated=false;
            }

            else
            {
                setErrorTitle("")
            }


            if(description === "")
            {
                setErrorDescription("You must enter a description");
                isValidated=false;
            }

            else
            {
                setErrorDescription("")
            }


            return isValidated;
    
    }


    return (
        <section className ={addFormState ? "" : "hide"}>
        <form>
            <div className="form-control-container">

                <label htmlFor="title"> Title</label>

                <input className="form-control" type="text" id="title"  value={title} onChange={(event)=>{


                       setTitle(event.target.value);

                }}/>
                <span className="error">{errorTitle}</span>

            </div>

            <div className="form-control-container">
                
                <label htmlFor="description"> Description</label>
                <textarea className="form-control" id="description" value={description} onChange={(event)=>{
                     setDescription(event.target.value);
                }}></textarea>

                <span className="error">{errorDescription}</span>
            
            </div>
        
            <div className="form-control-container">
                <button  className="btn btn-primary" type="button" onClick={()=>{

                        if(validateForm())
                        {
                           const newMovie={
                               id :  Math.floor(Math.random() *500000 ) + 1,
                               title,
                               description
                           }

                           addMovie(newMovie)

                           //clear the title and description

                           //clear the state after the movies is added
                           setTitle("");
                           setDescription("")

                        }


                }}>Save movie</button>
            </div>  
        </form>
    </section>
    )
}

export default AddMovieForm
