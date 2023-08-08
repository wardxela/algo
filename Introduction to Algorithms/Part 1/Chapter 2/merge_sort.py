def merge(arr: list[int], left: int, mid: int, right: int):
    left_arr = []
    right_arr = []
    left_arr_len = mid - left
    right_arr_len = right - mid
    for i in range(left, mid):
        left_arr.append(arr[i])
    for i in range(mid, right):
        right_arr.append(arr[i])
    l = 0
    r = 0
    for i in range(left, right):
        if l == left_arr_len:
            arr[i] = right_arr[r]
        elif r == right_arr_len:
            arr[i] = left_arr[l]
        elif left_arr[l] < right_arr[r]:
            arr[i] = left_arr[l]
            l += 1
        else:
            arr[i] = right_arr[r]
            r += 1

    

def _merge_sort(arr: list[int], l: int, r: int):
    if r - l > 1:
      mid = int((l + r) / 2)
      _merge_sort(arr, l, mid)
      _merge_sort(arr, mid, r)
      merge(arr, l, mid, r)

def merge_sort(arr: list[int]):
    _merge_sort(arr, 0, len(arr))
    
arr = [10,9,5,6,32,5,8]
merge_sort(arr)