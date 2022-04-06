import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getTopics } from "../Utils/api";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
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
      <Box sx={{maxWidth: 150}}>
        <FormControl variant="standard">
        <InputLabel>Topic</InputLabel>
          <Select defaultValue={"select topic"}onChange={handleDropdownClick}>
            <MenuItem value='select topic' disabled>
              select topic
            </MenuItem>
            {topics.map((topic) => {
              return <MenuItem value={topic.slug} key={topic.slug}>{topic.slug}</MenuItem>;
            })}
          </Select>
       
        </FormControl>
      </Box>
    </div>
  );
}
