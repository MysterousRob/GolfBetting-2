import React from "react";
import { useState, useEffect } from "react";
import { fetchDataArray } from "./api data/Leaderboard";
//image icon imports
import { MdLeaderboard } from "react-icons/md";
import { GrScorecard } from "react-icons/gr";
import { TbSquareRoundedPercentage } from "react-icons/tb";
import { MdDriveFileRenameOutline } from "react-icons/md";

const endpoint =
  "https://api.sportsdata.io/golf/v2/json/Leaderboard/60?key=3e7a7f2362474cd4ba30ec12b60f51c9";

function LeaderboardOutline() {
  const [leaderboardData, setLeaderboardData] = useState(null);

  useEffect(() => {
    fetchDataArray(setLeaderboardData, endpoint);
  }, []);

  useEffect(() => {
    console.log("raw leaderboardData in LeaderboardTable.js", leaderboardData);
  }, [leaderboardData]);

  //   useEffect(() => {
  //       console.log('players in leaderboardData in LeaderboardTable.js', leaderboardData.Players);
  //   }, [leaderboardData]);

  return (
    <div className="w-full p-2.5">
      <h2 className="text-2xl text-center">Leaderboard:</h2>
      <div className="ml-2.5 border border-white border-3 rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-center">
              <th className="bg-gray-200 text-left p-2.5 relative">
                Rank
                <MdLeaderboard className="absolute right-1 top-1/2 transform -translate-y-1/2" />
              </th>
              <th className="bg-gray-200 text-left p-2.5 relative">
                Player Name
                <MdLeaderboard className="absolute right-1 top-1/2 transform -translate-y-1/2" />
              </th>
              <th className="bg-gray-200 text-left p-2.5">Score</th>
              <th className="bg-gray-200 text-left p-2.5">Odds</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData?.Players?.length > 0 ? (
              leaderboardData.Players.map((player, index) => (
                <tr key={index} className="text-center">
                  <td className="p-2.5 bg-white text-center">{index + 1}</td>
                  <td className="p-2.5 bg-white text-center">{player.Name}</td>
                  {/* Uncomment these lines when data is available
                <td className="p-2.5 bg-white text-center">{player.Rounds[4].Score}</td>
                <td className="p-2.5 bg-white text-center">{player.Odds}</td> */}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-2.5">
                  Oops, no data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaderboardOutline;
