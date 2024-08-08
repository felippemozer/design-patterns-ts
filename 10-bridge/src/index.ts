import Facebook from "./platform/Facebook";
import IPlatform from "./platform/IPlatform";
import Twitch from "./platform/Twitch";
import YouTube from "./platform/YouTube";
import AdvancedLive from "./transmission/AdvancedLive";
import Live from "./transmission/Live";

function startLive(platform: IPlatform) {
    console.log("Aguarde...");

    const live: Live = new Live(platform);

    live.broadcast();
    live.result();
}

function startAdvancedLive(platform: IPlatform) {
    console.log("Aguarde...");

    const live: AdvancedLive = new AdvancedLive(platform);

    live.broadcast();
    live.result();
    live.subtitles();
    live.comments();
    console.log();
}

startAdvancedLive(new YouTube());
startAdvancedLive(new Twitch());
startAdvancedLive(new Facebook());