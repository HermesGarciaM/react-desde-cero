import React, {useContext} from 'react';
import GroupMember from "./GroupMember";
import {GroupContext} from "../App";

function GroupMembers() {

    const context = useContext(GroupContext);

    const filterGroupMember = member => member.includes(context.search)

    return (
        <ul className="group">
            {context.group.filter(filterGroupMember).map((member,i) => <GroupMember key={i} name={member} />)}
        </ul>
    );
}

export default GroupMembers;