import { useEffect, useState } from "react";
import { getTopics } from "../api";

export function Nav({setTopicFilter, setSortBy}) {
  
    const [topics, setTopics] = useState([]);
  

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

 const handleDropdownClick =(event) => {
    setTopicFilter(event.target.value)
 };

 

  return (
    <div className="nav-bar">
      <form>
        <label className="select-box-label">
          Filter by topic:
          <select className="select-box" onChange={handleDropdownClick}>
            <option value="" disabled selected hidden>
              select topic
            </option>
            {topics.map((topic) => {
              return <option key={topic.slug}>{topic.slug}</option>;
            })}
          </select>
        </label>
      </form>
    </div>
  );
}
