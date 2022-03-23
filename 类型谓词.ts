type Fish = { swim: object };
type Bird = { fly: VoidFunction };
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
