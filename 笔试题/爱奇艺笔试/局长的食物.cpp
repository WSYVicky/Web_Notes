//题目描述：
//局长有N种食物，每种食物有Ai份。
//
//每天局长会吃一份食物，或者买一份食物（即每天只能进行吃或买其中的一种动作），这样过了M天
//
//现在局长想知道M天后第p种食物的份数排名（从大到小，相同算并列，例如3 3 2，则排名为1 1 3）
//
//N,M,P<=100,Ai<=1000
//输入
//第一行N M P
//
//第二行N个数Ai
//
//接下来M行，每行A i或者B i分别表示买一份食物i，吃一份食物i
//
//输出
//一个答案
//
//
//样例输入
//3 4 2
//5 3 1
//B 1
//A 2
//A 2
//A 3
//样例输出
//1
#include <stdio.h>
#include <string>
#include <map>
#include <iostream>
#include <cstring>
#include <algorithm>
using namespace std;
int main(){
    int N,M,P;
    int fod[103];
    while (cin>>N>>M>>P) {
        memset(fod, 0, sizeof(fod));
        for (int i=1; i<=N; i++) {
            int tem;
            cin>>tem;
            fod[i]=tem;
        }
        for (int i=0; i<M; i++) {
            char s;
            int t;
            cin>>s;
            if (s=='A') {
                cin>>t;
                fod[t]++;
            }
            if (s=='B') {
                cin>>t;
                fod[t]--;
            }
        }
        int fp = fod[P],res=0;
        sort(fod,fod+N+1,greater<int>());
        while (fp<fod[res]) {
            res++;
        }
        cout<<res+1<<endl;
    }
    return 0;
}