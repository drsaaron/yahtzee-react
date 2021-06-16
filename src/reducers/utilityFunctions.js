/* a function to create a deep copy of an array.  this is needed for when we update the an array in the state.
   If we update the array directly, then the old state and new state are the same. */

export function cloneArray(array) {
    return JSON.parse(JSON.stringify(array))
}
