import React, {memo} from "react";

const Small = memo(({value}) => {
    //console.log(':C');
        return(
            <>
                <small>{ value }</small>
            </>
        )
    }
)

export default Small;