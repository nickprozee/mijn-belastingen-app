export const NAVIGATION_NAVIGATE_TO_DASHBOARD = 'navigation:navigateToDashboard';
export const NAVIGATION_NAVIGATE_TO_LOGIN = 'navigation:navigateToLogin';

export function navigate(action) {
    return {
        type: action
    }
}