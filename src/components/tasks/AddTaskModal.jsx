import Modal from "../ui/Modal";

const AddTaskModal = ({isOpen, setIsOpen}) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title='Add New Task'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni et asperiores natus beatae maiores accusamus alias voluptate quas nulla exercitationem!
        </Modal>
    );
};

export default AddTaskModal;