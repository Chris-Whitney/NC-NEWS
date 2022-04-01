import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getTopics } from "../Utils/api";
import '../Styling/Nav.css';

export function Nav({ setTopicFilter, setSortBy }) {
  const [topics, setTopics] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  const handleDropdownClick = (event) => {
    const topicSlug = event.target.value
    setTopicFilter(topicSlug);
    navigate(`/topic/${topicSlug}/articles`);
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
