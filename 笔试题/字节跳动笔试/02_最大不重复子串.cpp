#include <stdio.h>
#include <iostream>
#include <string>
#include <cstring>
#include <map>
using namespace std;
map<string, int> mp;

int finds(string A, int n)
{
    int mp[256];
    string res;
    memset(mp, -1, 256 * sizeof(int));

    int pre = -1, maxSubLen = 0;

    for (int i = 0; i < n; ++i)
    {
        pre = max(pre, mp[A[i]]);
        maxSubLen = max(maxSubLen, i - pre);

        mp[A[i]] = i;
    }
//    for (int i=0; i<256; i++) {
//        if(mp[i]!=-1)
//            res+=i;
//    }
    return maxSubLen;
}

int main(){
    string s;
    while (cin>>s) {
        cout<<finds(s, s.length())<<endl;
    }
    return 0;
}