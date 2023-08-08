def insert_sort_desc(arr: list[int | float]):
    for j in range(1, len(arr)):
        key = arr[j]
        i = j - 1
        while i >= 0 and key > arr[i]:
            arr[i + 1] = arr[i]
            i -= 1
        arr[i + 1] = key
    return arr

print(insert_sort_desc([5,2,4,6,1,3]))