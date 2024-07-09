import React from "react";
import '../../assets/css/GBS.css';
import { useState,useEffect } from "react";
import { fetchDataArray } from "./api data/Leaderboard";
//image icon imports
import { MdLeaderboard } from "react-icons/md";
import { GrScorecard } from "react-icons/gr";
import { TbSquareRoundedPercentage } from "react-icons/tb";
import { MdDriveFileRenameOutline } from "react-icons/md";

const endpoint = 'https://api.sportsdata.io/golf/v2/json/Leaderboard/60?key=3e7a7f2362474cd4ba30ec12b60f51c9'

function LeaderboardOutline(){
  const [leaderboardData, setLeaderboardData] = useState(null);

  useEffect(() => {
    fetchDataArray(setLeaderboardData, endpoint)
  }, [])

  useEffect(() => {
      console.log('raw leaderboardData in LeaderboardTable.js', leaderboardData);
  }, [leaderboardData]); 

//   useEffect(() => {
//       console.log('players in leaderboardData in LeaderboardTable.js', leaderboardData.Players);
//   }, [leaderboardData]); 

  return (
      <div className="NEO">
          <h2>Leaderboard:</h2>
          <div className="leaderboard">
              <table className="container2">
                  <thead className="container3">
                      <tr className="container-box">
                          <th className="text-th">
                              Rank
                          </th> 
                          <MdLeaderboard />
                          <th className="text-th">
                              Player Name
                              <MdLeaderboard />
                          </th>
                          <th className="text-th">
                              Score
                              
                          </th>
                          <th className="text-th">
                              Odds
                          </th>
                      </tr>
                  </thead> 
                  <tbody className="container4">
                      {leaderboardData?.Players?.length > 0 ? (leaderboardData?.Players?.map((player, index) => (
                         <tr key={index} className="container-box"> 
                              <td className="text-tb">{index + 1}</td> 
                              <td className="text-tb">{player.Name}</td> 
                              {/* <td className="text-tb">{player.Rounds[4].Score}</td> 
                              <td className="text-tb">{player.Odds}</td>  */}
                          </tr>
                     ))) : <div>oops</div>}  
                  </tbody>
              </table>
          </div>
          </div>
  );
}

export default LeaderboardOutline;