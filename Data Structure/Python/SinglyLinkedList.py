# Plagiarism Policy:

# Dr Steven Halim provides this implementation of basic Singly Linked List (SLL) for his classes
# in National University of Singapore (NUS) School of Computing (SoC).

# This code is supposed to be studied by his students to understand the technical details
# of Singly Linked List (SLL) implementation.

# His style is to test his students on "application" of this data structure,
# not about re-inventing Singly Linked List (SLL) again and again,
# thus his assignments and tests rarely ask students to reuse this code verbatim.
# (anyway, you can always use Python deque (notice, not Python list) to do the same).

# If you arrive at this source code from another module that is still testing you on how
# to (re)-implement Singly (or Doubly) Linked List (and grade you for that), note that you can still
# use this code below, but at your own risk, as you may be accidentally flagged as
# commiting plagiarism if your other classmates do the same.



# https://visualgo.net/en/list?slide=3-1
class Vertex: # we can use either C struct or C++/Java/Python class
    def __init__(self, data):
        self.item = data # the data is stored here, an integer in this example
        self.next = None


# this is the version as shown in https://visualgo.net/en/list, SLL with both head and tail pointers
class SLL:
    def __init__(self):
        self._head = None
        self._tail = None # we can maintain tail pointer so that append is O(1)

    # https://visualgo.net/en/list?slide=3-8
    def appendleft(self, v):
        vtx = Vertex(v) # create new vertex vtx from item v
        vtx.next = self._head # link this new vertex to the (old) head vertex
        if self._head == None: self._tail = vtx # if previously it was an empty SLL, then tail = head too
        self._head = vtx # the new vertex becomes the new head

    # https://visualgo.net/en/list?slide=3-12
    def append(self, v):
        if self._head == None: # an important corner case
            self.appendleft(v)
        else:
            vtx = Vertex(v) # create new vertex vtx from item v

            # The O(N) version (if we do not use tail pointer)
            # tail = self.head # we have to start from head
            # while tail.next != None: # while we have not reached the last element, O(N) - the slow part
            #     tail = tail.next # the pointers are pointing to the higher index
            # now we can use the tail pointer, after searching for it in O(N)

            self._tail.next = vtx # just link this, as tail is the i = (N-1)-th item, O(1)
            self._tail = vtx # now update the tail pointer, O(1)

    def front(self):
        if self._head == None: return None # avoid crashing when the SLL is empty
        return self._head.item

    def back(self):
        if self._tail == None: return None
        return self._tail.item

    # https://visualgo.net/en/list?slide=3-15   
    def popleft(self):
        if self._head is None: return # avoid crashing when SLL is empty
        self._head = self._head.next # book keeping, update the head pointer
        if self._head == None: self._tail = None # if the SLL is now becomes empty, then tail = NULL too
        # remarks: as nothing points to old head, Python's garbage collector will remove it

    def empty(self):
        return self._head == None


# live demo to extend (wrap) SLL to a new class MyStack that can only access subset of SLL features


# another live demo to extend (wrap) SLL to a new class MyQueue that can only access another subset of SLL features


# experiment with this baseline code to familiarise yourself with the very basic idea of Linked List data structure
print("Our own Singly Linked List (SLL)")
l = SLL()
l.appendleft(5)
l.appendleft(2)
l.appendleft(7)

print(l.front()) # output 7 as the SLL is 7 (head)->2->5 now
l.popleft()
print(l.front()) # output 2 as the SLL is 2 (head)->5 now
l.popleft()
print(l.front()) # output 5 as the SLL is 5 (head)
l.popleft() # empty after this
print(l.front()) # None (empty SLL), already safe-guarded, won't crash


from collections import deque
print()
print("Python deque version (notice that Python list is not suitable)");
dq = deque([7, 2, 5]) # we can do this (notice that we want the order to be 7, 2, 5)

print(dq[0]) # output 7 as the deque is 7 (head)->2->5 now
dq.popleft()
print(dq[0]) # output 2 as the deque is 2 (head)->5 now
dq.popleft()
print(dq[0]) # output 5 as the deque is 5 (head) now
dq.popleft() # empty after this
print(None if len(dq) == 0 else dq[0]) # None (empty deque), need to do check first


print()
print("Equivalency testing on a very large test case")

import time, random

# large random test
begin = time.time()

ours = SLL()
theirs = deque()
assert ours.empty() and len(theirs) == 0 # both empty at the start
N = 100000 # usually just a few seconds (10x smaller than the C++ version)
for _ in range(N): # insert N random integers to both data structures
    value = random.randint(0, 2**31-1)
    ours.appendleft(value)
    theirs.appendleft(value)
  
assert not ours.empty() and len(theirs) > 0 # both not empty (has N entries) by now
while not ours.empty():
    assert ours.front() == theirs[0] # front-most value (index 0) should match
    ours.popleft()
    theirs.popleft()
assert ours.empty() and len(theirs) == 0 # both empty at the end

print("Test time = %fs" % (time.time()-begin))
print("If there is no assertion (Run Time Error), then all is good")