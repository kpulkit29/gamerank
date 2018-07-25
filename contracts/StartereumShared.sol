pragma solidity ^0.4.19;

/**
 * @title StartereumShared
 * @dev Base contract which allows children to implement an emergency stop mechanism.
 */
contract StartereumShared {
  event MatchStopped(uint256 _waveID, uint256 _matchID);
  event MatchResumed(uint256 _waveID, uint256 _matchID);

  /**
   * @dev called by the owner to pause, triggers stopped state
   */
  function pause(uint256 _waveID, uint256 _matchID) public {
    MatchStopped(_waveID,_matchID);
  }

  /**
   * @dev called by the owner to unpause, returns to normal state
   */
  function unpause(uint256 _waveID, uint256 _matchID) public {
    MatchResumed(_waveID,_matchID);
  }
}