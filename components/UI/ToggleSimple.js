import React from 'react';
import { Toggle } from '@ui-kitten/components';

export const ToggleSimple = (props) => {

    const [checked, setChecked] = React.useState(props.checked);

    const onCheckedChange = (isChecked) => {
        setChecked(isChecked);
    };

    return (
        <Toggle checked={checked} onChange={onCheckedChange} />
    );
};