import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/taskSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch()

  const onCancel = () =>{
    reset()
    setIsOpen(false)
  }
  const onSubmit = (data) => {
    dispatch(addTask(data))
    onCancel()
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add New Task">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Title</span>
          </label>
          <Input
            color="teal"
            label="Title"
            type="text"
            {...register("title", { required: true })}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Description</span>
          </label>
          <Textarea
            color="teal"
            label="Description"
            type="text"
            {...register("description", { required: true })}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Deadline</span>
          </label>
          <Input
            color="teal"
            label="Deadline"
            type="date"
            {...register("deadline", { required: true })}
            required
          />
        </div>
        <div className="form-control flex flex-col">
          <label className="label">
            <span className="label-text font-semibold">Assign to</span>
          </label>
          <select
            name="Assign_to"
            defaultValue="default"
            {...register("assign_to", { required: true })}
            className="select focus:outline-0 border-2 rounded-lg p-2"
          >
            <option value="default" disabled>
              Assign to
            </option>
            <option value="Habib">Habib</option>
            <option value="Parth">Parth</option>
            <option value="Jibon">Jibon</option>
            <option value="Mahi">Mahi</option>
          </select>
        </div>
        <div className="form-control  flex flex-col">
          <label className="label">
            <span className="label-text font-semibold">Priority</span>
          </label>
          <select
            name="Priority"
            defaultValue="default"
            {...register("priority", { required: true })}
            className="select focus:outline-0 border-2 rounded-lg p-2"
          >
            <option value="default" disabled>
              Select Priority
            </option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div className="flex gap-2 justify-end mt-4">
            <Button onClick={()=>onCancel()} color="red">Cancel</Button>
            <Button type="submit" color="green">Submit</Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
