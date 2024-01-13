import random, time, sys

n = 200000
a = [random.randrange(1000000) for _ in range(n)]


def bubbleSort(A): # O(N^2) worst case (reverse sorted input), O(N) best case (sorted input)
    N = len(A)
    while N > 1: # at most n-1 passes
        swapped = False
        for i in range(N-1):
            if A[i] > A[i+1]:
                A[i], A[i+1] = A[i+1], A[i] # Python can swap variables like this
                swapped = True
        if not swapped: # optimization
            break
        N -= 1
    return A


begin = time.time()
print(a)
b = bubbleSort(a)
print(b)
if b != sorted(a):
    print("something is wrong")
print("Elapsed time for Bubble/Selection/Insertion Sort (uncomment the line above first, be careful, this is slow): %.3fs" % (time.time()-begin))