# todo: handle not found case

def binary_search(arr: list[int], item: int, left: int, right: int) -> int:
    i = (left + right) // 2
    if item < arr[i]:
        return binary_search(arr, item, left, i)
    elif item > arr[i]:
      return binary_search(arr, item, i, right)
    return i


print(binary_search([1,2,3,4,5,6,7,8,9,10,11,13,14,15,16], 12, 0, 15))