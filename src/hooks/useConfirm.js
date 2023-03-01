export default function App() {
  const useConfirm = (message = "", callback, rejection) => {
    if (typeof callback !== "function") return;
    const confirmAction = () => {
      if (window.confirm(message)) callback();
      else rejection();
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
