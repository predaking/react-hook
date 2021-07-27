/**
 * @Author: Gong Wei
 * @Date: 2020-07-30 19:13:11
 * @LastEditor: Gong Wei
 * @LastEditTime: 2020-08-20 16:29:24
 * @Description: 无限滚动列表
 */
import React, { useState, useEffect, useRef } from 'react';
import './MoreList.css';
import PropTypes from 'prop-types';

MoreList.defaultProps = {
    list: [],
    content: ''
};

MoreList.propTypes = {
    list: PropTypes.array,
    content: PropTypes.string
};

ListItem.defaultProps = {
    content: ''
};

ListItem.propTypes = {
    content: PropTypes.string
};

/**
 * 列表项
 * @param {object} props
 */
function ListItem (props) {
    return (
        <li className="list-item">
            {props.content}
        </li>
    );
}

/**
 * 列表
 * @param {props} props
 */
function MoreList(props) {
    const [list, setList] = useState(props.list);
    const MoreList = useRef(null);
    useEffect(() => {
        const handleScroll = e => {
            const { scrollTop, clientHeight, scrollHeight } = e.target;
            console.log(scrollTop, clientHeight, scrollHeight);

            if (scrollHeight - scrollTop === clientHeight) {
                setList(list.push({
                    content: '抽到妖刀姬'
                }));
            }
        };
        MoreList.current.addEventListener('scroll', handleScroll);
    }, [list]);

    return (
      <div className="list-box">
        <ul className="list" ref={MoreList}>
            {props.list && props.list.map((item, index) =>
                (
                    <ListItem
                        key={index}
                        content={item.content + index}
                    />
                )
            )}
        </ul>
      </div>
  );
}

export default MoreList;
