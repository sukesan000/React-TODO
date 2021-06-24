import React from "react";

export const IncompleteTodos = (props) => {
  const {
    todos,
    onChange,
    onClickEdit,
    onClickComplete,
    onClickDelete
  } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              {/*<li>{todo}</li>*/}
              <input value={todo} onChange={onChange} />
              <button onClick={() => onClickEdit(index)}>編集</button>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index, "incomplete")}>
                削除
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
