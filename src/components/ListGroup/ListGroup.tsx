import React, { Fragment, MouseEvent, useState } from 'react';
import styles from './ListGroup.module.css';
import styled from 'styled-components';

const List = styled.ul`
    list-style: none;
    padding: 100;
}
`

interface ListItemProps {
    active: boolean
}

const ListItem = styled.li<ListItemProps>`
    padding: 5px 0;
    background: ${ props => props.active ? 'blue' : 'none'}
`

interface Props {
    items: string[];
    heading: string;
    onSelectedItem: (item: string) => void;
}

export default function ListGroup({items, heading, onSelectedItem}: Props) {

    const [selectedIndex, setSelectedIndex] = useState(0)
    const handleClick = (item:string,index: number) => {
        setSelectedIndex(index)
        onSelectedItem(item)
    }

    return (
        <Fragment>
            <h1>{heading}</h1>
            {items.length === 0 ? <p>No item found</p> : null }
            {items.length === 0 && <p>No item found</p> }

            <List>
                {items.map((item, index) => <ListItem 
                 active ={index === selectedIndex}
                key={item} className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                 onClick={() => handleClick(item,index)}
                
                >{item}</ListItem>)}
                
            </List>
                
        </Fragment>)
}
