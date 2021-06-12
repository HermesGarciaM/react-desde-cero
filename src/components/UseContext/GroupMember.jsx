import React, {useContext} from 'react';
import {GroupContext} from "../App";

function GroupMember({name}) {

    const {removeGroupMember} = useContext(GroupContext);

    return (
        <li className="group__member" onClick={() =>removeGroupMember(name)}>
            <span className="group__name">{name}</span>
            <br/>
            <span >Eliminar</span>
        </li>
    );
}

export default GroupMember;