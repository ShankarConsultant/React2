import React,{ useState, memo} from 'react';

const MemoTodos = () => {
    console.log('child Render')
}
export default memo(MemoTodos);