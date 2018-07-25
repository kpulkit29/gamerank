pragma solidity ^0.4.19;
import "./startereumbackend.sol";
import "./StartereumShared.sol";
contract Startereumdelegate is Ownable,StartereumShared {
    //structure to maintain all the wave tags
    struct waveTags  {
        uint256[] tags;
    }
    //structure to keep track of matches
    struct matches {
        uint256 _matchId;
        uint256 _endTime;
        uint256 _tagA;
        uint256 _tagB;
        uint256 _minStack;
        uint256 _maxStack;
        uint256 _threshold;
        bool paused;
    }
    mapping(uint256 => waveTags)  waveToTag;
    mapping(uint256=>matches) waveToMatch;
    ////,......................////////
    ///// Owner functions ////////////
    ///////////////////////////////////
    /** 
    *  @dev function to add wave id and tags
    */
    function createWave(uint256 _waveId,uint256[] _tags) public onlyOwner {
        waveToTag[_waveId]=waveTags(_tags);
    }
    /** 
    *  @dev function to add wave id and match details
    */
    
    function createMatch(uint256 _waveID, uint256 _matchID, uint256 _endTime,
    uint256 _tagA, uint256 _tagB,
    uint256 _minStake, uint256 _maxStake, uint256 _threshold) public onlyOwner {
    waveToMatch[_waveID]=matches(_matchID,_endTime,_tagA,_tagB,_minStake,_maxStake,_threshold,false);
    }  
    /** 
    *  @dev function to pause a match
    */
    function stopMatch(uint256 _waveID,uint256 _matchID) public onlyOwner {
        require(waveToMatch[_waveID].paused==false);
        pause(_waveID,_matchID);
        waveToMatch[_waveID].paused=true;
    }
    /** 
    *  @dev function to resume a match
    */
    function resumeMatch(uint256 _waveID,uint256 _matchID) public onlyOwner {
        require(waveToMatch[_waveID].paused==true);
        pause(_waveID,_matchID);
        waveToMatch[_waveID].paused=false;
    }
    /** 
    *  @dev function to resume a match
    */
    
    
}