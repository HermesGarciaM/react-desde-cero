import React, {useContext} from 'react';
import GroupMembers from "./GroupMembers";
import {GroupContext} from "../App";

function Group() {

    const { searchGroupMember } = useContext(GroupContext);

    return (
        <section className='container'>
            <input type="search" placeholder="Buscar Miembros"
                   onKeyUp={searchGroupMember}
            />
            <GroupMembers />
        </section>
    );
}

export default Group;