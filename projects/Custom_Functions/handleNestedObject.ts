/**
 * Performs updating, removing, adding and copying of an object's properties, ensuring the immutability of the original object and returning a new object with the changes.
 *
 *    - Update - To update properties, pass an object with the structure until reach the desired properties, with their new values.
 *    - delete - To delete properties, pass an object with the structure until reach the desired properties, set their value to "undefined", to be removed.
 *    - add - To add properties, pass an object with the structure until reach the new properties with their values.
 *    - clone - To clone the originalObject, pass an empty objectWithChanges.
 *
 * @param {Object} originalObject Object where the changes should be performed.
 * @param {Object} objectWithChanges Object of changes you want to apply to the originalObject, send a empty object if you just want to clone the originalObject.
 * @returns {Object} A new object with the changes applied, or the clone from originalObject.
 * @throws {TypeError} If it's an undefined, null, or anything other than an object, it's passed to originalObject and objectWithChanges.
 */
export function handleNestedObject(originalObject: Object, objectWithChanges: Object): Object {
  const newObject: Object = {};
  Object.assign(newObject, originalObject);

  if (originalObject == undefined || originalObject == null || typeof originalObject !== "object") {
    throw new TypeError("originalObject is not a valid object");
  }

  if (objectWithChanges == undefined || objectWithChanges == null || typeof objectWithChanges !== "object") {
    throw new TypeError("objectWithChanges is not a valid format or does not exist");
  }

  for (const key in objectWithChanges) {
    const value: any = (objectWithChanges as any)[key];

    if (value === undefined) {
      delete (newObject as any)[key];
    } else if (typeof value === "object" && key in (newObject as any)) {
      (newObject as any)[key] = handleNestedObject((newObject as any)[key], value);
    } else {
      (newObject as any)[key] = value;
    }
  }

  return newObject;
}
