#include <stdio.h>
#include <iostream>
#include <queue>
using namespace std;
queue<int> q;
int main(){
    int n;
    while (cin>>n) {
        int m=1;
        while (!q.empty()) {
            q.pop();
        }
        for (int i=1;i<=n; i++) {
            q.push(i);
        }
        while (q.size()!=1) {

            if (m!=5) {
                int t=q.front();
                q.pop();
                q.push(t);
                m++;
            }
            else{
                q.pop();
                m=1;
            }
        }
        cout<<q.front()<<endl;
    }
    return 0;
}