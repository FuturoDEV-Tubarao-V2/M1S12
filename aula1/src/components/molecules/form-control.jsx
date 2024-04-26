import PropTypes from 'prop-types'

import { Input } from "../atoms/input";
import { Label } from "../atoms/label";

export function FormControl({ labelText, ...rest }) {
    return  (
        <>
            <Label>{labelText}</Label>
            <Input {...rest} />
        </>
    )
}

FormControl.propTypes = {
    labelText: PropTypes.string.isRequired,
}
