export const NAVIGATION_NAVIGATE_TO_SCREEN = 'navigation:navigateToScreen';
export const SCREENS = {
    LOGIN: 'navigation:screen_login'
}


export function navigate(screen) {
    return {
        type: NAVIGATION_NAVIGATE_TO_SCREEN,
        payload: screen
    }
}