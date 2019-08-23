#include <stdio.h>
#include <iostream>
#include <cstring>
using namespace std;
int in[1002],out[1002];
int map[1002][1002];
int vis[1002];
int n,m;

void hui(int x,int start){
    vis[x]=1;
    for (int i=1; i<=n; i++) {
        if (map[i][x]) {
            if (!vis[i]) {
                in[start]++;
                hui(i, start);
            }
        }
    }
    vis[x]=0;
}
int main(){
    while (cin>>n>>m) {
        memset(in, 0, sizeof(in));
        memset(out, 0, sizeof(out));
        memset(map, 0, sizeof(map));
        for (int i=1; i<=m; i++) {
            int x,y;
            cin>>x>>y;
            map[x][y]=1;
            out[x]++;
        }
        int result=0;
        for (int i=1; i<=n; i++) {

            hui(i, i);
            if (in[i]>out[i]) {
                result++;
            }
        }
        cout<<result<<endl;
    }
    return 0;
}