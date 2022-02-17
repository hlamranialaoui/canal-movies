import React from "react";
import {POSTER_IMAGE_BASE} from "../../../conf/constants";

interface IMovieProps {
    originalName: string;
    posterPath: string;
    voteAverage: number;
}

export default function MovieComponent({originalName, posterPath, voteAverage}: IMovieProps) {
    return (
        <section className="col-lg-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <img style={{maxWidth: '80%'}} src={`${POSTER_IMAGE_BASE}/${posterPath}`} alt="single"/>
                    </div>
                </div>
                <div className="row align-items-center p-2">
                    <div className="col-lg-12">
                        <h5>{originalName}</h5>
                        <p className="movie-vote-average">
                            <i className="bi bi-star-fill"/> {voteAverage}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}