export default function App() {
  const useConfirm = (message = "", onConfirm, onCancel) => {
    if (!onComfirm && typeof onConfirm !== "function") return;
    if (onCancel && typeof onCancel !== "function") return;
    const confirmAction = () => {
      if (window.confirm(message)) onConfirm();
      else onCancel();
    };
    return confirmAction;
  };

  const deleteWorld = () => console.log("Deleting the world...");
  const cancel = () => console.log("canceled");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, cancel);

  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}
