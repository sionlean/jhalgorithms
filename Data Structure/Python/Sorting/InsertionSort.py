import random, time, sys

n = 200000
a = [random.randrange(1000000) for _ in range(n)]

def insertionSort(A): # O(N^2) worst case (reverse sorted input), O(N) best case (sorted input)
    N = len(A)
    for i in range(1, N): # O(N)
        X = A[i] # X is the item to be inserted
        j = i-1
        while j >= 0 and A[j] > X: # can be fast or slow
            A[j+1] = A[j] # make a place for X
            j -= 1
        A[j+1] = X # index j+1 is the insertion point
    return A

begin = time.time()
print(a)
b = insertionSort(a)
print(b)
if b != sorted(a):
    print("something is wrong")
print("Elapsed time for Bubble/Selection/Insertion Sort (uncomment the line above first, be careful, this is slow): %.3fs" % (time.time()-begin))
