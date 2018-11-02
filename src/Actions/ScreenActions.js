export const SET_FULL_CONTENT = 'screen:showFullContent';

export function setShowFullContent(showFullContent) {
    return {
        type: SET_FULL_CONTENT,
        payload: showFullContent
    }
}
