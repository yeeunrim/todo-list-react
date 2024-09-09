import React from "react";
import "../../../../styles/list.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuPencil } from "react-icons/lu";
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Popconfirm, message } from 'antd';

function List({ todos, onEditClick, onTodoUpdate, onTodoDelete }) {
  // 체크박스 선택 시, 업데이트 보장
  const handleCheckboxChange = (id) => {
    const updatedTodo = todos.find((item) => item.id === id);
    const newCompletedStatus = !updatedTodo.completed;
    const updatedTodoWithStatus = { ...updatedTodo, completed: newCompletedStatus };
    
    onTodoUpdate(updatedTodoWithStatus);
  };
  
  // 삭제 버튼 클릭 시, 삭제 처리
  const handleDelete = (id) => {
    onTodoDelete(id);
    message.success('성공적으로 삭제되었습니다!');
  };

  return (
    <>
      {todos.map((item) => (
        <div className="toDoBoxWrapper" key={item.id}> 
          <div className={`toDoBox ${item.completed ? 'completed' : ''}`}>
            <div className="toDoBoxLeft">
              <input
                type="checkbox"
                id={`check${item.id}`}  // id를 사용하여 체크박스에 고유 id 부여
                checked={item.completed}
                onChange={() => handleCheckboxChange(item.id)}  // id를 사용하여 체크박스 상태 업데이트
              />
              <label htmlFor={`check${item.id}`} />
            </div>
            <div className="toDoBoxMiddle">
              <div className="toDoTitle">
                <p>{item.title}</p>
              </div>
              <div className="toDoConDate">
                <p>
                  <span className="toDoContent">{item.content}</span>
                  {item.date && (
                    <>
                      &nbsp;|&nbsp;
                      <span className="toDoDate">{item.date}</span>
                    </>
                  )}
                </p>
              </div>
            </div>
            <div className="toDoBoxRight">
              {/* 기존 할 일 목록을 그대로 전송 */}
              <LuPencil onClick={() => onEditClick(item)} />
              <Popconfirm
                title="정말로 삭제하시겠습니까?"
                icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                onConfirm={() => handleDelete(item.id)}
                okText="Yes"
                cancelText="No"
              >
                <RiDeleteBin6Line />
              </Popconfirm>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default List;
