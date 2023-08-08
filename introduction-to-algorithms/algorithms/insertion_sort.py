def insert_sort(arr: list[int], type: str = 'asc'):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and (arr[j] > key if type == 'asc' else key > arr[j]):
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr


print(insert_sort([5,2,4,6,1,3], 'dasdfsdafesc'))