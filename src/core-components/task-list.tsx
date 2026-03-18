import Button from "../components/button";
import PlusIcon from "../assets/icons/Plus-Regular.svg?react";
import TaskItem from "./task-item";
import UseTasks from "../hooks/use-tasks";
import useTask from "../hooks/use-task";

interface TaskItemProps{
  task: Task;
}

export default function TaskList({task}: TaskItemProps) {
  const { tasks } = UseTasks();
  const {prepareTask} = useTask()
  console.log(tasks);

  function handlePrepareTask(){
    prepareTask();
    }
  return (
    <>
      <section>
        <Button icon={PlusIcon} className="w-full" onClick={handlePrepareTask}>
          Nova Tarefa
        </Button>
      </section>
      <section className="space-y-2">
        {tasks.map((task) => <TaskItem key={task.id} task={task}/>)}
      </section>
    </>
  );
}
