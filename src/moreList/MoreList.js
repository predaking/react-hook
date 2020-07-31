/*
 * @Author: Gong Wei
 * @Date: 2020-07-30 19:13:11
 * @LastEditor: Gong Wei
 * @LastEditTime: 2020-07-30 23:14:16
 * @Description: 无限滚动列表
 */
import React, { useState, useEffect, useRef } from 'react';
import './MoreList.css';

/**
 * 列表项
 * @param {object} props
 */
function ListItem(props) {
    return (
        <li className="list-item">
            {props.content}
        </li>
    )
}

/**
 * 列表
 * @param {props} props
 */
function MoreList(props) {
    const [ list, setList ] = useState(props.list);
    const MoreList = useRef(null);

    useEffect(() => {
        const handleScroll = e => {
            const { scrollTop, clientHeight, scrollHeight } = e.target;

            if (scrollHeight - scrollTop === clientHeight) {
                setList(list.push({
                    content: '抽到妖刀姬'
                }));
            }
        }
        MoreList.current.addEventListener('scroll', handleScroll.bind(this));
    }, [list]);

    return (
        <ul className="list" ref={MoreList}>
            {props.list.map((item, index) =>
                <ListItem key={index} content={item.content + index}/>
            )}
        </ul>
    )
}

export default MoreList;