from heapq import heappush, heappop

def main():
    INF = int(1e9)

    # Graph in Figure 4.17
    # 5 7 0
    # 0 1 2
    # 0 2 6
    # 0 3 7
    # 1 3 3
    # 1 4 6
    # 2 4 1
    # 3 4 5

    f = open("dijkstra_in.txt", "r")

    V, E, s = map(int, f.readline().split(" "))
    AL = [[] for u in range(V)]
    for _ in range(E):
        u, v, w = map(int, f.readline().split(" "))
        AL[u].append((v, w))                     # directed graph

    # (Modified) Dijkstra's routine
    dist = [INF for _ in range(V)]
    dist[s] = 0
    pq = []
    heappush(pq, (0, s))

    # sort the pairs by non-decreasing distance from s
    while (len(pq) > 0):                    # main loop
        d, u = heappop(pq)                  # shortest unvisited u, based on priority queue
        if (d > dist[u]): continue          # check if distance is the shortest recorded, if not skip (lazy deletion, skip outdated pair)
        for v, w in AL[u]:                  # all edges from u to v, w being the weight
            if (dist[u]+w >= dist[v]): continue # check if the distance from shortest u to v is the shorted distance v, if not improving, skip
            dist[v] = dist[u]+w             # relax operation
            heappush(pq, (dist[v], v))  

    for u in range(V):
        print("SSSP({}, {}) = {}".format(s, u, dist[u]))

main()

# Test Case
# 5 7 0
# 0 1 2
# 0 2 6
# 0 3 7
# 1 3 3
# 1 4 6
# 2 4 1
# 3 4 5