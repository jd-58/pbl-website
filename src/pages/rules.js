import logo from './PBLlogoWrittenOut.png';

export default function Rules() {
    return (
        <div className="rulesPage">
<h1>Rules</h1>
<p className="pageContent">
There are currently three proposed rule sets for how points will be calculated for the PBL. Once we have the finalized list of potential members,
we can move to discussing/voting on the finalized rule set. As a note, each race will be one lap of Mushroom Peaks. We will also edit the item probabilities,
in order to maintain competitiveness. Item balancing is an ongoing process, and won't be finalized until all participants approve. This page will just focus on
potential methods of scoring races. The goal with creating a rule set is to be inclusive and allow as many people as possible
to enjoy playing in the league, even if you haven't been grinding peaks for the last 2 years. With this in mind, we have proposed 3 different rule sets,
each with their own pros and cons. If you have any questions, comments, or suggestions about the rules, contact Jacob. The three rule sets are:
</p>
<ol>
    <li classname="rulesList">Regular Scoring</li>
        <p className="rulesContentInList">This is the most straightforward, but least inclusive option. In this rule set, the winner of a race is
        simply determined by who crosses the finish line first. The winner would receive all of the potential points, but there would be opportunities for both
        players to gain additional points for things such as a perfect lap. This method is very simple, but potentially would not be fun or inclusive for as many people.</p>
    <li classname="rulesList">Spread Scoring</li>
        <p className="rulesContentInList">This method is a bit more complicated, but would be inclusive for everyone. This method calculates a "spread" between
        two players, and uses this spread to determine the race winner. To calculate this, each player will submit three separate one lap time trials of Mushroom
        Peaks, seltzer chugging included. These three times will be averaged together to get a player's average lap time. This time will differ slightly from
        race conditions, so we will calculate the difference between a time trial time and actual race time (By doing a bunch of actual beerio races, and comparing
        the difference between our average race time and our average lap time). Once we have a "race time" for each player, we can compare the race times between
        two players to get the "spread" for the race. For example, if Player 1 has a race time of 1:20, and Player B has a race time of 1:35, the spread of the race
        will be 15 seconds. This means that if Player A crosses the finish line first by more than 15 seconds, they actually win the race and receive points for winning the race.
        If Player A crosses the finish line first, but the margin of victory is less than 15 seconds, Player B actually wins the race, and receives points for the
        win. This allows players of all different skill levels to compete with each other and have fun. There are more details, such as updating race times
        throughout the season, not having a spread if 2 players are very close to being evenly matched, etc. but these are the basics of the idea.</p>
    <li classname="rulesList">Hybrid Scoring</li>
            <p className="rulesContentInList">
                This method is a combination of method 1 and method 2. In this method, we would still get a race time for each player and calculate the spread,
                but the spread would only be used to calculate how many points each player gets. In this method, the winner of a race is still who crosses the
                finish line first, like in method 1, but the spread is used to weight the potential amount of points won toward the player with the higher time.
                For example, assume that if 2 evenly matched players race, the winner receives 5 points. Using our previous example of Player A having a race
                time of 1:20 and Player B having a race time of 1:35, Player A would only be able to win 3 points if they cross the line first, while Player B
                can win 7 points if they cross the line first and win the race. The exact point amounts and such are not final, but the idea of this would be to
                use the spread to weight points, so that if a player is able to pull off an upset, they will receive a lot of points for doing so. This method is
                more inclusive than method 1, but (in my opinion) not quite as inclusive as method 2. There are also ways of modifying this method slightly to make
                it more inclusive, such as guaranteeing points for the loser, the amount of which depends on how close the race was.
            </p>
</ol>
<p className="pageContent">These are the three suggestions we have come up with, but they are certainly not final! We can also modify any of these suggestions
if people would like; these three ideas are meant to serve as a base, and can be modified and finalized with the input of all players. We are waiting until we know
who wants to participate for the first season before finalizing rules. Once the roster is finalized, we can discuss and figure out the rule set.
</p>
<a href="/" className="site-title"><img src={logo} className="logoInPage" alt="logo"/></a>
</div>
      );
}