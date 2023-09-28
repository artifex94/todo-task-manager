import './TodoItem.css'
import { CompleteIcon, DeleteIcon } from '../TodoIcons';

function TodoItem({completed, text, onComplete, onDelete}) {

    return (
      <li className="item">
        <CompleteIcon
        completed={completed}
        onComplete={onComplete}
        />
        <div className={`item__text ${completed && "item__text--complete"}`}>{text}</div>
        <DeleteIcon
        onDelete={onDelete}
        />
      </li>
    );
  }

export {TodoItem};