#include<cstdio>
#include<cstring>
#include<cmath>
#include<iostream>
#include<algorithm>
#include<set>
#include<map>
#include<stack>
#include<vector>
#include<queue>
#include<string>
#include<sstream>
#include <stdio.h>
#include <iostream>
#include <cstring>
using namespace std;
using std::vector;
vector<int> vInts;
vector<int> get_primes(int N)
{
    vector<int> res;
    vector<bool> composite(N + 1, false);

    for (int p = 2; p <= N; p++) {
        if (! composite[p]) {
            for (int i = p+p; i <= N; i += p) {
                composite[i] = true;
            }
            res.push_back(p);
        }
    }
    return res;

}

int get_exponent(int x, int p)
{
    int r = 0;
    while (x % p == 0) {
        r++;
        x /= p;
    }
    return r;
}

int main(){
    int res = 2;
    // For each prime number <= N:
    // 找到<=n的每个质数
    int N;
    while(cin >> N){
        for (int p: get_primes(N) ) {
        // first find the maximum exponent of p  among numbers <= N
        // 找到p<=n的最大的幂
            int max_exp = 0;
            int i = p;
            // seek the minimum i such that get_exponent(i,p) >= max_exp:
            // 找到最小的i使得get_exponent(i,p)>=max_exp
            while (i <= N) {
                max_exp = std::max(max_exp, get_exponent(i,p) );
                i += p;
            }
            while (get_exponent(i,p) < max_exp) {
                i += p;
            }
            // the maximum for all ps is the result:
            // 最大的ps是答案。
            res = std::max(res, i);
        }
        cout << res << endl;
    }
    return 0;
}