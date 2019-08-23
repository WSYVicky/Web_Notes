//【链接】复原IP地址
// https://blog.csdn.net/u014253011/article/details/80003075
#include <iostream>
#include <vector>
using namespace std;

bool isValid(string t){  //判断是否为合法的IP地址的一段
    int temp = atoi(t.c_str());
    if(temp >= 0 && temp<=255 &&(t.size() == 1 || t[0] != '0'))
        return true;
    return false;
}

void dfs(vector<string>& ans, string s, string t, int k){  //s表示已划分的字符串，t表示剩余未划分的字符串
    if(k == 3){
        if(isValid(t))
            ans.push_back(s+t);
        return;
    }
    for(int i = 1; i< 4 && i < t.size(); i++){  //组成当前段的3种情况
        string curr = t.substr(0, i);
        if(isValid(curr))
            dfs(ans, s + curr + '.', t.substr(i), k+1);
    }
}
vector<string> restoreIpAddresses(string t) {
   vector<string> ans;
   string s;
   dfs(ans,s, t, 0);
   return ans;
}

int main() {
    string a;
    while(cin >> a){
        cout<< restoreIpAddresses(a).size() << endl;
    }//注意while处理多个case
}