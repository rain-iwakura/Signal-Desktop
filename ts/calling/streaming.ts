const DEFAULT_SCREEN_SHARE_WIDTH = 2880;
const DEFAULT_SCREEN_SHARE_HEIGHT = 1800;
const DEFAULT_SCREEN_SHARE_FRAMERATE = 5;

// Reduce game screen share frame size to compensate for increased framerate.
const GAME_SCREEN_SHARE_WIDTH = 2880 / 4;
const GAME_SCREEN_SHARE_HEIGHT = 1800 / 4;
const GAME_SCREEN_SHARE_FRAMERATE = 30;

export function getRequestedScreenShareWidth(): number {
    const gameStreamActive = window.Events.getGameStream();
    return gameStreamActive ? GAME_SCREEN_SHARE_WIDTH : DEFAULT_SCREEN_SHARE_WIDTH;
}

export function getRequestedScreenShareHeight(): number {
    const gameStreamActive = window.Events.getGameStream();
    return gameStreamActive ? GAME_SCREEN_SHARE_HEIGHT : DEFAULT_SCREEN_SHARE_HEIGHT;
}

export function getRequestedScreenShareFramerate(): number {
    const gameStreamActive = window.Events.getGameStream();
    return gameStreamActive ? GAME_SCREEN_SHARE_FRAMERATE : DEFAULT_SCREEN_SHARE_FRAMERATE;
}
