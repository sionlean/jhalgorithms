import random, time, sys

n = 200000
a = [random.randrange(1000000) for _ in range(n)]

def selectionSort(A): # O(N^2) for ALL cases...
    N = len(A)
    for L in range(N-1):
        smallest = A.index(min(A[L:])) # BEWARE... this is O(N) not O(1)... we cannot find the smallest index of the minimum element of (N-L) items in O(1)
        A[smallest], A[L] = A[L], A[smallest] # Python can swap variables like this
    return A

begin = time.time()
print(a)
b = selectionSort(a)
print(b)
if b != sorted(a):
    print("something is wrong")
print("Elapsed time for Bubble/Selection/Insertion Sort (uncomment the line above first, be careful, this is slow): %.3fs" % (time.time()-begin))