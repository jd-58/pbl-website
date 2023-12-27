import logo from './PBLlogoWrittenOut.png';

export default function About() {
    return (
<div className="aboutPage">
    <h1>About</h1>
    <p className="pageContent">
        This page will contain information about general league info (such as the proposed league structure) and what hardware/items you need to participate.
        This league is meant to be a fun way for everyone to socialize and hang out, while having being semi-serious competition. The league will utilize a custom
        modpack made by Jacob that will include everything we need to run the league (such as a 1 lap variant of Mushroom Peaks, custom item distribution, online
        race functionality, etc.). This modpack will be installed through the Riivolution platform, which is a platform made for easy instillation of Mario Kart
        mods. Included in the modpack will be online race functionality, meaning that if you go to play an online race with the mod installed, it will only search
        for and pair you up with other players who have the modpack installed. This is how most races will be taking place, and what allows us to have anyone from
        around the country/world be able to join. As a note, each race will require chugging of something, but it doesn't have to be beer! Drinking a non-alcoholic
        seltzer is encouraged and will be the default unless both players agree to drink something else.
    </p>
<h2>Proposed League Structure</h2>
<p className="pageContent">
    The league will be broken down into 2 week segments (the total length of the first season is not finalized. It will likely be a sort of "Season 0" and be pretty short, to iron out
    any bugs and make sure everything works before a longer, normal length season begins). Each player will be assigned 2-3 opponents for each segment, and must schedule and play a match with each
    opponent within the 2 weeks. Each match consists of 2 races to allow for more opportunity to gain points. Each race would be independent of the other (this idea is not finalized. I thought 1 race
     could be too short, as it'd be over in 5 minutes. However, 3 races might be too many since chugging a seltzer 3 times in quick succession would be a lot. I think 2 races is the sweet spot, but
     open to other ideas or suggestions!). The times are to be worked out between opponents, for maximum flexibility for players. Optionally, there can be a “game night” where players are encouraged
    to schedule their matches at the same time and day as other players in order to hang out in Discord, FaceTime, etc. to make it more fun and social. Each participant would have
    the same number of matches and as close to the same strength of schedule as possible. Each match would award points (see the Rules page for potential scoring rule sets).
    At the end of the season, the standings determine seeding for an end-of-season tournament (hopefully in person). There are other ideas, such as occasional in-season tournaments (like a Major in golf or tennis),
    but these likely wouldn't be implemented in the first short season (Season 0). If you have any other ideas, let Jacob know!
    </p>
<h2>What You Need to Participate</h2>
<p className="pageContent">In order to participate, you will need either a Wii or a Wii U, and an SD card that is 32GB or smaller. You can technically use a bigger SD card, but you will have to partition it into at least one 32GB segment
in order to use the FAT32 file format, which is required to install the mod. You can also use Dolphin Emulator, a Wii emulator you can download on a computer, to play league matches,
but ONLY if you have a Wii or Wii U. This is because of a security feature on the Dolphin Emulator, that requires NAND files from a physical Wii or Wii U in order to play
online (to prevent cheating with other, more popular mods online). This means that as long as you own a Wii or Wii U, you can download the emulator for free onto your computer/laptop,
 and play your league matches from anywhere without having to bring your Wii console. You can connect Wii remotes to your laptop, but it likely will require an additional sensor bar that is made
for PC functionality. These run about $30 (called the Mayflash sensor bar. There are probably others that are cheaper that would work, but this one has been tested by Jacob and others and
is guaranteed to work). The installation process for installing the custom PBL modpack is very easy, and can be installed on either Dolphin or on a Wii/WiiU. The process is a bit more difficult
 on WiiU, but is still doable. It will involve installing the Homebrew Channel if you haven't already modded your Wii. Then, look up how to install Riivolution for your console. Once that is installed,
  it's as simple as downloading the PBL mod, and putting it into a folder on your SD card. Exact and more detailed instillation instructions will be given by Jacob once the mod has been finalized.
  </p>
  <p className="pageContent">*NOTE: If you do not own a Wii or Wii U, the cheapest option will be to buy a used Wii. You can find used Wiis with 1 remote and Nunchuck for
  around $100-120, and a copy of Mario Kart Wii for $20-40. You can probably find a used Wii bundled with Mario Kart Wii as well. Contact Jacob if you want help
  finding a good used Wii with everything you need.</p>
<p>If you have any questions or comments about the proposed league structure,  what is needed to participate, or whether the setup you currently have will work, contact Jacob!</p>
<a href="/" className="site-title"><img src={logo} className="logoInPage" alt="logo"/></a>
</div>
      );
}