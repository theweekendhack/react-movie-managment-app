
import {useContext} from 'react';
import MovieContext from "../context/MovieContext";
import { FaWindowClose } from "react-icons/fa";

const MovieItem = (props) => {

    const {deleteMovie} = useContext(MovieContext);

    const clickHandler = ()=> deleteMovie(props.id);
    return (
        <div className="movie-container">
    
            <div className="grid grid-col-2 movie-top-area">
                <p className="">
                  {props.title}
                </p>
                <FaWindowClose onClick={clickHandler}className="icon-cursor icon-size-dbl-xlg grid-x-right" />
            </div>

            <p className="movie-description">
               {props.description}
            </p>

        </div>
    )
}


MovieItem.defaultProps = {
    title:"Movie",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque amet perferendis est blanditiis ad magni soluta autem eum eveniet sed ut illo pariatur ea molestias porro tempora tenetur, quis voluptatem?"
}

export default MovieItem
