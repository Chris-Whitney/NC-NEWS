import { useEffect, useState } from "react";
import { getTopics } from "../Utils/api";

export function Nav({ setTopicFilter, setSortBy }) {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  const handleDropdownClick = (event) => {
    setTopicFilter(event.target.value);
  };

  return (
    <div className="nav-bar">
      <form>
        <label className="select-box-label">
          Topic:
          <select defaultValue={"select topic"}onChange={handleDropdownClick}>
            <option value='select topic' disabled>
              select topic
            </option>
            {topics.map((topic) => {
              return <option value={topic.slug} key={topic.slug}>{topic.slug}</option>;
            })}
          </select>
        </label>
      </form>
    </div>
  );
}
