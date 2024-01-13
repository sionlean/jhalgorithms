import random, time, sys

n = 200000
a = [random.randrange(1000000) for _ in range(n)]

def mergeSort(A): # O(N log N) worst case for ALL cases :)
    N = len(A)
    if N == 1: # base case, it is trivial to sort a single element list
        return A # just do nothing, return the list as it is

    mid = N//2 # PS: The one in VisuAlgo has right sublist 1 bigger than the left sublist when N is odd
    left = A[:mid] # from start to before mid, if N is odd, left is one less than right
    right = A[mid:] # from mid to end
    left_sorted = mergeSort(left) # recursively sort the left sublist
    assert(left_sorted == left) # left is directly modified to its sorted version, so we do not need to assign the result into variable left
    mergeSort(right) # recursively sort the right sublist

    i, j, k = 0, 0, 0
    while i < len(left) and j < len(right): # both left and right not empty
        if left[i] <= right[j]:
            A[k] = left[i] # take from left
            i += 1
        else:
            A[k] = right[j] # take from right
            j += 1
        k += 1
    while i < len(left): # has leftover from left (right is empty)
        A[k] = left[i]
        k += 1
        i += 1
    while j < len(right): # has leftover from right (left is empty)
        A[k] = right[j]
        k += 1
        j += 1

    return A

begin = time.time()
# print(a)
b = mergeSort(a)
# print(b)
if b != sorted(a):
    print("something is wrong")
print("Elapsed time for Merge Sort: %.3fs" % (time.time()-begin))
