import React from "react";
import './TodoIcons.css';
import { MdOutlineCheckBoxOutlineBlank as CheckBox } from "react-icons/md";
import { MdOutlineCheckBox as Check } from "react-icons/md";
import { MdDeleteForever as DeleteCan } from "react-icons/md";
import {MdSearch as Search} from "react-icons/md";

export function CompleteIcon({completed, onComplete}) {
    return (
        <span 
        className={`icon icon-check ${completed && "icon-check--active"}`}
        onClick={onComplete}
        >{completed?<Check/>:<CheckBox/>}
        </span>
    );
}

export function DeleteIcon ({onDelete}) {
    return (
        <span 
        className="icon icon-delete"
        onClick={onDelete}
        ><DeleteCan/>
        </span>
    );
}

export function SearchIcon () {
    return (
        <span
        className="icon icon-search"
        >
        <Search/>
        </span>
    );
}


