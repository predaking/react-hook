/*
 * @Author: Gong Wei
 * @Date: 2020-07-23 20:44:38
 * @LastEditor: Gong Wei
 * @LastEditTime: 2020-08-20 16:17:06
 * @Description:
 */
import React, { useState } from 'react';
import PropTypes from 'props-type';

/**
 * 列表项组件
 * @param {object} props
 */
function ListItem (props) {
    ListItem.defaultProps = {
        checked: 0,
        task: '',
        handleListChange: () => {}
    };

    ListItem.propTypes = {
        checked: PropTypes.number,
        task: PropTypes.string,
        handleListChange: PropTypes.func
    };

    const { checked, task, handleListChange } = props;

    return (
        <li>
            <input
                type="checkbox"
                checked={checked}
                disabled={checked === true}
                onChange={() => {
                    typeof handleListChange === 'function' && handleListChange({
                        checked: true,
                        task: task,
                        isComplete: true
                    });
                }}
            />
            <span>{task}</span>
        </li>
    );
}

/**
 * 列表组件
 * @param {object} props
 */
function List(props) {
    List.defaultProps = {
        list: []
    };

    List.propTypes = {
        list: PropTypes.array
    };

    const [list, setList] = useState(props.list);

    /**
     * 监听回车键，完成待办项输入
     * @param {event} e
     */
    const keyDown = e => {
        if (e.keyCode === 13 && e.target.value.length) {
            list.push({
                    checked: false,
                    task: e.target.value,
                    isComplete: false
            });
            return setList([...list]);
        }
        return 0;
    };

    /**
     * 更新列表状态
     * @param {object} listItem
     */
    const handleListChange = listItem => {
        list.map(item => {
            if (item.task === listItem.task && !item.checked) {
                item.checked = listItem.checked;
                item.isComplete = listItem.isComplete;
            }
        });
        setList([...list]);
    };

    return (
        <div>
        <label>ToDoList</label>
        <input type="text"
            onKeyDown={ (e) => { keyDown(e); }}
            placeholder="添加ToDo"
            required="required"
        />
        <br />
        <span>正在进行</span>
            <label>{list.filter(item => {
                return item.isComplete === false;
            }).length}
            </label>
            <ul>
                {list.filter(item => {
                        return item.isComplete === false;
                    }).map((item, index) => (
                        <ListItem key={index}
                                task={item.task}
                                checked={item.checked}
                                isComplete={item.isComplete === false}
                                handleListChange={handleListChange}
                        />
                    ))
                }
            </ul>

        <span>已经完成</span>
            <label>{list.filter(item => {
                return item.isComplete === true;
            }).length}
            </label>
            <ul>
                {list.filter(item => {
                        return item.isComplete === true;
                    }).map((item, index) => (
                        <ListItem key={index}
                                task={item.task}
                                checked={item.checked}
                                isComplete={item.isComplete === true}
                        />
                    ))
                }
            </ul>
        </div>
    );
}

export default List;
