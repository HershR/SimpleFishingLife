
import AudioManager from "./audioManager.js";

// Audio manager class for handling audio playback.
let audioManager = null;

// References to loaded audio files as global variables
let splash = null;
let coin = null;
let bgMusic = null;

runOnStartup(async runtime =>
{
	// Initialise the audio manager. See AudioManager.js for details.
	audioManager = new AudioManager(runtime);
	
	// During the loading screen, load both sound files as
	// AudioBuffers and the music track all in parallel, so
	// they are ready for immediate playback on startup.
	[splash, coin, bgMusic] = await Promise.all([
		audioManager.loadSound("splash.webm"),
		audioManager.loadSound("Coins4.webm"),
		audioManager.loadMusic("fish-release.webm")
	]);
});

// These functions are called by the button click events.
export function PlaySplash()
{
	audioManager.playSound(splash);
}

export function PlayCoin()
{
	audioManager.playSound(coin);
}

export function PlayMusic()
{
	audioManager.playMusic(bgMusic);
}