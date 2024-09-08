import React from "react";
import Card from "./Card";

const Tournament = ({ data }) => {
  return (
    <div>
      {!data ? (
        <div className="spinner-grow" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div>
          <div className="winner-section">
            <h1>Winner's Bracket</h1>
          </div>
          <div className="container">
            <div className="tournament-bracket tournament-bracket--rounded">
              <div className="tournament-bracket__round tournament-bracket__round--quarterfinals">
                <ul className="tournament-bracket__list">
                  <Card data={data[0]} />
                  <Card data={data[1]} />
                  <Card data={data[0]} />
                  <Card data={data[1]} />
                </ul>
              </div>
              <div className="tournament-bracket__round tournament-bracket__round--semifinals">
                <ul className="tournament-bracket__list">
                  <Card data={data[0]} />
                  <Card data={data[1]} />
                </ul>
              </div>
              <div className="tournament-bracket__round tournament-bracket__round--bronze">
                <ul className="tournament-bracket__list">
                  <Card data={data[0]} />
                </ul>
              </div>
              <div className="tournament-bracket__round tournament-bracket__round--gold">
                <ul className="tournament-bracket__list">
                  <Card data={data[0]} />
                </ul>
              </div>
            </div>
          </div>

          <div className="winner-section">
            <h1>Loser's Bracket</h1>
          </div>
          <div className="container">
            <div className="tournament-bracket tournament-bracket--rounded">
              <div className="tournament-bracket__round tournament-bracket__round--quarterfinals">
                <ul className="tournament-bracket__list">
                  <Card data={data[0]} />
                  <Card data={data[1]} />
                  <Card data={data[0]} />
                  <Card data={data[1]} />
                </ul>
              </div>
              <div className="tournament-bracket__round tournament-bracket__round--semifinals">
                <ul className="tournament-bracket__list">
                  <Card data={data[0]} />
                  <Card data={data[1]} />
                </ul>
              </div>
              <div className="tournament-bracket__round tournament-bracket__round--bronze">
                <ul className="tournament-bracket__list">
                  <Card data={data[0]} />
                </ul>
              </div>
              <div className="tournament-bracket__round tournament-bracket__round--gold">
                <ul className="tournament-bracket__list">
                  <Card data={data[0]} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tournament;