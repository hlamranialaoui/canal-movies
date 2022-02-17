import React from "react";

interface ISearchProps {
    filter: any;
}

export default function SearchComponent({filter}: ISearchProps) {
    return (
        <div className="bg-img">
            <div className="layer">
                <div className="row w-100">
                    <div className="col-md-2 col-1"/>
                    <div className="col-md-8 col-8">
                        <div className="input-group mb-3">
                            <input type="text"
                                   className="form-control" placeholder="search movie"
                                   onChange={(event) => filter(event.target.value)}
                            />
                            <span className="input-group-text" id="basic-addon2">
                                Search by movie name
                            </span>
                        </div>
                    </div>
                    <div className="col-md-2 col-1"/>
                </div>
            </div>
        </div>
    );
}