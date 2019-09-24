import React from "react";

class MovieItem extends React.Component {
    constructor(){
        super();

        this.state = {
            willWatch: false
        }
    }

    render() {
        const { item, removeMovieById, addMovieToWillWatch, removeMovieFromWillWatchById } = this.props;
        const classNameButton = `btn ${this.state.willWatch ? "pressed" : ""}`;

        return (
            <div className="card">
                <img 
                    className="card-img"
                    src={item.poster_path}
                    alt=""
                />
                <h3 className="card-title">{item.title}</h3>
                <div className="card-rating">Рейтинг: {item.vote_average}</div>
                <button 
                    type="button" 
                    className={classNameButton} 
                    onClick = {() => {
                        if (this.state.willWatch) {
                            removeMovieFromWillWatchById(item.id);
                        } else {
                            addMovieToWillWatch(item);
                        }
                        this.setState({
                            willWatch: !this.state.willWatch
                        });
                }}
                >В избранное</button>
                <button 
                    type="button" 
                    className="btn" 
                    onClick = {() => {
                        removeMovieById(this.props.item.id);
                }}
                >Удалить</button>
            </div>
        )
    }
}

export default MovieItem;
