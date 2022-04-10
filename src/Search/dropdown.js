import React from 'react';

const Dropdown = ({ title, list, id, currentState, setState }) => {
    let options = list.map((item, index) => {
        return <option key={index + 1} value={item}>{item}</option>;
    })

    function handleChange(e) {
        setState((e.target.value).toLowerCase().replace(/\s/g, '-'));
    }

    return (
        <>
            <label>{title}</label>
            <select name="selectList" id={id} value={currentState} onChange={handleChange}>
                {options}
            </select>
        </>
    )
}

export default Dropdown;