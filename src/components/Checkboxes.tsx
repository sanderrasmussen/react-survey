import React from 'react'

function Checkboxes(props){
    const handleChange = props.onChange;
    return (
        <ul>
            <li>
                <label
                ><input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    
                    onChange= { handleChange}
                />Swimming</label
                >
            </li>
            <li>
                <label
                ><input name="spend-time" type="checkbox" value="bathing" onChange= { handleChange}/>Bathing</label
                >
            </li>
            <li>
                <label
                ><input
                    onChange= { handleChange}
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                />Chatting</label
                >
            </li>
            <li>
                <label
                ><input name="spend-time" type="checkbox" value="noTime" onChange= { handleChange} />I dont like to
                spend time with it</label
                >
            </li>
        </ul>

    )
}
export default Checkboxes;