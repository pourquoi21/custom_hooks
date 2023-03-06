export default function App() {
  const useNotification = (title) => {
    if (!("Notification" in window)) return;
    const fireNotif = () => {
      if (Notification.permission !== "granted") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification(title);
          } else {
            return;
          }
        });
      } else {
        new Notification(title);
      }
    };
    return fireNotif;
  };

  const triggerNotif = useNotification("Can I steal your heart?");

  return (
    <div className="App">
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
}
