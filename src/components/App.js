import "./App.css";
import user from "../data/user.json";
import statisticalData from "../data/statistical-data.json";
import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <Statistics stats={statisticalData} />
    </>
  );
}

export default App;
