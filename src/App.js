import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import InputSearch from "./components/InputSearch";
import GithubAPI from "./services/GithubAPI";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [repos, setRepos] = useState([]);
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const searchRepos = async (event) => {
    event.preventDefault();
    if (username !== "") {
      try {
        const { data } = await GithubAPI.getAll(username);
        setError("");

        setRepos(
          data.map(({ name, html_url, description, created_at }) => ({
            name,
            html_url,
            description,
            created_at,
          }))
        );
      } catch (error) {
        setError("Invalid Username!");
        setRepos([]);
      }
    }
  };

  return (
    <>
      <Header />
      <hr />
      <InputSearch
        username={username}
        setUsername={setUsername}
        searchRepos={searchRepos}
        error={error}
      />
      {repos.length > 0 && (
        <div className="timeline-container">
          {repos.map((rep, index) => {
            return (
              <div key={index} data-aos="fade-up">
                <Card
                  date={rep.created_at}
                  title={rep.name}
                  url={rep.html_url}
                  description={rep.description}
                />
              </div>
            );
          })}
        </div>
      )}
      <footer className="blog-footer pt-5">
        <p>
          Made With ❤️ by{" "}
          <a href="https://www.linkedin.com/in/dhia-djobbi" target="_blank" rel="noreferrer">
            Dhia Djobbi
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
