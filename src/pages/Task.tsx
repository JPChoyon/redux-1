import TaskCard from "@/module/Task/TaskCard";
import { TaskModal } from "@/module/Task/TaskModal";
import { selectTask } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Task = () => {
  const tasks = useAppSelector(selectTask);

  return (
    <div>
      <TaskModal></TaskModal>

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}></TaskCard>
      ))}
    </div>
  );
};

export default Task;
