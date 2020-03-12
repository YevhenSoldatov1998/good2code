import React from "react";
import Typography from "@material-ui/core/Typography";

const ErrorMessage = ({children}) => (
     <div className={'overlay'}>
        <Typography variant={'h2'}>{children}</Typography>
     </div>
    )

export default ErrorMessage