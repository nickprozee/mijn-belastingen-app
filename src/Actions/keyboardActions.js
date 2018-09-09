export const KEYBOARD_BROUGHT_INTO_VIEW = 'keyboard:broughtIntoView';
export const KEYBOARD_DISMISSED_FROM_VIEW = 'keyboard:dismissedFromView';

export function onOpenKeyboard(){
    return {
        type: KEYBOARD_BROUGHT_INTO_VIEW,
        payload: { 
            isOpen: true
         }
    }
}

export function onCloseKeyboard(){
    return {
        type: KEYBOARD_DISMISSED_FROM_VIEW,
        payload: { 
            isOpen: false
         }
    }
}

