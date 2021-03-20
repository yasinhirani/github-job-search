import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./App.css";

function App() {

  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false;
  }

  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [darkmode, setDarkmode] = useState(getMode);

  useEffect(() => {
    getJobs();
    localStorage.setItem("mode", JSON.stringify(darkmode));
  }, [query, darkmode]);

  const getJobs = async () => {
    const url = `https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json?description=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    // console.log(jobs);
  };
  

  return (
    <>
      <div className={darkmode ? "App dark-mode" : "App"}>
        <div className="nav">
          <div className="search-bar">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setQuery(search);
            setSearch('');
          }}
        >
          <input
            type="text"
            value={search}
            placeholder="Search Jobs"
            onChange={(e) => {
              setSearch(e.target.value);
              // console.log(search);
            }}
          />
          <button className="btn-search" type="submit"></button>
        </form>
        </div>
        <label className="switch">
        <input type="checkbox" checked={darkmode} onChange={() => {setDarkmode(!darkmode)}}/>
        <span className="slider round"></span>
        </label>
        </div>
        {jobs.map((val, index) => {
          return (
            <Card
              key={index}
              title={val.title}
              cmplogo={val.company_logo}
              type={val.type}
              location={val.location}
              created={val.created_at}
              cmpsite={val.company_url}
              url={val.url}
              mode={darkmode}
              cmpname={val.company}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
