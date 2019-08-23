//题目描述：
//A国有n个城市，他们计划修建n-1条长度为1的道路连接两个城市，城市规划已经给出，最终使得n个城市互相连通，从i城市到j城市有且只有一条唯一路径。
//
//有一家施工队计划承包两段道路的修建工作，要求这两段道路不经过相同的城市(包括路径端点)，他们可以获得的利润是两段道路长度的乘积，现在要使得利润最大化，问最大能获得多少利润。
//输入
//输入共有n行，第一行包含一个整数n，表示城市的数量。（n<=200）
//
//接下来有n-1行，每行有两个整数,a,b,表示在a城市和b城市之间存在一条长度为1的道路。
//
//输出
//输出包含一行，表示最多可以获得的利润是多少
//样例输入
//4
//1 2
//2 3
//3 4
//样例输出
//1
//
//Hint
//输入样例2
//6
//1 2
//2 3
//2 4
//5 4
//6 4
//
//输出样例2
//4
//
//样例解释
//样例2应该选取1-2-3和5-4-6,这样一来两条道路的长度都为2，利润最大为2*2=4.

#include <stdio.h>
#include <iostream>
#include <string.h>
#include <algorithm>
#include <math.h>
#include <queue>
#include <vector>
using namespace std;
const int MAX_N = 202;

int n, total;
int head[MAX_N];
int up[MAX_N], down[MAX_N], best[MAX_N];
int predown[MAX_N], ppredown[MAX_N], sufdown[MAX_N], ssufdown[MAX_N];
int prebest[MAX_N], sufbest[MAX_N];
vector<int> child;

struct Edge {
    int to, next;
}edge[MAX_N * 2];

inline void AddEdge(int from, int to)
{
    edge[total].to = to;
    edge[total].next = head[from];
    head[from] = total++;
}

void dfs(int u, int p)
{
    int Max = 0, MMax = 0;
    int cnt = 0;
    for (int i = head[u]; i != -1; i = edge[i].next) {
        int v = edge[i].to;
        if (v == p) continue;
        dfs(v, u);
        cnt++;
        if (down[v] > Max) {
            MMax = Max;
            Max = down[v];
        } else if (down[v] > MMax) {
            MMax = down[v];
        }
        best[u] = max(best[u], best[v]);
    }
    if (cnt == 0) return;
    down[u] = Max + 1;
    if (cnt > 1) best[u] = max(best[u], Max + MMax + 2);
    else best[u] = max(best[u], Max + MMax + 1);
}

void solve()
{
    int ans = 0;
    queue<pair<int, int> > que;
    que.push(make_pair(1, -1));
    while (!que.empty()) {
        pair<int, int> cur = que.front();
        que.pop();
        int u = cur.first, p = cur.second;
        child.clear();
        child.push_back(0);
        for (int i = head[u]; i != -1; i = edge[i].next) {
            int v = edge[i].to;
            if (v == p) continue;
            child.push_back(v);
        }
        int size = child.size();

        prebest[0] = predown[0] = ppredown[0] = 0;
        for (int i = 1; i < size; ++i) {
            int v = child[i];
            prebest[i] = max(prebest[i - 1], best[v]);

            predown[i] = predown[i - 1], ppredown[i] = ppredown[i - 1];
            if (down[v] + 1 > predown[i]) {
                ppredown[i] = predown[i];
                predown[i] = down[v] + 1;
            } else if (down[v]+ 1 > ppredown[i]) {
                ppredown[i] = down[v] + 1;
            }
        }

        sufdown[size] = ssufdown[size] = sufbest[size] = 0;
        for (int i = size - 1; i >= 1; --i) {
            int v = child[i];
            sufbest[i] = max(sufbest[i + 1], best[v]);

            sufdown[i] = sufdown[i + 1], ssufdown[i] = ssufdown[i + 1];
            if (down[v] + 1 > sufdown[i]) {
                ssufdown[i] = sufdown[i];
                sufdown[i] = down[v] + 1;
            } else if (down[v] + 1 > ssufdown[i]) {
                ssufdown[i] = down[v] + 1;
            }
        }
        for (int i = 1; i < size; ++i) {
            int v = child[i];
            int outside = up[u] + max(predown[i - 1], sufdown[i + 1]);
            outside = max(outside, predown[i - 1] + ppredown[i - 1]);
            outside = max(outside, sufdown[i + 1] + ssufdown[i + 1]);
            outside = max(outside, predown[i - 1] + sufdown[i + 1]);
            outside = max(outside, prebest[i - 1]);
            outside = max(outside, sufbest[i + 1]);
            ans = max(ans, outside * best[v]);
        }
        for (int i = 1; i < size; ++i) {
            int v = child[i];
            up[v] = 1 + max(up[u], max(predown[i - 1], sufdown[i + 1]));
            que.push(make_pair(v, u));
        }
    }
    cout<<ans<<endl;
}

int main()
{

    while (cin>>n) {
        memset(head, -1, sizeof(head));
        total = 0;
        for (int i = 1; i < n; ++i) {
            int x, y;
            cin>>x>>y;
            AddEdge(x, y);
            AddEdge(y, x);
        }
        memset(down, 0, sizeof(down));
        memset(best, 0, sizeof(best));
        memset(up, 0, sizeof(up));
        dfs(1, -1);
        solve();
    }
    return 0;
}
/*
 6
 1 2
 2 3
 2 4
 5 4
 6 4
 */