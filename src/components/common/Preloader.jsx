import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";

const Preloader = () => {
    return(
        <div className={'overlay'}>
            <CircularProgress />
        </div>
    )
}
export default Preloader