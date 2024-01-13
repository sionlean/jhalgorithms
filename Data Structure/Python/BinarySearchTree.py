class BSTVertex: # we can use either C struct or C++/Java/Python class
    def __init__(self, key): # set as 'public' for easier coding
        self.key = key # the key is stored here, an integer in this example
        self.left = None
        self.right = None

# This is just a sample implementation
# There are other ways to implement BST concepts...
class BST:
    def __init__(self):
        self.__root = None

    def __insert(self, T, v):                     # private version of insert
        if T == None:                             # insertion point is found
            T = BSTVertex(v)
        elif T.key < v:                           # search to the right
            T.right = self.__insert(T.right, v)
        else:                                     # search to the left
            T.left = self.__insert(T.left, v)
        return T                                  # return the updated BST

    def __inorder(self, T):                       # private version of inorder
        if T == None: return
        self.__inorder(T.left)                    # recursively go to the left
        print(T.key, end=' ')                     # visit this BST node
        self.__inorder(T.right)                   # recursively go to the right

    def __search(self, T, v):                     # private version of search
        if T == None:
            return T                              # not found
        elif T.key == v:
            return T                              # found
        elif T.key < v:
            return self.__search(T.right, v)      # search to the right
        else:
            return self.__search(T.left, v)       # search to the left

    def insert(self, v):
        self.__root = self.__insert(self.__root, v)

    def inorder(self):
        self.__inorder(self.__root);
        print()

    def search(self, v):
        res = self.__search(self.__root, v)
        return -1 if res == None else res.key



# test code
T = BST()                                         # an empty BST

# Sample BST as shown in Lecture
T.insert(15)
T.insert(23)
T.insert(6)
T.insert(71)
T.insert(50)
T.insert(4)
T.insert(7)
T.insert(5)

#print(T.__root.key)                             # accessing root directly is forbidden
T.inorder()                                      # The BST: 4, 5, 6, 7, 15, 23, 50, 71

print(T.search(71))                               # found, 71
print(T.search(7))                                # found, 7
print(T.search(22))                               # not found, -1