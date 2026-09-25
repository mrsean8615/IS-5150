# Bug Hunt — BUGS.md

Document each bug you find and fix here. Use this format for each of the five bugs. Three to four sentences per bug is plenty, this is just a diagnostic record (please no essays here).

## Bug 1

**Symptom:**
Error in console regarding a text node cannot be a child of a <View>

**Root Cause:**
The text passed as a prop to choreItem is not wrapped in a text tag

**Fix:**
wrap the text in a text tag

## Bug 2

**Symptom:**
Delete Chores x button doesn't work

**Root Cause:**
The deleteChoreHandler mutates the existing chores array with splice then passes the same array reference state.

**Fix:**
remove the splice and use an arrow function with filter.

## Bug 3

**Symptom:**
The addChore input doesn't handle input

**Root Cause:**
onChange receives an event object, explaining why you see [object, object].

**Fix:**
change to onChangeText

## Bug 4

**Symptom:**
Aftering deleting an item, the remaining items shift positions causing wrong component instances.

**Root Cause:**
KeyExtractor is using the index to track

**Fix:**
Use item.id to track components.

## Bug 5

**Symptom:**
The Modal isn't closing correctly.

**Root Cause:**
In the submitHandler add the item to the list but doesn't call onClose.

**Fix:**
Call onClose after submission.
