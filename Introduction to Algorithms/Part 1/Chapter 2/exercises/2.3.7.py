# Given an array of integers and an integer value x, find out whether the array contains a sum that equals to x
# Time complexity O(n)
# Space complexity O(n)
def find_sum(arr: list[int], x: int) -> bool :
    f = set()
    for i in arr:
        if i in f:
            return True
        f.add(x - i)
    return False

# In the book author asks to create a function that has time complexity of O(n*lg(n))
# After some researching I ended up with the following approach:

# First sort incoming array using merge sort algorithm. This operation takes O(n*lg(n))
# Then loop trough each element in the array: O(n)
# On every iteration call binary search for item that equals to x - i, where x is sum, i is current value in the array

# By using this approach, we find the sum in worst case in O(n*lg(n)) + O(n)*O(lg(n))
# Which equals to O(2*n*lg(n)) = O(n*lg(n))

# And still, I would prefer to use Set for this problem