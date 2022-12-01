import CustomButton from "./CustomButton";

function Todo(props) {
  return (
    <div className="todo-container">
      <div>
        <h2>{props.todo.title}</h2>
      </div>

      <div>{props.todo.comment}</div>

      <CustomButton
        onClick={() => {
          props.handleDelete(props.todo.id);
        }}
      >
        삭제하기
      </CustomButton>

      <CustomButton onClick={() => props.onEditHandler(props.todo.id)}>
        {props.todo.isDone ? "취소" : "완료"}
      </CustomButton>
    </div>
  );
}

export default Todo;
